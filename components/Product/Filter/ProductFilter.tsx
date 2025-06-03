// 상품 카테고리 별 필터링 목적의 컴포넌트
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

export default function ProductFilter() {
  return (
    <>
      <Select>
        <SelectTrigger className="my-2 w-2/12">
          <SelectValue placeholder="운동 관련 상품 카테고리 선택하세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
