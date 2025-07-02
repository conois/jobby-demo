import React, { useState } from 'react';
import Header from '../components/Header';
import RecommendedCarousel from '../components/RecommendedCarousel';
import ExploreSection from '../components/ExploreSection';
import BenefitModal from '../components/BenefitModal';
import { toast } from 'sonner';

interface Benefit {
  id: string;
  title: string;
  description: string;
  cost: number;
  category: string;
  image: string;
  categoryIcon: string;
}

const Index = () => {
  const [userTokens, setUserTokens] = useState(250);
  const [activeTab, setActiveTab] = useState('beneficios');
  const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits: Benefit[] = [
    {
      id: '1',
      title: 'Membresía Mensual Sport Life',
      description: 'Membresía por un mes al gimnasio Sport Life.',
      cost: 200,
      category: 'Fitness',
      categoryIcon: '💪',
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop',
    },
    {
      id: '2',
      title: 'Espectáculo de Danza Contemporánea',
      description:
        'Entrada VIP a espectáculo de danza contemporánea con acceso preferencial y encuentro con los bailarines.',
      cost: 350,
      category: 'Evento',
      categoryIcon: '🎭',
      image:
        'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=250&fit=crop',
    },
    {
      id: '3',
      title: 'Día de Spa',
      description:
        'Sesión de Spa completa. Incluye facial, masaje y acceso al sauna todo el día.',
      cost: 150,
      category: 'Bienestar',
      categoryIcon: '🌸',
      image:
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop',
    },
    {
      id: '4',
      title: 'Brunch en Alma Brunch and Coffe',
      description:
        'Horario entre 9:00 a 14:00 hrs, cualquier día de la semana.',
      cost: 50,
      category: 'Gourmet',
      categoryIcon: '🍴',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=250&fit=crop',
    },
    {
      id: '5',
      title: 'Clase de Yoga Premium',
      description: 'Clase personalizada con instructor certificado.',
      cost: 75,
      category: 'Bienestar',
      categoryIcon: '🧘',
      image:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop',
    },
    {
      id: '6',
      title: 'Cena Degustación',
      description: 'Menú de 7 tiempos en restaurante gourmet.',
      cost: 300,
      category: 'Gourmet',
      categoryIcon: '🍽️',
      image:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop',
    },
  ];

  const handleBenefitClick = (benefit: Benefit) => {
    setSelectedBenefit(benefit);
    setIsModalOpen(true);
  };

  const handleConfirmBenefit = () => {
    if (selectedBenefit) {
      if (userTokens >= selectedBenefit.cost) {
        setUserTokens(prev => prev - selectedBenefit.cost);
        toast.success(`¡${selectedBenefit.title} canjeado exitosamente!`, {
          description: 'Recibirás un correo con los detalles en breve.',
        });
        setIsModalOpen(false);
        setSelectedBenefit(null);
      } else {
        toast.error('No tienes suficientes tokens para este beneficio.');
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBenefit(null);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-pink-200'>
      <Header
        tokens={userTokens}
        onTabChange={setActiveTab}
        activeTab={activeTab}
      />

      <main className='pb-20 mx-auto'>
        {activeTab === 'beneficios' ? (
          <>
            <RecommendedCarousel
              benefits={benefits}
              onBenefitClick={handleBenefitClick}
            />
            <ExploreSection
              benefits={benefits}
              onBenefitClick={handleBenefitClick}
            />
          </>
        ) : (
          <div className='px-4 py-8 text-center'>
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <div className='text-6xl mb-4'>🎯</div>
              <h2 className='text-2xl font-bold mb-4 text-gray-800'>
                Desafíos Semanales
              </h2>
              <p className='text-gray-600 mb-6'>
                Completa desafíos semanales y gana tokens extra para canjear más
                beneficios.
              </p>
              <div className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl inline-block font-medium'>
                Próximamente
              </div>
            </div>
          </div>
        )}
      </main>

      <BenefitModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        benefit={selectedBenefit}
        userTokens={userTokens}
        onConfirm={handleConfirmBenefit}
      />
    </div>
  );
};

export default Index;
