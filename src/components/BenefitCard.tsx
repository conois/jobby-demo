import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BenefitData } from '../data/benefits';

interface BenefitCardProps {
  benefit: BenefitData;
  onClick: (benefit: BenefitData) => void;
  className?: string;
  variant?: 'default' | 'carousel';
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  benefit,
  onClick,
  className = '',
  variant = 'default',
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    onClick(benefit);
  };

  // Función para obtener el ícono de Material Icons basado en la categoría
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: string } = {
      Gamer: 'sports_esports',
      Deporte: 'fitness_center',
      Lifestyle: 'lifestyle',
      Autocuidado: 'spa',
      'Panoramas y Familia': 'family_restroom',
      'Cultura y Artes': 'palette',
      'Vida Profesional': 'work',
      'Comidas del mundo': 'restaurant',
      'Mundo tuercas': 'directions_car',
      Mascotas: 'pets',
      'Cervezas y Amigos': 'local_bar',
      'Hobbies y Pasatiempos': 'hobby',
    };
    return iconMap[category] || 'category';
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
            {/* Icono de categoría con Material Icons */}
            <span className='material-icons text-white text-[20px]'>
              {getCategoryIcon(benefit.category)}
            </span>
            {benefit.category}
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
          <div className='flex justify-between items-end'>
            <span className='w-fit border border-white bg-white/30 text-white font-sans text-[16px] font-medium inline-flex items-center gap-2 rounded-full py-2 px-4 mt-4'>
              {/* Icono de ticket con Material Icons */}
              <span className='material-icons text-white text-[20px]'>
                confirmation_number
              </span>
              {benefit.cost}
            </span>

            {/* Acciones en la parte inferior de la card */}
            <div className='flex direction-normal gap-2 items-end mt-4'>
              <button
                onClick={e => {
                  e.stopPropagation();
                  navigate(`/beneficio/${benefit.id}`);
                }}
                className='font-sans font-medium inline-flex items-center gap-2 rounded-full p-2 bg-transparent hover:border-2 hover:border-[#D64E3C] text-white justify-center'
              >
                <span className='material-icons'>visibility</span>
              </button>
              <button className='bg-[#D64E3C] font-sans font-medium inline-flex items-center gap-2 rounded-full w-full max-w-40 px-5 py-2 text-white justify-center max-h-11'>
                Canjear <span className='text-lg'>→</span>
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Overlay de hover para carousel */}
      {variant === 'carousel' && (
        <div
          className='absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 cursor-pointer'
          onClick={e => {
            e.stopPropagation();
            navigate(`/beneficio/${benefit.id}`);
          }}
        >
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
