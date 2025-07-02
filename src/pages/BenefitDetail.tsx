import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BenefitModal from '../components/BenefitModal';
import { toast } from 'sonner';

// Simulación de datos (puedes reemplazar por fetch o contexto global)
const benefits = [
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
  // ...otros beneficios
];

const BenefitDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const benefit = benefits.find(b => b.id === id);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const userTokens = 250; // Simulado, puedes reemplazarlo por el real

  const handleConfirmBenefit = () => {
    toast.success(`¡${benefit.title} canjeado exitosamente!`, {
      description: 'Recibirás un correo con los detalles en breve.',
      position: 'top-center',
      style: { background: '#22c55e', color: 'white' },
    });
    setIsModalOpen(false);
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
    <div className='w-full px-20 py-10'>
      <header className='border-purple-100 sticky top-0 z-50 mb-8'>
        <h1 className='text-xl font-bold text-gray-800'>Jobby</h1>
      </header>
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
          <p className='text-lg text-gray-700 mb-4'>
            Disfruta de un mes completo de acceso ilimitado a Sport Life, uno de
            los gimnasios más reconocidos y modernos de la ciudad. Con esta
            membresía, podrás entrenar en un ambiente seguro, cómodo y
            motivador, rodeado de profesionales y personas que, como tú, buscan
            mejorar su bienestar físico y mental.
          </p>
          <h3 className='text-xl font-semibold mt-6 mb-2'>
            Horario de Funcionamiento
          </h3>
          <ul className='mb-4 text-gray-700'>
            <li>Lunes a Viernes: 06:00 a 23:00 hrs</li>
            <li>Sábados: 08:00 a 20:00 hrs</li>
            <li>Domingos y festivos: 09:00 a 18:00 hrs</li>
          </ul>
          <h3 className='text-xl font-semibold mt-6 mb-2'>
            Características de las Instalaciones
          </h3>
          <ul className='list-disc pl-6 mb-4 text-gray-700'>
            <li>
              Zona de Cardio: Equipos de última generación, incluyendo
              trotadoras, bicicletas estáticas, elípticas y máquinas de remo.
            </li>
            <li>
              Área de Pesas y Musculación: Amplio espacio con mancuernas,
              barras, discos y máquinas guiadas para todos los niveles.
            </li>
            <li>
              Salas de Clases Grupales: Yoga, pilates, spinning, zumba, body
              pump, HIIT y más, con instructores certificados.
            </li>
            <li>
              Piscina Climatizada: Ideal para natación libre, clases de
              aquafitness y relajación post-entrenamiento.
            </li>
            <li>
              Zona de Relajación: Sauna, baño de vapor y jacuzzi para una
              recuperación óptima.
            </li>
            <li>
              Vestidores y Duchas: Espacios limpios, seguros y con lockers
              individuales.
            </li>
            <li>
              Cafetería y Zona de Descanso: Para que puedas reponer energías
              después de tu entrenamiento.
            </li>
            <li>Estacionamiento Gratuito: Para tu comodidad y seguridad.</li>
          </ul>
          <h3 className='text-xl font-semibold mt-6 mb-2'>
            Beneficios Adicionales
          </h3>
          <ul className='list-disc pl-6 mb-4 text-gray-700'>
            <li>Evaluación física inicial gratuita.</li>
            <li>Rutina personalizada según tus objetivos.</li>
            <li>
              Acceso a la app Sport Life para seguimiento de entrenamientos y
              reservas de clases.
            </li>
            <li>
              Descuentos en productos y suplementos en la tienda del gimnasio.
            </li>
          </ul>
        </div>
        {/* Sección derecha: Box de acciones */}
        <div className='w-2/5'>
          <div className='bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6 sticky top-24'>
            {/* Evaluación */}
            <div className='flex items-center gap-2'>
              <span className='text-yellow-400 text-2xl'>★★★★★</span>
              <span className='text-lg font-medium text-gray-700'>(4.5/5)</span>
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
                <span className='font-semibold'>Dirección:</span> Av. Ejemplo
                1234, Santiago
              </div>
              <div className='mb-2'>
                <span className='font-semibold'>Contacto:</span> +56 9 1234 5678
              </div>
              <div>
                <span className='font-semibold'>Sitio web:</span>{' '}
                <a
                  href='https://sportlife.cl'
                  className='text-purple-600 underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  sportlife.cl
                </a>
              </div>
            </div>
            {/* Acciones: Compartir y Favoritos */}
            <div className='flex gap-4 mt-2'>
              <button className='flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-purple-100 transition'>
                <span className='material-icons'>share</span> Compartir
              </button>
              <button className='flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-pink-100 transition'>
                <span className='material-icons'>favorite_border</span> Favorito
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
        userTokens={userTokens}
        onConfirm={handleConfirmBenefit}
      />
    </div>
  );
};

export default BenefitDetail;
