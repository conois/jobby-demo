
import React from 'react';

interface Benefit {
  id: string;
  title: string;
  description: string;
  cost: number;
  category: string;
  image: string;
  categoryIcon: string;
}

interface BenefitModalProps {
  isOpen: boolean;
  onClose: () => void;
  benefit: Benefit | null;
  userTokens: number;
  onConfirm: () => void;
}

const BenefitModal: React.FC<BenefitModalProps> = ({
  isOpen,
  onClose,
  benefit,
  userTokens,
  onConfirm
}) => {
  if (!isOpen || !benefit) return null;

  const remainingTokens = userTokens - benefit.cost;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 animate-scale-in">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Estás a un paso de tu beneficio
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            ✕
          </button>
        </div>

        <div className="relative mb-6 rounded-xl overflow-hidden">
          <img
            src={benefit.image}
            alt={benefit.title}
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="bg-black/30 text-white text-xs px-2 py-1 rounded-full">
              {benefit.categoryIcon} {benefit.category}
            </span>
          </div>
          <div className="absolute bottom-3 left-3 text-white">
            <h3 className="font-semibold text-lg">{benefit.title}</h3>
            <p className="text-sm opacity-90">{benefit.description}</p>
          </div>
          <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm font-medium">
            💎 {benefit.cost}
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Tokens Disponibles</span>
            <span className="font-semibold">{userTokens}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Costo Beneficio</span>
            <span className="font-semibold text-red-500">-{benefit.cost}</span>
          </div>
          <hr />
          <div className="flex justify-between items-center bg-purple-50 p-3 rounded-lg">
            <span className="font-semibold text-purple-800">Tokens Restantes</span>
            <span className="font-bold text-purple-800 flex items-center gap-1">
              💎 {remainingTokens}
            </span>
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg mb-6 flex items-start gap-2">
          <span className="text-blue-500 text-sm">ℹ️</span>
          <p className="text-sm text-blue-700">
            Recibirás un correo con todos los detalles apenas confirmes el canje.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 border border-purple-300 text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            disabled={remainingTokens < 0}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium button-hover disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Canjear Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitModal;
