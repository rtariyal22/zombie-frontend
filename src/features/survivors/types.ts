export interface InventoryItem {
  item: 'Water' | 'Food' | 'Medication' | 'Ammunition';
  quantity: number;
}

export interface SurvivorPayload {
  name: string;
  age: number;
  gender: 'M' | 'F' | 'O';
  latitude: number;
  longitude: number;
  inventory: InventoryItem[];
}

export interface LocationUpdatePayload {
  latitude: number;
  longitude: number;
}

export interface InfectionReportPayload {
  reporter_id: string;
  infected_id: string;
}

export interface SurvivorProfile {
  id: number;
  name: string;
  age: number;
  gender: 'M' | 'F' | 'O';
  latitude: number;
  longitude: number;
  infected: boolean;
  inventory: InventoryItem[];
}
