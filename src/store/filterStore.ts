import { create } from "zustand";

interface FilterState {
  area: boolean[];
  setArea: (index: number) => void;

  stack: boolean[];
  setStack: (index: number) => void;

  difficulty: number;
  setDifficulty: (num: number) => void;

  // time
  // setTime

  price: number[];
  setPrice: (start: number, end: number) => void;
}

const useFilterStore = create<FilterState>()((set) => ({
  area: [false, false, false, false, false],
  setArea: (index: number) =>
    set((state: FilterState) => {
      const newArea = [...state.area];
      newArea[index] = !state.area[index];
      return { area: newArea };
    }),

  stack: [false, false, false, false, false],
  setStack: (index: number) =>
    set((state: FilterState) => {
      const newStack = [...state.stack];
      newStack[index] = !state.stack[index];
      return { stack: newStack };
    }),

  difficulty: 0,
  setDifficulty: (num: number) => set(() => ({ difficulty: num })),

  price: [0, 999999],
  setPrice: (start: number, end: number) =>
    set(() => ({ price: [start, end] })),
}));

export default useFilterStore;
