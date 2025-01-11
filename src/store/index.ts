import { create } from "zustand";

interface AppState {
  score: number;
  isModalOpen: boolean;
  incrementScore: () => void;
  toggleModal: () => void;
  closeModal: () => void;
  coordinates: { x: number; y: number };
  setCordinates: (x: number, y: number) => void;
  userAttack: string;
  setUserAttack: (attack: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  score: 0,
  isModalOpen: false,
  incrementScore: () =>
    set((state) => ({
      score: state.score + 1,
    })),
  toggleModal: () =>
    set((state) => ({
      isModalOpen: !state.isModalOpen,
    })),
  closeModal: () =>
    set({
      isModalOpen: false,
    }),
  coordinates: { x: 0, y: 0 },
  setCordinates: (x, y) =>
    set({
      coordinates: { x, y },
    }),
  userAttack: "",
  setUserAttack: (attack) => set({ userAttack: attack }),
}));
