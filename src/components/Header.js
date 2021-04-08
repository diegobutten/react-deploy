import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import ButtonList from "./ButtonList";
import { Row, Col } from "react-bootstrap";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header>
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col>
          <h4>{title}</h4>
        </Col>
        <Col>
          {location.pathname === "/" && (
            <ButtonList
              onAdd={onAdd}
              showAdd={showAdd}
              color="success"
              text="Add"
            />
          )}
        </Col>
      </Row>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headerStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
