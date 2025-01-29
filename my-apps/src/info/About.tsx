import React from 'react';
import { Header } from '../components/Header.tsx';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-gray-700 text-lg leading-7 text-center max-w-3xl mx-auto">
        Welcome to Assistena, your trusted companion in technology. Our mission is to provide the latest and most reliable devices tailored to your needs. From cutting-edge
        laptops to the smartest smartphones, we strive to bring innovation closer to you. Explore our curated selection and experience technology at its finest.
        </p>
      </main>
    </div>
  );
};
