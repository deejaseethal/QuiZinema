import React from 'react';

interface PricingTier {
  title: string;
  price: string;
  description: string;
  buttonText: string;
  features: { text: string; included: boolean }[];
}

const Pricing: React.FC = () => {
  const pricingTiers: PricingTier[] = [
    {
      title: 'Beginner',
      price: '$15.00 /month',
      description: 'Ideal for newcomers. Essential features to kickstart your gaming journey. Perfect for small gaming teams.',
      buttonText: 'Start Now',
      features: [
        { text: 'Sales & marketing for 2 gamers', included: true },
        { text: 'Player account management', included: true },
        { text: 'No in-game customization', included: false },
        { text: 'No live support', included: false },
      ],
    },
    {
      title: 'Entertaining',
      price: '$25.00 /month',
      description: 'Comprehensive tools for enhancing your gaming experience. Optimize your gameplay and connect with your team.',
      buttonText: 'Start Now',
      features: [
        { text: 'Complete gaming platform for any player', included: true },
        { text: 'Access all game modes', included: true },
        { text: 'Limited character customization', included: true },
        { text: 'Email gaming support', included: true },
      ],
    },
    {
      title: 'Expert',
      price: '$45.00 /month',
      description: 'Advanced gaming solutions. Cutting-edge features and top-tier support for maximum enjoyment.',
      buttonText: 'Get in Touch',
      features: [
        { text: 'Unlimited gaming support', included: true },
        { text: 'All games & features', included: true },
        { text: 'Unlimited game customization', included: true },
        { text: '24/7 gaming support', included: true },
      ],
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          Affordable pricing
        </h2>
        <p className="text-gray-600 mb-8 text-center sm:text-left text-sm sm:text-base">
          Listing your game pricing helps potential players quickly determine if it fits their budget and interests.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{tier.title}</h3>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{tier.price}</p>
              <p className="text-gray-600 text-sm sm:text-base mb-6">{tier.description}</p>
              <button className="w-full sm:w-auto px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 mb-6">
                {tier.buttonText}
              </button>
              <ul className="text-left space-y-2 text-sm sm:text-base">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${feature.included ? 'bg-green-500' : 'bg-red-500'}`}
                    ></span>
                    {feature.text}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-xs sm:text-sm mt-4">Instant setup, satisfied or reimbursed.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;