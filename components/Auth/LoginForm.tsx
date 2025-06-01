// 로그인 컴포넌트

import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';

export default function LoginForm() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">로그인 페이지</CardTitle>
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
            <Button type="submit" className="w-full font-bold">
              로그인
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
