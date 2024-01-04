"use client";
import { deleteTodo, updateTodo } from "@/store/todo/todoSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogFooter,
} from "./ui/alert-dialog";
import CreateCard from "./createCard";
import { Button } from "./ui/button";


export interface CardProps {
  title?: string;
  heading: string;
  text: string;
  link?: string;
  completed: boolean;
  index: number;
}

const Card = (props: CardProps) => {
  const [checked, setChecked] = useState(props.completed);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      updateTodo({ index: props.index, card: { ...props, completed: checked } })
    );
  }, [checked]);

  return (
    <>
      <div className="h-full bg-gray-700 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        {props.title && (
          <h2 className="tracking-widest text-xs title-font font-medium text-white-400 mb-1">
            {props.title}
          </h2>
        )}
        <div className="flex justify-center items-center gap-4 w-full">
          <h1
            className={`title-font text-xl font-medium text-white-900 mb-2 ${
              checked ? "line-through" : ""
            } `}
          >
            {props.heading}
          </h1>
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 border border-gray-900 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </div>
        <p className="leading-relaxed mb-3">{props.text}</p>
        {props.link && (
          <a className="text-purple-500 inline-flex items-center">
            {props.link}
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        )}

        <Button
          variant="destructive"
          type="button"
          className="mx-1"
          onClick={() => dispatch(deleteTodo(props.index))}
        >
          Delete
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Update</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-black">
            <AlertDialogFooter className="bg-black">
              <CreateCard
                card={props}
                cancelButton={<AlertDialogCancel>Close</AlertDialogCancel>}
              />
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default Card;
