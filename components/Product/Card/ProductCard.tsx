import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

async function getProductFatchDatas() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('데이터 호출 실패');
  }

  return res.json();
}

// 상품 카드
// 추후 스켈레톤 UI 추가 예정
export default async function ProductCard() {
  const getProductData = await getProductFatchDatas();

  return (
    <>
      {getProductData &&
        getProductData.map((item: any) => (
          <Link href={`/detail/${item.id}`} key={item.id}>
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
                  상품 명: {item.id}
                </CardTitle>
                <Badge
                  variant="secondary"
                  className="m-auto bg-blue-500 text-white dark:bg-blue-600"
                >
                  카테고리 : {item.id}
                </Badge>
                <CardDescription className="py-2 text-center text-sm lg:text-base">
                  상품 가격: {item.id}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
    </>
  );
}
