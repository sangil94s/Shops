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
import { useAuthStore } from '@/app/util/Zustand/useAuthStore';

export default function Headers() {
  const router = useRouter();
  const logout = useAuthStore(state => state.logout);
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const users = useAuthStore(state => state.user);

  const handleLogout = () => {
    logout();
    alert('로그아웃 되었습니다.');
    router.push('/');
  };

  const tempAlert = () => {
    alert('개발 예정입니다.');
  };
  return (
    <>
      <header className="my-1 flex h-10 w-full flex-row justify-between border-b-2 border-slate-300">
        <Link href="/" className="p-1 text-xl font-bold">
          Logo
        </Link>

        <section className="flex">
          <div>
            {users?.nickname !== undefined && (
              <p className="mx-4 my-1 font-bold text-blue-600">{users?.nickname}님 </p>
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <AlignJustify className="m-1 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {isAuthenticated && (
                <>
                  <Link href={`/mypagek/${users?.nickname}`}>
                    <DropdownMenuItem className="cursor-pointer">
                      <NotepadText /> 마이 페이지
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem className="cursor-pointer" onClick={() => tempAlert()}>
                    <ShoppingBasket /> 장바구니
                  </DropdownMenuItem>
                </>
              )}
              {users?.permission === 'ADMIN' && (
                <DropdownMenuItem className="cursor-pointer">
                  <NotepadText /> 관리자 페이지
                </DropdownMenuItem>
              )}
              <DropdownMenuItem className="cursor-pointer" onClick={() => router.push('/faq')}>
                <Headset /> FAQ
              </DropdownMenuItem>
              {!isAuthenticated ? (
                <DropdownMenuItem className="cursor-pointer" onClick={() => router.push('/login')}>
                  <LogIn /> 로그인
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                  <LogOut /> 로그아웃
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </header>
    </>
  );
}
