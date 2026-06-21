
export default function Topbar() {
  return (
    <header style={styles.topbar}>
      <div style={styles.profileContainer}>
        <div style={styles.avatar}>
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" 
            alt="Avatar" 
            style={styles.avatarImg} 
          />
        </div>
        <span style={styles.username}>Dr. Carlos Silva</span>
        <button style={styles.logoutBtn}>Sair</button>
      </div>
    </header>
  );
}

const styles = {
  topbar: {
    height: '72px',
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #E5E7EB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 32px',
    width: '100%',
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: '#E5E7EB',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  username: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    color: '#1F1F1F',
    fontWeight: '400',
  },
  logoutBtn: {
    fontFamily: 'Open Sans, sans-serif',
    border: '1px solid #E5E7EB',
    backgroundColor: '#FFFFFF',
    color: '#1F1F1F',
    padding: '6px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: '0.2s ease',
    fontWeight: '600',
  }
};