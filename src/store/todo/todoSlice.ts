import { CardProps } from "@/components/card";
import { createSlice } from "@reduxjs/toolkit";
export const TODOS_STORE_KEY = "TODOS";

export interface TodoState {
  todos: CardProps[];
}
const getTodos = () => {
  if (typeof localStorage !== "undefined") {
    return JSON.parse(localStorage[TODOS_STORE_KEY] ?? "[]");
  } 
};
const initialState: TodoState = {
  todos: getTodos(),
};

const todoslice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: TodoState, { payload }: { payload: CardProps }) => {
      state.todos.push(payload);
      if (typeof localStorage !== "undefined")
        localStorage.setItem(TODOS_STORE_KEY, JSON.stringify(state.todos));
    },
    deleteTodo: (state: TodoState, { payload }: { payload: number }) => {
      state.todos.splice(payload, 1);
      if (typeof localStorage !== "undefined")
        localStorage.setItem(TODOS_STORE_KEY, JSON.stringify(state.todos));
    },
    updateTodo: (
      state: TodoState,
      { payload }: { payload: { index: number; card: CardProps } }
    ) => {
      state.todos[payload.index] = payload.card;
      if (typeof localStorage !== "undefined")
        localStorage.setItem(TODOS_STORE_KEY, JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoslice.actions;

export default todoslice.reducer;
