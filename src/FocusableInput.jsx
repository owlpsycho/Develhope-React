import { useEffect, useRef } from "react";

export function FocusableInput() {
  const _inputRef = useRef(null);

  useEffect(() => {
    _inputRef.current?.focus();
  }, []);

  return (
    <>
      <input ref={_inputRef} type="text" />
    </>
  );
}
