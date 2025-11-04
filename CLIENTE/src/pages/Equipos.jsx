import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Equipos.css";

function Equipos() {
  const equipos = [
    {
      titulo: "Camión de Recolección",
      descripcion:
        "Vehículo adaptado para transportar materiales reciclables de manera segura y eficiente.",
      src: "/camion.png",
    },
    {
      titulo: "Prensa Compactadora",
      descripcion:
        "Herramienta que comprime los materiales reciclables para optimizar el espacio de transporte.",
      src: "/prensa.png",
    },
    {
      titulo: "Báscula Digital",
      descripcion:
        "Utilizada para pesar con precisión los diferentes tipos de chatarra y materiales reciclables.",
      src: "/bascula.png",
    },
    {
      titulo: "Herramientas Manuales",
      descripcion:
        "Instrumentos como pinzas, guantes y cortadores utilizados en el proceso de clasificación.",
      src: "/herramienta.png",
    },
  ];

  return (
    <section className="equipos-section py-5">
      <Container>
        <h2 className="text-center mb-5 text-success fw-bold">
          Nuestros Equipos
        </h2>
        <Row>
          {equipos.map((eq, index) => (
            <Col key={index} lg={3} md={6} className="mb-4">
              <Card className="h-100 shadow-sm equipo-card text-center p-3">
                <Card.Img
                  variant="top"
                  src={eq.src}
                  alt={eq.titulo}
                  className="img-fluid equipo-imagen mx-auto"
                />
                <Card.Body>
                  <Card.Title className="text-success fw-bold">
                    {eq.titulo}
                  </Card.Title>
                  <Card.Text>{eq.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Equipos;
