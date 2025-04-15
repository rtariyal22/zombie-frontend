import React, { useState } from 'react';
import { LocationUpdatePayload } from '../types';

interface Props {
  onUpdate: (id: number, data: LocationUpdatePayload) => void;
}

export const UpdateLocationForm: React.FC<Props> = ({ onUpdate }) => {
  const [survivorId, setSurvivorId] = useState<number>(0);
  const [location, setLocation] = useState<LocationUpdatePayload>({
    latitude: 0,
    longitude: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'survivorId') {
      setSurvivorId(parseInt(value) || 0);
    } else {
      setLocation({ ...location, [name]: parseFloat(value) || 0 });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(survivorId, location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Update Survivor Location</h3>

      <label>
        Survivor ID:
        <input
          type="number"
          name="survivorId"
          value={survivorId}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Latitude:
        <input
          type="number"
          name="latitude"
          value={location.latitude}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Longitude:
        <input
          type="number"
          name="longitude"
          value={location.longitude}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <button type="submit">Update Location</button>
    </form>
  );
};
