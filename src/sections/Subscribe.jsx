import { useState } from "react";
import { Button } from "../components";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate subscription logic or API call here
    console.log("Subscribed with email:", email);
  };

  return (
    <section
      id="contact-us"
      className="max-container py-16 sm:py-24 flex justify-between items-center max-lg:flex-col gap-10"
      aria-labelledby="subscribe-heading"
    >
      {/* Heading */}
      <h3
        id="subscribe-heading"
        className="text-4xl font-bold font-palanquin leading-tight lg:max-w-md text-center max-lg:text-left"
      >
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>

      {/* Input & Button */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-4 w-full lg:max-w-[40%] sm:border sm:border-slate-gray rounded-full p-2.5 max-sm:flex-col max-sm:rounded-xl max-sm:p-4 transition-all"
        noValidate
        aria-label="Subscribe to newsletter"
      >
        <label htmlFor="subscribe-email" className="sr-only">
          Email address
        </label>
        <input
          id="subscribe-email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="subscribe@nike.com"
          className="flex-1 bg-transparent outline-none px-4 py-2 text-base font-montserrat placeholder:text-slate-gray"
          aria-required="true"
          aria-describedby="emailHelp"
        />
        <div className="max-sm:w-full max-sm:mt-2">
          <Button label="Sign Up" fullWidth className="button-animated" />
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
