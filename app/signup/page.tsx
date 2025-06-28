// 회원가입
import SignUpForm from '@/components/Auth/SignUpForm';

export const metadata = {
  title: '회원가입 페이지',
};
export default function page() {
  return (
    <>
      <SignUpForm />
    </>
  );
}
