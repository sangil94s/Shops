import NoticeAddModal from '@/components/Admin/ADD/NoticeAddModal';
import Nodata from '@/components/ETC/Nodata';
import NoticeFilter from '@/components/Notice/NoticeFilter';

// 공지사항 관련

export const metadata = {
  title: '공지사항',
};
export default function page() {
  return (
    <>
      <h1 className="p-2 text-center text-xl font-bold">공지 사항 페이지 입니다.</h1>
      <NoticeFilter />
      <Nodata />
      <div className="m-auto flex items-center justify-center">
        <NoticeAddModal />
      </div>
    </>
  );
}
