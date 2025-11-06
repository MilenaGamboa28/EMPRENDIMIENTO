import React from 'react';
import { Container, Row, Col, Card, Badge, Table } from 'react-bootstrap';
import './MisionVision.css';


function MisionVision() {
  const materiales = [
    {
      nombre: 'Cobre',
      precio: ' $18.000 / kg',
      src: "/cobre.png",
      descripcion: 'Altamente valorado por su conductividad eléctrica y reciclabilidad.',
    },
    {
      nombre: 'Aluminio',
      precio: ' $7.500 / kg',
      src: "/aluminio.png",
      descripcion: 'Ligero, resistente y fácil de reciclar. Muy usado en envases y estructuras.',
    },
    {
      nombre: 'Hierro',
      precio: ' $1.200 / kg',
      src : "/hierro.png",
      descripcion: 'Material común en construcción y fabricación, ampliamente reciclado.',
    },
    
    {
      nombre: 'Baterías',
      precio: ' $3.500 / unidad',
      src: "/baterias.png",
      descripcion: 'Contienen metales pesados, requieren manejo responsable y seguro.',
    },
  ];

  const preciosMetales = [
    { material: 'Cobre', cop: '$44.500 / kg', variacion: '-0.59%' },
    { material: 'Aluminio', cop: '$11.500 / kg', variacion: '-0.55%' },
    { material: 'Plomo', cop: '$8.300 / kg', variacion: '-0.34%' },
    { material: 'Zinc', cop: '$12.600 / kg', variacion: '-0.68%' },
    { material: 'Estaño', cop: '$150.000 / kg', variacion: '-0.28%' },
    { material: 'Níquel', cop: '$63.000 / kg', variacion: '-0.78%' },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
            <h3 className="text-center text-success fw-bold mb-4">
              Precios de Materiales Reciclables en Colombia
            </h3>
    <br />
        <Row>
          {materiales.map((item, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={item.src}
                  alt={item.nombre}
                  style={{ height: '160px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold text-success">{item.nombre}</Card.Title>
                  <Card.Text className="text-muted mb-2">{item.descripcion}</Card.Text>
                  <h6 className="fw-bold">{item.precio}</h6>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Tabla de precios de metales en COP */}
        <Row className="mt-5">
          <Col>
            <h3 className="text-center text-dark fw-bold mb-4">
              Precios de Metales (Referenciales en COP)
            </h3>
            <Table striped bordered hover responsive className="text-center align-middle shadow-sm">
              <thead className="bg-success text-white">
                <tr>
                  <th>MATERIAL</th>
                  <th>PRECIO (COP)</th>
                  <th>VARIACIÓN PORCENTUAL</th>
                </tr>
              </thead>
              <tbody>
                {preciosMetales.map((metal, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{metal.material}</td>
                    <td>{metal.cop}</td>
                    <td className="text-danger fw-bold">{metal.variacion} ▼</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            <small className="text-muted">
              * Los precios son estimados en pesos colombianos (COP) y pueden variar según el mercado y la región.
            </small>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MisionVision;
