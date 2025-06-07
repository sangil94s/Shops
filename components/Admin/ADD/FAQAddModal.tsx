import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// 관리자 전용 -FAQ 추가 모달 초안

export default function FAQAddModal() {
  return (
    <Dialog>
      <DialogTrigger className="m-4 cursor-pointer font-bold">FAQ 추가</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>관리자 전용 - FAQ 추가</DialogTitle>
        </DialogHeader>
        <form className="w-full">
          <Input placeholder="상품 명을 입력하시오" />
          <p className="py-2 text-center font-bold text-red-600">입력 누락시 나오는 텍스트</p>
          <Input placeholder="설명을 입력하세요" />
          <p className="py-2 text-center font-bold text-red-600">입력 누락시 나오는 텍스트</p>
          <Select>
            <SelectTrigger className="my-2 w-full">
              <SelectValue placeholder="FAQ 카테고리 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full">등록</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
