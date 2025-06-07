// 상품 카테고리 별 필터링 목적의 컴포넌트
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

export default function ProductFilter() {
  return (
    <>
      <Select>
        <SelectTrigger className="my-2 w-5/12 lg:w-2/12">
          <SelectValue placeholder="운동 관련 상품 카테고리 선택하세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="웨이트">웨이트</SelectItem>
          <SelectItem value="러닝">러닝</SelectItem>
          <SelectItem value="축구">축구</SelectItem>
          <SelectItem value="야구">야구</SelectItem>
          <SelectItem value="농구">농구</SelectItem>
          <SelectItem value="기타">기타</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
