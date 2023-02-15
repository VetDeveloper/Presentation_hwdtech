import { useDispatch } from "react-redux";
import { add, remove } from "../../../answers-states/answerSlice";

export type checkboxInputType = {
  id: number;
  [key: string]: any;
};

function click(
  task: string,
  target: EventTarget & HTMLInputElement,
  dispatch: any
) {
  const value: string = target.value;
  if (target.checked) {
    dispatch(
      add({
        task: task,
        value: value,
      })
    );
  } else {
    dispatch(
      remove({
        task: task,
        value: value,
      })
    );
  }
}

export function Checkbox({ id, jsonObj }: checkboxInputType) {
  const dispatch = useDispatch();
  return (
    <input
      className="checkbox"
      id={id.toString()}
      type={"checkbox"}
      value={jsonObj.answer}
      onChange={(e) => {
        click(jsonObj.task, e.target, dispatch);
      }}
    />
  );
}
