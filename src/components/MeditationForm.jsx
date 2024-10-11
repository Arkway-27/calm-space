import Form from "react-bootstrap/Form";
import { useState } from "react";

function MeditationForm({ onSelect }) {
  return (
    <Form.Select className="w-80" onChange={(e) => onSelect(e.target.value)}>
      <option value="5">Five seconds</option>
      <option value="6">Six seconds</option>
      <option value="7">Seven seconds</option>
      <option value="8">Eight seconds</option>
    </Form.Select>
  );
}

export default MeditationForm;
