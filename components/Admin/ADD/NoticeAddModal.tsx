'use client';
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
import { useAuthStore } from '@/app/util/Zustand/useAuthStore';
// 관리자 전용 - 공지 추가 모달 초안

export default function NoticeAddModal() {
  const user = useAuthStore(state => state.user);

  return (
    <>
      <Dialog>
        {user?.permission === 'ADMIN' && (
          <DialogTrigger className="m-4 cursor-pointer font-bold">공지 추가</DialogTrigger>
        )}
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">관리자 전용 - 공지 추가</DialogTitle>
          </DialogHeader>

          <form className="w-full">
            <Input placeholder="공지 명을 입력하시오" />
            <p className="py-2 text-center font-bold text-red-600">입력 누락시 나오는 텍스트</p>
            <Input placeholder="설명을 입력하세요" />
            <p className="py-2 text-center font-bold text-red-600">입력 누락시 나오는 텍스트</p>
            <Select>
              <SelectTrigger className="my-2 w-full">
                <SelectValue placeholder="공지 카테고리 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="사이트이용">사이트 이용</SelectItem>
                <SelectItem value="배송">배송</SelectItem>
                <SelectItem value="결제">결제</SelectItem>
                <SelectItem value="기타">기타</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full" disabled>
              등록
            </Button>
            {/* 필수값 다 있으면 disabled 풀도록 */}
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
