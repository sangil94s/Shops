import ProductAddModal from '@/components/Admin/ADD/ProductAddModal';
import MainCarousel from '@/components/ETC/MainCarousel';
import ProductCard from '@/components/Product/Card/ProductCard';
import ProductFilter from '@/components/Product/Filter/ProductFilter';
import ProductSearch from '@/components/Product/Search/ProductSearch';
import ProductSort from '@/components/Product/Sort/ProductSort';

export default function Home() {
  return (
    <>
      <h1 className="py-4 text-center font-bold text-red-600">해당 프로젝트는 진행 중 입니다!</h1>
      <MainCarousel />
      <div className="flex flex-row items-center justify-center gap-2">
        <ProductFilter />
        <ProductSort />
      </div>
      <div className="m-auto grid w-10/12 grid-cols-2 gap-2 lg:w-7/12 lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div>
        <ProductSearch />
      </div>
      <div className="m-auto flex items-center justify-center">
        <ProductAddModal />
      </div>
    </>
  );
}
