import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SquarePlus } from 'lucide-react';

// 관리자 전용 -FAQ 추가 모달 초안

export default function FAQAddModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <SquarePlus /> FAQ 추가
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
