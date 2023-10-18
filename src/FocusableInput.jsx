import { useEffect, useRef } from "react";

export function FocusableInput() {
  const _isMounted = useRef(false);

  useEffect(() => {
    if (!_isMounted.current) {
      console.log("montato per la prima volta");
      _isMounted.current = true;
    }
  }, []);

  return (
    <>
      <input type="text" />
    </>
  );
}
