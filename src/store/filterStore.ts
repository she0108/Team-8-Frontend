import { create } from "zustand";

interface FilterState {
  area: boolean[];
  setArea: (index: number) => void;

  stack: boolean[];
  setStack: (index: number) => void;
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
      return { area: newStack };
    }),
}));

export default useFilterStore;
