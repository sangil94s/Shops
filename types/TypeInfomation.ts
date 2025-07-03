// 아마도 interface , type로 타입 선언하는걸 여기에 모두 선언하는식?
export interface AdminOnlyFormTypes {
  id: number;
  adminId: number;
  createDate?: string;
} // 관리자 전용 Form에 들어가는 타입
export interface FAQListTypes extends AdminOnlyFormTypes {
  title: string;
  description: string;
  category: string;
} // FAQ List 에서 사용합니다.

export interface NoticeListTypes extends AdminOnlyFormTypes {
  updateDate?: string;
  category: string;
  description: string;
  title: string;
} // NoticeList.tsx에서 사용합니다
export interface LoginFormValues {
  username: string;
  password: string;
} // LoginForm.tsx 에서 사용합니다

export interface SignUpValues extends LoginFormValues {
  nickname: string;
  permission: 'USER' | 'ADMIN';
}

export interface ZustandUser {
  nickname: string;
  username: string;
  permission: string;
}

export interface ZustandAuthState {
  isAuthenticated: boolean;
  accessToken: string;
  user: ZustandUser | null;
  login: (authData: { accessToken: string; user: ZustandUser }) => void;
  logout: () => void;
}
