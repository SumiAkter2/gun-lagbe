import  { useEffect, useState } from "react";

const useHook = () => {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return [guns, setGuns, cart, setCart];
};

export default useHook;
