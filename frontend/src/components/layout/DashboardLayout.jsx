import { Outlet } from 'react-router-dom';
import Sidebar from '../../layouts/Sidebar';
import Topbar from '../../layouts/Topbar';
import Footer from '../../layouts/Footer';

export default function DashboardLayout() {
  return (
    <div style={styles.layoutContainer}>
      <Sidebar />

      <div style={styles.mainContent}>
        <Topbar />
        
        <div style={styles.scrollContainer}>
          <main style={styles.pageArea}>
            <div style={styles.containerFluid}>
              <Outlet />
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </div>
  );
}

const styles = {
  layoutContainer: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    overflowX: 'hidden',
  },
  mainContent: {
    flex: 1,
    marginLeft: '220px',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  scrollContainer: {
    flex: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  pageArea: {
    padding: '40px 32px',
    backgroundColor: '#F9FAFB',
    flex: 1,
  },
  containerFluid: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
};