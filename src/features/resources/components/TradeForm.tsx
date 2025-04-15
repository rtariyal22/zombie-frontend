import React, { useState } from 'react';
import { TradePayload } from '../types';

interface Props {
  onTrade: (payload: TradePayload) => void;
}

const itemTypes = ['Water', 'Food', 'Medication', 'Ammunition'];

export const TradeForm: React.FC<Props> = ({ onTrade }) => {
  const [survivorA, setSurvivorA] = useState('');
  const [survivorB, setSurvivorB] = useState('');

  const [itemsA, setItemsA] = useState<Record<string, number>>({
    Water: 0,
    Food: 0,
    Medication: 0,
    Ammunition: 0,
  });

  const [itemsB, setItemsB] = useState<Record<string, number>>({
    Water: 0,
    Food: 0,
    Medication: 0,
    Ammunition: 0,
  });

  const handleChange = (
    who: 'A' | 'B',
    item: string,
    value: string
  ) => {
    const quantity = parseInt(value) || 0;
    const target = who === 'A' ? { ...itemsA } : { ...itemsB };
    target[item] = quantity;
    who === 'A' ? setItemsA(target) : setItemsB(target);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload: TradePayload = {
      survivor_a: survivorA,
      survivor_b: survivorB,
      items_a: Object.entries(itemsA)
        .filter(([_, qty]) => qty > 0)
        .map(([item, qty]) => ({ item: item as TradePayload['items_a'][0]['item'], quantity: qty })),
      items_b: Object.entries(itemsB)
        .filter(([_, qty]) => qty > 0)
        .map(([item, qty]) => ({ item: item as TradePayload['items_b'][0]['item'], quantity: qty })),
    };

    onTrade(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Trade Items</h3>

      <label>
        Survivor A ID:
        <input type="text" value={survivorA} onChange={(e) => setSurvivorA(e.target.value)} />
      </label>
      <br />

      <label>
        Survivor B ID:
        <input type="text" value={survivorB} onChange={(e) => setSurvivorB(e.target.value)} />
      </label>
      <br />

      <h4>Survivor A Wants:</h4>
      {itemTypes.map((item) => (
        <label key={item}>
          {item}:
          <input
            type="number"
            min="0"
            value={itemsA[item]}
            onChange={(e) => handleChange('A', item, e.target.value)}
          />
        </label>
      ))}

      <h4>Survivor B Wants:</h4>
      {itemTypes.map((item) => (
        <label key={item}>
          {item}:
          <input
            type="number"
            min="0"
            value={itemsB[item]}
            onChange={(e) => handleChange('B', item, e.target.value)}
          />
        </label>
      ))}

      <br /><br />
      <button type="submit">Submit Trade</button>
    </form>
  );
};
