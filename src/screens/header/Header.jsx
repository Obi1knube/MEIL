import { ReactTyped } from "react-typed";
import "./header.css";
function Header() {
  return (
    <div className="main-Info">
      <h1>Maintenance Engineering shift covers & Call-Outs</h1>
      <p> <b>Tel: (+44) 7833 464 281</b></p> 
      <h2> What is our mission?</h2>
      <ReactTyped
        strings={[
          "",
          "Our mission is to provide",
          "Efficient  ",
          "Electrical  Maintenance",
          "And",
          " Mechanical Maintenance services",
          "To a diverse ",
          "Range of clients",
          "Count on Us",
          "For your Company Web Development ",
          "And",
          "Web Search Engine Optimisation ",

          "",
          "",
        ]}
        typespeed={40}
        backspeed={50}
        loop
      ></ReactTyped>
    </div>
  );
}

export default Header;
