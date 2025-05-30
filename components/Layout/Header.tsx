// Header
import { AlignJustify } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Link from 'next/link';
export default function Headers() {
  return (
    <>
      <header className="my-1 flex h-10 w-full flex-row justify-between border-b-2 border-slate-300">
        <Link href="/" className="p-1 text-xl font-bold">
          Logo
        </Link>

        <section className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <AlignJustify className="m-1 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-pointer">마이 페이지</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">로그인</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">로그아웃</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </header>
    </>
  );
}
