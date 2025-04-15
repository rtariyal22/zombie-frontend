import React from 'react';
import { UpdateLocationForm } from '../components/UpdateLocationForm';
import { LocationUpdatePayload } from '../types';

export const UpdateLocationPage: React.FC = () => {
  const handleUpdate = async (id: number, data: LocationUpdatePayload) => {
    try {
      const response = await fetch(`http://localhost:8000/survivors/${id}/location/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Location updated!');
      } else {
        const error = await response.text();
        alert('Error: ' + error);
      }
    } catch (error) {
      alert('Network error');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <UpdateLocationForm onUpdate={handleUpdate} />
    </div>
  );
};
