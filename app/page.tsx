import MainCarousel from '@/components/ETC/MainCarousel';
import ProductCard from '@/components/Product/Card/ProductCard';
import { Button } from '@/components/ui/button';
import { SquarePlus } from 'lucide-react';

export default function Home() {
  return (
    <>
      <MainCarousel />
      <div className="grid w-full grid-rows-1 lg:grid-cols-4">
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
