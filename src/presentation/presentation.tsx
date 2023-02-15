import { Slide } from "./slide/slide";
import { slideJsonType } from "./slide/types";

export type presentationJsonType = {
  presentationBody: Array<slideJsonType>;
};

export const Presentation: React.FC<presentationJsonType> = ({
  presentationBody,
}): JSX.Element => {
  return (
    <article
      className="presentation"
      children={presentationBody.map((sl, id: number) => {
        return <Slide key={id} slideBody={sl} />;
      })}
    />
  );
};
