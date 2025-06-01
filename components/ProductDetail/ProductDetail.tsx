// 상품에 대한 정보를 보여주는 목적의 컴포넌트 입니다.

export default function ProductDetail() {
  return (
    <>
      <div className="m-auto flex h-max w-11/12 flex-col items-center justify-center lg:flex-row">
        <section className="m-1 w-full rounded-md border border-slate-300">
          <h1>이미지 배치 지역</h1>
        </section>

        <section className="w-full rounded-md border border-slate-300">
          <h1>상품 정보와 가격 배치 지역</h1>
        </section>
      </div>
    </>
  );
}
