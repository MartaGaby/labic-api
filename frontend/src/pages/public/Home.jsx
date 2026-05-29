import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HeroSection from '../../components/home/HeroSection';
import AboutSection from '../../components/home/AboutSection';
import ResearchSection from '../../components/home/ResearchSection';
import ProjectsSection from '../../components/home/ProjectsSection';
import ResearchersSection from '../../components/home/ResearchersSection';
import ContactSection from '../../components/home/ContactSection';

const dadosLinhasPesquisa = [
  { id: 1, titulo: 'Inteligência Artificial & Dados', desc: 'Pesquisas em machine learning, processamento de dados e IA.', icone: '🧠' },
  { id: 2, titulo: 'Prototipagem Rápida & Impressão 3D', desc: 'Desenvolvimento de soluções com manufatura aditiva.', icone: '🖨️' },
  { id: 3, titulo: 'Sistemas & Tecnologias Emergentes', desc: 'Novas abordagens em IoT, software e hardware inovador.', icone: '🌐' }
];

const dadosProjetos = [
  { id: 1, titulo: 'Deep Learning Model', desc: 'Pesquisas em machine learning, processamento de dados.', status: 'Ativo', variant: 'success' },
  { id: 2, titulo: 'Smart 3D Printer Controller', desc: 'Desenvolvimento de solução com impressora 3D.', status: 'Em Execução', variant: 'warning' },
  { id: 3, titulo: 'Community Drone Mapping', desc: 'Mapeamento com drones e softwares sob medida.', status: 'Ativo', variant: 'success' },
  { id: 4, titulo: 'Educational VR Platform', desc: 'Plataforma educacional em Realidade Virtual.', status: 'Em Execução', variant: 'warning' }
];

const dadosPesquisadores = [
  { id: 1, nome: 'Dr. Ana Silva', area: 'Machine Learning' },
  { id: 2, nome: 'MSc. João Gomes', area: 'Industrial IoT' },
  { id: 3, nome: 'Engª Carla Dias', area: 'Machine Learning' },
  { id: 4, nome: 'Engº Carlos Dias', area: 'Robotics' },
  { id: 5, nome: 'MSc. João Gomes', area: 'Industrial IoT' },
  { id: 6, nome: 'Engª Carla Dias', area: 'Robotics' }
];

function Home() {
  const navigate = useNavigate();

  const [linhasPesquisa] = useState(dadosLinhasPesquisa);
  const [projetos] = useState(dadosProjetos);
  const [pesquisadores] = useState(dadosPesquisadores);
  const [emailContato, setEmailContato] = useState('');

  const handleContatoSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando e-mail de contato para o banco de dados:', emailContato);
    setEmailContato('');
  };

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 16px', boxSizing: 'border-box' }}>
      <HeroSection onNavigate={navigate} />
      
      <AboutSection />
      
      <ResearchSection linhasPesquisa={linhasPesquisa} onNavigate={navigate} />
      
      <ProjectsSection projetos={projetos} onNavigate={navigate} />
      
      <ResearchersSection pesquisadores={pesquisadores} onNavigate={navigate} />
      
      <ContactSection emailContato={emailContato} setEmailContato={setEmailContato} onSubmit={handleContatoSubmit} />
    </div>
  );
}

export default Home;