const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const JWT_SECRET = "yoursecret"; // Use env in real apps!

// UPDATE with your connection string
const MONGO_URI = "mongodb+srv://kishor:kishor%402006@messages.khjyaj7.mongodb.net/?appName=Messages";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected")).catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String, // hashed
    initials: String,
    cart: [{ courseId: String, title: String, price: String }]
});
const User = mongoose.model("User", UserSchema);

const app = express();
app.use(cors());
app.use(express.json());

// Register
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password) return res.status(400).json({ error: "All fields required" });
    const initials = name.split(' ').map(w => w[0].toUpperCase()).join('');
    const hashed = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({ name, email, password: hashed, initials, cart: [] });
        res.json({ user: { name: user.name, email: user.email, initials: user.initials } });
    } catch(e) {
        res.status(400).json({ error: "User already exists or invalid data"});
    }
});

// Login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { name: user.name, email: user.email, initials: user.initials, id: user._id } });
});

// JWT Auth Middleware
function auth(req, res, next) {
    const header = req.headers['authorization'];
    const token = header && header.split(' ')[1];
    if(!token) return res.status(401).json({ error: "No token" });
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if(err) return res.status(403).json({ error: "Invalid token" });
        req.userId = user.id;
        next();
    });
}

// Current user info
app.get('/api/me', auth, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('name email initials');
        if(!user) return res.status(404).json({ error: "User not found" });
        res.json({ user });
    } catch (e) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get cart
app.get('/api/cart', auth, async (req, res) => {
    const user = await User.findById(req.userId);
    if(!user) return res.status(404).json({ error: "User not found" });
    res.json({ cart: user.cart });
});

// Add item to cart
app.post('/api/cart', auth, async (req, res) => {
    const { courseId, title, price } = req.body;
    const user = await User.findById(req.userId);
    if(!user) return res.status(404).json({ error: "User not found" });
    if(user.cart.some(item => item.courseId === courseId)) return res.status(400).json({ error: "Already in cart" });
    user.cart.push({ courseId, title, price });
    await user.save();
    res.json({ cart: user.cart });
});

// Remove item from cart
app.delete('/api/cart/:courseId', auth, async (req, res) => {
    const { courseId } = req.params;
    const user = await User.findById(req.userId);
    if(!user) return res.status(404).json({ error: "User not found" });
    user.cart = user.cart.filter(item => item.courseId !== courseId);
    await user.save();
    res.json({ cart: user.cart });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
