import ProductAddModal from '@/components/Admin/ADD/ProductAddModal';
import MainCarousel from '@/components/ETC/MainCarousel';
import ProductCard from '@/components/Product/Card/ProductCard';
import ProductFilter from '@/components/Product/Filter/ProductFilter';
import ProductSort from '@/components/Product/Sort/ProductSort';

export default function Home() {
  return (
    <>
      <MainCarousel />
      <div className="flex flex-row gap-2">
        <ProductFilter />
        <ProductSort />
      </div>
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
