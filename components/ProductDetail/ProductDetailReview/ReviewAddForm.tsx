import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

// 리뷰 작성하는 부분

export default function ReviewAddForm() {
  return (
    <>
      <Card className="my-2">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">리뷰 작성하기</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div>
              <label className="font-bold">리뷰 제목</label>
              <Input placeholder="리뷰 제목을 입력해주세요" className="my-2" />
              <p className="py-2 text-center font-bold text-red-600">제목은 필수 값 입니다</p>
            </div>

            <div>
              <label className="font-bold">리뷰 내용</label>
              <textarea
                placeholder="상품에 대한 솔직한 후기를 남겨주세요"
                className="my-2 h-24 w-full resize-none"
              />
              <p className="py-2 text-center font-bold text-red-600">내용은 필수 값 입니다</p>
            </div>

            <Button variant="ghost" type="submit" className="w-full cursor-pointer font-bold">
              리뷰 등록하기
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
