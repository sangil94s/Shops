import Image from 'next/image';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ShoppingBasket } from 'lucide-react';

// 상품에 대한 정보를 보여주는 목적의 컴포넌트 입니다.

export default function ProductDetail() {
  return (
    <>
      <div className="m-auto flex h-max w-11/12 flex-col items-center justify-between lg:flex-row">
        <section className="m-2 w-6/12 rounded-md border border-slate-300">
          <Image
            src={'/image81.png'}
            width={400}
            height={300}
            alt="대표적 상품 이미지"
            className="m-auto"
          />
        </section>

        <section className="w-full rounded-md border border-slate-300">
          <h1 className="py-4 text-center font-bold">상품 제목 배치 지역</h1>
          <p className="py-4 text-center font-bold">상품 간단 정보 배치 지역: </p>
          <p className="py-4 text-center font-bold">상품 가격 배치 지역: </p>
          <Select>
            <SelectTrigger className="my-2 w-full">
              <SelectValue placeholder="상품 수량을 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Button className="my-1 w-full">
            <ShoppingBasket />
            장바구니 담기
          </Button>
        </section>
      </div>
    </>
  );
}
