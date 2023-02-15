import { functionInputType } from "../transform-func-constructor.func";

export function title({ id, childEl }: functionInputType): JSX.Element {
    return (
      <header className="title" key={id}>
        {childEl}
      </header>
    );
  }