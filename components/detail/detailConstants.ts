type HostData = {
  name: string;
  years: number;
};

export const amenityIcons: Record<string, string> = {
  WiFi: "◍",
  Cocina: "⌂",
  Terraza: "▭",
  Estacionamiento: "◫",
  Piscina: "◌",
  AC: "✶",
  "Check-in autonomo": "✓",
  Chimenea: "♨",
  Asador: "◈",
  "Tina exterior": "◎",
  Lavadora: "◍",
  "Pet friendly": "♡",
  "Espacio de trabajo": "▣",
  Elevador: "↕",
  Gym: "⬟",
  Parrilla: "◈",
};

export const hostMap: Record<string, HostData> = {
  "valle-cielo-01": { name: "Sofia", years: 4 },
  "mar-luz-02": { name: "Mateo", years: 6 },
  "bosque-nube-03": { name: "Camila", years: 5 },
  "sol-patio-04": { name: "Daniel", years: 7 },
  "piedra-atelier-05": { name: "Lucia", years: 3 },
  "berry-garden-06": { name: "Nicolas", years: 8 },
};
