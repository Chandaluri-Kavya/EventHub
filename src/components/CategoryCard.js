function CategoryCard({ title, image }) {
  return (

    <div className="category-card">

      <img src={image} alt={title} />

      <button className="category-btn">
        {title}
      </button>

    </div>

  );
}

export default CategoryCard;