export interface BenefitData {
  id: string;
  title: string;
  description: string;
  cost: number;
  category: string;
  image: string;
  categoryIcon: string;
}

export const benefits: BenefitData[] = [
  {
    id: '1',
    title: 'Suscripción Pase de batalla',
    description: 'Accede a recompensas exclusivas y desafíos gamer cada mes.',
    cost: 1,
    category: 'Gamer',
    categoryIcon: '🎮',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop',
  },
  {
    id: '2',
    title: 'Tour en Bicicleta',
    description:
      'Recorre la ciudad en dos ruedas y vive una experiencia deportiva única.',
    cost: 1,
    category: 'Deporte',
    categoryIcon: '🚴',
    image:
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=250&fit=crop',
  },
  {
    id: '3',
    title: 'Asesoría Viajes',
    description:
      'Planifica tu próximo destino con expertos en lifestyle y turismo.',
    cost: 1,
    category: 'Lifestyle',
    categoryIcon: '✈️',
    image:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop',
  },
  {
    id: '4',
    title: 'Sesión Salud Mental Niños y Adultos',
    description:
      'Apoyo profesional para el bienestar emocional de toda la familia.',
    cost: 1,
    category: 'Autocuidado',
    categoryIcon: '🧠',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=250&fit=crop',
  },
  {
    id: '5',
    title: 'Entrada Museo Interactivo Mirador',
    description:
      'Vive la ciencia y la tecnología en familia con esta entrada al MIM.',
    cost: 1,
    category: 'Panoramas y Familia',
    categoryIcon: '🏛️',
    image:
      'https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=250&fit=crop',
  },
  {
    id: '6',
    title: 'Rally Karting',
    description:
      'Siente la velocidad y la adrenalina en una pista de karting profesional.',
    cost: 1,
    category: 'Deporte',
    categoryIcon: '🏎️',
    image:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=250&fit=crop',
  },
  {
    id: '7',
    title: 'Go Karting',
    description:
      'Compite con tus amigos en una carrera de go karts llena de emoción.',
    cost: 1,
    category: 'Deporte',
    categoryIcon: '🏁',
    image:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=250&fit=crop',
  },
  {
    id: '8',
    title: 'Speerpark',
    description:
      'Disfruta de actividades deportivas y recreativas al aire libre.',
    cost: 1,
    category: 'Deporte',
    categoryIcon: '🏃',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
  },
  {
    id: '9',
    title: 'Plan Entrenamiento Mensual',
    description:
      'Recibe una rutina personalizada para alcanzar tus metas deportivas.',
    cost: 1,
    category: 'Deporte',
    categoryIcon: '💪',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop',
  },
  {
    id: '10',
    title: 'Caja Maifud Fruras y Verduras',
    description:
      'Recibe en tu casa una selección fresca de frutas y verduras de temporada.',
    cost: 1,
    category: 'Lifestyle',
    categoryIcon: '🥬',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=250&fit=crop',
  },
  {
    id: '11',
    title: 'Pack 5 Shots Wake Up KEFFI',
    description:
      'Energía instantánea con este pack de shots naturales y saludables.',
    cost: 1,
    category: 'Lifestyle',
    categoryIcon: '🥤',
    image:
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=250&fit=crop',
  },
  {
    id: '12',
    title: 'Libro Pasaporte Literario',
    description:
      'Viaja por el mundo a través de la lectura con este libro especial.',
    cost: 1,
    category: 'Cultura y Artes',
    categoryIcon: '📚',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop',
  },
  {
    id: '13',
    title: 'Box Figuras Yeso',
    description:
      'Crea y pinta tus propias figuras de yeso, ideal para toda la familia.',
    cost: 1,
    category: 'Cultura y Artes',
    categoryIcon: '🎨',
    image:
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop',
  },
  {
    id: '14',
    title: 'Pack Café Adictos',
    description:
      'Descubre nuevos sabores con este pack de cafés seleccionados.',
    cost: 1,
    category: 'Lifestyle',
    categoryIcon: '☕',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=250&fit=crop',
  },
  {
    id: '15',
    title: 'Pack Té Adictos',
    description: 'Variedad de tés premium para los amantes de las infusiones.',
    cost: 1,
    category: 'Lifestyle',
    categoryIcon: '🫖',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop',
  },
  {
    id: '16',
    title: 'Pack Chocolates',
    description: 'Dulces momentos con una selección de chocolates artesanales.',
    cost: 1,
    category: 'Lifestyle',
    categoryIcon: '🍫',
    image:
      'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=250&fit=crop',
  },
  {
    id: '17',
    title: 'Eleva tu inglés',
    description: 'Mejora tu nivel de inglés con clases y recursos online.',
    cost: 1,
    category: 'Vida Profesional',
    categoryIcon: '📖',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
  },
  {
    id: '18',
    title: 'Coaching de carrera',
    description: 'Impulsa tu desarrollo profesional con sesiones de coaching.',
    cost: 1,
    category: 'Vida Profesional',
    categoryIcon: '💼',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
  },
  {
    id: '19',
    title: 'Caja de cremas y maquillaje',
    description:
      'Cuida tu piel y luce increíble con productos de belleza seleccionados.',
    cost: 1,
    category: 'Autocuidado',
    categoryIcon: '💄',
    image:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=250&fit=crop',
  },
  {
    id: '20',
    title: 'Ramen Ryoma',
    description: 'Disfruta de un auténtico ramen japonés en tu casa.',
    cost: 1,
    category: 'Comidas del mundo',
    categoryIcon: '🍜',
    image:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=250&fit=crop',
  },
  {
    id: '21',
    title: 'Mirai Food',
    description:
      'Comida japonesa innovadora y deliciosa para sorprender tu paladar.',
    cost: 1,
    category: 'Comidas del mundo',
    categoryIcon: '🍱',
    image:
      'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=250&fit=crop',
  },
  {
    id: '22',
    title: 'Loquissima Pasta',
    description: 'Pasta fresca y salsas artesanales directo a tu mesa.',
    cost: 1,
    category: 'Comidas del mundo',
    categoryIcon: '🍝',
    image:
      'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=250&fit=crop',
  },
  {
    id: '23',
    title: 'Tijuana Tacos',
    description: 'Tacos mexicanos auténticos, llenos de sabor y tradición.',
    cost: 1,
    category: 'Comidas del mundo',
    categoryIcon: '🌮',
    image:
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=250&fit=crop',
  },
  {
    id: '24',
    title: 'Rishtedar Hindú',
    description: 'Sabores intensos y especias de la India en tu plato.',
    cost: 1,
    category: 'Comidas del mundo',
    categoryIcon: '🍛',
    image:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=250&fit=crop',
  },
  {
    id: '25',
    title: 'Gohan a domicilio',
    description: 'Gohan fresco y delicioso entregado en la puerta de tu casa.',
    cost: 1,
    category: 'Comidas del mundo',
    categoryIcon: '🍚',
    image:
      'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=250&fit=crop',
  },
  {
    id: '26',
    title: 'Burger a domicilio',
    description: 'Hamburguesas gourmet listas para disfrutar en casa.',
    cost: 1,
    category: 'Comidas del mundo',
    categoryIcon: '🍔',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=250&fit=crop',
  },
  {
    id: '27',
    title: 'Sandwich a domicilio',
    description: 'Sandwiches variados y sabrosos para todos los gustos.',
    cost: 1,
    category: 'Comidas del mundo',
    categoryIcon: '🥪',
    image:
      'https://images.unsplash.com/photo-1528735602786-485c3b5c4c3d?w=400&h=250&fit=crop',
  },
  {
    id: '28',
    title: 'Comida China a domicilio',
    description: 'Platos chinos clásicos y modernos, directo a tu hogar.',
    cost: 1,
    category: 'Comidas del mundo',
    categoryIcon: '🥡',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop',
  },
  {
    id: '29',
    title: 'Manicure Esmaltado Tradicional',
    description:
      'Manicure profesional con esmaltado tradicional y cuidado de uñas.',
    cost: 1,
    category: 'Autocuidado',
    categoryIcon: '💅',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=250&fit=crop',
  },
  {
    id: '30',
    title: 'Manicure Infantil',
    description: 'Manicure divertida y segura para los más pequeños.',
    cost: 1,
    category: 'Autocuidado',
    categoryIcon: '👶',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=250&fit=crop',
  },
  {
    id: '31',
    title: 'Perfilación de cejas',
    description: 'Define y resalta tu mirada con una perfilación profesional.',
    cost: 1,
    category: 'Autocuidado',
    categoryIcon: '✨',
    image:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=250&fit=crop',
  },
  {
    id: '32',
    title: 'Car washing',
    description:
      'Deja tu auto impecable con un servicio de lavado profesional.',
    cost: 1,
    category: 'Mundo tuercas',
    categoryIcon: '🚗',
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop',
  },
  {
    id: '33',
    title: 'Caja sorpresa para tu mascota',
    description: 'Sorprende a tu mascota con juguetes y snacks variados.',
    cost: 1,
    category: 'Mascotas',
    categoryIcon: '🐕',
    image:
      'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=250&fit=crop',
  },
  {
    id: '34',
    title: 'Spa de mascota',
    description: 'Relaja y consiente a tu mascota con un spa completo.',
    cost: 1,
    category: 'Mascotas',
    categoryIcon: '🐱',
    image:
      'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400&h=250&fit=crop',
  },
  {
    id: '35',
    title: 'Sesión con nutricionista',
    description: 'Mejora tu alimentación con una consulta personalizada.',
    cost: 1,
    category: 'Autocuidado',
    categoryIcon: '🥗',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop',
  },
  {
    id: '36',
    title: 'Jumper Park Santiago',
    description:
      'Diversión asegurada saltando en trampolines para toda la familia.',
    cost: 1,
    category: 'Panoramas y Familia',
    categoryIcon: '🎪',
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
  },
  {
    id: '37',
    title: 'Trampolin Park Santiago',
    description: 'Salta y juega en un parque de trampolines único en Santiago.',
    cost: 1,
    category: 'Panoramas y Familia',
    categoryIcon: '🎯',
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
  },
  {
    id: '38',
    title: 'Bar On Tap',
    description:
      'Disfruta de cervezas artesanales y buena compañía en Bar On Tap.',
    cost: 1,
    category: 'Cervezas y Amigos',
    categoryIcon: '🍺',
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=250&fit=crop',
  },
  {
    id: '39',
    title: 'Bar y Vuelvo',
    description:
      'El mejor ambiente para compartir con amigos y probar nuevas cervezas.',
    cost: 1,
    category: 'Cervezas y Amigos',
    categoryIcon: '🍻',
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=250&fit=crop',
  },
  {
    id: '40',
    title: 'Bar ChaChan',
    description:
      'Un bar diferente para vivir experiencias únicas con tus amigos.',
    cost: 1,
    category: 'Cervezas y Amigos',
    categoryIcon: '🥂',
    image:
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=250&fit=crop',
  },
  {
    id: '41',
    title: 'Inicia tu viaje en la fotografía',
    description:
      'Aprende fotografía desde cero con clases prácticas y creativas.',
    cost: 1,
    category: 'Hobbies y Pasatiempos',
    categoryIcon: '📸',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=250&fit=crop',
  },
  {
    id: '42',
    title: 'Comienza tu viaje en el dibujo',
    description:
      'Descubre tu talento artístico con clases de dibujo para todos.',
    cost: 1,
    category: 'Hobbies y Pasatiempos',
    categoryIcon: '✏️',
    image:
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop',
  },
  {
    id: '43',
    title: 'Planetario Santiago',
    description:
      'Explora el universo y las estrellas en el Planetario de Santiago.',
    cost: 1,
    category: 'Cultura y Arte',
    categoryIcon: '🌌',
    image:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=250&fit=crop',
  },
  {
    id: '44',
    title: 'Teatro Matucana 100',
    description:
      'Vive el teatro y la cultura en uno de los espacios más icónicos.',
    cost: 1,
    category: 'Cultura y Arte',
    categoryIcon: '🎭',
    image:
      'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=250&fit=crop',
  },
  {
    id: '45',
    title: 'Eventos del mes',
    description:
      'No te pierdas los mejores eventos culturales y artísticos del mes.',
    cost: 1,
    category: 'Cultura y Arte',
    categoryIcon: '🎪',
    image:
      'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=250&fit=crop',
  },
];
