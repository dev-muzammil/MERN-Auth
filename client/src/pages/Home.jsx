import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Understand User Authentication.
              <strong className="font-extrabold text-fuchsia-700 sm:block">
                Increase Security.
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              This website is a boilerplate of any MERN Website which uses
              Authentication. It is completely made by Muzammil Shaikh.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded bg-fuchsia-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-fuchsia-700 focus:outline-none focus:ring active:bg-fuchsia-500 sm:w-auto transition-all"
                to="/about"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
