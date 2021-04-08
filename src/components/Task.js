import { FaTimes } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      style={{ cursor: "pointer" }}
      className={`py-2 px-4 m-2 rounded border ${
        task.reminder ? taskStyle : "border-light bg-light"
      } `}
      onDoubleClick={() => onToggle(task.id)}
    >
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col>
          <label className="lead">{task.text}</label>
        </Col>
        <Col>
          <FaTimes
            style={{ color: "red", cursor: "pointer", float: "right" }}
            onClick={() => onDelete(task.id)}
          />
        </Col>
      </Row>
      <p>{task.day}</p>
    </div>
  );
};

const taskStyle = "border-success bg-none";

export default Task;
