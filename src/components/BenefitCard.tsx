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
      className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
        benefit.featured ? 'card-hover' : 'card-hover-subtle'
      } ${className}`}
      onClick={handleClick}
    >
      <div className='relative'>
        <img
          src={benefit.image}
          alt={benefit.title}
          className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 transition-all duration-300' />

        {/* Category badge */}
        <div className='absolute top-3 left-3'>
          <span className='bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full'>
            {benefit.categoryIcon} {benefit.category}
          </span>
        </div>

        {/* Cost badge */}
        <div className='absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm font-medium group-hover:bg-white/30 transition-colors'>
          💎 {benefit.cost}
        </div>

        {/* Content */}
        <div className='absolute bottom-3 left-3 right-3 text-white'>
          <h3 className='font-bold text-lg mb-1 group-hover:text-purple-200 transition-colors'>
            {benefit.title}
          </h3>
          <p className='text-sm opacity-90 group-hover:opacity-100 transition-opacity'>
            {benefit.description}
          </p>
        </div>

        {/* Hover overlay */}
        <div className='absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>

      {benefit.featured && (
        <div className='absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center'>
          <span className='text-white text-xs'>⭐</span>
        </div>
      )}
    </div>
  );
};

export default BenefitCard;
