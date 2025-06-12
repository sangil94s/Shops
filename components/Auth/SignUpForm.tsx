// 회원가입 목적
'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { SignUpValues } from '@/types/TypeInfomation';

export default function SignUpForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpValues>();
  const nickname = watch('nickname', '');
  const username = watch('username', '');
  const password = watch('password', '');
  const isFormValid = nickname.length > 0 && username.length > 0 && password.length > 0;

  const onSubmit = async (data: SignUpValues) => {
    try {
      await axios.post('https://shops-be.onrender.com/users', data);
      alert('회원가입 완료! 로그인해주세요.');
      router.push('/login');
    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data?.message || '회원가입 실패');
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
            <CardTitle className="text-center text-2xl font-bold">회원가입 페이지</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="닉네임 을 입력하세요"
              className="my-2"
              {...register('nickname', { required: '닉네임은 필수입니다.' })}
            />
            {errors.nickname && (
              <p className="text-center font-bold text-red-600">{errors.nickname.message}</p>
            )}
            <Input
              placeholder="아이디 을 입력하세요"
              className="my-2"
              {...register('username', { required: '아이디는 필수입니다.' })}
            />
            {errors.username && (
              <p className="text-center font-bold text-red-600">{errors.username.message}</p>
            )}
            <Input
              placeholder="비밀번호 을 입력하세요"
              className="my-2"
              type="password"
              {...register('password', { required: '비밀번호는 필수입니다.' })}
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}

            <select className="my-2 w-full" {...register('permission')}>
              <option value="USER">일반 사용자</option>
              <option value="ADMIN">관리자</option>
            </select>
          </CardContent>
          <CardFooter>
            <Button
              variant="ghost"
              type="submit"
              className={`w-full cursor-pointer font-bold ${isFormValid ? 'text-blue-500' : 'text-transparent'}`}
            >
              회원가입
            </Button>
          </CardFooter>
          <h4
            className="cursor-pointer py-2 text-center font-bold text-red-600"
            onClick={() => router.push('/login')}
          >
            이미 회원인가요?
          </h4>
        </Card>
      </form>
    </>
  );
}
