import dayjs from 'dayjs';
import Nodata from '../ETC/Nodata';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

// 공지사항 리스트 목적
interface ITypes {
  id: number;
  adminId: number;
  createDate?: string;
  updateDate?: string;
  category: string;
  description: string;
  title: string;
}
async function getNoticeFatchDatas() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/notices`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('데이터 호출 실패');
  }

  return res.json();
}

export default async function NoticeList() {
  const getNoticeData = await getNoticeFatchDatas();
  return (
    <>
      {getNoticeData.length === 0 && <Nodata />}
      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">카테고리</TableHead>
            <TableHead className="text-center">제목</TableHead>
            <TableHead className="text-center">작성일</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {getNoticeData.length >= 1 &&
            getNoticeData.map((item: ITypes) => (
              <TableRow key={item.id}>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{dayjs(item.createDate).format('YYYY-MM-DD')}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
