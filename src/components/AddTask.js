import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicText">
        <Form.Label>Task:</Form.Label>
        <Form.Control
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicText">
        <Form.Label>Day & Time:</Form.Label>
        <Form.Control
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Label>Set Reminder:</Form.Label>
        <Form.Check
          type="checkbox"
          checked={reminder}
          label="Check me out"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </Form.Group>
      <Button type="submit" variant="primary" block>
        Submit
      </Button>
    </Form>
  );
};

export default AddTask;
