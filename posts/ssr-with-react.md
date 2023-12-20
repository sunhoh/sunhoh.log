---
title: 'React로 SSR은 어떻게?'
date: '2023.10.10'
category: webdocument
description: 'universal rendering이라고 들어봤니?'
tags: ['dom', 'ssr', 'react', 'univeral rendering']
thumbnail: 'thumbnail.png'
---

React에서 말하는 SSR은 SPA의 방식을 조합한 `Univeral Rendering`이라고 한다.  
그럼 어떻게 React는 `Univeral Rendering`을 만들어 내는가?

![출처: React Discussion](/images/posts/ssr-with-react/ssr.png)

## 리액트의 방식은?

React의 경우 서버 측 [React(`react-dom/server`)](https://ko.react.dev/reference/react-dom/server)에서 한번 앱을 렌더링하고, 문자열로 변환(`serialization`)해 클라이언트 쪽으로 넘겨준다.
클라이언트는 한번 더 렌더링을 하긴 하지만, 넘겨 받은 결과물에 JavaScript 이벤트 리스너를 연결하는 동작(`hydration`)을 한다.

왜 `serialization(직렬화)`된 데이터를 JavaScript 이벤트 리스너를 연결하는 동작 `hydration(수화)`를 하는걸까?

그 이유는 JSON 포맷으로 직렬화 할 수 없는 값들이 포함되어 있기 때문이다. 
예를 들어 function이나 배열 안에 다양한 데이터 타입이 사용되었거나 순환 참조등... JSON 포맷에 속하지 않기 때문에 `JSON.stringify()` 등을 사용할 경우 값이 사라진다.

hydrate를 사용하면 클라이언트 측 React는 서버 측에서 React로 렌더링 된 HTML을 읽고, 원래 이벤트 리스너가 달려 있어야 하는 DOM들의 위치를 찾아 이벤트 리스너를 달아주게 된다.

## 직렬화는 어떻게?
[Server React DOM APIs](https://ko.react.dev/reference/react-dom/server)에서 **Node.js Streams**, **Web Streams**, **스트림을 지원하지 않는 환경**의 메소드들이 있다.

ReactDOMServer API 중 renderToString 예시로 이 함수는 인자로 React 컴포넌트를 넣으면 HTML 문자열을 리턴한다.

```js 
  ReactDOMServer.renderToString(element)
```

예를 들어 어떠한 컴포넌트를 ssr한다고 가정했을때 index.html의 `<div id="root"></div>`에
직렬화한 코드(`ReactDOM.renderToString(element)`)를 div#id 에 끼워넣으면 된다. 
요약하자면, 서버에서 React Component를 렌더링하고, 서버렌더링 결과물을 클라이언트 결과물에 Hydrate하면 된다.


## 얕은 예제


```js
// index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React-Router</title>
    <script type="text/javascript">
      window.__INITIAL_DATA__ = __DATA_FROM_SERVER__;
    </script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

```
- window.__INITIAL_DATA__ = __DATA_FROM_SERVER__; 이부분은 서버에서 넘어오는 초기값이 담겨진다.


```js
// server.js
import React from "react";
import ReactDOM from "react-dom/server";
import express from "express";
import fs from "fs";
import path from "path";
import App from "./App.js";

const app = express();
app.use("/dist", express.static("dist"));

app.get("*", (req, res) => {
  let indexHTML = fs.readFileSync( // 1번
    path.resolve(__dirname, "../dist/index.html"),
    "utf8"
  );

  const result = ReactDOM.renderToString(<About />); // 2번
  const initialData = { name: "ssr" };

  indexHTML = indexHTML
    .replace('<div id="root"></div>', `<div id="root">${result}</div>`)  // 3번
    .replace("__DATA_FROM_SERVER__", JSON.stringify(initialData)); // head script에 server 측 주입

  return res.status(200).send(indexHTML);
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000"); // 4번
});

```
1. `indexHTML` 변수에 HTML 파일을 읽어서 저장한다.  
2. React로 렌더링한 컴포넌트를 문자열로 직렬화 해서 `result`변수에 담는다.  
3. `indexHTML.replace`로 직렬화한 코드를 `div#id` 에 끼워넣는다.
4. `return res.status(200).send(indexHTML)` 에서 최종적으로 서버 응답 보낸다.


```js
// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./screen/Home.js";
import About from "./screen/About.js";
import { Router, Route } from "./libs/Router";
import routes  form './routes'

const container = document.getElementById("root");
const initialData = window.__INITIAL_DATA__;

ReactDOM.hydrateRoot(
  container,
  <Router>
      {routes.map(({ path, component: Component }) => {
        return (
          <Route 
            key={path} 
            path={path} 
            component={<Component state={initialData} />} 
          />;
        )
      })}
    </Router>
 );

```


- response확인해보면 요청오면 서버 사이드 로직을 타기 때문에 첫 요청에 DOM이 채워져서 온다.  

![](/images/posts/ssr-with-react/response.png)

[**github 예제**](https://github.com/sunhoh/react-ssr)
