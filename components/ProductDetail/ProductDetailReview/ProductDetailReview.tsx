import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProductDetailReview() {
  return (
    <>
      <h1 className="py-2 text-center text-xl font-bold text-red-600">전체 리뷰 : XX개</h1>
      <Card className="my-4">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">홍길동</h4>
                    <span className="text-sm text-gray-500">2025-01-01 00:00:00</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="mb-2 font-medium">제목</h5>
                <p>본문</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
