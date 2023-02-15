import { Provider } from "react-redux";
import store from "../../../answers-states/store";

import { functionInputType } from "../../transform-func-constructor.func";
import { Checkbox } from "./checkbox";

export function multiSelect({ id, childEl, jsonObj }: functionInputType) {
  return (
    <Provider key={id} store={store}>
      <form className="multiSelect">
        <Checkbox  id={id} jsonObj={jsonObj} />
        <label  className="multiselect-label" htmlFor={id.toString()}>
          {childEl.props.children}
        </label>
      </form>
    </Provider>
  );
}
