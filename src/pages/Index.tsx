import React, { useState } from 'react';
import Header from '../components/Header';
import RecommendedCarousel from '../components/RecommendedCarousel';
import ExploreSection from '../components/ExploreSection';
import BenefitModal from '../components/BenefitModal';
import { toast } from 'sonner';
import { benefits, BenefitData } from '../data/benefits';
import { useTokens } from '../context/TokensContext';

const Index = () => {
  const { userTokens, canjeToken } = useTokens();
  const [activeTab, setActiveTab] = useState('beneficios');
  const [selectedBenefit, setSelectedBenefit] = useState<BenefitData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBenefitClick = (benefit: BenefitData) => {
    setSelectedBenefit(benefit);
    setIsModalOpen(true);
  };

  const handleConfirmBenefit = () => {
    if (selectedBenefit) {
      const success = canjeToken(selectedBenefit.cost);
      if (!success) {
        toast.error('No tienes suficientes tokens para este beneficio.', {
          position: 'top-center',
          style: { background: '#ef4444', color: 'white' },
        });
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBenefit(null);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-pink-200'>
      <Header onTabChange={setActiveTab} activeTab={activeTab} />

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
        onConfirm={handleConfirmBenefit}
      />

      <footer className='w-full py-6 text-center text-gray-400 text-sm bg-transparent'>
        © 2025 Jobby. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Index;
