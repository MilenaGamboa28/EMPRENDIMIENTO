import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      alert("Por favor completa todos los campos.");
      return;
    }

    setEnviado(true);
    setFormData({ nombre: "", correo: "", mensaje: "" });

    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f0fdf4" }}>
      <Container>
        <Row className="justify-content-center">
          {/* Información de contacto */}
          <Col md={4} className="mb-4">
            <Card className="border-0 shadow-sm text-center p-3 mb-3">
              <FaMapMarkerAlt size={35} color="#198754" className="mb-2" />
              <h6 className="fw-bold text-success">NUESTRA OFICINA PRINCIPAL</h6>
              <p className="mb-0 text-secondary">
                Barrio Cristo Rey<br />Quibdó, Chocó - Colombia
              </p>
            </Card>

            <Card className="border-0 shadow-sm text-center p-3 mb-3">
              <FaPhoneAlt size={35} color="#198754" className="mb-2" />
              <h6 className="fw-bold text-success">TELÉFONOS</h6>
              <p className="mb-0 text-secondary">
                310 888 7770<br />320 555 4441
              </p>
            </Card>

            <Card className="border-0 shadow-sm text-center p-3">
              <FaEnvelope size={35} color="#198754" className="mb-2" />
              <h6 className="fw-bold text-success">CORREO ELECTRÓNICO</h6>
              <p className="mb-0 text-secondary">ecochatarra@gmail.com</p>
            </Card>
          </Col>

          {/* Formulario */}
          <Col md={6}>
            <Card className="border-0 shadow-sm p-4" style={{ backgroundColor: "#d1fae5" }}>
              <h3 className="fw-bold text-center text-success mb-4">Contáctenos</h3>

              {enviado && (
                <Alert variant="success" className="text-center py-2">
                  ✅ ¡Mensaje enviado con éxito! Te responderemos pronto.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="nombre"
                    placeholder="Ingrese su nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    style={{
                      fontWeight: "400",
                      fontFamily: "Inter, sans-serif",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="correo"
                    placeholder="Ingrese su correo electrónico"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    style={{
                      fontWeight: "400",
                      fontFamily: "Inter, sans-serif",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    name="mensaje"
                    rows={4}
                    placeholder="Escriba su mensaje..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    style={{
                      fontWeight: "400",
                      fontFamily: "Inter, sans-serif",
                    }}
                  />
                </Form.Group>

                <div className="text-center">
                  <Button type="submit" variant="success" className="px-4 rounded-pill shadow-sm">
                    ENVIAR
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contacto;
