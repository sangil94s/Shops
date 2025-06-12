// 아마도 interface , type로 타입 선언하는걸 여기에 모두 선언하는식?
export interface FAQListTypes {
  id: number;
  adminId: number;
  title: string;
  description: string;
  category: string;
  createDate: string;
} // FAQ List 에서 사용합니다.

export interface LoginFormValues {
  username: string;
  password: string;
} // LoginForm.tsx 에서 사용합니다

export interface SignUpValues extends LoginFormValues {
  nickname: string;
  permission: 'USER' | 'ADMIN';
}
