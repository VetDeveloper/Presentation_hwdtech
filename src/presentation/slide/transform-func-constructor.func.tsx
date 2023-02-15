import { defaultTransformFunc } from "./transform-funcs/default-transform-func";
import { definedTerm } from "./transform-funcs/defined-term";
import { formula } from "./transform-funcs/formula";
import { mainText } from "./transform-funcs/main-text";
import { multiSelect } from "./transform-funcs/multi-select/multi-select";
import { para } from "./transform-funcs/para";
import { text } from "./transform-funcs/text";
import { title } from "./transform-funcs/title";

export type inputFunctionObject = {
  [key: string]: any;
};

export type transformFunction = (
  id: number,
  childEl: JSX.Element
) => JSX.Element;

export type functionInputType = {
  id: number;
  childEl: JSX.Element;
  [key: string]: any;
};

export const tagMapper = {
  title: title,
  text: text,
  mainText: mainText,
  definedTerm: definedTerm,
  para: para,
  formula: formula,
  multiSelect: multiSelect,
};

type inputGetTagByType = {
  type: keyof typeof tagMapper;
  defaultTag: string;
  [key: string]: any;
};

export function getTransformFuncByType({
  type,
  defaultTag,
}: inputGetTagByType) {
  return tagMapper.hasOwnProperty(type)
    ? tagMapper[type]
    : ({ id, childEl }: functionInputType) =>
        defaultTransformFunc(defaultTag as keyof JSX.IntrinsicElements, type, {
          id: id,
          childEl: childEl,
        });
}
