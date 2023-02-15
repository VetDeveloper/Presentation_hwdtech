import { functionInputType } from "../transform-func-constructor.func";

export function para({ id, childEl }: functionInputType) {
    return (
      <div key={id} className="para">
        {childEl}
      </div>
    );
  }