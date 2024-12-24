import React from 'react';

const AboutPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://wallpaperaccess.com/full/185289.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-50 text-white p-8 rounded-lg text-center max-w-3xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed">
          Welcome to our travel website, your gateway to explore the world! We
          are dedicated to providing the best travel experiences, curated
          destinations, and tailored travel packages. Whether you&apos;re looking
          for adventure, relaxation, or cultural exploration, we&apos;ve got
          something for everyone.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
