import React from 'react';
import { Header } from '../components/Header.tsx';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-gray-700 text-lg leading-7 text-center max-w-3xl mx-auto">
          Have questions or need assistance? We’re here to help! Reach out to us through our customer support channels or send us an email. Your satisfaction is our priority, and we look forward to hearing from you.
        </p>
      </main>
    </div>
  );
};
