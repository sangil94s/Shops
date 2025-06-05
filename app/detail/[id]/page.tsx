import ProductDetail from '@/components/ProductDetail/ProductDetail';
import ProductDetailReview from '@/components/ProductDetail/ProductDetailReview/ProductDetailReview';
import ReviewAddForm from '@/components/ProductDetail/ProductDetailReview/ReviewAddForm';
import type { Metadata } from 'next';

export const metadata = {
  title: '수정예정',
};

export default function page() {
  return (
    <>
      <ProductDetail />

      <h1 className="py-2 text-center text-xl font-bold">리뷰</h1>
      <ProductDetailReview />
      <ReviewAddForm />
    </>
  );
}
