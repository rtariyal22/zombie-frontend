import React from 'react';
import { TradeForm } from '../components/TradeForm';
import { TradePayload } from '../types';

export const TradePage: React.FC = () => {
  const handleTrade = async (data: TradePayload) => {
    try {
      const response = await fetch('http://localhost:8000/resources/trade/', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || 'Trade completed successfully!');
      } else {
        alert(result.error || 'Trade failed!');
      }
    } catch (err) {
      alert('Network error occurred.');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <TradeForm onTrade={handleTrade} />
    </div>
  );
};
