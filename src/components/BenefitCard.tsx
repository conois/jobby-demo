import React from 'react';

interface Benefit {
  id: string;
  title: string;
  description: string;
  cost: number;
  category: string;
  image: string;
  categoryIcon: string;
  featured?: boolean;
}

interface BenefitCardProps {
  benefit: Benefit;
  onClick: (benefit: Benefit) => void;
  className?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  benefit,
  onClick,
  className = '',
}) => {
  const handleClick = () => {
    onClick(benefit);
  };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer group h-[368px] w-full ${className}`}
    >
      {/* Imagen de fondo */}
      <img
        src={benefit.image}
        alt={benefit.title}
        className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
      />
      {/* Overlay oscuro para mejor legibilidad */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />
      {/* Badges */}
      <div className='absolute top-3 left-3 z-10'>
        <span className='bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full'>
          {benefit.categoryIcon} {benefit.category}
        </span>
      </div>
      <div className='absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm font-medium group-hover:bg-white/30 transition-colors z-10'>
        💎 {benefit.cost}
      </div>
      {benefit.featured && (
        <div className='absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center z-10'>
          <span className='text-white text-xs'>⭐</span>
        </div>
      )}
      {/* Contenido sobre la imagen */}
      <div className='absolute bottom-4 left-4 right-4 z-10'>
        <h3 className='font-bold text-lg mb-1 text-white drop-shadow'>
          {benefit.title}
        </h3>
        <p className='text-sm text-white opacity-90 drop-shadow'>
          {benefit.description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
