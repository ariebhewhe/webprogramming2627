// src/component/CardStatusDemo.jsx
import { Card, Button, Badge, Alert, Dropdown, ButtonGroup } from 'react-bootstrap';

export default function CardStatusDemo() {
  return (
    <div className="container mt-4">
      <Card>
        <Card.Header>Header Status</Card.Header>
        <Card.Body>
          <Card.Title>Card Title Demo</Card.Title>
          <p>Ini adalah contoh komponen Card Status Demo.</p>
          <Dropdown as={ButtonGroup}>
            <Button variant="success">Aksi</Button>
            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </div>
  );
}