import { functionInputType } from "../transform-func-constructor.func";

export function definedTerm({ id, childEl }: functionInputType): JSX.Element {
    return (
      <strong className="definedTerm" key={id}>
        {childEl}
      </strong>
    );
  }