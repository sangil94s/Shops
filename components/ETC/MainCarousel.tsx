// 메인페이지 홍보 배너 역할의 캐러셀
'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useEffect } from 'react';
import Image from 'next/image';

const images = ['/Carousel/009.png', '/Carousel/010.png'];

export default function MainCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    slides: {
      perView: 1,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <>
      <div ref={sliderRef} className="keen-slider m-auto my-4 h-60 w-11/12">
        {images.map((src, index) => (
          <div key={index} className="keen-slider__slide flex items-center justify-center">
            <Image
              width={650}
              height={300}
              src={src}
              alt={`배너용 이미지`}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}
