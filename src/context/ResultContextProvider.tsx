import React, { createContext, useContext, useState, ReactNode } from "react";

const ResultContext = createContext({});
const baseUrl = "https://google-api31.p.rapidapi.com";

interface Props {
  children?: ReactNode;
}

export const ResultContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  const getResults = async (endpoint: String, body: any) => {
    setIsLoading(true);

    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "594e7e8244msh4ebbc6fc4f2cd14p157569jsnd4051294d513",
        "X-RapidAPI-Host": "google-api31.p.rapidapi.com",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    console.log(data);
    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, isLoading, searchParam, setSearchParam }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
