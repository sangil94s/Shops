import FAQAddModal from '@/components/Admin/ADD/FAQAddModal';
import FaqFilter from '@/components/FAQ/FaqFilter';
import FaqList from '@/components/FAQ/FaqList';

export const metadata = {
  title: 'FAQ',
};
export default function page() {
  return (
    <>
      <h1 className="p-2 text-center text-xl font-bold">여기는 FAQ 페이지 입니다.</h1>
      <FaqFilter />
      <FaqList />
      <div className="m-auto flex items-center justify-center">
        <FAQAddModal />
      </div>
    </>
  );
}
