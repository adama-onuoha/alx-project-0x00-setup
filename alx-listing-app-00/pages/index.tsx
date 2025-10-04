import { PROPERTYLISTINGSAMPLE } from "../constants";

const Home = () => {
  return (
    <div>
      <section className="h-96 bg-blue-600 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Find your favorite place here!</h1>
          <p className="text-xl">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <div key={index} className="border rounded-lg p-4">
              <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded" />
              <h3 className="font-bold mt-2">{property.name}</h3>
              <p className="text-gray-600">{property.address.city}, {property.address.country}</p>
              <p className="text-blue-600 font-bold">${property.price}/night</p>
              <p className="text-yellow-500">★ {property.rating}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
