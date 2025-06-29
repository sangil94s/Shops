import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

// 공지사항 리스트 목적

export default function NoticeList() {
  return (
    <>
      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">카테고리</TableHead>
            <TableHead className="text-center">제목</TableHead>
            <TableHead className="text-center">작성자</TableHead>
            <TableHead className="text-center">작성일</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>사이트 이용</TableCell>
            <TableCell>2</TableCell>
            <TableCell>관리자</TableCell>
            <TableCell>2025-01-01 00:00:00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
