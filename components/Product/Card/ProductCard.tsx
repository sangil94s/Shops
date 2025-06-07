import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

// 상품 카드
// 추후 스켈레톤 UI 추가 예정
export default function ProductCard() {
  return (
    <>
      <Link href={`/detail/${1}`}>
        <Card className="m-1 transition-transform duration-200 ease-in-out hover:scale-105">
          <CardHeader>
            <Image
              src={'/image81.png'}
              width={300}
              height={300}
              alt="대표적 상품 이미지"
              className="m-auto rounded-md"
            />
            <CardTitle className="p-2 text-center text-base font-bold lg:text-xl">
              상품 명 배치 부분
            </CardTitle>
            <Badge variant="secondary" className="m-auto bg-blue-500 text-white dark:bg-blue-600">
              상품 카테고리
            </Badge>
            <CardDescription className="py-2 text-center text-sm lg:text-base">
              상품 가격 배치 부분
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </>
  );
}
