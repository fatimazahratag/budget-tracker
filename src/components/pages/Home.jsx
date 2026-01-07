import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      
        <div className={styles.glass}>
          <h1 className={styles.title}>Bienvenue</h1>
          <p className={styles.sub}>Ceci est la page d'accueil by tagmouti et hakkou.</p>
          <Link to="/budget" className={styles.btn}>Voir Budget</Link>
        </div>
      </div>
  );
}