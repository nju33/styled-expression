import {css, FlattenInterpolation, ThemeProps} from 'styled-components';
import {createExpression, CreateStyle, Dictionary, Getter} from './expression';

interface FlexAttribute extends Dictionary {
  display?: string;
  flexDirection?: string;
  flexWrap?: string;
  justifyContent?: string;
  alignItems?: string;
}

const defaults = {
  display: 'flex',
};

const getFrom = <T extends FlexAttribute>(attr: T & Dictionary) => (
  propname: string,
) => () => {
  return attr[propname];
};

export const createStyle: CreateStyle<FlexAttribute> = attr => {
  const getAttr = getFrom(attr);

  return css`
    display: ${getAttr('display')};
    flex-direction: ${getAttr('flexDirection')};
    justify-content: ${getAttr('justifyContent')};
    align-items: ${getAttr('alignItems')};
  `;
};

export function expression<T extends FlexAttribute & Dictionary>(attr: T) {}
export namespace expression {
  export let attr: Dictionary = {};
}

const getter: Getter<FlexAttribute> = (fn, prop) => {
  switch (prop) {
    case '_': {
      break;
    }
    case 'inline': {
      fn.attrs.display = 'inline-flex';
      break;
    }
    case 'column': {
      fn.attrs.flexDirection = 'column';
      if (fn.attrs.justifyContent === 'center' || fn.attrs.alignItems !== 'center') {
        delete fn.attrs.justifyContent;
        fn.attrs.alignItems = 'center';
      }
      break;
    }
    case 'center': {
      fn.attrs.justifyContent = 'center';
      fn.attrs.alignItems = 'center';
      break;
    }
    case 'xCenter': {
      if (fn.attrs.flexDirection === 'column') {
        fn.attrs.alignItems = 'center';
        delete fn.attrs.justifyContent;
      } else {
        fn.attrs.justifyContent = 'center';
        delete fn.attrs.alignItems;
      }
      break;
    }
    case 'yCenter': {
      if (fn.attrs.flexDirection === 'column') {
        fn.attrs.justifyContent = 'center';
        delete fn.attrs.alignItems;
      } else {
        fn.attrs.alignItems = 'center';
        delete fn.attrs.justifyContent;
      }
      break;
    }
    default:
      break;
  }

  return new Proxy(fn, {
    get: getter,
  });
};

export const flex = (createExpression(
  createStyle,
  defaults,
  getter,
) as any) as () => Record<
  '_' | 'inline' | 'center' | 'xCenter' | 'yCenter' | 'column',
  any
>;
