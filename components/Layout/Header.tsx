// Header
'use client';
import { AlignJustify, ShoppingBasket, Headset, LogIn, LogOut, NotepadText } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Headers() {
  const router = useRouter();

  const tempAlert = () => {
    alert('개발 예정입니다.');
  };
  return (
    <>
      <header className="my-1 flex h-10 w-full flex-row justify-between border-b-2 border-slate-300">
        <Link href="/" className="p-1 text-xl font-bold">
          Logo
        </Link>

        <section>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <AlignJustify className="m-1 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer" onClick={() => tempAlert()}>
                <NotepadText /> 마이 페이지
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={() => tempAlert()}>
                <ShoppingBasket /> 장바구니
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={() => router.push('/faq')}>
                <Headset /> FAQ
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={() => router.push('/login')}>
                <LogIn /> 로그인
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={() => tempAlert()}>
                <LogOut /> 로그아웃
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </header>
    </>
  );
}
