import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Materiales() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center text-success fw-bold mb-4">
          Materiales Reciclables
        </h2>
        <p className="text-center text-muted mb-5">
          Conoce los principales materiales que pueden ser reciclados y cómo su
          aprovechamiento contribuye al cuidado del medio ambiente.
        </p>

        <Row className="g-4">
          {/* ♻️ Cartón y Papel */}
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                 src="/carton.png"
                alt="Cartón y Papel"
              />
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Cartón y Papel
                </Card.Title>
                <Card.Text>
                  Se pueden reciclar para crear nuevos productos como cajas,
                  libretas o papel higiénico. Ayudan a reducir la tala de árboles.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* 🥤 Plástico */}
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src="/plastico.png"
                alt="Plástico"
              />
              <Card.Body>
                <Card.Title className="text-success fw-bold">Plástico</Card.Title>
                <Card.Text>
                  Botellas, envases y bolsas pueden transformarse en nuevos
                  productos, reduciendo el impacto de la contaminación plástica.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* 🪙 Metales */}
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src="/metales.png"
                alt="Metales"
              />
              <Card.Body>
                <Card.Title className="text-success fw-bold">Metales</Card.Title>
                <Card.Text>
                  El aluminio y el acero se reciclan fácilmente y pueden
                  reutilizarse en autos, electrodomésticos o nuevas latas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* 🍾 Vidrio */}
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src="/vidrios.png"
                alt="Vidrio"
              />
              <Card.Body>
                <Card.Title className="text-success fw-bold">Vidrio</Card.Title>
                <Card.Text>
                  Es 100% reciclable y no pierde calidad. Su reciclaje ahorra
                  energía y reduce el uso de materias primas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* 🪵 Madera */}
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src="/madera.png"
                alt="Madera"
              />
              <Card.Body>
                <Card.Title className="text-success fw-bold">Madera</Card.Title>
                <Card.Text>
                  Puede reutilizarse o convertirse en compost. Reciclarla
                  disminuye la deforestación y promueve el consumo responsable.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* ⚡ Electrónicos */}
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src="/electronico.png"
                alt="Residuos Electrónicos"
              />
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Residuos Electrónicos
                </Card.Title>
                <Card.Text>
                  Contienen metales valiosos y componentes reutilizables.
                  Reciclarlos evita contaminación y promueve la economía circular.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Materiales;
