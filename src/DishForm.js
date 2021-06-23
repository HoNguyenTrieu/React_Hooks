import React, { useRef } from "react";
import { useBodyScrollLock } from "./hooks/bodySccrollLock";
import { useOnclickOutside } from "./hooks/useOnclickOutside";

const DishForm = ({ setIsToggled }) => {
  const ref = useRef();
  useOnclickOutside(ref, () => setIsToggled(false));
  useBodyScrollLock();
  return (
    <div className="dish-card" ref={ref}>
      <form>
        <div className="form-row">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" />
        </div>
      </form>
    </div>
  );
};

export default DishForm;
