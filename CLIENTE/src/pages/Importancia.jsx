import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaTree,
  FaUsers,
  FaChartLine,
  FaMicrochip
} from "react-icons/fa";
import "./Importancia.css";

function Importancia() {
  const datos = [
    {
      icono: <FaTree className="text-success fs-1 mb-3" />,
      titulo: "Ambiental",
      texto:
        "Reducimos la contaminación, reutilizamos materiales y contribuimos a un planeta más limpio, disminuyendo la extracción minera.",
      delay: 0.1,
    },
    {
      icono: <FaUsers className="text-primary fs-1 mb-3" />,
      titulo: "Social",
      texto:
        "Generamos empleo digno, fomentamos la inclusión tecnológica y apoyamos la formalización de recicladores informales.",
      delay: 0.2,
    },
    {
      icono: <FaChartLine className="text-warning fs-1 mb-3" />,
      titulo: "Económico",
      texto:
        "Convertimos los desechos en oportunidades: nuevos mercados, valor agregado y atracción de inversión sostenible.",
      delay: 0.3,
    },
    {
      icono: <FaMicrochip className="text-info fs-1 mb-3" />,
      titulo: "Tecnológico",
      texto:
        "Lideramos la innovación aplicando inteligencia artificial y automatización en procesos de reciclaje avanzados.",
      delay: 0.4,
    },
  ];

  return (
    <section className="importancia-section py-5 bg-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-muted mb-5 fs-5">
            En <strong>ECOCHATARRA</strong>, impulsamos un cambio integral: ambiental, social,
            económico y tecnológico 🌎💡
          </p>
        </motion.div>

        <Row>
          {datos.map((item, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: item.delay }}
                viewport={{ once: true }}
              >
                <Card className="importancia-card text-center shadow-lg border-0">
                  <Card.Body>
                    <div className="icono-wrapper">{item.icono}</div>
                    <Card.Title className="fw-bold text-success">
                      {item.titulo}
                    </Card.Title>
                    <Card.Text className="text-muted">{item.texto}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Importancia;
