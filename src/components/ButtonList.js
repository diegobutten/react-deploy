import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

const ButtonList = ({ color, text, onAdd, showAdd }) => {
  return (
    <div>
      <Button
        type="button"
        style={{ float: "right", width: "50%" }}
        onClick={onAdd}
        variant={showAdd ? "danger" : color}
      >
        {showAdd ? "Close" : text}
      </Button>
    </div>
  );
};

ButtonList.defaultProps = {
  color: "danger",
  text: "Danger",
};

ButtonList.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonList;
