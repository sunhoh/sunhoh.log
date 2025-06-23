---
title: 'next/image 들처보기'
date: '2024.06.21'
category: webdocument
description: 'next image가 해주는것?'
tags: ['next','image']
---


next image에 대해 알아보자

@NEXT.JS / Image
![](/images/posts/next-image/image.png)

번역하자면 **크기 최적화, 시각적 안정성, 페이지 로드 속도 향상, 자산 유연성** 의 지원한다 라고 되어 있다.


<details>
<summary>크기 최적화</summary>

NEXT.JS에서는 ”WebP와 같은 최신 이미지 형식을 사용하여 각 장치에 맞게 올바른 크기의 이미지를 자동으로 제공한다.” 라고 되어 있다.

#### 그럼 WebP가 얼마나 파일의 크기를 줄여주는것인가?
>다른 확장자와 비교 
>![](/images/posts/next-image/image4.png) 

**Next.js 이미지 최적화 결과 분석**

![](/images/posts/next-image/image3.png)


jpg, svg, webp, avif를 next/image로 web에 빌드한 결과 
![](/images/posts/next-image/comparison.png)

svg를 제외한 나머지 확장자는 `next/image` 가 webp로 변환한 것을 알 수 있음

여기서 두 가지 이상한 점
svg는 왜 변환이 안되지?  avif도 압축 파일인데 webp로 다시 압축?

>avif는 webp보다 이미지와 애니메이션 포맷에 높은 효율을 자랑하는 형식이다. 


#### 그럼 왜 webp일까? avif도 있는데

AVIF는 WebP보다 최신 형식이며, 더 나은 압축률과 품질을 제공하지만, 브라우저 지원 범위가 WebP보다 좁습니다. 

#### 그럼 왜 svg는 변환하지 않는것인가?

**with claude-4 : SVG는 벡터 포맷이기 때문에 Next.js Image 최적화에서 제외됩니다.**

- **벡터 포맷**: SVG는 해상도에 무관하게 무손실 크기 조정 가능
- **보안 위험**: SVG는 HTML/CSS와 유사한 기능을 가져 보안 취약점 가능성
- **크기 효율성**: 이미 작은 크기의 벡터 이미지


SVG같은 경우에는 동일한 URL이라면 캐싱이 되는거 같다.
```js
// NEXT.JS / get-img-props.ts
if (
   isDefaultLoader &&
   !config.dangerouslyAllowSVG &&
   src.split('?', 1)[0].endsWith('.svg')
 ) {
   // Special case to make svg serve as-is to avoid proxying
   // through the built-in Image Optimization API.
   unoptimized = true
 }
```
![](/images/posts/next-image/image2.png)



#### Next.js에서 어떻게 webp로 변환 시켜주는 것인가?  ( 잘 모르겠…)

1. **Next.js 내부 로직**: 브라우저 Accept 헤더 → 지원 포맷 감지 → 자동 변환

Client Side Render
```jsx
// get-img-props.ts
// generateImgAttrs 함수에서 loader 호출
const imgAttributes = generateImgAttrs({
  config,
  src,
  unoptimized,
  width: widthInt,
  quality: qualityInt,
  sizes,
  loader, // 🎯 이것이 WebP 변환의 핵심!
})

// generateImgAttrs 함수 내부
function generateImgAttrs({
  config,
  src,
  unoptimized,
  width,
  quality,
  sizes,
  loader,
}: GenImgAttrsData): GenImgAttrsResult {
  if (unoptimized) {
    return { src, srcSet: undefined, sizes: undefined }
  }

  const { widths, kind } = getWidths(config, width, sizes)
  const last = widths.length - 1

  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths
      .map(
        (w, i) =>
          `${loader({ config, src, quality, width: w })} ${  // 🚀 여기서 loader 호출!
            kind === 'w' ? w : i + 1
          }${kind}`
      )
      .join(', '),
    src: loader({ config, src, quality, width: widths[last] }),  // 🚀 여기서도 loader 호출!
  }
}
```

Server Side Render

```jsx
// image-optimizer.ts
export async function optimizeImage({
  buffer,
  contentType,
  quality,
  width,
  height,
  // ...
}: {
  buffer: Buffer
  contentType: string
  quality: number
  width: number
  // ...
}): Promise<Buffer> {
  const sharp = getSharp(concurrency)
  const transformer = sharp(buffer, {
    limitInputPixels,
    sequentialRead: sequentialRead ?? undefined,
  })

  // 🎯 포맷별 최적화 로직
  if (contentType === AVIF) {
    transformer.avif({
      quality: Math.max(quality - 20, 1), // AVIF는 quality -20
      effort: 3,
    })
  } else if (contentType === WEBP) {
    transformer.webp({ quality })         // WebP 변환
  } else if (contentType === PNG) {
    transformer.png({ quality })
  } else if (contentType === JPEG) {
    transformer.jpeg({ quality, mozjpeg: true })
  }

  const optimizedBuffer = await transformer.toBuffer()
  return optimizedBuffer
}
```
</details>

<details>
<summary>시각적 안정성 (레이아웃 이동 방지)</summary>

**CLS (Cumulative Layout Shift)
레이아웃 시프트 방지 (CLS 방지) -** 이미지 로딩 전에 공간 확보 

```jsx
// ❌ 일반 img 태그 - 레이아웃 이동 발생
<img src="/large-image.jpg" alt="큰 이미지" />
// 이미지 로딩 완료 시 갑자기 페이지가 밀려남! 😵

// ✅ Next.js Image - 공간 미리 확보
<Image 
  src="/large-image.jpg" 
  alt="큰 이미지"
  width={800}    // 🎯 미리 공간 확보
  height={600}   // 🎯 레이아웃 이동 방지
/>
```

이미지를 정적으로 가져오는 경우 Next.js는 내장된 . [`width`](https://nextjs.org/docs/app/api-reference/components/image#width-and-height)와 [`height`](https://nextjs.org/docs/app/api-reference/components/image#width-and-height).를 자동으로 결정합니다. 이 값은 이미지 비율을 결정하고 [누적 레이아웃 이동(Cumulative Layout Shift)을 방지하는 데 사용됩니다.](https://web.dev/articles/cls)이미지가 로딩되는 동안. - NEXT.JS

#### 실제 크기를 반영하는것인가?

근데 보통은 이미지는 100%으로 하고 부모의 크기조절로 핸들링하는 경우가 많은데 부모의 크기를 받고 싶을때는?

```jsx
<div className="relative w-full h-64"> {/* 부모가 크기 결정 */}
  <Image
    src="/images/meonji.jpg"
    alt="sample"
    fill={true}           // 🎯 부모 크기에 맞춤!
    className="object-cover" // object-fit: cover
  />
</div>

<div className="w-full max-w-lg"> {/* 부모가 크기 결정 */}
  <Image
    src="/images/meonji.jpg"
    alt="sample"
    width={574}
    height={430}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="w-full h-auto" // 🎯 CSS로 실제 크기 조절!
  />
</div>
```

> 즉 CPR 순서대로 DOM이 그려지기 때문에 미리 width,height로 레이아웃 시프트 방지, 공간을 확보하고 실제 크기는 세팅은 CSS DOM이 그리면서 하는듯.
>

</details>

<details>
<summary>페이지 로드 속도 향상</summary>

**지연 로딩 (Lazy Loading)**

```jsx
// ✅ 뷰포트에 들어올 때만 로딩
<Image 
  src="/heavy-image.jpg"
  alt="무거운 이미지"
  width={500}
  height={300}
  loading="lazy"  // 🚀 기본값: 화면에 보일 때만 로딩
/>
```

NEXT.JS에서 어떻게 적용되고 있는지 확인하기

**블러업 플레이스홀더**

```jsx
// ✅ 로딩 중 블러 효과
<Image 
  src="/profile.jpg"
  alt="프로필 사진"
  width={200}
  height={200}
  placeholder="blur"           // 🌫️ 블러 효과
  blurDataURL="data:image/..."  // 🎨 저화질 미리보기
/>

// 🤖 자동 블러 (로컬 이미지)
import profilePic from './profile.jpg'

<Image 
  src={profilePic}
  alt="프로필"
  placeholder="blur"  // 🎯 자동으로 blurDataURL 생성!
/>

//참고
Unhandled Runtime Error
Error: Image with src "/images/meonji.jpg" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: jpeg,png,webp,avif (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url

해결책 3가지
1️⃣ blurDataURL
2️⃣ Static Import 사용하기 
```

**우선순위 설정**

```jsx
// ✅ 중요한 이미지는 즉시 로딩
<Image 
  src="/hero-banner.jpg"
  alt="메인 배너"
  width={1200}
  height={400}
  priority={true}  // 🚀 즉시 로딩 (LCP 개선)
/>
```
</details>

<details>
<summary>자산 유연성 (원격 이미지 크기 조정)</summary>

**원격 이미지 최적화**

```jsx
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/images/**',
      },
    ],
  },
}

// ✅ 원격 이미지도 자동 최적화
<Image 
  src="https://example.com/images/huge-photo.jpg"
  alt="원격 이미지"
  width={400}   // 🎯 원본이 4K여도 400px로 최적화
  height={300}
/>
```

**반응형 이미지**

```jsx
// ✅ 화면 크기별 다른 크기 제공
<Image 
  src="/responsive-image.jpg"
  alt="반응형 이미지"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  // 📱 모바일: 전체 너비
  // 💻 태블릿: 50% 너비  
  // 🖥️ 데스크톱: 33% 너비
/>
```

 **fill 모드 (부모 컨테이너 채우기)**

```jsx
// ✅ 부모 요소 크기에 맞춰 자동 조정
<div style={{ position: 'relative', width: '100%', height: '400px' }}>
  <Image 
    src="/flexible-image.jpg"
    alt="유연한 이미지"
    fill               // 🎯 부모 컨테이너 크기에 맞춤
    style={{ objectFit: 'cover' }}  // 🖼️ 비율 유지하며 채우기
  />
</div>
```
</details>


<br/>
<br/>

-----

- [sunhoh/next-image-example](https://github.com/sunhoh/next-image-example)
- [Next.JS](https://github.com/vercel/next.js)
- [Getting Started: Images](https://nextjs.org/docs/app/getting-started/images)