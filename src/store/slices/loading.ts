import { StateCreator } from 'zustand';

export interface LoadingSlice {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const createLoadingSlice: StateCreator<LoadingSlice> = (set) => ({
  isLoading: false,
  setLoading: (isLoading) =>
    // @ts-ignore: Zustand docs say mention this as the way to name actions.
    // However, the ts-type for set doesn't seem to account for the 3rd arg yet.
    set({ isLoading }, false, { type: 'loadingSlice/setLoading' }),
});
