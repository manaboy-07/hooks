import { useEffect } from "react";
//custom hook
function useDocTitle(count) {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
}

export default useDocTitle;
