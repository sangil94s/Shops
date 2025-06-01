import ProductAddModal from '@/components/Admin/ADD/ProductAddModal';
import MainCarousel from '@/components/ETC/MainCarousel';
import ProductCard from '@/components/Product/Card/ProductCard';
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
      <ProductAddModal />
    </>
  );
}
