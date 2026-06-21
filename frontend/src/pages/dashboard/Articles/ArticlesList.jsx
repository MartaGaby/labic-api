import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiPlus, FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function ArticlesList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock baseado exatamente nos dados visíveis em listagem_2.jpeg
  const [articles] = useState([
    { id: 1, title: 'ApplyFlow AI: Otimização de Candidaturas', authors: 'A. M. Silva, J. S. Gouveia', date: '15 Mai 2026', status: 'Ativo' },
    { id: 2, title: 'Prototipagem AI: Otimização Rápida', authors: 'A. M. Silva, J. S. Gouveia', date: '15 Mai 2026', status: 'Em Execução' },
    { id: 3, title: 'Smart 3D: Otimização Controller ativos', authors: 'A. M. Silva, J. S. Gouveia', date: '15 Mai 2026', status: 'Em Execução' },
    { id: 4, title: 'Sistemas & Tecnologias Emergentes', authors: 'A. M. Silva, J. S. Gouveia', date: '15 Mai 2026', status: 'Concluído' },
    { id: 5, title: 'Educational VR Platform', authors: 'A. M. Silva, J. S. Gouveia', date: '15 Mai 2026', status: 'Concluído' }
  ]);

  const filteredArticles = articles.filter(art =>
    art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    art.authors.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <div style={styles.headerTitle}>
        <h1 style={styles.title}>Listagem de Artigos</h1>
        <p style={styles.subtitle}>Gerencie e visualize todos os artigos publicados e em desenvolvimento do LABIC.</p>
      </div>

      <div style={styles.topBar}>
        <div style={styles.searchContainer}>
          <FiSearch style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Buscar artigo por título, autor ou palavra-chave..."
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button style={styles.addBtn} onClick={() => navigate('/dashboard/artigos/novo')}>
          <FiPlus size={16} /> Novo Artigo
        </button>
      </div>

      <div style={styles.tableCard}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.theadRow}>
              <th style={styles.th}>Título</th>
              <th style={styles.th}>Autor(es)</th>
              <th style={styles.th}>Data de Publicação</th>
              <th style={styles.th}>Status</th>
              <th style={styles.thCenter}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredArticles.map((art) => (
              <tr key={art.id} style={styles.tbodyRow}>
                <td style={styles.tdName}>{art.title}</td>
                <td style={styles.td}>{art.authors}</td>
                <td style={styles.td}>{art.date}</td>
                <td style={styles.td}>
                  <span style={{
                    ...styles.badge,
                    ...styles[art.status === 'Ativo' ? 'badgeActive' : art.status === 'Em Execução' ? 'badgeProgress' : 'badgeDone']
                  }}>
                    {art.status}
                  </span>
                </td>
                <td style={styles.tdActions}>
                  <button style={styles.actionBtn} title="Visualizar"><FiEye size={16} color="#4B5563" /></button>
                  <button style={styles.actionBtn} title="Editar"><FiEdit2 size={16} color="#2B5DFA" /></button>
                  <button style={styles.actionBtn} title="Excluir"><FiTrash2 size={16} color="#E57373" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: { fontFamily: 'Open Sans, sans-serif' },
  headerTitle: { marginBottom: '24px' },
  title: { fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: '700', color: '#1F1F1F', marginBottom: '8px' },
  subtitle: { fontSize: '16px', color: '#555555' },
  topBar: { display: 'flex', justifyContent: 'space-between', gap: '16px', marginBottom: '24px' },
  searchContainer: { display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '5px', padding: '0 14px', flex: 1, maxWidth: '500px' },
  searchIcon: { color: '#9CA3AF', marginRight: '8px' },
  searchInput: { border: 'none', outline: 'none', width: '100%', height: '42px', fontSize: '14px' },
  addBtn: { backgroundColor: 'rgb(43, 93, 250)', color: '#FFFFFF', border: 'none', borderRadius: '5px', padding: '0 20px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: '0.2s ease' },
  tableCard: { backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', overflow: 'hidden', border: '1px solid #E5E7EB' },
  table: { width: '100%', borderCollapse: 'collapse', textAlign: 'left' },
  theadRow: { borderBottom: '2px solid #E5E7EB', backgroundColor: '#F9FAFB' },
  th: { padding: '16px 24px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' },
  thCenter: { padding: '16px 24px', fontSize: '14px', fontWeight: '700', color: '#1F1F1F', fontFamily: 'Inter, sans-serif', textAlign: 'center' },
  tbodyRow: { borderBottom: '1px solid #E5E7EB', transition: '0.2s ease' },
  td: { padding: '16px 24px', fontSize: '14px', color: '#555555' },
  tdName: { padding: '16px 24px', fontSize: '14px', fontWeight: '600', color: '#1F1F1F' },
  tdActions: { padding: '16px 24px', display: 'flex', justifyContent: 'center', gap: '12px' },
  actionBtn: { background: 'none', border: 'none', cursor: 'pointer', padding: '4px', borderRadius: '4px', transition: '0.2s ease' },
  badge: { padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', display: 'inline-block' },
  badgeActive: { backgroundColor: '#DEF7EC', color: 'rgb(76,175,80)' },
  badgeProgress: { backgroundColor: '#FEF3C7', color: 'rgb(255,193,7)' },
  badgeDone: { backgroundColor: '#E0E7FF', color: 'rgb(43, 93, 250)' },
};