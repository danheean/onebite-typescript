import { useState } from "react";
import { useTodoDispatch } from "../App";

export default function Editor() {
  const [text, setText] = useState<string>("");
  const dispatch = useTodoDispatch();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickButton();
    }
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={onChangeInput}
        onKeyDown={onKeyDownHandler}
      />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
