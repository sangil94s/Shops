import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export default function NoticeFilter() {
  return (
    <>
      <Select>
        <SelectTrigger className="my-2 w-5/12 cursor-pointer lg:w-2/12">
          <SelectValue placeholder="공지사항 카테고리 선택하세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="사이트이용">사이트이용</SelectItem>
          <SelectItem value="결제">결제</SelectItem>
          <SelectItem value="배송">배송</SelectItem>
          <SelectItem value="기타">기타</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
