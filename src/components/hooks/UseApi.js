import { useEffect, useState } from "react";

export default function UseApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://www.lacoste.com/on/demandware.store/Sites-FlagShip-Site/en_US/Search-GetFilters?cgid=Lacoste_Men_Clothing_Polos&format=json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // 

  return { data, error, loading };
}
