import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { nav } from 'framer-motion/client'
 import PaginaDaIA from './Components/paginaDaIA'  
import { motion } from 'framer-motion'

 import {
  Menu,
  X,
  Heart,
  Calendar,
  Pill,
  BookOpen,
  Activity,
} from 'lucide-react'
  

 
// Animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


function Header() {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Definindo os itens de navegação centralizados
  const navItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Como Funciona', id: 'como-funciona' },
    { label: 'Depoimentos', id: 'depoimentos' },
    { label: 'Começar Agora', id: 'comecar-agora', isButton: true, onClick: () => handleNavClick('comecar-agora', true) },
  ];
  
  
 

  const handleNavClick = (id, isButton) => {
    setIsMenuOpen(false);
    if (isButton && id === 'comecar-agora') {
      navigate('/chat');
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a 
            href="#" 
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-blue-600 mr-2"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <span className="text-xl font-bold text-gray-900">Cuidar+</span>
          </a>
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleNavClick(item.id)}
              className={`${
                item.isButton 
                  ? 'px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
                  : 'text-gray-600 hover:text-blue-600 transition-colors'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            >
              {item.label}
            </motion.button>
          ))}
         
          </nav>
        
        <motion.button
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      
      {isMenuOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
        >
          <motion.div 
            className="container mx-auto px-4 flex flex-col space-y-4 py-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => handleNavClick(item.id)}
                className={`${
                  item.isButton 
                    ? 'px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block w-fit'
                    : 'text-gray-600 hover:text-blue-600 transition-colors py-2 text-left'
                }`}
                variants={fadeIn}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      )}
    </header>
  )
}


function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Monitore sua saúde física e mental em um só lugar
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Acompanhe sua saúde, gerencie consultas e medicações, registre suas
            emoções e planeje atividades saudáveis para uma vida mais
            equilibrada.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="#get-started"
              className="px-6 py-3 bg-blue-600 text-white rounded-md text-center
               hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border-1
               transition-all duration-200"
               
              whileTap={{ scale: 0.95 }}
            >
              Começar Gratuitamente
            </a>
            <a
              href="#how-it-works"
              className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md text-center hover:bg-blue-50 transition-colors"
            
              whileTap={{ scale: 0.95 }}
            >
              Saiba Mais
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Pessoa utilizando aplicativo de saúde em um dispositivo móvel"
            className="w-full h-auto rounded-lg shadow-xl"
             transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Monitoramento de Saúde',
      description: 'Acompanhe indicadores de saúde física e mental em um dashboard intuitivo e personalizado.',
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: 'Agenda de Consultas',
      description: 'Organize suas consultas médicas e receba lembretes para nunca perder um compromisso importante.',
    },
    {
      icon: <Pill className="h-8 w-8 text-blue-600" />,
      title: 'Lembretes de Medicação',
      description: 'Configure alertas personalizados para tomar seus medicamentos nos horários corretos.',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: 'Diário Emocional',
      description: 'Registre seus pensamentos e emoções diariamente para acompanhar sua saúde mental.',
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: 'Rastreamento de Humor',
      description: 'Visualize padrões de humor ao longo do tempo e identifique gatilhos emocionais.',
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Plano de Atividades Saudáveis',
      description: 'Crie e acompanhe metas de atividades que contribuem para seu bem-estar.',
    },
  ];
  
  return (
    <section id="recursos" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recursos Completos para Cuidar da Sua Saúde
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma oferece todas as ferramentas necessárias para
            monitorar e melhorar seu bem-estar físico e mental.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg border hover:border-blue-600 hover:border-1 border-gray-200 shadow-sm hover:shadow-md transition-all duration-150"
              variants={fadeIn}
             >
              <div className="mb-4 p-2 bg-blue-50 rounded-full w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Crie sua conta',
      description: 'Registre-se gratuitamente e configure seu perfil de saúde personalizado.',
    },
    {
      number: '02',
      title: 'Configure seus objetivos',
      description: 'Defina suas metas de saúde e bem-estar que deseja alcançar.',
    },
    {
      number: '03',
      title: 'Registre suas atividades',
      description: 'Acompanhe sua saúde diariamente com nossos recursos intuitivos.',
    },
    {
      number: '04',
      title: 'Visualize seu progresso',
      description: 'Acesse relatórios detalhados e veja sua evolução ao longo do tempo.',
    },
  ];
  
  return (
    <section id="como-funciona" className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Em apenas quatro passos simples, você pode começar a transformar sua
            saúde e bem-estar.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-lg border border-gray-200 h-full hover:border-1 hover:border-blue-600 transition-all duration-200">
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='transform translate-x-3'
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#2563EB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Este aplicativo transformou completamente como eu cuido da minha saúde. Nunca mais esqueci de tomar um medicamento!',
      name: 'Maria S.',
      title: 'Usuária há 8 meses',
    },
    {
      quote: 'O diário emocional me ajudou a identificar padrões no meu humor que eu nunca tinha percebido antes. Isso fez toda a diferença.',
      name: 'Carlos L.',
      title: 'Usuário há 1 ano',
    },
    {
      quote: 'Como médica, recomendo para todos os meus pacientes. A função de agendamento de consultas reduziu significativamente as faltas.',
      name: 'Dra. Ana P.',
      title: 'Médica Cardiologista',
    },
  ];
  
  return (
    <section id="depoimentos" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Nossos Usuários Dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Milhares de pessoas já estão transformando sua saúde com nossa
            plataforma.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-6 rounded-lg border border-blue-100"
              variants={fadeIn}
              
            >
              <svg
                className="h-8 w-8 text-blue-400 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <motion.footer 
      className="w-full bg-gray-900 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <p className='text-gray-400 text-center'>&copy; 2025 Cuidar+ . Todos os direitos reservados.</p>
      </div>
    </motion.footer>
  )
}
function BtnDeLogin() {
  return (
    <div>
      <button
        className='border-1 border-blue-600 px-5 py-1.5 text-blue-600 rounded-sm hover:bg-blue-50 transition-all duration-150'
        onclick="console.log('Botão clicado!');"
      >
        Login
      </button>
    </div>
  );
}

export function App() {
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Routes>
  <Route path='/chat' element={<PaginaDaIA />} />
</Routes>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App;
