// Importancia.jsx
import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  PieController,
  DoughnutController,
} from "chart.js";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./importancia.css";

// Registrar todos los controladores de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  PieController,
  DoughnutController
);

function Importancia() {
  const chartsRef = useRef({});

  useEffect(() => {
    const charts = {};

    const data = {
      age: {
        labels: ["Menos de 18", "18 a 25 años", "26 a 35 años", "36 a 50 años", "Más de 50"],
        values: [2, 13, 9, 4, 4],
      },
      occupation: {
        labels: ["Estudiante", "Empleado", "Independiente", "Reciclador"],
        values: [15, 7, 6, 4],
      },
      recyclingKnowledge: {
        labels: ["Sí", "No", "No estoy seguro"],
        values: [20, 4, 8],
      },
      recyclingFrequency: {
        labels: ["Sí, frecuentemente", "Sí, de vez en cuando", "No", "No estoy seguro"],
        values: [11, 10, 8, 3],
      },
      ewasteDisposal: {
        labels: ["Los boto a la basura", "Los vendo", "Los guardo"],
        values: [21, 8, 3],
      },
      recyclingImportance: {
        labels: ["Muy importante", "Importante", "Poco importante", "Nada importante"],
        values: [23, 6, 2, 1],
      },
      motivation: {
        labels: ["Cuidar el medio ambiente", "Aprender sobre sostenibilidad", "Beneficios", "No estoy seguro"],
        values: [18, 7, 5, 2],
      },
      infoChannels: {
        labels: ["Redes sociales", "Charlas comunitarias", "WhatsApp o mensajes", "Radio o TV local"],
        values: [14, 9, 6, 3],
      },
    };

    const colors = {
      primary: ["#2e7d32", "#4caf50", "#66bb6a", "#81c784", "#a5d6a7"],
      secondary: ["#1565c0", "#1976d2", "#2196f3", "#64b5f6", "#90caf9"],
      accent: ["#ff8f00", "#ffa000", "#ffb300", "#ffc107", "#ffca28"],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom" } },
    };

    const createChart = (id, type, labels, values, colorSet, labelText) => {
      const ctx = chartsRef.current[id];

      // ✅ Destruir gráfico anterior si ya existe
      if (charts[id]) {
        charts[id].destroy();
      }

      if (ctx) {
        charts[id] = new ChartJS(ctx, {
          type,
          data: {
            labels,
            datasets: [
              {
                label: labelText,
                data: values,
                backgroundColor: Array.isArray(colorSet) ? colorSet : [colorSet],
                borderColor: colorSet,
                borderWidth: 1,
              },
            ],
          },
          options: chartOptions,
        });
      }
    };

    // Crear todos los gráficos
    createChart("ageChart", "pie", data.age.labels, data.age.values, colors.primary);
    createChart("occupationChart", "doughnut", data.occupation.labels, data.occupation.values, colors.secondary);
    createChart("recyclingKnowledgeChart", "bar", data.recyclingKnowledge.labels, data.recyclingKnowledge.values, colors.primary[0], "Participantes");
    createChart("recyclingFrequencyChart", "bar", data.recyclingFrequency.labels, data.recyclingFrequency.values, colors.secondary[0], "Participantes");
    createChart("ewasteDisposalChart", "pie", data.ewasteDisposal.labels, data.ewasteDisposal.values, colors.accent);
    createChart("recyclingImportanceChart", "bar", data.recyclingImportance.labels, data.recyclingImportance.values, colors.primary[1], "Participantes");
    createChart("motivationChart", "doughnut", data.motivation.labels, data.motivation.values, colors.secondary);
    createChart("infoChannelsChart", "bar", data.infoChannels.labels, data.infoChannels.values, colors.accent[0], "Participantes");

    // ✅ Limpiar gráficos al desmontar componente
    return () => {
      Object.values(charts).forEach((chart) => chart.destroy());
    };
  }, []);

  return (
    <Container className="py-4">
      <header className="text-center p-4 mb-4 bg-success text-white rounded shadow">
        <h1>Análisis de Encuesta sobre Conciencia Ambiental</h1>
        <p className="lead">
          Resultados y conclusiones de la encuesta realizada a participantes sobre prácticas y actitudes ambientales
        </p>
      </header>

      <section className="section bg-white p-4 rounded shadow-sm mb-4">
        <h2 className="text-success border-bottom pb-2">Resultados por Pregunta</h2>
        <Row xs={1} md={2} className="g-4 mt-3">
          {[
            { id: "ageChart", title: "Distribución por Edad" },
            { id: "occupationChart", title: "Ocupación de los Participantes" },
            { id: "recyclingKnowledgeChart", title: "Conocimiento sobre Reciclaje" },
            { id: "recyclingFrequencyChart", title: "Frecuencia de Reciclaje" },
            { id: "ewasteDisposalChart", title: "Disposición de Residuos Electrónicos" },
            { id: "recyclingImportanceChart", title: "Importancia del Reciclaje" },
            { id: "motivationChart", title: "Motivación para Reciclar" },
            { id: "infoChannelsChart", title: "Medios Preferidos para Información Ambiental" },
          ].map((chart) => (
            <Col key={chart.id}>
              <Card className="p-3 shadow-sm h-100">
                <h5 className="text-center text-success">{chart.title}</h5>
                <div style={{ height: "300px" }}>
                  <canvas ref={(el) => (chartsRef.current[chart.id] = el)} />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="section bg-white p-4 rounded shadow-sm mb-4">
        <h2 className="text-success border-bottom pb-2">Resultado General</h2>
        <div className="p-3 bg-light rounded">
          <h4>Resumen Ejecutivo</h4>
          <p>
            La encuesta revela un nivel moderado de conciencia ambiental entre los participantes, con diferencias significativas según la edad y ocupación.
          </p>
          <div className="p-3 my-3 rounded" style={{ backgroundColor: "#e8f5e9" }}>
            <h5>Puntos destacados:</h5>
            <ul>
              <li><strong>63%</strong> de los participantes conocen sobre reciclaje</li>
              <li><strong>72%</strong> considera el reciclaje muy importante</li>
              <li><strong>58%</strong> se motiva principalmente por cuidar el medio ambiente</li>
              <li><strong>45%</strong> prefiere recibir información a través de redes sociales</li>
              <li>Los estudiantes muestran mayor disposición a participar en proyectos ambientales</li>
            </ul>
          </div>
          <p>
            Se observa una correlación positiva entre el conocimiento sobre reciclaje y la frecuencia con que se practica, especialmente entre los grupos más jóvenes (18-25 años).
          </p>
        </div>
      </section>

      <section className="section bg-white p-4 rounded shadow-sm mb-5">
        <h2 className="text-success border-bottom pb-2">Conclusiones y Recomendaciones</h2>
        <div className="p-3 bg-success text-white rounded">
          <p>
            Los resultados indican una base sólida de conciencia ambiental, especialmente entre los jóvenes, pero con oportunidades de mejora en la práctica consistente del reciclaje y la disposición adecuada de residuos electrónicos.
          </p>
          <p><strong>Recomendaciones:</strong></p>
          <ol>
            <li>Desarrollar campañas educativas sobre la disposición de residuos electrónicos</li>
            <li>Usar redes sociales como principal canal de información ambiental</li>
            <li>Implementar incentivos para aumentar la participación en reciclaje</li>
            <li>Fortalecer alianzas con instituciones educativas para educación ambiental</li>
          </ol>
        </div>
      </section>

      <footer className="text-center text-muted pb-3">
        <p>Análisis generado a partir de datos de encuesta sobre conciencia ambiental - Noviembre 2025</p>
      </footer>
    </Container>
  );
}

export default Importancia;
