import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createLoadingSlice } from './slices/loading';
import { StoreTypes } from './storeTypes';
import { immer } from 'zustand/middleware/immer';

const useStore = create<StoreTypes>()(
  devtools(
    immer((...args) => ({
      ...createLoadingSlice(...args),
    }))
  )
);

export default useStore;
