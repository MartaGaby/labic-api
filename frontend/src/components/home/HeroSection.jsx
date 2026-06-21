import Button from '../ui/Button'; // Utilizando seu componente oficial

function HeroSection({ onNavigate }) {
  return (
    <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '90px 0', gap: '40px', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '300px' }}>
        <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: '700', lineHeight: '1.2', color: '#1F1F1F', margin: '0 0 24px 0' }}>
          Inovação, Pesquisa Acadêmica e Criatividade em Tecnologia.
        </h1>
        <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '16px', fontWeight: '400', lineHeight: '1.6', color: '#555555', margin: '0 0 32px 0' }}>
          Descubra o futuro no LABIC, onde a inovação acadêmica encontra soluções tecnológicas avançadas para desafios globais.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Button variant="primary" onClick={() => onNavigate('/pesquisa')}>
            Conhecer Projetos
          </Button>
          <Button variant="secondary" onClick={() => onNavigate('/sobre')}>
            Sobre o LABIC
          </Button>
        </div>
      </div>
      <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
        {/* Tag de imagem padrão dos assets apontando para a logo oficial em WebP */}
        <img 
          src="/src/assets/images/labicLogo.webp" 
          alt="Logo LABIC" 
          style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} 
        />
      </div>
    </section>
  );
}

export default HeroSection;