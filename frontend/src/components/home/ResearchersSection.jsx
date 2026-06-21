
import Card from '../ui/Card'; // Utilizando seu componente oficial

function ResearchersSection({ pesquisadores, onNavigate }) {
  return (
    <section style={{ padding: '90px 0' }}>
      <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '700', color: '#1F1F1F', textAlign: 'center', margin: '0 0 48px 0' }}>
        Pesquisadores
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px' }}>
        {pesquisadores.map((p) => (
          <Card key={p.id} onClick={() => onNavigate('/sobre')} style={{ textAlign: 'center', cursor: 'pointer' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#E5E7EB', margin: '0 auto 16px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF', fontSize: '32px' }}>
              👤
            </div>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600', color: '#1F1F1F', margin: '0 0 4px 0' }}>
              {p.nome}
            </h3>
            <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '12px', color: '#555555', margin: 0 }}>
              {p.area}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ResearchersSection;