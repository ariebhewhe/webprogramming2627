// src/component/CardStatusDemo.jsx
import { Card, Button, Badge, Alert, Dropdown, ButtonGroup } from 'react-bootstrap';

export default function CardStatusDemo() {
  return (
    <div className="container mt-4">
      <Card>
        <Card.Header>
          <span>Header Status</span>
          <Badge bg="secondary">Info</Badge>
        </Card.Header>
        <Card.Body>
          <Card.Title>Card.title</Card.Title>
          <p>Ini adalah contoh komponen Card Status Demo.</p>
          <Dropdown as={ButtonGroup}>
            <Button variant="success">Aksi</Button>
            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Dropdown.menu</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </div>
  );
}