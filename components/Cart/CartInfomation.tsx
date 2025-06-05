import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Tag } from 'lucide-react';
// 장바구니 초안

export default function CartInfomation() {
  return (
    <>
      <div className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6" />
              <h1 className="text-2xl font-bold">장바구니</h1>
              <Badge variant="secondary">10</Badge>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>상품 목록</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px] text-center">상품</TableHead>
                          <TableHead className="text-center">상품정보</TableHead>
                          <TableHead className="text-center">수량</TableHead>
                          <TableHead className="text-center">단가</TableHead>
                          <TableHead className="text-center">기타</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <div className="relative">
                              <Image
                                src={'/image81.png'}
                                alt={'이미지'}
                                width={80}
                                height={80}
                                className="rounded-lg object-cover"
                              />
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-center">
                              <h3 className="py-2 font-medium">러닝화</h3>
                              <div className="flex flex-col gap-1 text-sm text-gray-500">
                                <span>색상: 빨강</span>
                                <span>사이즈: XL</span>
                              </div>
                            </div>
                          </TableCell>

                          <TableCell>
                            <div className="flex items-center justify-center gap-2">
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-12 text-center font-medium">0</span>
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>

                          <TableCell className="text-center">
                            <div>
                              <div className="font-semibold">11111111111</div>
                              <div className="text-sm text-gray-500 line-through">
                                111111111111111111
                              </div>
                            </div>
                          </TableCell>

                          <TableCell>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-center text-gray-400 hover:text-red-500"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>주문 요약</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>상품 금액</span>
                    <span>5555555555</span>
                  </div>

                  <div className="flex justify-between text-green-600">
                    <span>할인 금액</span>
                    <span>- $000</span>
                  </div>

                  <div className="flex justify-between">
                    <span>배송비</span>
                    <span>
                      <span className="text-green-600">무료</span>
                    </span>
                  </div>
                  <Separator />

                  <div className="flex justify-between text-lg font-semibold">
                    <span>총 결제 금액</span>
                    <span className="text-blue-600">000000</span>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                  <Button className="w-full">주문하기</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
