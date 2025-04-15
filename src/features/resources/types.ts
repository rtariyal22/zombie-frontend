export interface TradeItem {
  item: 'Water' | 'Food' | 'Medication' | 'Ammunition';
  quantity: number;
}

export interface TradePayload {
  survivor_a: string;
  survivor_b: string;
  items_a: TradeItem[];
  items_b: TradeItem[];
}
