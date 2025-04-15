import React, { useState } from 'react';
import { InfectionReportPayload } from '../types';

interface Props {
  onReport: (data: InfectionReportPayload) => void;
}

export const ReportInfectionForm: React.FC<Props> = ({ onReport }) => {
  const [reporterId, setReporterId] = useState('');
  const [infectedId, setInfectedId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onReport({ reporter_id: reporterId, infected_id: infectedId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Report Infected Survivor</h3>

      <label>
        Your Survivor ID:
        <input
          type="text"
          value={reporterId}
          onChange={(e) => setReporterId(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Infected Survivor ID:
        <input
          type="text"
          value={infectedId}
          onChange={(e) => setInfectedId(e.target.value)}
          required
        />
      </label>
      <br /><br />

      <button type="submit">Submit Report</button>
    </form>
  );
};
