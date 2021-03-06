## With Me design-system

π with me λμμΈ μμ€ν μλλ€.

<br />

[![build CI](https://github.com/Team-WithMe/WithMe_UI/actions/workflows/ci.yml/badge.svg)](https://github.com/Team-WithMe/WithMe_UI/actions/workflows/ci.yml)

<br />

<details>
<summary>Todo List</summary>
<div markdown="1">

- [ ] scss κ΅¬μ‘° λ€μμ‘κΈ°
- [ ] κ° ν¨ν€μ§ name μμ 
- [ ] rollup μ€μ  λ³κ²½
- [ ] css var μ¬μ©
- [ ] μμνλ νΈ μμ±νκΈ°

---

- [x] Card Title μΆκ°
- [ ] Loading Spinner λ§λ€κΈ°
- [ ] Button Loading μν μΆκ°

</div>
</details>

<br />

## π Installation

npm

```
npm i @with-me/design @with-me/styles
```

yarn

```
yarn add @with-me/design @with-me/styles
```

<br />

## π Usage

μ΅μλ¨ νμΌμ ν΄λΉ style λ€μ import ν΄μ£ΌμΈμ! (ex: App.tsx, \_app.tsx)

```tsx
import '@with-me/styles/build/global.css'; // κΈ°λ³Έ μ€μ  style
import '@with-me/styles/build/design.css'; // componentμ style
```

<br />

μ€ν λ¦¬λΆμ μ°Έκ³ ν΄μ μ¬μ©νμλ©΄ λ©λλ€!

```tsx
import { Button } from '@with-me/design';

const App = () => <Button bgColor="primary">λ²νΌ</Button>;
```

<br />

### Next.js μμ μ¬μ© μ

next.config.js μμ λ€μκ³Ό κ°μ΄ μ€μ ν΄μ£ΌμΈμ!

```js
const withTM = require('next-transpile-modules')(['@with-me/design']);

/** @type {import('next').NextConfig} */
module.exports = withTM({ ... });
```

<br />

## π CSS variables

- μ€μκ° μ»€μ€νλ§μ΄μ§μ ν  μ μλλ‘ **css μ¬μ©μ μ μ λ³μ**λ₯Ό μ κ³΅ν©λλ€!
- with-me μ λͺ¨λ  λ³μλ **wm-** μΌλ‘ μμν©λλ€!
- `@with-me/styles/build/global.css` κ° μ μ©λ κ³³μ΄λ©΄ μ΄λμλ μ κ·Όνμ¬ μ€λ²λΌμ΄λ©μ ν  μ μμ΅λλ€.

<br />

```css
/* μ΅μμ λ³μ */
:root {
	--wm-primary: #6c5ce7;
	--wm-primary-outline: #6c5ce727;
	--wm-secondary: #a29bfe;

	--wm-purple: #341f97;
	--wm-bluebell: #5f27cd;

	--wm-danger: #e74c3c;
	--wm-danger-outline: #e74c3c77;
	--wm-danger-bg: #fff8f6;
	--wm-success: #008a05;
	--wm-white: #fff;

	--wm-error-bg: #fff8f6;
	--wm-line-color: #f1f3f7;
	--wm-body-color: #222;
	--wm-body-bg: #f8f9fd;

	--wm-gray-100: #222;
	--wm-gray-200: #484848;
	--wm-gray-300: #717171;
	--wm-gray-400: #808080;
	--wm-gray-500: #aaa;
	--wm-gray-600: #b0b0b0;
	--wm-gray-700: #c4c4c4;
	--wm-gray-800: #ddd;
	--wm-gray-900: #ededed;

	--wm-body-font-family: 'Noto Sans KR', sans-serif;
}
```

<br />

## π Links

- [npm](https://www.npmjs.com/package/@with-me/design)
- [storybook](https://with-me-ui.netlify.app)
- [github](https://github.com/Team-WithMe/WithMe_UI)
