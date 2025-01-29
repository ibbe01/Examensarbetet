import React from 'react';
import { Link } from 'react-router-dom';  

interface CategoryContent {
  title: string;
  description: string;
  path: string;  // path ska vara en sträng som representerar routern
}

export const Intro: React.FC = () => {
  const categories: CategoryContent[] = [
    {
      title: "Smartphones",
      description: "Latest models at unbeatable prices",
      path: "/productDevices/SmartPhones"  
    },
    {
      title: "Laptops",
      description: "Powerful machines for work and play",
      path: "/productDevices/Laptops"  
    },
    {
      title: "Headphones",
      description: "Immersive sound experiences",
      path: "/productDevices/Headphones"  
    }
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Assistena Tech
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Incredible savings on the latest electronics and gadgets
          </p>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-stretch gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex-1 flex flex-col justify-between transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
              <Link
                to={category.path}  // här används link för att navigera
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition duration-300"
              >
                Explore {category.title} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
