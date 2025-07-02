import React from 'react';

interface HeaderProps {
  tokens: number;
  onTabChange: (tab: string) => void;
  activeTab: string;
}

const Header: React.FC<HeaderProps> = ({ tokens, onTabChange, activeTab }) => {
  return (
    <header className='w-full bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50'>
      <div className='mx-auto w-10/12 py-3'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-xl font-bold text-gray-800'>Jobby</h1>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-full'>
              <span className='text-sm font-medium'>💎 {tokens} Tokens</span>
            </div>
            <span
              className='material-icons rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
              style={{ fontSize: 32, padding: 2 }}
            >
              account_circle
            </span>
          </div>
        </div>

        <div className='w-full flex justify-center'>
          <nav className='flex gap-1 bg-gray-100 p-1 rounded-lg lg:w-1/2 w-full'>
            <button
              onClick={() => onTabChange('beneficios')}
              className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'beneficios'
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-white/50'
              }`}
            >
              ✨ Beneficios
            </button>
            <button
              onClick={() => onTabChange('desafios')}
              className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'desafios'
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-white/50'
              }`}
            >
              🎯 Desafíos
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
