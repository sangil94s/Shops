import Nodata from '../ETC/Nodata';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

// FAQ 리스트 보여주는 부분
interface FAQList {
  id: number;
  adminId: number;
  title: string;
  description: string;
  category: string;
  createDate: string;
} // 추후 분리 예정
async function getFAQFatchDatas() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/faqs`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('데이터 호출 실패');
  }

  return res.json();
}
export default async function FaqList() {
  const getFAQData = await getFAQFatchDatas();
  return (
    <>
      {getFAQData.length === 0 && <Nodata />}
      {getFAQData.length >= 1 &&
        getFAQData.map((item: FAQList) => (
          <div className="m-auto w-10/12" key={item.id}>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {item.category} - {item.title}
                </AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
    </>
  );
}
