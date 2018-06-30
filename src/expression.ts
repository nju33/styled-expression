import {FlattenInterpolation, ThemeProps} from 'styled-components';

export type Dictionary = {[k: string]: string | undefined};
export type Attribute<T extends object> = WeakMap<T, string>;

export type Getter<T extends object> = (
  target: {attrs: T},
  prop: string,
) => {attrs: T};

export type CreateStyle<T extends object> = (
  attr: T,
) => FlattenInterpolation<ThemeProps<any>>[];

export function createExpression<T extends object> (
  createStyle: CreateStyle<T>,
  attrs: any,
  getter: any,
) {
  return () => {
    const expressionFn = () => {
      return createStyle((expressionFn as any).attrs);
    };
    (expressionFn as any).attrs = {...attrs};

    return new Proxy(expressionFn, {
      get: getter,
    });
  };
};
