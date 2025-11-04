import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaRobot, FaRecycle, FaMicrochip, FaRoute } from "react-icons/fa";
import "./Innovacion.css";

function Innovacion() {
  const innovaciones = [
    {
      titulo: "Sistemas de IA para Clasificación",
      descripcion:
        "Cámaras y sensores inteligentes reconocen el tipo de metal y su composición, usando visión por computadora para separar materiales ferrosos y no ferrosos con máxima precisión.",
      src: "/sistema.png",
      icono: <FaMicrochip className="text-success fs-2 mb-2" />,
    },
    {
      titulo: "Algoritmos de Optimización",
      descripcion:
        "Planificamos rutas de recolección automatizadas y predecimos la demanda de materiales para mejorar la eficiencia energética y reducir costos operativos.",
      src: "/algotrimo.png",
      icono: <FaRoute className="text-success fs-2 mb-2" />,
    },
    {
      titulo: "Robots y Automatización",
      descripcion:
        "Implementamos brazos robóticos y sensores para manipular metales pesados, mejorar la seguridad del personal y acelerar los procesos de reciclaje.",
      src: "/automatizacion.png",
      icono: <FaRobot className="text-success fs-2 mb-2" />,
    },
    {
      titulo: "Sostenibilidad Digital",
      descripcion:
        "Monitoreamos el ciclo de vida de los materiales mediante plataformas digitales que promueven una economía circular más transparente y responsable.",
      src: "/sostenibilidad.png",
      icono: <FaRecycle className="text-success fs-2 mb-2" />,
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Encabezado animado */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-3 text-success fw-bold">
            Innovación Tecnológica
          </h2>
          <p className="text-center text-muted mb-5 fs-5">
            En <strong>ECOCHATARRA</strong>, transformamos la recolección de
            chatarra con <strong>tecnología, inteligencia y sostenibilidad</strong>.
          </p>
        </motion.div>

        {/* Tarjetas de Innovaciones */}
        <Row>
          {innovaciones.map((item, index) => (
            <Col key={index} md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 shadow-lg border-0 card-hover">
                  <Card.Img
                    variant="top"
                    src={item.src}
                    alt={item.titulo}
                    className="img-fluid"
                    style={{ height: "240px", objectFit: "cover" }}
                  />
                  <Card.Body className="text-center">
                    {item.icono}
                    <Card.Title className="text-success fw-bold">
                      {item.titulo}
                    </Card.Title>
                    <Card.Text className="text-muted">
                      {item.descripcion}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Frase final */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-success fw-bold">
            “Innovar para reciclar, reciclar para vivir mejor.”
          </h4>
          <p className="text-muted">
            Tecnología al servicio del planeta y de un futuro sostenible.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export default Innovacion;
