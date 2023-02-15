import { createSlice, Slice } from "@reduxjs/toolkit";
import { payloadType, valueType } from "./types";

export const answersSlice: Slice = createSlice({
  name: "answers",
  initialState: {
    value: {},
  },

  reducers: {
    add: (
      state: { value: valueType },
      action: { payload: payloadType }
    ) => {
      const task: string = action.payload.task
      const value: string = action.payload.value
      task in state.value? state.value[task].push(value): state.value[task] = [value]
    },
    remove: (
      state: { value: valueType },
      action: { payload: payloadType }
    ) => {
      const task: string = action.payload.task
      const value: string = action.payload.value
      state.value[task] = state.value[task].filter((x) => x !== value);
    },
  },
});

export const { add, remove } = answersSlice.actions;
export default answersSlice.reducer;
