
import Card from '../ui/Card';   // Utilizando seu componente oficial
import Badge from '../ui/Badge'; // Utilizando seu componente oficial

function ProjectsSection({ projetos, onNavigate }) {
  return (
    <section style={{ padding: '90px 0' }}>
      <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '700', color: '#1F1F1F', textAlign: 'center', margin: '0 0 48px 0' }}>
        Projetos em Destaque
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
        {projetos.map((projeto) => (
          <Card key={projeto.id} hoverEffect onClick={() => onNavigate('/pesquisa')} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '180px', cursor: 'pointer' }}>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1F1F1F', margin: '0 0 8px 0' }}>
                {projeto.titulo}
              </h3>
              <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '13px', lineHeight: '1.5', color: '#555555', margin: '0 0 16px 0' }}>
                {projeto.desc}
              </p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <Badge variant={projeto.variant}>{projeto.status}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;