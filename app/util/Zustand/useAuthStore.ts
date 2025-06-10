import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface User {
  nickname: string;
  username: string;
  permission: string;
}

interface ZustandAuthState {
  isAuthenticated: boolean;
  accessToken: string;
  user: User | null;
  login: (authData: { accessToken: string; user: User }) => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<ZustandAuthState>(
    set => ({
      isAuthenticated: false,
      accessToken: '',
      user: null,
      login: authData =>
        set({
          isAuthenticated: true,
          accessToken: authData.accessToken,
          user: authData.user,
        }),
      logout: () =>
        set({
          isAuthenticated: false,
          accessToken: '',
          user: null,
        }),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
