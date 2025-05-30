import ProductCard from '@/components/Product/Card/ProductCard';
import { Button } from '@/components/ui/button';
import { SquarePlus } from 'lucide-react';

export default function Home() {
  return (
    <>
      <h1 className="py-2 text-center text-xl font-bold">메인 페이지</h1>
      <div className="grid w-full grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Button className="m-1 cursor-pointer">
        <SquarePlus />
        관리자 한정 - 상품 추가
      </Button>
    </>
  );
}
