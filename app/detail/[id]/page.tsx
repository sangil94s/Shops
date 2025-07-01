import ProductDetail from '@/components/ProductDetail/ProductDetail';
import ProductDetailReview from '@/components/ProductDetail/ProductDetailReview/ProductDetailReview';
import ReviewAddForm from '@/components/ProductDetail/ProductDetailReview/ReviewAddForm';

async function getProductDetail(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('상품 정보를 불러오지 못했습니다');

  return res.json();
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductDetail(id);

  return {
    title: `상품: ${product.title}`,
  };
}

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductDetail(id);
  return (
    <>
      <ProductDetail product={product} />

      <h1 className="py-2 text-center text-xl font-bold">리뷰</h1>
      <ProductDetailReview />
      <ReviewAddForm />
    </>
  );
}
