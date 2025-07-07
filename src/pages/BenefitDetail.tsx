import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BenefitModal from '../components/BenefitModal';
import { toast } from 'sonner';
import { benefits, BenefitData } from '../data/benefits';
import { useTokens } from '../context/TokensContext';

const BenefitDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const benefit = benefits.find(b => b.id === id);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { userTokens, canjeToken } = useTokens();

  const handleConfirmBenefit = () => {
    if (benefit) {
      const success = canjeToken(benefit.cost);
      if (!success) {
        toast.error('No tienes suficientes tokens para este beneficio.', {
          position: 'top-center',
          style: { background: '#ef4444', color: 'white' },
        });
      }
    }
  };

  if (!benefit) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h2 className='text-2xl font-bold mb-4'>Beneficio no encontrado</h2>
        <button
          onClick={() => navigate(-1)}
          className='px-4 py-2 bg-purple-500 text-white rounded-lg'
        >
          Volver
        </button>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-pink-200'>
      <Header onTabChange={() => {}} activeTab='beneficios' />

      <div className='w-full px-20 py-10'>
        <div className='flex gap-4 mb-8'>
          {/* Imagen grande a la izquierda */}
          <div className='w-1/2 h-[400px]'>
            <img
              src={benefit.image}
              alt={benefit.title}
              className='w-full h-full object-cover rounded-2xl shadow-lg'
            />
          </div>
          {/* Grid 2x2 a la derecha */}
          <div className='w-1/2 h-[400px] grid grid-rows-2 grid-cols-2 gap-2 relative'>
            <img
              src={benefit.image}
              alt={benefit.title}
              className='w-full h-full object-cover rounded-2xl shadow-lg row-span-1 col-span-1'
            />
            <img
              src={benefit.image}
              alt={benefit.title}
              className='w-full h-full object-cover rounded-2xl shadow-lg row-span-1 col-span-1'
            />
            <img
              src={benefit.image}
              alt={benefit.title}
              className='w-full h-full object-cover rounded-2xl shadow-lg row-span-1 col-span-1'
            />
            <img
              src={benefit.image}
              alt={benefit.title}
              className='w-full h-full object-cover rounded-2xl shadow-lg row-span-1 col-span-1'
            />
            {/* Botón Galería */}
            <button className='absolute bottom-4 right-4 bg-white/90 text-gray-800 rounded-full px-6 py-2 shadow font-medium flex items-center gap-2'>
              <span className='material-icons text-lg'>collections</span>
              Galería
            </button>
          </div>
        </div>

        <h1 className='text-3xl font-bold mb-2'>{benefit.title}</h1>
        <div className='flex items-center gap-3 mb-4'>
          <span className='px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium'>
            {benefit.category}
          </span>
          <span className='px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium'>
            💎 {benefit.cost}
          </span>
        </div>

        <div className='flex gap-8 mt-2'>
          {/* Sección izquierda: Descripción y características */}
          <div className='w-3/5'>
            <p className='text-lg text-gray-700 mb-4'>{benefit.description}</p>
            <h3 className='text-xl font-semibold mt-6 mb-2'>
              Detalles del Beneficio
            </h3>
            <p className='text-gray-700 mb-4'>
              Este beneficio te ofrece una experiencia única y memorable.
              Disfruta de todos los detalles y aprovecha al máximo esta
              oportunidad especial.
            </p>
            <h3 className='text-xl font-semibold mt-6 mb-2'>
              Información Importante
            </h3>
            <ul className='list-disc pl-6 mb-4 text-gray-700'>
              <li>Reserva con anticipación para asegurar disponibilidad</li>
              <li>Presenta tu voucher al momento de canjear</li>
              <li>Válido por 30 días desde la fecha de canje</li>
              <li>No transferible ni reembolsable</li>
            </ul>
          </div>
          {/* Sección derecha: Box de acciones */}
          <div className='w-2/5'>
            <div className='bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6 sticky top-24'>
              {/* Evaluación */}
              <div className='flex items-center gap-2'>
                <span className='text-yellow-400 text-2xl'>★★★★★</span>
                <span className='text-lg font-medium text-gray-700'>
                  (4.5/5)
                </span>
              </div>
              {/* Botón de canje */}
              <button
                className='w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 transition text-lg'
                onClick={() => setIsModalOpen(true)}
              >
                Canjear Beneficio
              </button>
              {/* Más información del lugar */}
              <div className='text-gray-700 text-sm'>
                <div className='mb-2'>
                  <span className='font-semibold'>Categoría:</span>{' '}
                  {benefit.category}
                </div>
                <div className='mb-2'>
                  <span className='font-semibold'>Costo:</span> {benefit.cost}{' '}
                  token
                </div>
                <div>
                  <span className='font-semibold'>Disponibilidad:</span>{' '}
                  Inmediata
                </div>
              </div>
              {/* Acciones: Compartir y Favoritos */}
              <div className='flex gap-4 mt-2'>
                <button className='flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-purple-100 transition'>
                  <span className='material-icons'>share</span> Compartir
                </button>
                <button className='flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-pink-100 transition'>
                  <span className='material-icons'>favorite_border</span>{' '}
                  Favorito
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate(-1)}
          className='px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 transition'
        >
          Volver
        </button>

        <footer className='w-full py-6 text-center text-gray-400 text-sm bg-transparent mt-12'>
          © 2025 Jobby. Todos los derechos reservados.
        </footer>

        {/* Modal de canje */}
        <BenefitModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          benefit={benefit}
          onConfirm={handleConfirmBenefit}
        />
      </div>
    </div>
  );
};

export default BenefitDetail;
