import ProductAddModal from '@/components/Admin/ADD/ProductAddModal';
import MainCarousel from '@/components/ETC/MainCarousel';
import ProductCard from '@/components/Product/Card/ProductCard';
import ProductFilter from '@/components/Product/Filter/ProductFilter';
import ProductSort from '@/components/Product/Sort/ProductSort';

export default function Home() {
  return (
    <>
      <MainCarousel />
      <div className="flex flex-row items-center justify-center gap-2">
        <ProductFilter />
        <ProductSort />
      </div>
      <div className="m-auto grid w-10/12 grid-cols-2 gap-2 lg:w-6/12 lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <ProductAddModal />
    </>
  );
}
