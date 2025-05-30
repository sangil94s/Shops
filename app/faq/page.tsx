import FaqList from '@/components/FAQ/FaqList';
import { Button } from '@/components/ui/button';
import { SquarePlus } from 'lucide-react';

export const metadata = {
  title: 'FAQ',
};
export default function page() {
  return (
    <>
      <h1 className="p-2 text-center text-xl font-bold">여기는 FAQ 페이지 입니다.</h1>
      <FaqList />
      <Button className="m-1 cursor-pointer">
        <SquarePlus />
        관리자 한정 - FAQ 추가
      </Button>
    </>
  );
}
