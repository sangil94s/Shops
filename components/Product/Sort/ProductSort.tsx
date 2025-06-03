// 상품 정렬 관련 컴포넌트
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

export default function ProductSort() {
  return (
    <>
      <Select>
        <SelectTrigger className="my-2 w-2/12">
          <SelectValue placeholder="정렬 기준을 선택하세요" />
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
