import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      <h1>Use Outside Click Hook</h1>
      {
        showContent ? (
        <div ref={ref}>
          <h1>This is random content</h1>
          <p>Click outside of this to close.</p>
        </div> 
        ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}