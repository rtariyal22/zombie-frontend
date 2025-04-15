import React from 'react';
import { ReportInfectionForm } from '../components/ReportInfectionForm';
import { InfectionReportPayload } from '../types';

export const ReportInfectionPage: React.FC = () => {
  const handleReport = async (data: InfectionReportPayload) => {
    try {
      const response = await fetch('http://localhost:8000/survivors/report/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message || 'Report submitted.');
      } else {
        alert(result.error || 'An error occurred.');
      }
    } catch (error) {
      alert('Network error.');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <ReportInfectionForm onReport={handleReport} />
    </div>
  );
};
