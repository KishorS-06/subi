// Static course catalog used across the app
// id must be string-compatible for route params

const titles = [
  "Complete Python Bootcamp: From Zero to Hero",
  "Java Programming Masterclass for Software Developers",
  "Web Development Bootcamp: HTML, CSS, JavaScript",
  "Machine Learning A–Z: Hands-On with Python",
  "Data Science Bootcamp with Pandas & NumPy",
  "The Ultimate MySQL & SQL Masterclass",
  "Complete JavaScript Course: Build Real Projects",
  "React – The Complete Guide (Hooks + Redux)",
  "Node.js Masterclass: Build REST APIs & Apps",
  "Angular – The Complete Masterclass",
  "Ethical Hacking for Beginners – Learn Cybersecurity",
  "AWS Certified Solutions Architect – Associate Prep",
  "Azure Fundamentals AZ-900 Crash Course",
  "Docker & Kubernetes: The Complete Guide",
  "DevOps Masterclass with Jenkins, Git, Docker",
  "Android App Development with Kotlin – Complete Edition",
  "iOS & Swift Bootcamp: Build Real iPhone Apps",
  "C++ Programming: Beginner to Advanced",
  "C# Masterclass: Build Apps with .NET",
  "Artificial Intelligence Masterclass",
  "Deep Learning with TensorFlow & Keras",
  "Natural Language Processing with Python",
  "Blockchain & Cryptocurrency Masterclass",
  "Flutter & Dart Complete Mobile App Development",
  "Django Full-Stack Web Developer Bootcamp",
  "PHP & Laravel – The Complete Guide",
  "Unity Game Development with C#",
  "Unreal Engine Game Development Bootcamp",
  "Complete Graphic Design Masterclass",
  "Adobe Photoshop CC – Beginner to Advanced",
  "Video Editing with Adobe Premiere Pro",
  "UI/UX Design Masterclass: Figma + Prototyping",
  "Digital Marketing Masterclass – 12 Courses in 1",
  "SEO Training 2025: Complete Search Engine Optimization",
  "Social Media Marketing & Growth Strategy",
  "Stock Market Investing & Trading for Beginners",
  "Personal Finance & Money Management Masterclass",
  "Excel Masterclass: Beginner to Advanced",
  "Power BI Complete Data Visualization Course",
  "Tableau Data Analytics Masterclass",
  "Public Speaking & Presentation Mastery",
  "Communication Skills for Professionals",
  "Complete Leadership & Management Course",
  "Entrepreneurship Bootcamp: Start Your Own Business",
  "Project Management Professional (PMP) Exam Prep",
  "Scrum Master Certification Training (PSM1)",
  "Time Management & Productivity Masterclass",
  "Python for Automation & Scripting",
  "Cloud Computing Essentials for Beginners",
  "Full-Stack Developer Roadmap: 2025 Edition",
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

const instructors = [
  "Alex Johnson",
  "Priya Mehta",
  "Daniel Kim",
  "Sara Lopez",
  "Michael Brown",
  "Emily Chen",
  "Rahul Verma",
  "Sophia Garcia",
];

const badges = [
  { label: "Bestseller", color: "#2dba4e" },
  { label: "Hot & New", color: "#ff5c5c" },
  { label: "Highest Rated", color: "#6c31cf" },
  { label: "Premium", color: "#6c31cf" },
];

export const courses = titles.map((title, idx) => {
  const id = idx + 1;
  const badge = badges[idx % badges.length];
  const price = 399 + ((idx * 23) % 400);
  const oldPrice = price + 2400;
  const seed = slugify(title);
  return {
    id,
    title,
    instructor: instructors[idx % instructors.length],
    imgUrl: `https://picsum.photos/seed/${seed}/480/270`,
    badge: badge.label,
    badgeColor: badge.color,
    rating: 4.0 + ((idx % 9) / 10),
    ratingsCount: `${(1200 + idx * 57).toLocaleString()} ratings`,
    price: `₹${price}`,
    oldPrice: `₹${oldPrice}`,
    description: `Learn ${title} with hands-on projects, best practices, and real-world examples to build confidence and expertise.`,
  };
});

export function getCourseById(id) {
  const numeric = Number(id);
  return courses.find((c) => c.id === numeric);
}

export default courses;


