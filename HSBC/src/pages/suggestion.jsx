import React, { useState } from "react";
import { Card, Col, Row, Input, Button, Alert } from "antd";
import { suggestionInsert } from "../supa-base-client/user";
const Suggestion = () => {
  const [suggestion, setSuggestion] = useState("");
  const insertSuggestion = async () => {
    if (suggestion) {
      const msg = await suggestionInsert(123, suggestion);
      if (msg === "suggestion added") {
        alert("thank you for you suggestion");
      }
    }
  };
  return (
    <>
      <div className="cotainer m-5 flex flex-col justify-center items-center gap-5">
        <Input.TextArea
          onChange={(e) => setSuggestion(e.target.value)}
          className="p-4"
          placeholder="please enter your suggestions here"
        />
        <Button onClick={() => insertSuggestion()}>Submit</Button>
      </div>
      <Row className="justify-center items-center" gutter={16}>
        <Col span={8}>
          <Card title="Customer id" bordered={false}>
            It is better to invest in HSBC than HDFC.
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Suggestion;
