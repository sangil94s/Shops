// 아마도 데이터가 없을때 보여지는 목적

export default function Nodata() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="py-2 text-center font-bold text-red-600">데이터가 없습니다.</h1>
    </div>
  );
}
