import React, { useState, useEffect, useRef, createContext } from "react";
import { useSpring, animated } from "react-spring";
import Toggle from "./Toggle";
import Counter from "./Counter";
import { useTitleInput } from "./hooks/useTitleInput";

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();

  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    console.log("ran");
    const res = await fetch(
      `https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes`
    );
    const data = await res.json();
    setDishes(data);
  };

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  useEffect(() => {
    fetchDishes();
  }, [name]);

  // console.log("ref", ref);

  // const reverseWord = (word) => {
  //   console.log("function called");
  //   return word.split("").reverse().join("");
  // };

  // const title = "LOVE LOVE LOVE EVIL";

  // const TitleReversed = useMemo(() => reverseWord(title), [title]);

  return (
    <UserContext.Provider
      value={{
        user: true,
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <animated.h1
          style={props}
          onClick={() => ref.current.classList.add("new-fake-class")}
        >
          Level Up Dishes
        </animated.h1>
        <Toggle />
        {/* <Counter /> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button>Submit</button>
        </form>
        {dishes &&
          dishes.map((dish) => (
            <article className="dish-card dish-card--withImage">
              <h3>{dish.name}</h3>
              <p>{dish.desc}</p>
              <div className="ingredients">
                {dish.ingredients.map((ingredient) => (
                  <span>{ingredient}</span>
                ))}
              </div>
            </article>
          ))}
      </div>
    </UserContext.Provider>
  );
};

export default App;
