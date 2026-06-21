import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi'

function Sobre() {
  const navigate = useNavigate()

  const dadosMissao = [
    { icone: <FiTarget size={36} />, titulo: 'Missão', texto: 'Promover a pesquisa e o desenvolvimento de soluções inovadoras que impactem positivamente a sociedade.' },
    { icone: <FiEye size={36} />, titulo: 'Visão', texto: 'Ser referência nacional em inovação e criatividade aplicada à pesquisa acadêmica e tecnológica.' },
    { icone: <FiHeart size={36} />, titulo: 'Valores', texto: 'Inovação • Colaboração • Ética • Sustentabilidade • Excelência • Diversidade' },
  ]

  const objetivos = [
    'Fomentar a pesquisa interdisciplinar',
    'Desenvolver tecnologias aplicadas',
    'Capacitar novos pesquisadores',
    'Estabelecer parcerias com instituições',
  ]

  const equipe = [
    { nome: 'Dr. Carlos Silva', cargo: 'Coordenador Geral', area: 'Inteligência Artificial' },
    { nome: 'Profª. Ana Oliveira', cargo: 'Vice-Coordenadora', area: 'Sistemas Embarcados' },
    { nome: 'MSc. João Pereira', cargo: 'Pesquisador Sênior', area: 'Ciência de Dados' },
    { nome: 'Eng. Maria Santos', cargo: 'Pesquisadora', area: 'Robótica' },
  ]

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 16px', boxSizing: 'border-box' }}>

      {/* HEADER - Hero */}
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '90px 0', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: '700', lineHeight: '1.2', color: '#1F1F1F', margin: '0 0 24px 0' }}>
            Sobre o LABIC
          </h1>
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '16px', lineHeight: '1.6', color: '#555555', margin: '0 0 32px 0' }}>
            Conheça nossa história, nossa equipe e o que nos move na busca por inovação e conhecimento.
          </p>
          <Button variant="primary" onClick={() => navigate('/contato')}>
            Entre em Contato
          </Button>
        </div>
        <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/sobre%20labic%20copiar.webp" 
            alt="Sobre o LABIC" 
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/* HISTÓRIA */}
      <section style={{ padding: '0 0 90px 0' }}>
        <Card title="Nossa História">
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '15px', lineHeight: '1.8', color: '#555555', margin: 0 }}>
            O Laboratório de Inovação e Criatividade (LABIC) foi fundado com o propósito de integrar pesquisa acadêmica e inovação tecnológica. 
            Desde sua criação, o LABIC tem se destacado por desenvolver soluções criativas para desafios reais, 
            unindo estudantes, pesquisadores e profissionais de diversas áreas do conhecimento.
          </p>
        </Card>
      </section>

      {/* MISSÃO, VISÃO, VALORES — AGORA COM .map() */}
      <section style={{ padding: '0 0 90px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {dadosMissao.map((item, index) => (
            <Card key={index} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px', color: 'rgb(43, 93, 250)' }}>
                {item.icone}
              </div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: '600', color: '#1F1F1F', margin: '0 0 12px 0' }}>
                {item.titulo}
              </h3>
              <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#555555', margin: 0 }}>
                {item.texto}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* OBJETIVOS — AGORA COM .map() */}
      <section style={{ padding: '0 0 90px 0' }}>
        <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '700', color: '#1F1F1F', textAlign: 'center', margin: '0 0 32px 0' }}>
          Objetivos
        </h2>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {objetivos.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Badge variant="primary">{index + 1}</Badge>
              <span style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '15px', color: '#1F1F1F' }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPE — AGORA COM .map() + DADOS DENTRO DA FUNÇÃO */}
      <section style={{ padding: '0 0 90px 0' }}>
        <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: '700', color: '#1F1F1F', textAlign: 'center', margin: '0 0 8px 0' }}>
          Nossa Equipe
        </h2>
        <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '14px', color: '#555555', textAlign: 'center', margin: '0 0 48px 0' }}>
          Conheça os profissionais que fazem o LABIC acontecer
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {equipe.map((membro, index) => (
            <Card key={index} style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgb(43, 93, 250)', margin: '0 auto 16px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '28px', fontWeight: '700', fontFamily: 'Inter, sans-serif' }}>
                {membro.nome.charAt(0)}
              </div>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: '600', color: '#1F1F1F', margin: '0 0 4px 0' }}>
                {membro.nome}
              </h3>
              <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '14px', color: 'rgb(43, 93, 250)', fontWeight: '600', margin: '0 0 8px 0' }}>
                {membro.cargo}
              </p>
              <Badge variant="primary">{membro.area}</Badge>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 0 90px 0', textAlign: 'center' }}>
        <Button variant="primary" size="lg" onClick={() => navigate('/contato')}>
          Entre em Contato
        </Button>
      </section>

    </div>
  )
}

export default Sobre
