
import Card from '../ui/Card'; // Utilizando seu componente oficial

function ResearchSection({ linhasPesquisa, onNavigate }) {
  return (
    <section style={{ padding: '90px 0' }}>
      <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '700', color: '#1F1F1F', textAlign: 'center', margin: '0 0 48px 0' }}>
        Linhas de Pesquisa
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {linhasPesquisa.map((linha) => (
          <Card key={linha.id} hoverEffect onClick={() => onNavigate('/pesquisa')} style={{ textAlign: 'center', cursor: 'pointer' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>{linha.icone}</div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: '600', color: '#1F1F1F', margin: '0 0 12px 0' }}>
              {linha.titulo}
            </h3>
            <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#555555', margin: 0 }}>
              {linha.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ResearchSection;