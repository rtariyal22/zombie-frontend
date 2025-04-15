import React, { useState } from 'react';
import { SurvivorProfile } from '../types';

export const SurvivorProfileViewer: React.FC = () => {
  const [survivorId, setSurvivorId] = useState('');
  const [profile, setProfile] = useState<SurvivorProfile | null>(null);
  const [error, setError] = useState('');

  const fetchProfile = async () => {
    try {
      const response = await fetch(`http://localhost:8000/survivors/${survivorId}/profile/`);

      const result = await response.json();

      if (response.ok) {
        setProfile(result);
        setError('');
      } else {
        setProfile(null);
        setError(result.message || 'Error fetching profile');
      }
    } catch (err) {
      setProfile(null);
      setError('Network error');
    }
  };

  return (
    <div>
      <h3>View Survivor Profile</h3>

      <label>
        Survivor ID:
        <input
          type="text"
          value={survivorId}
          onChange={(e) => setSurvivorId(e.target.value)}
        />
      </label>

      <button onClick={fetchProfile}>View</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {profile && (
        <div style={{ marginTop: '1rem' }}>
          <h4>Name: {profile.name} (ID: {profile.id})</h4>
          <p>Age: {profile.age}</p>
          <p>Gender: {profile.gender}</p>
          <p>Location: ({profile.latitude}, {profile.longitude})</p>
          <p>Infected: {profile.infected ? 'Yes' : 'No'}</p>

          <h5>Inventory</h5>
          <ul>
            {profile.inventory.map((item, idx) => (
              <li key={idx}>
                {item.item}: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
