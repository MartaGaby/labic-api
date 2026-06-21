

function AboutSection() {
  return (
    <section style={{ padding: '90px 0', textAlign: 'center', borderTop: '1px solid #E5E7EB' }}>
      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: 'rgb(43, 93, 250)', display: 'block', marginBottom: '8px' }}>
        Sobre Resumido
      </span>
      <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '700', color: '#1F1F1F', margin: '0 0 16px 0' }}>
        Sobre o LABIC
      </h2>
      <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '16px', lineHeight: '1.6', color: '#555555', maxWidth: '720px', margin: '0 auto' }}>
        Somos um laboratory focado no desenvolvimento tecnológico e na gestão de pesquisas. Nossa missão é integrar inovação à prática acadêmica.
      </p>
    </section>
  );
}

export default AboutSection;