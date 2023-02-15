import { functionInputType } from "../transform-func-constructor.func";

export function defaultTransformFunc(
    Tag: keyof JSX.IntrinsicElements,
    className: string,
    { id, childEl }: functionInputType
  ): JSX.Element {
    return (
      <Tag className={className} key={id}>
        {childEl}
      </Tag>
    );
  }