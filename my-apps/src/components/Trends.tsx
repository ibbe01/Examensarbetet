import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import gaming from '../trendImages/gaming.webp';
import soundandmusic from '../trendImages/soundandmusic.png';
import smartphone from '../trendImages/smartphone.webp';
import laptop from '../trendImages/laptop.png';

interface Category {
  id: number;
  title: string;
  image: string;
  link: string;  // Add a link property to store the destination path
}

export const Trends: React.FC = () => {
  const categories: Category[] = [
    { id: 1, title: "Smartphones", image: smartphone, link: "/productDevices/SmartPhones" },
    { id: 2, title: "Laptops", image: laptop, link: "/productDevices/Laptops" },
    { id: 3, title: "Sound & Music", image: soundandmusic, link: "/productDevices/Headphones" },
    { id: 4, title: "Gaming", image: gaming, link: "/productDevices/Gaming" }
  ];

  return (
    <div className="w-full p-6 mt-12">
      <h2 className="text-3xl font-bold text-center mb-4">Discover the latest trends on the market</h2>
      <div className="max-w-2xl mx-auto mb-8">
        <p className="text-center text-gray-600">
          Follow the latest tech in fashion and stay ahead of the curve. From cutting-edge smartphones to immersive gaming experiences, explore the innovations shaping our digital lifestyle.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={category.link}> {/* Use Link component for navigation */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square relative cursor-pointer overflow-hidden group">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 flex items-center justify-center transition-opacity duration-300">
                    <h3 className="text-white text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
