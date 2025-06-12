import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ZustandAuthState } from '@/types/TypeInfomation';
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
