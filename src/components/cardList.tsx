"use client";

import Card from "./card";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const CardList = () => {
  const { todos } = useSelector((state: RootState) => state.todos);

  return (
    <section className="text-gray-300 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {todos && todos.length ? (
            todos.map((card, index) => (
              <div className="p-4 lg:w-1/3" key={index}>
                <Card {...card} index={index} />
              </div>
            ))
          ) : (
            <h1 className="text-white text-center mt-3">No Todos</h1>
          )}
        </div>
      </div>
    </section>
  );
};
export default CardList;
