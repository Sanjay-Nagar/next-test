"use client";

import { addTodo, updateTodo } from "@/store/todo/todoSlice";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { CardProps } from "./card";
import { ReactNode } from "react";
import { Button } from "./ui/button";
export interface CreateCardProps {
  card?: CardProps;
  cancelButton?: ReactNode;
}
const CreateCard = ({ card, cancelButton }: CreateCardProps) => {
  const cardDetails: CardProps = {
    heading: card?.heading ?? "",
    completed: false,
    text: card?.text ?? "",
    index: card?.index ?? 0,
  };
  const dispatch = useDispatch();

  const actionText = card?.heading ? "Update" : "Create";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CardProps>({ defaultValues: cardDetails });

  const formSubmit: SubmitHandler<CardProps> = (formdata) => {
    const action = !card?.heading
      ? addTodo({ ...cardDetails, ...formdata })
      : updateTodo({
          index: cardDetails.index,
          card: { ...cardDetails, ...formdata },
        });
    dispatch(action);
  };
  return (
    <div className="bg-gray-900 bg-opacity-50 rounded-lg p-8 flex flex-col mx-auto  mt-10">
      <h2 className="text-white text-lg font-medium title-font mb-5">
        {actionText} Todo
      </h2>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="relative mb-4">
          <label htmlFor="title" className="leading-7 text-sm text-gray-400">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-600 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            {...register("heading", { required: true })}
          />
          {errors.heading?.type === "required" && (
            <span className="text-red-500">title required</span>
          )}
        </div>
        <div className="relative mb-4">
          <label htmlFor="desc" className="leading-7 text-sm text-gray-400">
            Description
          </label>
          <textarea
            id="text"
            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-600 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            {...register("text", { required: true })}
          />
          {errors.text?.type === "required" && (
            <span className="text-red-500">Description required</span>
          )}
        </div>
        <div className="flex gap-2">
          <Button type="submit" variant="outline" className="text-black">
            {actionText}
          </Button>
          {cancelButton}
        </div>
      </form>
    </div>
  );
};

export default CreateCard;
