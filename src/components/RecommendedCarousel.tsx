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
    const visible: Benefit[] = [];
    for (let i = -2; i <= 2; i++) {
      const idx =
        (currentIndex + i + repeatedBenefits.length) % repeatedBenefits.length;
      visible.push(repeatedBenefits[idx]);
    }
    return visible;
  };
  const visibleBenefits = getVisibleBenefits();

  // Transición suave usando translateX
  // El slide central siempre está en el medio (índice 2)
  const slideWidth = 280; // px, aprox. w-[248px] + gap
  const activeSlideWidth = 420; // px, aprox. w-[380px] + gap
  // Calculamos el desplazamiento para centrar la card activa
  const offset = -(slideWidth * 2 + (activeSlideWidth - slideWidth) / 2);

  return (
    <div className='my-10'>
      <h2 className='text-xl font-bold text-gray-800 mb-4 px-8'>
        Recomendados Para Ti
      </h2>
      <div className='relative px-4 w-full'>
        <div className='flex items-center gap-2 justify-center'>
          {/* Flecha izquierda */}
          <button
            onClick={goToPrev}
            className='flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 mr-2 bg-purple-200 text-purple-700 hover:bg-purple-500 hover:text-white shadow-md border-2 border-purple-300'
            aria-label='Anterior'
          >
            <span className='text-lg'>&#8592;</span>
          </button>
          <div
            className='overflow-hidden w-[1400px] max-w-full'
            style={{ minWidth: 0 }}
          >
            <div className='flex gap-4 justify-center transition-transform duration-500'>
              {visibleBenefits.map((benefit, idx) => {
                // La card central es la activa
                const isActive = idx === 2;
                const isPrev = idx === 1;
                const isNext = idx === 3;
                let cardClass = 'transition-all duration-500 flex-shrink-0';
                let cardWidth = 'w-[248px]';
                if (isActive) {
                  cardClass += ' scale-105 z-10';
                  cardWidth = 'w-[380px]';
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
          </div>
          {/* Flecha derecha */}
          <button
            onClick={goToNext}
            className='flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ml-2 bg-purple-200 text-purple-700 hover:bg-purple-500 hover:text-white shadow-md border-2 border-purple-300'
            aria-label='Siguiente'
          >
            <span className='text-lg'>&#8594;</span>
          </button>
        </div>
        {/* Dots indicator */}
        <div className='flex justify-center mt-6 gap-2'>
          {repeatedBenefits.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 border-2 ${
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
