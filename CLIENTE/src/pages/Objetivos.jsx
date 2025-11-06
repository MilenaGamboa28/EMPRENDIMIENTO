import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Objetivos.css";

function Objetivos() {
  const [material, setMaterial] = useState("");
  const [peso, setPeso] = useState("");
  const [precioBase, setPrecioBase] = useState("");
  const [factorCalidad, setFactorCalidad] = useState(1.0);
  const [valorTotal, setValorTotal] = useState(null);

  // 🟢 Lista ampliada de materiales reciclables
  const materiales = [
    { nombre: "Cobre", precio: 18000 },
    { nombre: "Aluminio", precio: 7500 },
    { nombre: "Hierro", precio: 1200 },
    { nombre: "Plomo", precio: 4200 },
    { nombre: "Baterías", precio: 3500 },
    { nombre: "Zinc", precio: 12600 },
    { nombre: "Níquel", precio: 63000 },
    { nombre: "Estaño", precio: 150000 },
    { nombre: "Cartón", precio: 450 },
    { nombre: "Papel Blanco", precio: 600 },
    { nombre: "Papel Mezclado", precio: 350 },
    { nombre: "Plástico PET", precio: 1600 },
    { nombre: "Plástico HDPE", precio: 2300 },
    { nombre: "Plástico PVC", precio: 1800 },
    { nombre: "Vidrio", precio: 300 },
    { nombre: "Electrónicos", precio: 5200 },
    { nombre: "Chatarra de Vehículos", precio: 2000 },
    { nombre: "Cables Eléctricos", precio: 4800 },
    { nombre: "Radiadores", precio: 5600 },
  ];

  const factoresCalidad = [
    { valor: 1.0, label: "1.0 - Material limpio y puro" },
    { valor: 0.9, label: "0.9 - Material en muy buen estado" },
    { valor: 0.8, label: "0.8 - Material con mezcla leve o suciedad" },
    { valor: 0.7, label: "0.7 - Material con impurezas moderadas" },
    { valor: 0.6, label: "0.6 - Material con contaminación significativa" },
    { valor: 0.5, label: "0.5 - Material contaminado u oxidado" },
  ];

  const manejarCambioMaterial = (e) => {
    const seleccionado = materiales.find((m) => m.nombre === e.target.value);
    setMaterial(e.target.value);
    setPrecioBase(seleccionado ? seleccionado.precio : "");
  };

  const calcularValorTotal = () => {
    if (!peso || !precioBase || !material) {
      alert("Por favor, completa todos los campos requeridos");
      return;
    }

    const pesoNum = parseFloat(peso);
    const precioNum = parseFloat(precioBase);

    if (pesoNum <= 0 || precioNum <= 0) {
      alert("El peso y el precio deben ser positivos");
      return;
    }

    const resultado = pesoNum * precioNum * factorCalidad;
    setValorTotal(resultado);
  };

  const limpiarCampos = () => {
    setMaterial("");
    setPeso("");
    setPrecioBase("");
    setFactorCalidad(1.0);
    setValorTotal(null);
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Encabezado */}
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="text-success fw-bold mb-3">
                Calculadora de Valor de Chatarra
            </h2>
            <p className="text-muted">
              Selecciona el tipo de material, su peso y calidad para estimar su
              valor en el mercado colombiano.
            </p>
          </Col>
        </Row>

        {/* Calculadora */}
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg border-0 p-4 rounded-4">
              <Card.Body>
                {/* Selección de material */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                      Tipo de Material
                  </label>
                  <select
                    className="form-select"
                    value={material}
                    onChange={manejarCambioMaterial}
                  >
                    <option value="">Seleccione un material</option>
                    {materiales.map((mat) => (
                      <option key={mat.nombre} value={mat.nombre}>
                        {mat.nombre} — ${mat.precio.toLocaleString("es-CO")} COP/kg
                      </option>
                    ))}
                  </select>
                </div>

                {/* Peso */}
                <div className="mb-3">
                  <label className="form-label fw-semibold"> Peso (kg)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder="Ejemplo: 10"
                    min="0"
                    step="0.1"
                  />
                </div>

                {/* Factor de calidad */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                      Factor de Calidad
                  </label>
                  <select
                    className="form-select"
                    value={factorCalidad}
                    onChange={(e) => setFactorCalidad(parseFloat(e.target.value))}
                  >
                    {factoresCalidad.map((factor) => (
                      <option key={factor.valor} value={factor.valor}>
                        {factor.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Botones */}
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-success px-4"
                    onClick={calcularValorTotal}
                  >
                    Calcular
                  </button>
                  <button
                    className="btn btn-outline-secondary px-4"
                    onClick={limpiarCampos}
                  >
                    Limpiar
                  </button>
                </div>

                {/* Resultado */}
                {valorTotal !== null && (
                  <div className="mt-4 text-center bg-success bg-opacity-10 p-3 rounded-3">
                    <h5 className="text-success fw-bold mb-2">
                        Valor Total Estimado
                    </h5>
                    <h4 className="fw-bold">
                      $
                      {valorTotal.toLocaleString("es-CO", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </h4>
                    <p className="text-muted small mb-0">
                      * Valor aproximado en pesos colombianos (COP).
                    </p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Guía visual */}
        <Row className="mt-5 text-center">
          <Col>
            <h4 className="text-success mb-3"> Guía de Factores de Calidad</h4>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {factoresCalidad.map((factor) => (
                <div
                  key={factor.valor}
                  className="p-3 border rounded-3 shadow-sm bg-white"
                  style={{ width: "230px" }}
                >
                  <h6 className="fw-bold text-success mb-1">{factor.valor}</h6>
                  <p className="text-muted mb-0">
                    {factor.label.split(" - ")[1]}
                  </p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Objetivos;
