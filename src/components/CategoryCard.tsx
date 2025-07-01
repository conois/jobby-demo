import React from 'react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  icon,
  gradient,
  onClick,
  size = 'medium',
}) => {
  const sizeClasses = {
    small: 'p-4 min-h-[120px]',
    medium: 'p-6 min-h-[160px]',
    large: 'p-6 min-h-[200px]',
  };

  return (
    <div
      onClick={onClick}
      className={`${gradient} ${sizeClasses[size]} rounded-2xl cursor-pointer card-hover-subtle text-white relative overflow-hidden group`}
    >
      <div className='relative z-10'>
        <div className='text-2xl mb-3'>{icon}</div>
        <h3 className='font-bold text-lg mb-2'>{title}</h3>
        <p className='text-sm opacity-90 leading-relaxed'>{description}</p>
      </div>

      {/* Hover effect overlay */}
      <div className='absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      {/* Decorative element */}
      <div className='absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500' />
    </div>
  );
};

export default CategoryCard;
