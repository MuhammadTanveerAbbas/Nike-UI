import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container py-16 sm:py-24 max-sm:mt-12"
      aria-label="Popular Products"
    >
      {/* Heading */}
      <div className="flex flex-col gap-5 text-center sm:text-left">
        <h2 className="text-4xl font-bold font-palanquin leading-tight">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="text-slate-gray text-base leading-7 font-montserrat lg:max-w-lg mx-auto sm:mx-0">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>

      {/* Product Grid */}
      <div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14 gap-x-6"
        role="list"
      >
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
