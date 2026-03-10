export default function Home(){
  const services = [
    {
      title: "Fast Delivery",
      description: "We deliver your items quickly and efficiently.",
      icon: "🚚"
    },
    {
      title: "Quality Guarantee",
      description: "We guarantee the quality of our products.",
      icon: "👟"
    },
    {
      title: "Secure Payment",
      description: "We ensure secure and reliable payment processing.",
      icon: "💳"
    }
  ];

  return (
    <div>
      <section className="py-12 bg-gray-700">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <h1 className="text-3xl font-bold text-center col-span-full">Our Services</h1>
          {services.map((service, index) => (
            <div key={index} className="p-6 text-center border rounded-lg bg-white shadow-sm">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl text-gray-950 font-bold mb-2">{service.title}</h3>
              <p className="text-gray-950">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

