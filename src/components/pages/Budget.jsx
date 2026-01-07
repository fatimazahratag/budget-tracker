import { useState } from 'react';
import { Link } from 'react-router-dom';          
import styles from './Budget.module.css';

const categories = ['Food', 'Transport', 'Fun', 'Health', 'Other'];

export default function BudgetTracker() {
  const [currency] = useState('MAD');
  const [budget] = useState(2000);
  const [expenses, setExpenses] = useState([]);

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const total = expenses.reduce((sum, ex) => sum + ex.amount, 0);
  const remaining = budget - total;

  const addExpense = () => {
    if (!name || !amount) return;
    setExpenses([...expenses, { id: Date.now(), name, amount: Number(amount), category }]);
    setName('');
    setAmount('');
    setCategory(categories[0]);
  };

  const deleteExpense = (id) => setExpenses(expenses.filter((ex) => ex.id !== id));

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>

        <Link to="/" className={styles.backBtn}>← Retour</Link>

        <h1 className={styles.title}>Gérez vos dépenses efficacement</h1>

        <div className={styles.row}>
          <GlassCard label="Budget" value={`${budget.toFixed(2)} ${currency}`} />
          <GlassCard label="Dépensé" value={`${total.toFixed(2)} ${currency}`} accent="#f59e0b" />
          <GlassCard label="Restant" value={`${remaining.toFixed(2)} ${currency}`} accent={remaining < 0 ? '#ef4444' : '#10b981'} />
        </div>

        <div className={styles.center}>
          <div className={styles.glassCard}>
            <h2 className={styles.subtitle}>Nouvelle dépense</h2>
            <div className={styles.grid}>
              <input placeholder="Libellé" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} />
              <input type="number" placeholder={`Montant (${currency})`} value={amount} onChange={(e) => setAmount(e.target.value)} className={styles.input} />
              <select value={category} onChange={(e) => setCategory(e.target.value)} className={styles.select}>{categories.map(c => <option key={c}>{c}</option>)}</select>
              <button onClick={addExpense} disabled={!name || !amount} className={styles.btn}>Ajouter</button>
            </div>
          </div>
        </div>

        <div className={styles.glassCard}>
          <h2 className={styles.subtitle}>Dépenses</h2>
          {expenses.length === 0 ? (
            <p className={styles.empty}>Aucune dépense pour le moment</p>
          ) : (
            <ul className={styles.list}>
              {expenses.map((ex) => (
                <li key={ex.id} className={styles.item}>
                  <span className={styles.badge}>{ex.category}</span>
                  <span className={styles.name}>{ex.name}</span>
                  <span className={styles.amount}>{ex.amount.toFixed(2)} {currency}</span>
                  <button onClick={() => deleteExpense(ex.id)} className={styles.trash}>🗑</button>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}

function GlassCard({ label, value, accent }) {
  return (
    <div className={styles.glassMini}>
      <span className={styles.labelMini}>{label}</span>
      <span className={styles.valueMini} style={{ color: accent }}>{value}</span>
    </div>
  );
}