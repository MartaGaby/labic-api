import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX, FiSearch, FiAlertCircle } from 'react-icons/fi';

export default function ArticleCreate() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    methodology: '',
    literatureReview: '',
    relatedArea: 'Manufatura Aditiva'
  });

  const [authors, setAuthors] = useState(['Dr. Carlos Silva', 'Dr. Aris Bibo']);
  const [authorInput, setAuthorInput] = useState('');
  
  // Estados dedicados para o arquivo PDF e seu nome correspondente
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfName, setPdfName] = useState('');
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const clone = { ...prev };
        delete clone[name];
        return clone;
      });
    }
  };

  // Captura a seleção do arquivo e valida o formato em tempo real
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setErrors(prev => ({ ...prev, pdf: 'O arquivo selecionado deve ser obrigatoriamente um PDF.' }));
        setPdfFile(null);
        setPdfName('');
        return;
      }
      
      setPdfFile(file);
      setPdfName(file.name);
      
      if (errors.pdf) {
        setErrors(prev => {
          const clone = { ...prev };
          delete clone['pdf'];
          return clone;
        });
      }
    }
  };

  const handleAddAuthor = (e) => {
    if (e.key === 'Enter' && authorInput.trim() !== '') {
      e.preventDefault();
      const newAuthor = authorInput.trim();
      if (!authors.includes(newAuthor)) {
        setAuthors([...authors, newAuthor]);
        if (errors.authors) {
          setErrors(prev => {
            const clone = { ...prev };
            delete clone.authors;
            return clone;
          });
        }
      }
      setAuthorInput('');
    }
  };

  const handleRemoveAuthor = (authorToRemove) => {
    setAuthors(authors.filter(author => author !== authorToRemove));
  };

  const validateForm = () => {
    const currentErrors = {};

    if (formData.title.trim().length < 10) {
      currentErrors.title = 'O título do artigo deve conter pelo menos 10 caracteres.';
    }
    if (formData.abstract.trim().length < 50) {
      currentErrors.abstract = 'O resumo deve ser mais detalhado (mínimo de 50 caracteres).';
    }
    if (formData.methodology.trim().length < 20) {
      currentErrors.methodology = 'Descreva a metodologia utilizada (mínimo de 20 caracteres).';
    }
    if (formData.literatureReview.trim().length < 20) {
      currentErrors.literatureReview = 'A revisão bibliográfica não pode ficar em branco (mínimo de 20 caracteres).';
    }
    if (authors.length === 0) {
      currentErrors.authors = 'É obrigatório adicionar pelo menos um autor ao artigo.';
    }
    // Validação estrita do arquivo PDF
    if (!pdfFile) {
      currentErrors.pdf = 'É obrigatório realizar o upload do artigo científico em formato PDF.';
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = (e, isDraft = false) => {
    e.preventDefault();

    if (!isDraft && !validateForm()) {
      return;
    }

    console.log(isDraft ? 'Salvando rascunho provisório:' : 'Enviando dados validados:', { ...formData, authors, pdfFile });
    navigate('/dashboard/artigos');
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h1 style={styles.title}>Submissão de Artigo</h1>
        <p style={styles.subtitle}>Preencha os campos abaixo para submeter um novo artigo científico.</p>
        
        <hr style={styles.divider} />

        <form onSubmit={(e) => handleSubmit(e, false)} style={styles.form} noValidate>
          {/* Título */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Título</label>
            <input
              type="text"
              name="title"
              style={{ ...styles.input, borderColor: errors.title ? '#E57373' : '#E5E7EB' }}
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && <span style={styles.errorText}><FiAlertCircle /> {errors.title}</span>}
          </div>

          {/* Resumo */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Resumo</label>
            <textarea
              name="abstract"
              placeholder="Escreva o resumo do artigo..."
              style={{ ...styles.textarea, borderColor: errors.abstract ? '#E57373' : '#E5E7EB' }}
              value={formData.abstract}
              onChange={handleChange}
              rows={4}
            />
            {errors.abstract && <span style={styles.errorText}><FiAlertCircle /> {errors.abstract}</span>}
          </div>

          {/* Linha Dupla: Metodologia e Revisão Bibliográfica */}
          <div style={styles.row}>
            <div style={{ ...styles.inputGroup, flex: 1 }}>
              <label style={styles.label}>Metodologia</label>
              <textarea
                name="methodology"
                style={{ ...styles.textarea, borderColor: errors.methodology ? '#E57373' : '#E5E7EB' }}
                value={formData.methodology}
                onChange={handleChange}
                rows={3}
              />
              {errors.methodology && <span style={styles.errorText}><FiAlertCircle /> {errors.methodology}</span>}
            </div>
            <div style={{ ...styles.inputGroup, flex: 1 }}>
              <label style={styles.label}>Revisão bibliográfica</label>
              <textarea
                name="literatureReview"
                style={{ ...styles.textarea, borderColor: errors.literatureReview ? '#E57373' : '#E5E7EB' }}
                value={formData.literatureReview}
                onChange={handleChange}
                rows={3}
              />
              {errors.literatureReview && <span style={styles.errorText}><FiAlertCircle /> {errors.literatureReview}</span>}
            </div>
          </div>

          {/* Linha Dupla: Autores e Área Relacionada */}
          <div style={styles.row}>
            <div style={{ ...styles.inputGroup, flex: 1 }}>
              <label style={styles.label}>Autores</label>
              <div style={{ ...styles.tagSearchContainer, borderColor: errors.authors ? '#E57373' : '#E5E7EB' }}>
                <FiSearch style={styles.searchIcon} />
                <div style={styles.tagWrapper}>
                  {authors.map(author => (
                    <span key={author} style={styles.tag}>
                      {author}
                      <FiX style={styles.tagClose} onClick={() => handleRemoveAuthor(author)} />
                    </span>
                  ))}
                  <input
                    type="text"
                    placeholder="Pressione Enter..."
                    style={styles.tagInput}
                    value={authorInput}
                    onChange={(e) => setAuthorInput(e.target.value)}
                    onKeyDown={handleAddAuthor}
                  />
                </div>
              </div>
              {errors.authors && <span style={styles.errorText}><FiAlertCircle /> {errors.authors}</span>}
            </div>

            <div style={{ ...styles.inputGroup, flex: 1 }}>
              <label style={styles.label}>Área relacionada</label>
              <select
                name="relatedArea"
                style={styles.select}
                value={formData.relatedArea}
                onChange={handleChange}
              >
                <option value="Manufatura Aditiva">Manufatura Aditiva</option>
                <option value="Robótica Colaborativa">Robótica Colaborativa</option>
                <option value="Inteligência Artificial">Inteligência Artificial</option>
              </select>
            </div>
          </div>

          {/* Upload PDF com Validação ativa */}
          <div style={styles.inputGroup}>
            <label style={styles.label}>Upload PDF</label>
            <div style={{ ...styles.fileContainer, borderColor: errors.pdf ? '#E57373' : '#E5E7EB' }}>
              <input 
                type="file" 
                id="pdf-upload" 
                accept=".pdf" 
                style={styles.fileInput} 
                onChange={handleFileChange}
              />
              <label htmlFor="pdf-upload" style={styles.fileBtn}>Escolher arquivo</label>
              <span style={{ ...styles.fileInstructions, color: pdfName ? '#1F1F1F' : '#6B7280' }}>
                {pdfName ? pdfName : 'Selecione o arquivo do artigo em formato PDF (Max 20MB)'}
              </span>
            </div>
            {errors.pdf && <span style={styles.errorText}><FiAlertCircle /> {errors.pdf}</span>}
          </div>

          {/* Botões de Ação */}
          <div style={styles.actions}>
            <button type="submit" style={styles.saveBtn}>
              Enviar Artigo
            </button>
            <button 
              type="button" 
              style={styles.draftBtn} 
              onClick={(e) => handleSubmit(e, true)}
            >
              Salvar rascunho
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', padding: '20px 0', fontFamily: 'Open Sans, sans-serif' },
  formCard: { backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '40px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #E5E7EB', width: '100%', maxWidth: '720px' },
  title: { fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: '700', color: '#1F1F1F', textAlign: 'center', marginBottom: '8px' },
  subtitle: { fontSize: '15px', color: '#555555', textAlign: 'center', marginBottom: '24px' },
  divider: { border: '0', borderTop: '1px solid #E5E7EB', marginBottom: '32px' },
  form: { display: 'flex', flexDirection: 'column', gap: '20px' },
  row: { display: 'flex', gap: '20px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
  label: { fontSize: '16px', fontWeight: '600', color: '#1F1F1F', fontFamily: 'Inter, sans-serif' },
  input: { height: '46px', padding: '0 14px', borderRadius: '5px', border: '1px solid #E5E7EB', fontSize: '15px', fontFamily: 'Open Sans, sans-serif', outline: 'none' },
  textarea: { padding: '12px 14px', borderRadius: '5px', border: '1px solid #E5E7EB', fontSize: '15px', fontFamily: 'Open Sans, sans-serif', outline: 'none', resize: 'vertical' },
  select: { height: '46px', padding: '0 14px', borderRadius: '5px', border: '1px solid #E5E7EB', fontSize: '15px', backgroundColor: '#FFFFFF', outline: 'none' },
  tagSearchContainer: { display: 'flex', alignItems: 'center', border: '1px solid #E5E7EB', borderRadius: '5px', padding: '0 12px', backgroundColor: '#FFFFFF', minHeight: '46px' },
  searchIcon: { color: '#9CA3AF', marginRight: '8px', flexShrink: 0 },
  tagWrapper: { display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center', width: '100%' },
  tag: { display: 'inline-flex', alignItems: 'center', gap: '4px', backgroundColor: '#F3F4F6', border: '1px solid #E5E7EB', borderRadius: '4px', padding: '4px 8px', fontSize: '14px', color: '#1F1F1F' },
  tagClose: { cursor: 'pointer', color: '#9CA3AF' },
  tagInput: { border: 'none', outline: 'none', fontSize: '14px', flex: 1, minWidth: '120px', height: '30px' },
  fileContainer: { display: 'flex', alignItems: 'center', border: '1px solid #E5E7EB', borderRadius: '5px', overflow: 'hidden', height: '46px', backgroundColor: '#FFFFFF' },
  fileInput: { display: 'none' },
  fileBtn: { display: 'flex', alignItems: 'center', height: '100%', padding: '0 16px', backgroundColor: '#F3F4F6', borderRight: '1px solid #E5E7EB', cursor: 'pointer', fontSize: '14px', color: '#1F1F1F', flexShrink: 0 },
  fileInstructions: { fontSize: '14px', paddingLeft: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: 1 },
  actions: { display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-start', gap: '12px', marginTop: '16px' },
  draftBtn: { backgroundColor: '#FFFFFF', color: '#1F1F1F', border: '1px solid #9CA3AF', borderRadius: '5px', padding: '12px 24px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', transition: '0.2s ease' },
  saveBtn: { backgroundColor: 'rgb(43, 93, 250)', color: '#FFFFFF', border: 'none', borderRadius: '5px', padding: '12px 24px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', transition: '0.2s ease' },
  errorText: { color: '#E57373', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500' }
};