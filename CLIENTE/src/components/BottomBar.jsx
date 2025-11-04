import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

function BottomBar() {
  return (
    <footer
      className="bg-success text-white py-2"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1030,
        fontSize: "0.85rem", // texto más pequeño
      }}
    >
      <Container className="text-center d-flex flex-column align-items-center justify-content-center">
        <span className="fw-semibold mb-1">
          © 2025 Ecochatarra | Todos los derechos reservados
        </span>
      </Container>
    </footer>
  );
}

export default BottomBar;
