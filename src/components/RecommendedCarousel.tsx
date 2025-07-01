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
    <div className='mb-8'>
      <h2 className='text-xl font-bold text-gray-800 mb-4 px-4'>
        Recomendados Para Ti
      </h2>

      <div className='relative px-4'>
        <div className='flex gap-4 overflow-hidden'>
          {benefits.map((benefit, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === currentIndex - 1;
            const isNext = index === currentIndex + 1;

            let cardClass = 'transition-all duration-500 flex-shrink-0';
            let cardWidth = 'w-64';

            if (isActive) {
              cardClass += ' scale-105 z-10';
              cardWidth = 'w-72';
            } else if (isPrev || isNext) {
              cardClass += ' scale-95 opacity-70';
            } else {
              cardClass += ' scale-90 opacity-40';
            }

            return (
              <div
                key={benefit.id}
                className={`${cardClass} ${cardWidth}`}
                onClick={() => goToSlide(index)}
              >
                <BenefitCard
                  benefit={{ ...benefit, featured: isActive }}
                  onClick={onBenefitClick}
                />
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
