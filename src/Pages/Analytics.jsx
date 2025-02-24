import React from 'react';
import { ArrowUpCircle, ArrowDownCircle, DollarSign } from 'lucide-react';

const Analytics = ({ transactions }) => {
  const totalTransactions = transactions.length;
  const totalIncome = transactions
    .filter(t => t.type === 'credit')
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalAmount = totalIncome + totalExpenses;
  const incomePercent = totalAmount > 0 ? (totalIncome / totalAmount) * 100 : 0;
  const expensePercent = totalAmount > 0 ? (totalExpenses / totalAmount) * 100 : 0;

  const categories = Array.from(new Set(transactions.map(t => t.category)));
  const categoryStats = categories.map(category => {
    const categoryTransactions = transactions.filter(t => t.category === category);
    const total = categoryTransactions.reduce((sum, t) => sum + t.amount, 0);
    const percent = totalAmount > 0 ? (total / totalAmount) * 100 : 0;
    return { category, total, percent };
  });

  const styles = {
    card: {
      backgroundColor: 'white',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    },
    progressBarContainer: {
      height: '8px',
      backgroundColor: '#E5E7EB',
      borderRadius: '4px',
      marginTop: '8px'
    },
    progressBar: (color, width) => ({
      height: '8px',
      backgroundColor: color,
      borderRadius: '4px',
      width: `${width}%`
    }),
    categoryContainer: {
      marginBottom: '12px'
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <div style={styles.card}>
          <div>
            <p>Total Balance</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>${totalIncome - totalExpenses}</p>
          </div>
          <DollarSign style={{ color: '#4F46E5' }} />
        </div>

        <div style={styles.card}>
          <div>
            <p>Total Income</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'green' }}>${totalIncome}</p>
          </div>
          <ArrowUpCircle style={{ color: 'green' }} />
        </div>

        <div style={styles.card}>
          <div>
            <p>Total Expenses</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'red' }}>${totalExpenses}</p>
          </div>
          <ArrowDownCircle style={{ color: 'red' }} />
        </div>
      </div>

      <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
        <h3>Category Breakdown</h3>
        {categoryStats.map(({ category, total, percent }) => (
          <div key={category} style={styles.categoryContainer}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{category}</span>
              <span>${total}</span>
            </div>
            <div style={styles.progressBarContainer}>
              <div style={styles.progressBar('#4F46E5', percent)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
