import { User } from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootStateT } from 'redux/store';

interface ButtonLoaderI {
  isDeleting: boolean;
  isEditing: boolean;
  isAdding: boolean;
}
export interface WebAppI {
  users: User[];
  selectedUser: User | null;
  isDeleteModalOpen: boolean;
  buttonLoaders: ButtonLoaderI;
}

const initialState: WebAppI = {
  users: [],
  selectedUser: null,
  isDeleteModalOpen: false,
  buttonLoaders: {
    isDeleting: false,
    isEditing: false,
    isAdding: false,
  },
};

export const webAppSlice = createSlice({
  name: 'webApp',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setIsDeleteModalOpen: (state, action: PayloadAction<boolean>) => {
      console.log('fdjdjfd');

      state.isDeleteModalOpen = action.payload;
    },
    setSelectedUser: (state, action: PayloadAction<User>) => {
      state.selectedUser = action.payload;
    },
    setButtonLoaders: (state, action: PayloadAction<ButtonLoaderI>) => {
      state.buttonLoaders = action.payload;
    },
  },
});

export const {
  setUsers,
  setIsDeleteModalOpen,
  setSelectedUser,
  setButtonLoaders,
} = webAppSlice.actions;

// Other code such as selectors can use the imported `RootStateT` type
export const selectWebApp = (state: RootStateT): WebAppI => state.webApp;

export default webAppSlice.reducer;
