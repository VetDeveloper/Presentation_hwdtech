import { functionInputType } from "../transform-func-constructor.func";

export function text({ id, childEl }: functionInputType): JSX.Element {
    return (
      <span className="text" key={id}>
        {childEl}
      </span>
    );
  }