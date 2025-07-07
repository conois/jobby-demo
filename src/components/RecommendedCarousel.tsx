import React, { useState, useEffect } from 'react';
import BenefitCard from './BenefitCard';
import { BenefitData } from '../data/benefits';

interface RecommendedCarouselProps {
  benefits: BenefitData[];
  onBenefitClick: (benefit: BenefitData) => void;
}

// Función para repetir el array hasta tener al menos n elementos
function repeatArray<T>(arr: T[], n: number): T[] {
  const result: T[] = [];
  while (result.length < n) {
    result.push(...arr);
  }
  return result.slice(0, n);
}

const CAROUSEL_SIZE = 5;

const RecommendedCarousel: React.FC<RecommendedCarouselProps> = ({
  benefits,
  onBenefitClick,
}) => {
  // Repetimos los beneficios si hay menos de 5
  const repeatedBenefits = repeatArray(benefits, CAROUSEL_SIZE);
  const [currentIndex, setCurrentIndex] = useState(0); // Central

  // Avance automático cada 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex, repeatedBenefits.length]);

  // Circular next/prev
  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % repeatedBenefits.length);
  };
  const goToPrev = () => {
    setCurrentIndex(
      prev => (prev - 1 + repeatedBenefits.length) % repeatedBenefits.length
    );
  };

  // Para mostrar 5 cards, centrando la activa
  const getVisibleBenefits = () => {
    const visible: BenefitData[] = [];
    for (let i = -2; i <= 2; i++) {
      const idx =
        (currentIndex + i + repeatedBenefits.length) % repeatedBenefits.length;
      visible.push(repeatedBenefits[idx]);
    }
    return visible;
  };
  const visibleBenefits = getVisibleBenefits();

  return (
    <div className='my-10 overflow-x-hidden'>
      <div className='w-10/12 mx-auto'>
        <h2 className='text-xl font-bold text-gray-800 pt-[35px] mb-[-50px]'>
          Recomendados Para Ti
        </h2>
      </div>

      <div className='relative w-full mx-auto'>
        <div className='flex items-center gap-2 justify-center'>
          <div className='flex gap-4 justify-center transition-transform duration-500 items-end'>
            {visibleBenefits.map((benefit, idx) => {
              // La card central es la activa
              const isActive = idx === 2;
              const isPrev = idx === 1;
              const isNext = idx === 3;
              let cardClass = 'transition-all duration-500 flex-shrink-0';
              let cardWidth = 'w-[400px]';
              if (isActive) {
                cardClass += ' scale-105 z-10';
                cardWidth = 'w-[420px]';
              } else if (isPrev || isNext) {
                cardClass += ' scale-95 opacity-70';
              } else {
                cardClass += ' scale-90 opacity-40';
              }
              return (
                <div
                  key={benefit.id + '-' + idx}
                  className='flex flex-col items-center'
                >
                  <div
                    className={`${cardClass} ${cardWidth}`}
                    onClick={() =>
                      setCurrentIndex(
                        (currentIndex + idx - 2 + repeatedBenefits.length) %
                          repeatedBenefits.length
                      )
                    }
                  >
                    <BenefitCard
                      benefit={benefit}
                      onClick={onBenefitClick}
                      variant='carousel'
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
        </div>
        {/* Dots indicator */}
        <div className='flex justify-center mt-6 gap-2'>
          {repeatedBenefits.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-8 h-2 rounded-full transition-all duration-200 border-2 ${
                index === currentIndex
                  ? 'bg-purple-500 border-purple-500 w-6'
                  : 'bg-purple-200 border-purple-300 hover:bg-purple-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedCarousel;
