# styled-expression

## Storybook

https://nju33.github.io/styled-expression/

## Note

This does not work with IE 11 etc because it uses the Proxy API.

## Install

```bash
yarn add styled-components styled-expression
```

## Example

```ts
import styled from 'styled-components';
import {flex} from 'styled-expression';

const InlineFlex = styled.div`
	${flex().inline()};
`;
// <div style={{display: 'inline-flex'}} />

const InlineCenterColumnFlex = styled.div`
	${flex().inline.center.column()};
`;
// <div style={{
//		display:  'inline-flex',
//		justifyContent: 'center',
//		alignItems: 'center',
//		flexDirection: 'column'
// }} />
```
