import { useState } from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface Benefit {
  id: number;
  text: string;
}

interface PackageCardProps {
  title: string;
  price: string;
  benefits: Benefit[];
  includes: string;
  imageSrc: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ title, price, benefits, includes, imageSrc }) => {
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
    <div className="relative h-48 cursor-pointer" onClick={() => setIsModalOpen(true)}>
        <Image 
        src={imageSrc} 
        alt={title} 
        layout="fill" 
        objectFit="cover"
        objectPosition="center -30px"
        />
    </div>
    <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-4xl font-bold text-primary mb-6">{price}</p>
        <ul className="space-y-3 mb-6">
        {benefits.map((benefit) => (
            <li key={benefit.id} className="flex items-center">
            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
            <span>{benefit.text}</span>
            </li>
        ))}
        </ul>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-700 mb-2">Includes:</p>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            {includes.split(', ').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
    </div>

    {isModalOpen && (
        <div 
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" 
        onClick={() => setIsModalOpen(false)}
        >
        <div className="relative w-full max-w-3xl p-2">
            <Image 
            src={imageSrc} 
            alt={title} 
            layout="responsive" 
            width={16} 
            height={9} 
            className="rounded-lg" 
            />
        </div>
        </div>
    )}
    </div>
);
};

const PackageSection: React.FC = () => {
  const standardBenefits: Benefit[] = [
    { id: 1, text: "Lung Function Test" },
    { id: 2, text: "H. Pylori" },
    { id: 3, text: "Vitamin D" },
    { id: 4, text: "Progesterone" },
    { id: 5, text: "Ankle Brachial Index" },
    { id: 6, text: "Ultrasound Breast" },
    { id: 7, text: "Mammogram" },
  ];

  const premiumBenefits: Benefit[] = [
    { id: 1, text: "Lung Function Test" },
    { id: 2, text: "H. Pylori" },
    { id: 3, text: "Total Testosterone" },
    { id: 4, text: "Vitamin D" },
    { id: 5, text: "Progesterone" },
    { id: 6, text: "Ankle Brachial Index" },
    { id: 7, text: "Ultrasound Breast" },
    { id: 8, text: "Mammogram" },
    { id: 9, text: "Carotid Arteries" },
  ];

  return (
    <div className="flex flex-col space-y-10 bg-gray-50 px-4 md:px-12 lg:px-24 py-12 md:py-20 lg:py-28">
    <div className="text-center">
      <p className="font-medium text-base text-primary mb-2">Medical Tourism</p>
      <h2 className="font-bold text-4xl lg:text-5xl mb-8">
        Kill yourself
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-full max-w-6xl mx-auto">
      <PackageCard 
        title="VIP Standard"
        price="RM 2788"
        benefits={standardBenefits}
        includes="Includes: Medical Check Up, Hotel Transfer, VIP Lane"
        imageSrc="/mgc-vip-standard.jpg"
      />

      <PackageCard 
        title="VIP Premium"
        price="RM 3508"
        benefits={premiumBenefits}
        includes="Medical Check Up, Airport Pick Up, Hotel Transfer, VIP Lane, Entourage 1× Pax"
        imageSrc="/mgc-vip-premium.jpg"
      />
    </div>

    <p className="text-center text-sm text-gray-600 italic mt-8">
      Book in September 2024 and get an extra 10% discount!
    </p>
  </div>
  );
};

export default PackageSection;