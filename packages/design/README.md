## @with-me/design

with me 디자인 시스템 입니다.

<br />

[![build CI](https://github.com/Team-WithMe/WithMe_UI/actions/workflows/ci.yml/badge.svg)](https://github.com/Team-WithMe/WithMe_UI/actions/workflows/ci.yml)

<br />

## 📕 Installation

npm

```
npm i @with-me/design @with-me/styles
```

yarn

```
yarn add @with-me/design @with-me/styles
```

<br />

## 📗 Usage

최상단 파일에 해당 style 들을 import 해주세요!

```tsx
import '@with-me/styles/build/global.css' // 기본 설정 style
import '@with-me/styles/build/design.css' // component의 style
```

<br />

스토리북을 참고해서 사용하시면 됩니다!

```tsx
import { Button } from '@with-me/design'

const App = () => <Button bgColor="primary">버튼</Button>
```

<br />

### Next.js 에서 사용 시

next.config.js 에서 다음과 같이 설정해주세요!

```js
const withTM = require('next-transpile-modules')(['@with-me/design']);

/** @type {import('next').NextConfig} */
module.exports = withTM({ ... });
```

<br />

## 📘 Links

- [github](https://github.com/Team-WithMe/WithMe_UI)
- [storybook](https://with-me-ui.netlify.app)
