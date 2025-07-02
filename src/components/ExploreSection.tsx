import React from 'react';
import CategoryCard from './CategoryCard';
import BenefitCard from './BenefitCard';

interface Benefit {
  id: string;
  title: string;
  description: string;
  cost: number;
  category: string;
  image: string;
  categoryIcon: string;
}

interface ExploreSectionProps {
  benefits: Benefit[];
  onBenefitClick: (benefit: Benefit) => void;
}

const ExploreSection: React.FC<ExploreSectionProps> = ({
  benefits,
  onBenefitClick,
}) => {
  const categories = [
    { name: 'Gourmet', icon: '🍴', gradient: 'gradient-purple-pink' },
    { name: 'Fitness', icon: '💪', gradient: 'gradient-purple-blue' },
    { name: 'Bienestar', icon: '🌸', gradient: 'gradient-pink-orange' },
    { name: 'Eventos', icon: '🎭', gradient: 'gradient-green-teal' },
  ];

  return (
    <div className='px-8'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-bold text-gray-800'>
          Explora un mundo de beneficios
        </h2>
        <div className='relative w-64'>
          <span className='absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 pointer-events-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z'
              />
            </svg>
          </span>
          <input
            type='text'
            placeholder='Buscar beneficios…'
            className='w-full pl-10 pr-4 py-2 rounded-full border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-white text-gray-700 placeholder-gray-400 shadow-sm'
            disabled
          />
        </div>
      </div>

      {/* Category filters */}
      <div className='flex gap-2 mb-6 overflow-x-auto pb-2'>
        {categories.map(category => (
          <button
            key={category.name}
            className='flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors whitespace-nowrap'
          >
            <span>{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Pinterest-style masonry layout */}
      <div className='columns-1 sm:columns-2 lg:columns-3 gap-8 mb-6 space-y-8'>
        {/* Featured special cards */}
        <CategoryCard
          title='¿Sabías que puedes acumular tokens con desafíos semanales?'
          description=''
          icon='💡'
          gradient='bg-gradient-to-br from-orange-400 to-pink-500'
          onClick={() => {}}
          size='medium'
          className='mb-4 break-inside-avoid'
        />

        {/* Benefits cards */}
        {benefits.slice(0, 4).map(benefit => (
          <BenefitCard
            key={benefit.id}
            benefit={benefit}
            onClick={onBenefitClick}
            className='h-[60vh] aspect-[16/9] mb-8 break-inside-avoid'
          />
        ))}

        <CategoryCard
          title='¿Qué pasa si no uso mis tokens este mes?'
          description='¡No se pierden! Se acumulan automáticamente con los del próximo mes.'
          icon='❓'
          gradient='bg-gradient-to-br from-yellow-400 to-orange-500'
          onClick={() => {}}
          size='medium'
          className='mb-4 break-inside-avoid'
        />
        {benefits.slice(3, 5).map(benefit => (
          <BenefitCard
            key={benefit.id}
            benefit={benefit}
            onClick={onBenefitClick}
            className='h-[38vh] aspect-[16/9] mb-8 break-inside-avoid'
          />
        ))}
        {/* More info cards */}
        <CategoryCard
          title='¡Llevas canjeados 3 beneficios este mes!'
          description=''
          icon='🎉'
          gradient='bg-gradient-to-br from-purple-500 to-indigo-600'
          onClick={() => {}}
          size='small'
          className='mb-4 break-inside-avoid'
        />
      </div>

      {/* Load more button */}
      <div className='text-center'>
        <button className='px-6 py-3 border border-purple-300 text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition-colors'>
          Cargar Más
        </button>
      </div>
    </div>
  );
};

export default ExploreSection;
