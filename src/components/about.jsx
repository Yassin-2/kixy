import React from "react";

const About = () => {
  return (
    <section className="bg-gray-950 text-gray-200 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-gray-400 text-lg">
            Step into style. Step into comfort.
          </p>
        </div>

        {/* Story + Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Our Story
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Our journey started with a passion for footwear and fashion.
              We believe shoes are more than accessories — they define your
              confidence, your comfort, and your lifestyle.
            </p>
              <h2 className="text-3xl font-semibold text-white mb-4 mt-[100px]">
              Our mission
            </h2>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Our mission is to deliver high-quality shoes that combine
              durability, modern design, and affordability.
            </p>
          </div>

          <img
            src="/many.jpg"
            alt="Shoes"
            className="rounded-xl shadow-lg w-90 h-140"
          />
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center text-white mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-900 p-8 rounded-xl text-center hover:bg-gray-800 transition">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Top Quality
              </h3>
              <p className="text-gray-400">
                Premium materials and craftsmanship for long-lasting comfort.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl text-center hover:bg-gray-800 transition">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Latest Trends
              </h3>
              <p className="text-gray-400">
                Stay ahead with fashion-forward shoe collections.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl text-center hover:bg-gray-800 transition">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Customer Care
              </h3>
              <p className="text-gray-400">
                Friendly support and easy returns for a smooth experience.
              </p>
            </div>

          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-semibold text-center text-white mb-12">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-gray-900 p-6 rounded-xl">
              <p className="text-gray-400 mb-4">
                "Amazing shoes! Super comfortable and stylish. Fast delivery
                and great service."
              </p>

              <h4 className="text-white font-semibold">Jessica M.</h4>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <p className="text-gray-400 mb-4">
                "Best online shoe store! I always find exactly what I'm
                looking for."
              </p>

              <h4 className="text-white font-semibold">Mark R.</h4>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;