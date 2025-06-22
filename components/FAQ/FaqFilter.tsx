// 아마도 카테고리 기준 필터링

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export default function FaqFilter() {
  return (
    <>
      <Select>
        <SelectTrigger className="my-2 w-5/12 cursor-pointer lg:w-2/12">
          <SelectValue placeholder="FAQ 카테고리 선택하세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="배송">배송</SelectItem>
          <SelectItem value="결제">결제</SelectItem>
          <SelectItem value="취소환불">취소/환불</SelectItem>
          <SelectItem value="회원정보">회원정보</SelectItem>
          <SelectItem value="기타">기타</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
