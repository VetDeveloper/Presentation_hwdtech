import { functionInputType } from "../transform-func-constructor.func";

export function mainText({ id, childEl }: functionInputType): JSX.Element {
    return (
      <p className="mainText" key={id}>
        {childEl}
      </p>
    );
  }