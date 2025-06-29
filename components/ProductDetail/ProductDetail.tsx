import Image from 'next/image';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ShoppingBasket } from 'lucide-react';

// 상품에 대한 정보를 보여주는 목적의 컴포넌트 입니다.
interface ProductDetailProps {
  product: {
    id: number;
    title: string;
    body: string;
  };
}
export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <>
      <div className="m-auto flex h-max w-11/12 flex-col items-center justify-between lg:flex-row">
        <section className="m-2 w-6/12">
          <Image
            src={'/image81.png'}
            width={500}
            height={300}
            alt="대표적 상품 이미지"
            className="m-auto rounded-md"
          />
        </section>

        <section className="w-full">
          <h1 className="py-4 text-center font-bold">제목 : {product?.title}</h1>
          <p className="py-4 text-center font-bold">상품 간단 정보 배치 지역: </p>
          <p className="py-4 text-center font-bold">상품 가격 배치 지역: </p>
          <div className="flex flex-col items-center justify-center">
            <Select>
              <SelectTrigger className="w-6/12">
                <SelectValue placeholder="상품 수량을 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
            <Button className="m-2 w-6/12 cursor-pointer font-bold">
              <ShoppingBasket />
              장바구니 담기
            </Button>
            {/* value가 1 미만이면 담기 버튼 비 활성화? */}
          </div>
        </section>
      </div>
    </>
  );
}
