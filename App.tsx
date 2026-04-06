import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>ML Ops Monitoring</h1>
      <div className="stats">
        <div className="card">Model Drift: 0.02%</div>
        <div className="card">Inference Latency: 45ms</div>
      </div>
    </div>
  );
};

export default Dashboard;
