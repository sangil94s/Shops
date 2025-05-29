// 아마도 상품 없을때 보여주는 페이지
import { CircleX } from 'lucide-react';
export const metadata = {
  title: '에러 페이지',
};
export default function NotFound() {
  return (
    <>
      <section className="flex min-h-screen flex-row items-center justify-center">
        <CircleX />
        <h1 className="px-2 text-2xl font-bold text-red-600">당신에겐 접근 권한이 없습니다.</h1>
      </section>
    </>
  );
}
