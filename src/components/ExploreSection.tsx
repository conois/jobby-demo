import React, { useState } from 'react';
import CategoryCard from './CategoryCard';
import BenefitCard from './BenefitCard';
import { BenefitData } from '../data/benefits';

interface ExploreSectionProps {
  benefits: BenefitData[];
  onBenefitClick: (benefit: BenefitData) => void;
}

const ExploreSection: React.FC<ExploreSectionProps> = ({
  benefits,
  onBenefitClick,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      name: 'Gamer',
      icon: <span className='material-icons text-sm'>sports_esports</span>,
      gradient: 'gradient-purple-pink',
    },
    {
      name: 'Deporte',
      icon: <span className='material-icons text-sm'>fitness_center</span>,
      gradient: 'gradient-purple-blue',
    },
    {
      name: 'Lifestyle',
      icon: <span className='material-icons text-sm'>favorite</span>,
      gradient: 'gradient-pink-orange',
    },
    {
      name: 'Autocuidado',
      icon: <span className='material-icons text-sm'>spa</span>,
      gradient: 'gradient-green-teal',
    },
    {
      name: 'Comidas del mundo',
      icon: <span className='material-icons text-sm'>restaurant</span>,
      gradient: 'gradient-orange-red',
    },
    {
      name: 'Cultura y Artes',
      icon: <span className='material-icons text-sm'>palette</span>,
      gradient: 'gradient-blue-purple',
    },
  ];

  // Filtrar beneficios por categoría seleccionada
  const filteredBenefits = selectedCategory
    ? benefits.filter(benefit => benefit.category === selectedCategory)
    : benefits;

  // Mostrar solo los primeros 6 beneficios filtrados
  const displayBenefits = filteredBenefits.slice(0, 6);

  const handleCategoryClick = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      // Si ya está seleccionada, la deseleccionamos
      setSelectedCategory(null);
    } else {
      // Si no está seleccionada, la seleccionamos
      setSelectedCategory(categoryName);
    }
  };

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
      <div className='flex gap-2 mb-6 overflow-x-auto pb-2 -mx-2 px-2'>
        <button
          onClick={() => setSelectedCategory(null)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
            selectedCategory === null
              ? 'bg-purple-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
          }`}
        >
          <span className='material-icons text-sm'>all_inclusive</span>
          Todos
        </button>
        {categories.map(category => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              selectedCategory === category.name
                ? 'bg-purple-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
            }`}
          >
            <span>{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Mostrar mensaje si no hay beneficios en la categoría seleccionada */}
      {selectedCategory && displayBenefits.length === 0 && (
        <div className='text-center py-12'>
          <div className='text-6xl mb-4'>🔍</div>
          <h3 className='text-xl font-semibold text-gray-800 mb-2'>
            No se encontraron beneficios
          </h3>
          <p className='text-gray-600 mb-4'>
            No hay beneficios disponibles en la categoría "{selectedCategory}".
          </p>
          <button
            onClick={() => setSelectedCategory(null)}
            className='px-6 py-3 bg-purple-500 text-white rounded-xl font-medium hover:bg-purple-600 transition-colors'
          >
            Ver todos los beneficios
          </button>
        </div>
      )}

      {/* Pinterest-style masonry layout */}
      {displayBenefits.length > 0 && (
        <div className='columns-1 sm:columns-2 lg:columns-3 gap-8 mb-6 space-y-8'>
          {/* Featured special cards - solo mostrar si no hay filtro activo */}
          {!selectedCategory && (
            <CategoryCard
              title='¿Sabías que puedes acumular tokens con desafíos semanales?'
              description=''
              icon='💡'
              gradient='bg-gradient-to-br from-orange-400 to-pink-500'
              onClick={() => {}}
              size='medium'
              className='mb-4 break-inside-avoid'
            />
          )}

          {/* Benefits cards - primeros 3 beneficios */}
          {displayBenefits.slice(0, 3).map(benefit => (
            <BenefitCard
              key={benefit.id}
              benefit={benefit}
              onClick={onBenefitClick}
              className='h-[60vh] aspect-[16/9] mb-8 break-inside-avoid'
            />
          ))}

          {/* Category card informativa - solo mostrar si no hay filtro activo */}
          {!selectedCategory && (
            <CategoryCard
              title='¿Qué pasa si no uso mis tokens este mes?'
              description='¡No se pierden! Se acumulan automáticamente con los del próximo mes.'
              icon='❓'
              gradient='bg-gradient-to-br from-yellow-400 to-orange-500'
              onClick={() => {}}
              size='medium'
              className='mb-4 break-inside-avoid'
            />
          )}

          {/* Benefits cards - siguientes 3 beneficios */}
          {displayBenefits.slice(3, 6).map(benefit => (
            <BenefitCard
              key={benefit.id}
              benefit={benefit}
              onClick={onBenefitClick}
              className='h-[38vh] aspect-[16/9] mb-8 break-inside-avoid'
            />
          ))}

          {/* More info cards - solo mostrar si no hay filtro activo */}
          {!selectedCategory && (
            <CategoryCard
              title='¡Llevas canjeados 3 beneficios este mes!'
              description=''
              icon='🎉'
              gradient='bg-gradient-to-br from-purple-500 to-indigo-600'
              onClick={() => {}}
              size='small'
              className='mb-4 break-inside-avoid'
            />
          )}
        </div>
      )}

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
