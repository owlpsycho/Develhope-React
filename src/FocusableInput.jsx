import { useEffect, useRef } from "react";
import { Button } from 'react-bootstrap';

export function FocusableInput() {
  const _inputRef = useRef(null);

  useEffect(() => {
    _inputRef.current?.focus();
  }, []);

  return (
    <>
      <input ref={_inputRef} type="text" />
      <Button onClick={() => alert('Button was Clicked')} variant="success">Click</Button>
    </>
  );
}
