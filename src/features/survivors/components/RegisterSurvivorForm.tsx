import React, { useState } from 'react';
import { SurvivorPayload } from '../types';

interface Props {
  onSubmit: (data: SurvivorPayload) => void;
}

export const RegisterSurvivorForm: React.FC<Props> = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    age: 0,
    gender: 'M',
    latitude: 0,
    longitude: 0,
  });

  const [inventory, setInventory] = useState({
    Water: 0,
    Food: 0,
    Medication: 0,
    Ammunition: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name in inventory) {
      setInventory({
        ...inventory,
        [name]: parseInt(value) || 0,
      });
    } else {
      setForm({
        ...form,
        [name]: name === 'age' || name === 'latitude' || name === 'longitude'
          ? Number(value)
          : value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const inventoryArray = Object.entries(inventory).map(([item, quantity]) => ({
    item: item as 'Water' | 'Food' | 'Medication' | 'Ammunition',
    quantity,
  }));

  const payload: SurvivorPayload = {
    ...form,
    gender: form.gender as 'M' | 'F' | 'O',
    inventory: inventoryArray,
  };

  onSubmit(payload);
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Survivor</h2>

      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Age:
        <input type="number" name="age" value={form.age} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Gender:
        <select name="gender" value={form.gender} onChange={handleChange} required>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </select>
      </label>
      <br />

      <label>
        Latitude:
        <input type="number" name="latitude" value={form.latitude} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Longitude:
        <input type="number" name="longitude" value={form.longitude} onChange={handleChange} required />
      </label>
      <br />

      <h3>Inventory</h3>
      {Object.entries(inventory).map(([item, value]) => (
        <label key={item}>
          {item}:
          <input
            type="number"
            name={item}
            value={value}
            onChange={handleChange}
            required
          />
        </label>
      ))}
      <br /><br />

      <button type="submit">Register</button>
    </form>
  );
};
