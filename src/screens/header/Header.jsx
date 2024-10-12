import { ReactTyped } from "react-typed";
import "./header.css";
function Header() {
  return (
    <div className="main-Info">
      <h1>Multi-skilled Maintenance Engineers, for shift covers & Call-Outs</h1>

      <p>
        {" "}
        <b>Tel: (+44) 7833 464 281</b>
      </p>
      <div></div>
      <h2> Our services?</h2>
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
          "Count on Us For",
          "PLC and VFD controlled Automation ",
          "And",
          "Modern App and Web development ",

          "",
          "",
        ]}
        typeSpeed={10}
        backSpeed={90}
        loop
      ></ReactTyped>
    </div>
  );
}

export default Header;
