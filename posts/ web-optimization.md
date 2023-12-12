---
title: '웹 성능 최적화에 대하여...'
date: '2023.11.20'
category: webdocument
description: '웹 성능 최적화에 대하여...'
tags: ['web', '개발']
thumbnail: 'thumbnail.png'
---

웹 최적화에 대해 풀어보려한다. 우선 성능 측정 툴 **Lighthouse**, **Performance**과 최적화를 위한 본질적인 부분에 대해서 정리하려고 한다.


### Lighthouse

> Lighthouse 사용전 알아야 될것<br>
Lighthouse는 production build에서 확인!!!<br>
이유는 <br>
Production build 시 나름의 최적화가 진행되어 web vital이 상당부분 개선됨<br>

자 그럼 활용하는 방법은 몇가지가 있지만 Chrome extension 편리한거 같다. 

**Lighthouse**의 주요 기능으로는 크게 **성능분석**, **접근성검사**, **SEO평가**, **PWA기준 평가** 가 있는데...

일단 **Lighthouse**를 실행해서 보면
![](/images/posts/web-optimization/lighthouse.png)

1. Performance - 성능
2. Accessibility - 접근성
3. Best Practices - 보안관련
4. SEO - 검색 최적화
5. PWA - PWA 기준 확인

에 관한 지표가 나온다.
그럼 각 항목에 대해 자세히 살펴보면

#### Performance
![](/images/posts/web-optimization/performance01.png)

1. First Input Delay 
첫 이벤트 핸들링에 소요되는 시간
- 사용자가 버튼을 클릭하면
- 해당 버튼의 이벤트가 언제 발생하는지?

2. Largest Contentful Paint
페이지의 `주요 콘텐츠`가 얼마나 빨리 로드되는지 측정
- `주요 콘텐츠`라는 기준이 애매함
- 실제로는 가장 큰 텍스트나 이미지를 나타냄
- `빈칸이 언제 없어지는가` 정도로 표현 가능

3. CLS
- Cumulative Layout Shift
-  설계 이슈로 UI가 변경되는 것
- 영상참고
- https://web.dev/cls/




### Performance Tab

1. Runtime 성능 측정
- 렌더링 성능
- 자바스크립트 성능
- 메모리 관리
- 반응성(First Input Delay)
- 네트워크 성능

2. 주요 정보
- Loading
- Scripting
- Rendering
- Painting


**Lighthouse**, **Performance**은 백퍼센트 맞지는 않음

성능 측정 툴을 이용해서 어디서 어느 부분이 느린지 개선이 필요한지 알 수 있다.


자 여기서 생각해봐야 되는 부분은 최적화를 위한 본질적인 것은 무엇인지...
우선 Bundle size를 줄이는 방법이 있을것이다.

그렇다면 Bundle size를 줄이는 방법은 무엇인가?

클라이언트 단에서 할 수 있는 방법을 생각해본다면 **Code Splitting**이 있을것이다.

> Code Splitting이란? <br>
전체 용량이 줄어드는 것은 아니고 하나의 번들을 여러개로 잘게 쪼개는 것

예를 들어 100kb가 있다면 필요한 컴포넌트에서 필요한 부분만 쪼개서 가져오는것
리액트에서는 React lazy + Suspense의 조합을 사용함

이렇게 하면
- 최초 로딩시간이 단축되는 이점이 있음
- FCP, LCP, FID 개선 가능


그밖에 브라우저 cache, js 모듈 최적화 (강제 동기 레이아웃 피하기 / 레이아웃 스래싱(thrashing) 피하기),로딩 최적화, 렌더링 최적화등 고려해야될것들이 무지하게 많다...