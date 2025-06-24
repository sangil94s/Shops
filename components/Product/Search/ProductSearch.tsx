import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// 상품 검색 초안

export default function ProductSearch() {
  return (
    <div className="my-4 flex flex-row items-center justify-center">
      <Input className="w-6/12 lg:w-4/12" placeholder="검색어를 입력하시오" />
      <Button type="submit" variant="ghost">
        검색
        <Search />
      </Button>
    </div>
  );
}
