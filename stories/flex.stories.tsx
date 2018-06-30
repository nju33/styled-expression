import React from 'react';

import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import styled from 'styled-components';
import {flex} from '../src/flex';

const stories = storiesOf('Flexbox', module);

stories.add(
  'mix',
  withInfo({
    header: false,
    inline: true,
    source: false,
    propTables: false,
    text: `
    ### Usage
    ~~~js
    const Mix = styled.div\`
      \${flex().inline.column.center()};
      width: 300px;
      height: 300px;
      font-size: 34px;
      font-weight: bold;
    \`;

    <Mix>
      <div>foo</div>
      <div>bar</div>
    </Mix>
    ~~~

    ### CSS
    ~~~css
      display: flex;
    ~~~
    `,
  })(() => {
    const Mix = styled.div`
      ${flex().inline.column.center()};
      width: 300px;
      height: 300px;
    `;

    return (
      <Mix>
        <div>foo</div>
        <div>bar</div>
      </Mix>
    );
  }),
);

stories.add(
  'flex',
  withInfo({
    header: false,
    inline: true,
    source: false,
    propTables: false,
    text: `
    ### Usage
    ~~~js
    const Flex = styled.div\`
      \${flex()._()};
    \`;

    <Flex>flex</Flex>
    ~~~

    ### CSS
    ~~~css
      display: flex;
    ~~~
    `,
  })(() => {
    const Flex = styled.div`
      ${flex()._()};
      font-size: 34px;
      font-weight: bold;
    `;
    return <Flex>flex</Flex>;
  }),
);

stories.add(
  'inline-flex',
  withInfo({
    header: false,
    inline: true,
    source: false,
    propTables: false,
    text: `
    ### Usage
    ~~~js
    const InlineFlex = styled.div\`
      \${flex().inline()};
    \`;

    <InlineFlex>inline-flex</InlineFlex>
    ~~~

    ### CSS
    ~~~css
      display: inline-flex;
    ~~~
    `,
  })(() => {
    const InlineFlex = styled.div`
      ${flex().inline()};
      font-size: 34px;
      font-weight: bold;
    `;
    return <InlineFlex>inline-flex</InlineFlex>;
  }),
);

stories.add(
  'flex-center',
  withInfo({
    header: false,
    inline: true,
    source: false,
    propTables: false,
    text: `
    ### Usage
    ~~~js
    const FlexCenter = styled.div\`
      \${flex().center()};
    \`;

    <FlexCenter>center</FlexCenter>
    ~~~

    ### CSS
    ~~~css
      justify-content: center;
      align-items: center;
    ~~~
    `,
  })(() => {
    const FlexCenter = styled.div`
      ${flex().center()};
      font-size: 34px;
      font-weight: bold;
    `;
    return <FlexCenter>center</FlexCenter>;
  }),
);

stories.add(
  'flex-x-center',
  withInfo({
    header: false,
    inline: true,
    source: false,
    propTables: false,
    text: `
    ### Usage
    ~~~js
    const FlexXCenter = styled.div\`
      \${flex().xCenter()};
    \`;

    <FlexXCenter>center</FlexXCenter>
    ~~~

    ### CSS
    ~~~css
      justify-content: center;
    ~~~
    `,
  })(() => {
    const FlexXCenter = styled.div`
      ${flex().xCenter()};
      font-size: 34px;
      font-weight: bold;
    `;
    return <FlexXCenter>center</FlexXCenter>;
  }),
);

stories.add(
  'flex-y-center',
  withInfo({
    header: false,
    inline: true,
    source: false,
    propTables: false,
    text: `
    ### Usage
    ~~~js
    const FlexYCenter = styled.div\`
      \${flex().yCenter()};
    \`;

    <FlexYCenter>center</FlexYCenter>
    ~~~

    ### CSS
    ~~~css
      align-items: center;
    ~~~
    `,
  })(() => {
    const FlexYCenter = styled.div`
      ${flex().yCenter()};
      font-size: 34px;
      font-weight: bold;
    `;
    return <FlexYCenter>center</FlexYCenter>;
  }),
);

stories.add(
  'column',
  withInfo({
    header: false,
    inline: true,
    source: false,
    propTables: false,
    text: `
    ### Usage
    ~~~js
    const Column = styled.div\`
      \${flex().column()};
    \`;

    <Column>
      <div>foo</div>
      <div>bar</div>
    </Column>

    ~~~

    ### CSS
    ~~~css
      flex-direction: column;
    ~~~
    `,
  })(() => {
    const Column = styled.div`
      ${flex().column()};
      font-size: 34px;
      font-weight: bold;
    `;
    return (
      <Column>
        <div>foo</div>
        <div>bar</div>
      </Column>
    );
  }),
);
