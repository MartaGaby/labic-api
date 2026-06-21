import './Alert.css'

export default function Alert({ type = 'info', message, onClose }) {
  if (!message) return null

  return (
    <div className={`alert alert--${type}`} role="alert">
      <span className="alert__message">{message}</span>
      {onClose && (
        <button className="alert__close" onClick={onClose} aria-label="Fechar">
          &times;
        </button>
      )}
    </div>
  )
}