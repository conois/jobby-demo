import React, { useState } from 'react';
import { BenefitData } from '../data/benefits';
import { useTokens } from '../context/TokensContext';

interface BenefitModalProps {
  isOpen: boolean;
  onClose: () => void;
  benefit: BenefitData | null;
  onConfirm: () => void;
}

const BenefitModal: React.FC<BenefitModalProps> = ({
  isOpen,
  onClose,
  benefit,
  onConfirm,
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { userTokens } = useTokens();

  if (!isOpen || !benefit) return null;

  const remainingTokens = userTokens - benefit.cost;

  const handleConfirm = () => {
    setIsConfirmed(true);
    onConfirm();
  };

  const handleClose = () => {
    setIsConfirmed(false);
    onClose();
  };

  const handleSuccessClose = () => {
    setIsConfirmed(false);
    onClose();
  };

  // Estado de confirmación exitosa
  if (isConfirmed) {
    return (
      <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in'>
        <div className='bg-white rounded-2xl w-6/12 p-6 animate-scale-in'>
          <div className='text-center'>
            {/* Ícono de éxito */}
            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-3xl'>✅</span>
            </div>

            {/* Título de éxito */}
            <h2 className='text-xl font-semibold text-gray-800 mb-2'>
              ¡Canje Exitoso!
            </h2>

            {/* Mensaje de confirmación */}
            <p className='text-gray-600 mb-6'>
              <span className='font-semibold text-purple-600'>
                {benefit.title}
              </span>{' '}
              ha sido canjeado exitosamente.
            </p>

            {/* Información adicional */}
            <div className='bg-green-50 p-4 rounded-lg mb-6'>
              <div className='flex items-center gap-2 text-green-700'>
                <span className='text-sm'>📧</span>
                <p className='text-sm'>
                  Recibirás un correo con todos los detalles en breve.
                </p>
              </div>
            </div>

            {/* Tokens restantes */}
            <div className='bg-purple-50 p-3 rounded-lg mb-6'>
              <div className='flex justify-between items-center'>
                <span className='font-semibold text-purple-800'>
                  Tokens Restantes
                </span>
                <span className='font-bold text-purple-800 flex items-center gap-1'>
                  💎 {userTokens}
                </span>
              </div>
            </div>

            {/* Botón para cerrar */}
            <button
              onClick={handleSuccessClose}
              className='w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:scale-105 transition-all'
            >
              ¡Perfecto!
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Estado normal del modal
  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in'>
      <div className='bg-white rounded-2xl w-6/12 p-6 animate-scale-in'>
        <div className='flex justify-between items-start mb-4'>
          <h2 className='text-lg font-semibold text-gray-800'>
            Estás a un paso de tu beneficio
          </h2>
          <button
            onClick={handleClose}
            className='text-gray-400 hover:text-gray-600 transition-colors p-1'
          >
            ✕
          </button>
        </div>

        <div className='relative mb-6 rounded-xl overflow-hidden'>
          <img
            src={benefit.image}
            alt={benefit.title}
            className='w-full h-32 object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
          <div className='absolute bottom-3 left-3 text-white'>
            <h3 className='font-semibold text-lg'>{benefit.title}</h3>
            <p className='text-sm opacity-90'>{benefit.description}</p>
          </div>
        </div>

        <div className='space-y-3 mb-6'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-600'>Tokens Disponibles</span>
            <span className='font-semibold'>{userTokens}</span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-gray-600'>Costo Beneficio</span>
            <span className='font-semibold text-red-500'>-{benefit.cost}</span>
          </div>
          <hr />
          <div className='flex justify-between items-center bg-purple-50 p-3 rounded-lg'>
            <span className='font-semibold text-purple-800'>
              Tokens Restantes
            </span>
            <span className='font-bold text-purple-800 flex items-center gap-1'>
              💎 {remainingTokens}
            </span>
          </div>
        </div>

        <div className='bg-blue-50 p-3 rounded-lg mb-6 flex items-start gap-2'>
          <span className='text-blue-500 text-sm'>ℹ️</span>
          <p className='text-sm text-blue-700'>
            Recibirás un correo con todos los detalles apenas confirmes el
            canje.
          </p>
        </div>

        <div className='flex gap-3'>
          <button
            onClick={handleClose}
            className='flex-1 py-3 px-4 border border-purple-300 text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition-colors'
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            disabled={remainingTokens < 0}
            className='flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium button-hover disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Canjear Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitModal;
