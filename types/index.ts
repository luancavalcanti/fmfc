// Definindo o "formato" de um serviço
export interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string; // O '?' significa que é opcional
}