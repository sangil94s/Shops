// 회원가입 목적
'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';

export default function SignUpForm() {
  const router = useRouter();

  const tempDev = () => {
    alert('개발예정입니다.');
  };
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              회원가입 페이지 - 수정 예정
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input id="id" name="id" type="text" placeholder="ID를 입력해주세요" required />
            <p className="py-2 text-center font-bold text-red-600">ID 입력 누락시 나오는 텍스트</p>

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password를 입력해주세요"
              required
            />
            <p className="py-2 text-center font-bold text-red-600">
              비밀번호 입력 누락시 나오는 텍스트
            </p>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full font-bold" onClick={() => tempDev()}>
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
      </div>
    </>
  );
}
