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
  variant?: 'default' | 'carousel';
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  benefit,
  onClick,
  className = '',
  variant = 'default',
}) => {
  const handleClick = () => {
    onClick(benefit);
  };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer group h-[368px] w-full ${className} duration-300 transition-all`}
      onClick={handleClick}
    >
      {/* Imagen de fondo */}
      <img
        src={benefit.image}
        alt={benefit.title}
        className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
      />
      {/* Overlay oscuro para mejor legibilidad */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />

      {/* Contenido sobre la imagen */}
      <div className='absolute bottom-4 left-4 right-4 z-10 flex flex-col'>
        {variant !== 'carousel' && (
          <span className='w-fit border border-white bg-transparent text-white mb-4 font-sans text-[16px] font-medium inline-flex items-center gap-2 rounded-full py-2 px-4'>
            {benefit.categoryIcon} {benefit.category}
          </span>
        )}
        <h3
          className={`font-bold text-white drop-shadow mb-1 ${variant === 'carousel' ? '' : ''}`}
          style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: variant === 'carousel' ? '24px' : '32px',
          }}
        >
          {benefit.title}
        </h3>
        {variant !== 'carousel' && (
          <p
            className='text-white opacity-90 drop-shadow'
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
          >
            {benefit.description}
          </p>
        )}
        {variant !== 'carousel' && (
          <span className='w-fit border border-white bg-white/30 text-white mb-4 font-sans text-[16px] font-medium inline-flex items-center gap-2 rounded-full py-2 px-4'>
            {benefit.cost}
          </span>
        )}
      </div>
      {/* Overlay de hover para carousel */}
      {variant === 'carousel' && (
        <div className='absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20'>
          <span
            className='text-white text-lg font-semibold'
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Ver más detalles
          </span>
        </div>
      )}
    </div>
  );
};

export default BenefitCard;
