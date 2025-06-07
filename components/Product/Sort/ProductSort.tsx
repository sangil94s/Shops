// 상품 정렬 관련 컴포넌트
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

export default function ProductSort() {
  return (
    <>
      <Select>
        <SelectTrigger className="my-2 w-5/12 lg:w-2/12">
          <SelectValue placeholder="정렬 기준을 선택하세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="최신">최신 등록 순</SelectItem>
          <SelectItem value="이전">오래전 등록 순</SelectItem>
          <SelectItem value="가격높음">가격 높은 순</SelectItem>
          <SelectItem value="가격낮음">가격 낮은 순</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
