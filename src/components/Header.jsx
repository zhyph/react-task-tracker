import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

// const Header = (props) é outra maneira de passar parametros,
// usando {props.title} para instanciar os valores na função
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

// *.defaultProps = {} faz deixa o props da função com um valor padrão
Header.defaultProps = {
  title: "Task Tracker",
};

// *.PropTypes.string faz com que o compilador cheque se o que esta
// sendo passado é uma string
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// o css usado no documento pode ser passado inline, ou declarado em uma,
// variavel/const como monstrado abaixo
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
