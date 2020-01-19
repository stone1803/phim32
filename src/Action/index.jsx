import userServe from "./user";

export const createAction = (type, payload) => {
  return {
    type,
    payload
  };
};

export const userServes = new userServe();
