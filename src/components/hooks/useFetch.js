import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/searchcontext";

export default function useFetch(url, foryou) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await resp.json();
        let finaldata = [];

        //search for top_track
        if (!foryou) {
          result.data.filter((item) => {
            if (item.top_track) {
              finaldata.push(item);
            }
          });
          setData(finaldata);
        } else {
          setData(result.data);
        }
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, foryou]);

  return { data, loading, error };
}
