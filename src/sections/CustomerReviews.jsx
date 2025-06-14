import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="w-full bg-[#111827] py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="text-center text-4xl sm:text-5xl font-bold font-palanquin leading-tight">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h3>

        <p className="mt-4 max-w-xl mx-auto text-center text-gray-400 font-montserrat">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-10">
          {reviews.map((review, index) => (
            <ReviewCard
              key={`review-${index}`}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
