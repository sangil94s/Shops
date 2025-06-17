// 로그인 컴포넌트
'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuthStore } from '@/app/util/Zustand/useAuthStore';
import { LoginFormValues } from '@/types/TypeInfomation';

export default function LoginForm() {
  const router = useRouter();
  const login = useAuthStore(state => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormValues>();

  const username = watch('username', '');
  const password = watch('password', '');
  const isFormValid = username.length > 0 && password.length > 0;

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await axios.post('https://shops-be.onrender.com/users/login', data);
      const { accessToken, user } = res.data;

      login({ accessToken, user });
      alert('로그인 완료');
      router.push('/');
    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data?.message || '로그인 실패');
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex min-h-screen items-center justify-center"
      >
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">로그인 페이지</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="아이디 을 입력하세요"
              {...register('username', { required: '아이디는 필수입니다.' })}
            />
            {errors.username && (
              <p className="py-2 text-center font-bold text-red-600">{errors.username.message}</p>
            )}

            <Input
              placeholder="비밀번호 을 입력하세요"
              className="my-2"
              type="password"
              {...register('password', { required: '비밀번호는 필수입니다.' })}
            />
            {errors.password && (
              <p className="py-2 text-center font-bold text-red-600">{errors.password.message}</p>
            )}
          </CardContent>
          <CardFooter>
            <Button
              variant="ghost"
              type="submit"
              className={`w-full cursor-pointer font-bold ${isFormValid ? 'text-blue-500' : 'text-transparent'}`}
            >
              로그인
            </Button>
          </CardFooter>
          <h4
            className="cursor-pointer py-2 text-center font-bold text-red-600"
            onClick={() => router.push('/signup')}
          >
            회원이 아닌가요?
          </h4>
        </Card>
      </form>
    </>
  );
}
