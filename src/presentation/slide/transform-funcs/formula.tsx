import { functionInputType } from "../transform-func-constructor.func";

export function formula({ id, childEl }: functionInputType) {
    return (
      <span key={id} className="formula">
        {childEl}
      </span>
    );
  }