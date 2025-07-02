import React, { useState } from 'react';
import BenefitCard from './BenefitCard';

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

interface RecommendedCarouselProps {
  benefits: Benefit[];
  onBenefitClick: (benefit: Benefit) => void;
}

const RecommendedCarousel: React.FC<RecommendedCarouselProps> = ({
  benefits,
  onBenefitClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle item

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className='my-10'>
      <h2 className='text-xl font-bold text-gray-800 mb-4 px-8'>
        Recomendados Para Ti
      </h2>

      <div className='relative px-4 w-full'>
        <div className='flex gap-4 justify-center'>
          {benefits.map((benefit, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === currentIndex - 1;
            const isNext = index === currentIndex + 1;

            let cardClass = 'transition-all duration-500 flex-shrink-0';
            let cardWidth = 'w-[248px]';

            if (isActive) {
              cardClass += ' scale-105 z-10';
              cardWidth = 'w-[380px]'; // Más ancha para la activa
            } else if (isPrev || isNext) {
              cardClass += ' scale-95 opacity-70';
            } else {
              cardClass += ' scale-90 opacity-40';
            }

            return (
              <div key={benefit.id} className='flex flex-col items-center'>
                <div
                  className={`${cardClass} ${cardWidth}`}
                  onClick={() => goToSlide(index)}
                >
                  <BenefitCard
                    benefit={{ ...benefit, featured: isActive }}
                    onClick={onBenefitClick}
                  />
                </div>
                {/* Botón solo para la card activa */}
                {isActive && (
                  <button
                    className='mt-6 w-4/5 max-w-[340px] py-3 rounded-full bg-purple-600 text-white font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-purple-700 transition-colors text-base'
                    onClick={() => onBenefitClick(benefit)}
                  >
                    Canjear <span className='text-lg'>→</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Dots indicator */}
        <div className='flex justify-center mt-6 gap-2'>
          {benefits.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-purple-500 w-6'
                  : 'bg-gray-300 hover:bg-purple-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedCarousel;
