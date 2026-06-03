import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Alert from '../../components/ui/Alert'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'
import { useState } from 'react'

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  })
  const [alert, setAlert] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dados do formulário:', formData)
    setAlert({ type: 'success', message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' })
    setFormData({ nome: '', email: '', assunto: '', mensagem: '' })
    setTimeout(() => setAlert(null), 5000)
  }

  const informacoes = [
    { icone: <FiMail size={20} />, label: 'Email', valor: 'contato@labic.com.br' },
    { icone: <FiPhone size={20} />, label: 'Telefone', valor: '(79) 99999-8888' },
    { icone: <FiMapPin size={20} />, label: 'Endereço', valor: 'Av. Universidade, 1234 - Lagarto, SE' },
  ]

  const redes = [
    { icone: <FiLinkedin size={20} />, nome: 'LinkedIn', url: '#' },
    { icone: <FiTwitter size={20} />, nome: 'Twitter/X', url: '#' },
    { icone: <FiGithub size={20} />, nome: 'GitHub', url: '#' },
  ]

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 16px', boxSizing: 'border-box' }}>

      {/* HERO */}
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '90px 0', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: '36px', fontWeight: '700', color: '#1F1F1F', margin: '0 0 8px 0' }}>
            Fale Conosco
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: '600', color: 'rgb(43, 93, 250)', margin: '0 0 16px 0' }}>
            Entre em contato com o LABIC
          </p>
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '16px', lineHeight: '1.6', color: '#555555', margin: 0 }}>
            Estamos prontos para ouvir você. Preencha o formulário ou utilize nossos canais de comunicação direta.
          </p>
        </div>
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/contatosWEB.webp" 
            alt="Contato LABIC" 
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain' }}
          />
        </div>
      </section>

      {/* TÍTULO SEÇÃO */}
      <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '28px', fontWeight: '700', color: '#1F1F1F', textAlign: 'center', margin: '0 0 24px 0' }}>
        Contato
      </h2>

      {/* SEÇÃO PRINCIPAL - 2 COLUNAS */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px', padding: '0 0 90px 0', alignItems: 'start' }}>

        {/* COLUNA ESQUERDA - INFORMAÇÕES */}
        <div>
          <Card title="Informações de Contato">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {informacoes.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: 'rgb(43, 93, 250)' }}>{item.icone}</div>
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '600', color: '#555555', margin: '0 0 2px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '14px', color: '#1F1F1F', margin: 0 }}>
                      {item.valor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* REDES SOCIAIS */}
          <div style={{ marginTop: '24px' }}>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600', color: '#1F1F1F', margin: '0 0 16px 0' }}>
              Siga-nos
            </h3>
            <div style={{ display: 'flex', gap: '12px' }}>
              {redes.map((rede, index) => (
                <a key={index} href={rede.url} style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555555', textDecoration: 'none', transition: '0.2s' }}
                   onMouseEnter={(e) => { e.target.style.background = 'rgb(43, 93, 250)'; e.target.style.color = '#FFF' }}
                   onMouseLeave={(e) => { e.target.style.background = '#F3F4F6'; e.target.style.color = '#555555' }}>
                  {rede.icone}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA - FORMULÁRIO */}
        <Card title="Formulário de Contato">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input
              label="Nome Completo"
              name="nome"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
            />
            <Input
              label="Endereço de Email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              label="Assunto"
              name="assunto"
              placeholder="Assunto da mensagem"
              value={formData.assunto}
              onChange={handleChange}
              required
            />
            <Input
              label="Sua Mensagem"
              name="mensagem"
              type="textarea"
              placeholder="Digite sua mensagem..."
              value={formData.mensagem}
              onChange={handleChange}
              required
            />
            <Button variant="primary" type="submit" size="lg" style={{ width: '100%' }}>
              Enviar Mensagem
            </Button>
          </form>
        </Card>

      </section>

      {/* ALERT */}
      {alert && (
        <div style={{ marginBottom: '24px' }}>
          <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />
        </div>
      )}

    </div>
  )
}

export default Contato
