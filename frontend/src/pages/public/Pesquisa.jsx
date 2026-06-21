import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Pesquisa() {
  const navigate = useNavigate()
  const [emailContato, setEmailContato] = useState('')

  const linhasPesquisa = [
    {
      id: 1,
      titulo: 'Inteligência Artificial e Dados',
      descricao: 'Pesquisas em machine learning, processamento de dados e IA aplicada a problemas reais.',
      icone: '🧠',
      projetos: ['Deep Learning para Diagnóstico', 'Análise Preditiva de Dados', 'Chatbot Inteligente']
    },
    {
      id: 2,
      titulo: 'Prototipagem Rápida e Impressão 3D',
      descricao: 'Desenvolvimento de soluções com manufatura aditiva e prototipagem rápida.',
      icone: '🖨️',
      projetos: ['Prótese Impressa em 3D', 'Drone Customizado', 'Módulo de Prototipagem']
    },
    {
      id: 3,
      titulo: 'Sistemas e Tecnologias Emergentes',
      descricao: 'Novas abordagens em IoT, realidade virtual e hardware inovador.',
      icone: '🌐',
      projetos: ['Plataforma IoT Educacional', 'VR para Treinamento', 'Sensor Wearable']
    }
  ]

  const equipe = [
    { nome: 'Dr. Carlos Mendes', funcao: 'Coordenador de IA' },
    { nome: 'MSc. Julia Torres', funcao: 'Especialista em Dados' },
    { nome: 'Eng. Rafael Costa', funcao: 'Líder de Prototipagem' },
    { nome: 'Prof. Lucas Almeida', funcao: 'Pesquisador em IoT' },
    { nome: 'Dra. Fernanda Lima', funcao: 'Analista de Sistemas' },
    { nome: 'MSc. Thiago Rocha', funcao: 'Desenvolvedor VR' },
  ]

  const handleContatoSubmit = (e) => {
    e.preventDefault()
    console.log('Enviando e-mail:', emailContato)
    setEmailContato('')
  }

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 16px', boxSizing: 'border-box' }}>

      {/* HEADER */}
      <section style={{ padding: '90px 0', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: '700', color: '#1F1F1F', margin: '0 0 16px 0' }}>
          Áreas de Atuação e Linhas de Pesquisa
        </h1>
        <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '16px', lineHeight: '1.6', color: '#555555', maxWidth: '720px', margin: '0 auto 32px auto' }}>
          Conheça os campos de exploração onde o LABIC gera conhecimento e inovação.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Button variant="primary" onClick={() => navigate('/dashboard/projetos')}>
            Conhecer Projetos
          </Button>
          <Button variant="outline" onClick={() => navigate('/sobre')}>
            Sobre o LABIC
          </Button>
        </div>
      </section>

      {/* SOBRE O LABIC */}
      <section style={{ padding: '0 0 90px 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '700', color: '#1F1F1F', margin: '0 0 16px 0' }}>
          Sobre o LABIC
        </h2>
        <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '16px', lineHeight: '1.6', color: '#555555', maxWidth: '720px', margin: '0 auto' }}>
          O Laboratório de Inovação e Criatividade (LABIC) é um espaço dedicado à pesquisa, 
          ao desenvolvimento tecnológico e à inovação. Atuamos em múltiplas frentes do conhecimento, 
          unindo academia e mercado para criar soluções que transformam a sociedade.
        </p>
      </section>

      {/* LINHAS DE PESQUISA */}
      <section style={{ padding: '0 0 90px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {linhasPesquisa.map((linha) => (
            <Card key={linha.id} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{linha.icone}</div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: '600', color: '#1F1F1F', margin: '0 0 12px 0' }}>
                {linha.titulo}
              </h3>
              <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#555555', margin: '0 0 20px 0' }}>
                {linha.descricao}
              </p>
              <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '16px' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: '600', color: '#1F1F1F', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Projetos Relacionados
                </p>
                {linha.projetos.map((projeto, index) => (
                  <Badge key={index} variant="primary" style={{ margin: '4px', display: 'inline-block' }}>
                    {projeto}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

            {/* EQUIPE — estilo igual ao da Home */}
      <section style={{ padding: '0 0 90px 0' }}>
        <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '700', color: '#1F1F1F', textAlign: 'center', margin: '0 0 8px 0' }}>
          Nossa Equipe
        </h2>
        <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '14px', color: '#555555', textAlign: 'center', margin: '0 0 48px 0' }}>
          Conheça os profissionais que fazem o LABIC acontecer
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px' }}>
          {equipe.map((membro, index) => (
            <Card key={index} style={{ textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#E5E7EB', margin: '0 auto 16px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF', fontSize: '32px' }}>
                👤
              </div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600', color: '#1F1F1F', margin: '0 0 4px 0' }}>
                {membro.nome}
              </h3>
              <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '12px', color: '#555555', margin: 0 }}>
                {membro.funcao}
              </p>
            </Card>
          ))}
        </div>
      </section>


      {/* CONTATO RÁPIDO */}
      <section style={{ padding: '0 0 90px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '700', color: '#1F1F1F', margin: '0 0 32px 0' }}>
            Contato Rápido
          </h2>
          <form onSubmit={handleContatoSubmit} style={{ display: 'flex', gap: '12px', marginBottom: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '250px', maxWidth: '350px' }}>
              <Input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                value={emailContato}
                onChange={(e) => setEmailContato(e.target.value)}
                required
              />
            </div>
            <Button variant="primary" type="submit">Enviar</Button>
          </form>
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '14px', color: '#555555', margin: 0 }}>
            LABIC — Laboratório de Inovação e Criatividade
          </p>
        </div>
      </section>

    </div>
  )
}

export default Pesquisa
