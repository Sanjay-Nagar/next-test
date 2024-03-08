import CardList from "@/components/cardList";
import CreateCard from "@/components/createCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cards",
};
const Cards = () => {
  return (
    <>
      <div className="w-1/2 mx-auto">
        <CreateCard />
        change
      </div>
      <hr className="hr my-5" />
      <CardList />
    </>
  );
};

export default Cards;
