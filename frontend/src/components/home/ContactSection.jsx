
import Input from '../ui/Input';   // Utilizando seu componente oficial
import Button from '../ui/Button'; // Utilizando seu componente oficial

function ContactSection({ emailContato, setEmailContato, onSubmit }) {
  return (
    <section style={{ padding: '90px 0', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '700', color: '#1F1F1F', margin: '0 0 32px 0' }}>
          Contato Rápido
        </h2>
        <form onSubmit={onSubmit} style={{ display: 'flex', gap: '12px', marginBottom: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '250px', maxWidth: '350px' }}>
            <Input 
              type="email" 
              placeholder="Email" 
              value={emailContato}
              onChange={(e) => setEmailContato(e.target.value)}
              required
            />
          </div>
          <Button variant="primary" type="submit">Botão do contato</Button>
        </form>
        <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '14px', color: '#555555', margin: 0 }}>
          Address, Ruschima 62, 3, Map do São offline
        </p>
      </div>
    </section>
  );
}

export default ContactSection;