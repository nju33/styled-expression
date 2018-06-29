import {css, FlattenInterpolation, ThemeProps} from 'styled-components';

export type Expression = () => FlattenInterpolation<ThemeProps<any>>[];

export interface ExpressionProp {
  _: FlexAttr & {[k: string]: string};
}

export interface FlexAttr {
  display: string;
  flexDirection: string;
  flexWrap: string;
  justifyContent: string;
  alignItems: string;
}

const defaults: FlexAttr = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
};

const factory = (prev: {_: FlexAttr & {[k: string]: string}}) => {
  const flex: Expression = function() {
    const getAttr = getFrom((flex as any)._ || {...defaults});
    return css`
      display: ${getAttr('display')};
      justify-content: ${getAttr('justifyContent')};
    `;
  };

  (flex as any)._ = prev._;

  return flex;
};

const getter = (obj: {_: FlexAttr}, prop: string) => {
  switch (prop) {
    case 'inline': {
      obj._.display = 'inline-flex';
      break;
    }
    case 'center': {
      obj._.justifyContent = 'center';
      obj._.alignItems = 'center';
    }
    default:
      break;
  }

  return factory(obj);
};

const getFrom = (attr: FlexAttr & {[k: string]: string}) => (
  propname: string,
) => () => {
  return attr[propname];
};

export default () => {
  return new Proxy(
    {_: {...defaults}},
    {
      get: getter,
    },
  );
};
