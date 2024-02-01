---
title: 'Next 13 렌더링 방식'
date: '2024.01.10'
category: webdocument
description: 'next의 app router'
tags: ['next']
thumbnail: 'thumbnail.png'
---


#### 들어가며

Next.js는 애플리케이션을 pages 단위로 나눈 뒤, 서버 단에서 HTML 페이지를 미리 렌더링 한 뒤 React로 하여금 클라이언트 단에서 hydrated 하는 방식을 가능함. 12버전에 page routing 이다.
즉 js를 받아와 하이드레이션이라는 기술로 csr도 가능. (다른 페이지로 이동하더라도 html 받아오지 않음)

#### 그럼 왜 13버전에서 app router에 RSC를 도입했는가?
pages router의 방식은 HTML 페이지가 상호작용이 가능하도록 하기까지 추가적인 JS의 로딩이 필요했다.
이를 보완하기 위해 등장한 개념이 바로 RSC이다.  
RSC는 특정 컴포넌트는 캐시를 사용하고, 다른 컴포넌트는 항상 새로 그리는 등의 전략 가능하다. 


### RSC란?
RSC 란, React Server Component로 서버에서 렌더링 되는 컴포넌트를 의미한다.  
RSC는 페이지 단위가 아닌 컴포넌트 단위로 전략을 세울 수 있다.
기존 page router에서는 페이지에 비동기 함수를 작성하여 페이지 단위로 전략을 세웠다면 Server Component에서는 컴퍼넌트 단위로 전략이 가능 즉, 컴포넌트엔 view만 있을 수 있다.

생각해 보면 pages router에서는 서버에서 데이터를 fetch 해오고 이를 컴포넌트에 전달하기 위해서는 최상단에서 getServerSideProps 함수를 사용하여 이를 하위 컴포넌트에 넘겨줘야 했다.

Server Component가 도입되면서 이제는 페이지의 최상단이 아닌 각각의 컴포넌트 안에서 비동기 데이터를 가져와 이용하는 것이 가능해진 것이다.


> Server Component에서 에서 SSR fetch 방법
>```js
>export default async function Page() {
>
>  await fetch(`https://...`) // SSR
>  await fetch(`https://...`, { cache: 'force-cache' }) // SSG
>  await fetch(`https://...`, { cache: 'no-store' }) // SSR
>  await fetch(`https://...`, {next: { revalidate: 10 }}) // ISP
> 
>  return <div>...</div>
>}
>```


### 언제 RSC를 사용해야 할까?

![](/images/posts/rsc-with-next/when.png)

표를 해석하면 React Hook이나 브라우저 API를 사용하려면 반드시 Client Component 로 만들어야 한다. (직렬화가 되어야 하므로) 아니라면 Server Component 사용

> 참고: 기본적으로 Next 13 app router는 Server Component이다.  
> Client Component로 전환하려면 최상단에 'use client' 기입하면 된다.


### RSC의 장점

**Zero Bundle Size**  
RSC는 서버에서 이미 렌더링된 다음 클라이언트에게 직렬화(serialize)된 형태로 전달되기 때문에 클라이언트 사이드에서 추가적인 로드가 필요없게 된다.

**Full Access to Backend**  
클라이언트 사이드에서 접근 불가능하던 데이터베이스에 손쉽게 접근할 수 있다. fs를 활용하거나 혹은 바로 데이터베이스에 접근할 수 있다.

**Automatic Code Splitting**  
기존에 code splitting을 위해서는 lazy load 또는 dynamic import를 활용해야 했다.

RSC에서는 client component를 import하는 경우 자동으로 dynamic import가 적용된다.

**No Client-Server Waterfalls**  
....작성중

**Loading UI and Streaming**


![기존 SSR의 Streaming](/images/posts/rsc-with-next/streaming1.png)

A: 서버에서 필요한 데이터를 받아온다.  
B: 데이터를 바탕으로 서버에서 html을 그려 보낸다.(TTFB)  
C: 클라이언트에서 non-interactive UI가 우선 표시된다.(FCP)  
D:  JS를 기반으로 하이드레이션이 일어나 인터랙션이 가능해진다.(TTI)  

![RSC Streaming](/images/posts/rsc-with-next/streaming1.png)

**Next13은 suspense와 함께 streaming지원**  
직접 suspense경계를 만들거나 loading 컨벤션을 사용할 수 있음.  

**html을 더 작은 청크로 분할하여 서버에서 점진적으로 전송하는 방식**  
서버에서 데이터 호출이 완료된 이후 컴포넌트가 완전히 그려짐

