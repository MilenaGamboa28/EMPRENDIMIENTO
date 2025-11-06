import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
  return (
    <section
      className="hero-section d-flex align-items-center flex-column"
      style={{
        background: 'linear-gradient(135deg, #0f5132 0%, #198754 100%)',
        color: '#fff',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px',
        paddingTop: '0', // 🔹 elimina espacio superior
        marginTop: '0', // 🔹 asegura que no haya separación
      }}
    >
      {/* Sección principal */}
      <Container className="py-5 mt-0"> {/* 🔹 antes tenía mt-4 */}
        <Row className="align-items-center">
          {/* Texto principal */}
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="fw-bold mb-4"
                style={{ fontFamily: 'Arial, sans-serif', fontSize: '34px' }}
              >
                Transformando <span className="text-warning">chatarra</span> en oportunidades sostenibles
              </h1>
              <p className="mb-4 text-light">
                En <strong>ECOCHATARRA</strong> creemos que cada residuo metálico tiene un valor oculto.
                Nos dedicamos a recolectar, clasificar y procesar chatarra utilizando tecnología de
                inteligencia artificial, contribuyendo a un Quibdó más limpio, verde y responsable.
              </p>
              <div>
                <Button
                  as={Link}
                  to="/misionvision"
                  variant="light"
                  size="lg"
                  className="me-3 fw-semibold shadow-sm"
                  style={{ fontSize: '18px' }}
                >
                  Conoce más
                </Button>
                <Button
                  as={Link}
                  to="/contacto"
                  variant="outline-light"
                  size="lg"
                  className="fw-semibold shadow-sm"
                  style={{ fontSize: '18px' }}
                >
                  Contáctanos
                </Button>
              </div>
            </motion.div>
          </Col>

          {/* Imagen principal */}
          <Col lg={6} className="text-center">
            <motion.img
              src="/ecochatarra-logo.png"
              alt="Reciclaje sostenible"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              style={{ maxHeight: '420px', marginTop: '0' }} // 🔹 quita espacio arriba
            />
          </Col>
        </Row>
      </Container>

      {/* Sección de información básica */}
      <Container
        className="py-5 text-dark bg-light rounded-4 shadow-lg mb-5"
        style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px' }}
      >
        <h2
          className="text-center fw-bold text-success mb-4"
          style={{ fontSize: '26px' }}
        >
          ¿Quiénes somos?
        </h2>
        <p className="text-center mb-5">
          Somos una empresa comprometida con el medio ambiente, dedicada a la
          recuperación y valorización de materiales reciclables. Promovemos la economía circular
          en la región del Chocó, impulsando la educación ambiental, el empleo verde y la
          sostenibilidad urbana.
        </p>
      </Container>

      {/* Sección de servicios */}
      <Container className="mb-5">
        <h2 className="text-center text-white fw-bold mb-5">
          Nuestros Servicios
        </h2>
        <Row className="text-center justify-content-center g-4">
          {[
            {
              img: 'https://cdn-icons-png.flaticon.com/512/411/411763.png',
              title: 'Recolección Responsable',
              text: 'Instalamos puntos ecológicos en distintas zonas de Quibdó para promover la recolección selectiva y responsable de materiales reciclables.',
            },
            {
              img: 'https://cdn-icons-png.flaticon.com/512/2907/2907762.png',
              title: 'Clasificación Inteligente',
              text: 'Aplicamos tecnología verde e inteligencia artificial para identificar tipos de metales y materiales, mejorando la eficiencia del reciclaje.',
            },
            {
              img: 'https://cdn-icons-png.flaticon.com/512/3039/3039436.png',
              title: 'Impacto Ambiental',
              text: 'Reducimos emisiones de CO₂ y fomentamos la reutilización, ayudando a construir un futuro más verde y sostenible para nuestra comunidad.',
            },
          ].map((service, index) => (
            <Col key={index} md={6} lg={4}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-0 shadow-lg h-100 rounded-4">
                  <Card.Body className="p-4">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="mb-4"
                      style={{
                        width: '90px',
                        transition: 'transform 0.3s',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'rotate(10deg) scale(1.1)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'rotate(0deg) scale(1)')}
                    />
                    <h5 className="fw-bold text-success mb-3">{service.title}</h5>
                    <p className="text-muted">{service.text}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Sección final */}
      <div
        className="w-100 text-center py-5"
        style={{
          background: 'linear-gradient(135deg, #198754 0%, #157347 100%)',
          color: '#fff',
          fontFamily: 'Arial, sans-serif',
          fontSize: '18px',
        }}
      >
        <h3 className="fw-bold mb-3">
            ¡Únete al cambio hacia un Quibdó más verde y sostenible!
        </h3>
        <p className="mb-4">
          Contáctanos y descubre cómo puedes formar parte de nuestra misión ecológica.
        </p>
        <Button
          as={Link}
          to="/contacto"
          variant="light"
          size="lg"
          className="fw-semibold shadow-sm"
          style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px' }}
        >
          Participa ahora
        </Button>
      </div>
    </section>
  );
}

export default Home;
