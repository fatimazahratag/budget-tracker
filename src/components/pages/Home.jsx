import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.wrapper}
      >
        <div className={styles.glass}>
          <h1 className={styles.title}>Bienvenue</h1>
          <p className={styles.sub}>Ceci est la page d'accueil de mini-site React.</p>
          <Link to="/budget" className={styles.btn}>Voir Budget</Link>
        </div>
      </motion.div>
    </div>
  );
}