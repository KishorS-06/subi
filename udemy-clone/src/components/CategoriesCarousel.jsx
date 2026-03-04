import './CategoriesCarousel.css'; 

function CategoriesCarousel() {
  const categories = ["Artificial Intelligence", "Python", "Excel", "Digital Marketing", "AWS"];
  return (
    <div className="carousel__tabs">
      {categories.map(cat => (
        <button className="carousel__tab" key={cat}>{cat}</button>
      ))}
    </div>
  );
}
export default CategoriesCarousel;
