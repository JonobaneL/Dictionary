import { useEffect, useState } from "react";

export const useReques = (query: string) => {
  const [request, setRequest] = useState("");
  useEffect(() => {
    const time = setTimeout(() => setRequest(query), 600);
    return () => clearTimeout(time);
  }, [query]);

  return request;
};
