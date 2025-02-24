import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home as HomeIcon, LogOut, BarChart3, List, Plus } from "lucide-react";
import Analytics from "./Analytics";

const transactions = [
  { id: 1, type: "credit", amount: 5000, category: "Salary", date: "2024-03-15" },
  { id: 2, type: "expense", amount: 100, category: "Food", date: "2024-03-14" },
  { id: 3, type: "expense", amount: 200, category: "Transportation", date: "2024-03-13" },
  { id: 4, type: "credit", amount: 1000, category: "Freelance", date: "2024-03-12" },
  { id: 5, type: "expense", amount: 300, category: "Entertainment", date: "2024-03-11" },
];

const Home = () => {
  const [view, setView] = useState("table");
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="container">
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .container { width: 100vw; height: 100vh; padding: 20px; font-family: Arial, sans-serif; background: #f8f9fa; display: flex; flex-direction: column; align-items: center; }
        .card { width: 100%; max-width: 1200px; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px; }
        .header { display: flex; align-items: center; gap: 10px; font-size: 22px; font-weight: bold; justify-content: space-between; }
        .form { display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; justify-content: flex-start; }
        .button { padding: 12px 15px; border: none; background: #007bff; color: white; cursor: pointer; border-radius: 5px; display: flex; align-items: center; gap: 8px; font-size: 16px; }
        .button:hover { background: #0056b3; }
        .table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; }
        .table th, .table td { padding: 12px; border-bottom: 1px solid #ddd; text-align: left; }
        .table th { background: #007bff; color: white; font-weight: bold; }
        .table tr:hover { background: #f1f1f1; }
        .badge { padding: 6px 12px; border-radius: 5px; color: white; font-size: 14px; }
        .badge.credit { background: #28a745; }
        .badge.expense { background: #dc3545; }
        .input { padding: 10px; border: 1px solid #ccc; border-radius: 5px; font-size: 14px; }
      `}</style>
      <nav className="card">
        <div className="header">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <HomeIcon className="icon" />
            <span className="title">Finance Dashboard</span>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => setView("table")} className="button">
              <List /> Table
            </button>
            <button onClick={() => setView("analytics")} className="button">
              <BarChart3 /> Analytics
            </button>
            <Link to="/login" className="button">
              <LogOut /> Logout
            </Link>
          </div>
        </div>
      </nav>

      <main className="card">
        <div className="form" style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <select className="input">
              <option value="7">Last Week</option>
              <option value="30">Last Month</option>
              <option value="365">Last Year</option>
              <option value="custom">Custom</option>
            </select>
            <select className="input">
              <option value="all">All Types</option>
              <option value="expense">Expenses</option>
              <option value="credit">Income</option>
            </select>
          </div>
          <button onClick={() => setShowAddModal(true)} className="button">
            <Plus /> Add Transaction
          </button>
        </div>

        {view === "table" ? (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className={transaction.type === "credit" ? "badge credit" : "badge expense"}>{transaction.type}</td>
                    <td style={{ color: transaction.type === "credit" ? "#28a745" : "#dc3545" }}>${transaction.amount}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <Analytics transactions={transactions} />
        )}
      </main>
    </div>
  );
};

export default Home;
