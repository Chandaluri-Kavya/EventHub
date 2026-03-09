import CategoryCard from "./CategoryCard";

function CategorySection() {

  return (

    <div className="category-section">

      <div className="category-header">

        <h2>Browse By Category</h2>

        <button className="see-more">
          See More
        </button>

      </div>

      <div className="category-grid">

        <CategoryCard
          title="Concert"
          image="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
        />

        <CategoryCard
          title="Sports"
          image="https://images.unsplash.com/photo-1508098682722-e99c43a406b2"
        />

        <CategoryCard
          title="Theater"
          image="https://images.unsplash.com/photo-1503095396549-807759245b35"
        />

        <CategoryCard
          title="Family"
          image="https://images.unsplash.com/photo-1472653431158-6364773b2a56"
        />

      </div>

    </div>

  );
}

export default CategorySection;