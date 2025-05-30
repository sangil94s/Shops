import ProductDetail from '@/components/ProductDetail/ProductDetail';
import type { Metadata } from 'next';

export const metadata = {
  title: '수정예정',
};

export default function page() {
  return (
    <>
      <h1 className="py-2 text-center text-xl font-bold">상세 페이지</h1>

      <ProductDetail />
    </>
  );
}
