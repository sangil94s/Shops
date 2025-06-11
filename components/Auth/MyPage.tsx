import {Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"

// 마이페이지용

export default function MyPage () {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
		<Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">마이 페이지</CardTitle>
          </CardHeader>
          <CardContent>
			<label className="font-bold">닉네임</label>
			<Input
			className="my-2"
              placeholder="닉네임"
            />
			<label className="font-bold">권한</label>
			<Input
			className="my-2"
              placeholder="권한"
            />
			<label className="font-bold">가입일</label>
			<Input
			 className="my-2"
              placeholder="가입일"
            />
		  </CardContent>
		  </Card>
		</div>
	)
}