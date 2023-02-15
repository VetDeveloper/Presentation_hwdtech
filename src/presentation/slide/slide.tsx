import { getTransformFuncByType, tagMapper } from "./transform-func-constructor.func";
import { simpleElement, slideJsonType } from "./types";

function generateNestedElement(element: simpleElement, id: number) {
  let childEl: JSX.Element = Array.isArray(element.value) ? (
    <>
      {element.value.map((lineElement: any, lineElemIndex: number) => {
        return generateNestedElement(lineElement, lineElemIndex);
      })}
    </>
  ) : (
    element.value
  );

  for (let i = element.type.length - 1; i >= 0; i--) {
    const transformFunc = getTransformFuncByType({
      type: element.type[i] as keyof typeof tagMapper,
      defaultTag: Array.isArray(element.value) ? "div" : "span"
    });
    childEl = transformFunc({id: id, childEl: childEl, jsonObj: element});
  }

  return childEl;
}

export function Slide({
  slideBody,
}: {
  slideBody: slideJsonType;
}): JSX.Element {
  return (
    // <Provider store={store}>
    <section
      className="slide"
      children={slideBody.map((partOfSlide, blockIndex) => {
        return generateNestedElement(partOfSlide, blockIndex);
      })}
    />
    // </Provider>
  );
}
