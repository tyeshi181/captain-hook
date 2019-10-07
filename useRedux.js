import { useEffect } from "react";
import { useRedux } from "use-redux";

const Counter = () => {
  const [state, dispatch] = useRedux();

  useEffect(() => {
    const timeOut = setTimeout(
      () => dispatch({ type: "SET", count: state.count + 1 }),
      1000
    );
    return () => clearTimeout(timeOut);
  }, []);
  return state.count;
};

export default Counter;
