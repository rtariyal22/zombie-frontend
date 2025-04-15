import React from 'react';
import { RegisterSurvivorForm } from '../components/RegisterSurvivorForm';
import { SurvivorPayload } from '../types';

export const RegisterPage: React.FC = () => {
  const handleRegister = async (data: SurvivorPayload) => {
    try {
      const response = await fetch('http://localhost:8000/survivors/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message + '. Use this id for future trades -> ' + result.id );
      } else {
        const error = await response.text();
        alert(`Failed to register: ${error}`);
      }
    } catch (err) {
      alert('Error connecting to server');
    }
  };

  return <RegisterSurvivorForm onSubmit={handleRegister} />;
};
