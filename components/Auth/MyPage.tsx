'use client';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '@/app/Loading';
import dayjs from 'dayjs';
// 마이페이지용

export default function MyPage() {
  const params = useParams();
  const fetchMypages = () =>
    axios.get(`${process.env.NEXT_PUBLIC_URL}/users/${params?.nickname}`).then(({ data }) => data);
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['MyPages'],
    queryFn: fetchMypages,
    retry: 5,
  });
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.log('에러 발생!', error.message);
  }
  /* 추후 다른 사람의 마이 페이지에 대해 어떻게 처리할건지 추가 필요함. */
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">마이 페이지</CardTitle>
        </CardHeader>
        <CardContent>
          <label className="font-bold">닉네임</label>
          <Input className="my-2 text-center" placeholder="닉네임" defaultValue={data?.nickname} />
          <label className="font-bold">권한</label>
          <Input className="my-2 text-center" placeholder="권한" defaultValue={data?.permission} />
          <label className="font-bold">가입일</label>
          <Input
            className="my-2 text-center"
            placeholder="가입일"
            defaultValue={dayjs(data?.createDate).format('YYYY-MM-DD HH:mm')}
          />
        </CardContent>
      </Card>
    </div>
  );
}
