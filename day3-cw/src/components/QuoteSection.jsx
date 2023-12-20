import React from "react";
import { data } from "../data/quoteData";
import QuoteCard from "./QuoteCard";

const quoteData = data[0].quotes;

function QuoteSection() {
  return (
    <div>
      {quoteData.map((item) => (
        <QuoteCard data={item}></QuoteCard>
      ))}
    </div>
  );
}

export default QuoteSection;
