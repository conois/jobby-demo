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
    <div className='px-4'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-bold text-gray-800'>
          Explora un mundo de beneficios
        </h2>
        <button className='text-purple-600 hover:text-purple-700 transition-colors'>
          🔍
        </button>
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

      {/* Benefits grid */}
      <div className='grid grid-cols-1 gap-4 mb-6'>
        {/* Featured special cards */}
        <div className='grid grid-cols-2 gap-4'>
          <CategoryCard
            title='¿Sabías que puedes acumular tokens con desafíos semanales?'
            description=''
            icon='💡'
            gradient='bg-gradient-to-br from-orange-400 to-pink-500'
            onClick={() => {}}
            size='medium'
          />
          <CategoryCard
            title='¿Qué pasa si no uso mis tokens este mes?'
            description='¡No se pierden! Se acumulan automáticamente con los del próximo mes.'
            icon='❓'
            gradient='bg-gradient-to-br from-yellow-400 to-orange-500'
            onClick={() => {}}
            size='medium'
          />
        </div>

        {/* Benefits cards */}
        <div className='grid grid-cols-2 gap-4'>
          {benefits.slice(0, 4).map(benefit => (
            <BenefitCard
              key={benefit.id}
              benefit={benefit}
              onClick={onBenefitClick}
              className='h-48'
            />
          ))}
        </div>

        {/* More info cards */}
        <div className='grid grid-cols-1 gap-4'>
          <CategoryCard
            title='¡Llevas canjeados 3 beneficios este mes!'
            description=''
            icon='🎉'
            gradient='bg-gradient-to-br from-purple-500 to-indigo-600'
            onClick={() => {}}
            size='small'
          />
        </div>
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
