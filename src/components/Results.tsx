import React, { useEffect, useState } from "react";
import { useResultContext } from "../context/ResultContextProvider";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

const Results = () => {
  const { getResults, results, searchParam, isLoading }: any =
    useResultContext();
  const [endpoint, setEndpoint] = useState("");
  const location = useLocation();

  // useEffect(() => {
  //   getResults(endpoint, {
  //     text: "Google ",
  //     safesearch: "off",
  //     timelimit: "",
  //     region: "wt-wt",
  //     max_results: 20,
  //   });
  // }, []);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      // setEndpoint("/websearch");
      return <h1>Search</h1>;
    case "/images":
      // setEndpoint("/imagesearch");
      return <h1>Images</h1>;
    case "/news":
      // setEndpoint("/");
      return <h1>News</h1>;
    case "/videos":
      // setEndpoint("/videosearch");
      return <h1>Videos</h1>;
    default:
      return <h1>Error</h1>;
  }
};

export default Results;
