import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../redux/actions";

const Quote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  return <p className="quote">💡 "{quote}"</p>;
};

export default Quote;
