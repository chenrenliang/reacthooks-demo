import { useEffect, useState } from "react";

export default function WindowSize() {
  const [size, setSize] = useState(getSize());

  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  useEffect(() => {
    function handleResize() {
      setSize(getSize());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <p>
      width: {size.width}, height: {size.height}
    </p>
  );
}
