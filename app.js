import "./styles.css";
//useState used to remember information, display it
import { useState } from "react";

//CREATING AND NESTING COMPONENTS, using UseState
//props inside {}
function MyButton({ count, onClick }) {
  //always capital letter
  return <button onClick={onClick}>Clicked {count} times</button>;
}

const user = {
  name: "Anton"
};

const products = [
  { title: "Carrot", isFruit: false, id: 1 },
  { title: "Juice", isFruit: true, id: 2 },
  { title: "red", isFruit: false, id: 3 }
];

export default function App() {
  const [count, setCount] = useState(0);
  //event handler
  function handleClick() {
    setCount(count + 1);
  }

  //USING MAP function for OBJECT
  const arrays = products.map((products) => (
    <li
      key={products.id}
      style={{
        //checking true or false
        color: products.isFruit ? "magenta" : "darkgreen"
      }}
    >
      {products.title}
    </li>
  ));

  return (
    <div>
      <h1 className="header">Welcome </h1>
      <h2>Counted Buttons</h2>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <h2>{user.name}</h2>
      {/* displaing data */}
      <ul>{arrays} </ul>
    </div>
  );
}

