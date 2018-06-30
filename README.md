# styled-expression

## Note

This does not work with IE 11 etc.

## Install

```bash
yarn add styled-components styled-expression
```

## Example

```
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
