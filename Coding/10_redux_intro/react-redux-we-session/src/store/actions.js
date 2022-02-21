import { INC_COUNT } from "./actionTypes.js";

export const incCount = (payload) => {
  return { type: INC_COUNT, payload: payload };
};
