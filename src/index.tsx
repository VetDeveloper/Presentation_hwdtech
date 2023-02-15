import React from "react";
import ReactDOM from "react-dom/client";
import {
  Presentation,
  presentationJsonType,
} from "./presentation/presentation";

const prezaJson: presentationJsonType = {
  presentationBody: [
    [
      {
        type: ["para"],
        value: [
          {
            type: ["text"],
            value: "В тождестве ",
          },
          {
            type: ["formula"],
            value: "testFormula ",
          },
          {
            type: ["text"],
            value: "Найти общий знаменатель дроби",
          },
        ],
      },
      {
        type: ["para"],
        value: [
          {
            type: ["text"],
            value: "Возможно несколько вариантов ответа.",
          },
        ],
      },
      {
        type: ["multiSelect"],
        task: "task1",
        answer: 1,
        value: [
          {
            type: ["formula"],
            value: "First answer",
          },
        ],
      },
      {
        type: ["multiSelect"],
        task: "task1",
        answer: 2,
        value: [
          {
            type: ["text"],
            value: "Second answer",
          },
        ],
      },
      {
        type: ["para"],
        value: [
          {
            type: ["text"],
            value: "Следующий вопрос:",
          },
        ],
      },
      {
        type: ["multiSelect"],
        task: "task2",
        answer: 1,
        value: [
          {
            type: ["text"],
            value: "First answer",
          },
        ],
      },
      {
        type: ["multiSelect"],
        task: "task2",
        answer: 2,
        value: [
          {
            type: ["text"],
            value: "Second answer part 1",
          },
          {
            type: ["text"],
            value: " Second answer part 2",
          },
        ],
      },
      {
        type: ["title"],
        value: [
          {
            type: ["text"],
            value: "Теорема",
          },
          {
            type: ["definedTerm", "otherTag"],
            value: " Пифагора",
          },
        ],
      },
      {
        type: ["mainText"],
        value: [
          {
            type: ["text", "otherLineTag1", "otherLineTag2"],
            value: "main text 1",
          },
        ],
      },
    ],
    [
      {
        type: ["title"],
        value: [
          {
            type: ["text"],
            value: "text title 2",
          },
        ],
      },
      {
        type: ["mainText"],
        value: [
          {
            type: ["text"],
            value: "main text 2",
          },
        ],
      },
    ],
  ],
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Presentation presentationBody={prezaJson.presentationBody} />
  </React.StrictMode>
);
