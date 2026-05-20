import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/origramas/Organigramas de Estructura Comercial.1.png";
import img2 from "../assets/origramas/Organigramas de Estructura Comercial.2.png";
import img3 from "../assets/origramas/Organigramas de Estructura Comercial.3.png";
import img4 from "../assets/origramas/Organigramas de Estructura Comercial.4.png";
import img5 from "../assets/origramas/Organigramas de Estructura Comercial.5.png";
import img6 from "../assets/origramas/Organigramas de Estructura Comercial.6.png";
const estructuraImagenes = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

const styles = {
  page: {
    minHeight: "100vh",
    padding: "32px 20px 56px",
    background: "linear-gradient(180deg, #f7f8f2 0%, #eef3ea 100%)",
    fontFamily: '"Source Sans 3", Arial, sans-serif',
    color: "#1f2937",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  backButton: {
    position: "sticky",
    top: "24px",
    zIndex: 10,
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "24px",
    padding: "12px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    backgroundColor: "#ffffff",
    color: "#14532d",
    fontWeight: 700,
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
    cursor: "pointer",
  },
  hero: {
    marginBottom: "28px",
    padding: "32px",
    borderRadius: "28px",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    background:
      "linear-gradient(rgba(255, 252, 240, 0.72), rgba(255, 252, 240, 0.72)), url('/estructura-mundial.png') center/cover no-repeat",
    boxShadow: "0 24px 50px rgba(15, 23, 42, 0.08)",
  },
  title: {
    margin: "0 0 12px",
    fontFamily: '"Playfair Display", serif',
    fontSize: "40px",
    lineHeight: 1.1,
  },
  text: {
    maxWidth: "780px",
    margin: 0,
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#475569",
  },
  infoBox: {
    width: "100%",
    maxWidth: "1120px",
    marginTop: "18px",
    padding: "18px 20px",
    borderRadius: "18px",
    backgroundColor: "rgba(255,255,255,0.8)",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    color: "#334155",
  },
  infoHeading: {
    margin: "0 0 14px",
    fontSize: "24px",
    fontWeight: 700,
    color: "#1f2937",
  },
  infoList: {
    margin: 0,
    paddingLeft: "18px",
    lineHeight: 1.7,
  },
  reportCta: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    marginTop: "16px",
    padding: "14px 16px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #f8fbff 0%, #eef6ff 100%)",
    border: "1px solid rgba(37, 99, 235, 0.15)",
    boxShadow: "0 10px 24px rgba(37, 99, 235, 0.08)",
  },
  reportLabel: {
    margin: 0,
    fontSize: "15px",
    color: "#334155",
    fontWeight: 600,
  },
  reportBadge: {
    color: "#1d4ed8",
    fontWeight: 800,
  },
  reportButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 18px",
    borderRadius: "999px",
    background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    color: "#ffffff",
    fontWeight: 800,
    textDecoration: "none",
    boxShadow: "0 12px 24px rgba(37, 99, 235, 0.22)",
  },
  viewerShell: {
    padding: "24px",
    borderRadius: "28px",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    backgroundColor: "rgba(255,255,255,0.94)",
    boxShadow: "0 20px 45px rgba(15, 23, 42, 0.07)",
  },
  viewerHeader: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "12px",
    alignItems: "center",
    marginBottom: "18px",
  },
  viewerTitle: {
    margin: 0,
    fontSize: "24px",
    fontWeight: 800,
  },
  viewerNote: {
    margin: 0,
    color: "#64748b",
    lineHeight: 1.5,
  },
  imageStack: {
    marginTop: "18px",
    display: "grid",
    gap: "18px",
  },
  pageImage: {
    width: "100%",
    display: "block",
    borderRadius: "24px",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    backgroundColor: "#ffffff",
    boxShadow: "0 14px 30px rgba(15, 23, 42, 0.06)",
  },
  fallback: {
    marginTop: "18px",
    padding: "16px 18px",
    borderRadius: "16px",
    backgroundColor: "#f8fafc",
    color: "#334155",
    lineHeight: 1.6,
  },
};

function Estructura() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <button onClick={() => navigate(-1)} style={styles.backButton}>
        {"<-"} Atras
      </button>

      <div style={styles.container}>
        <section style={styles.hero}>
          <h1 style={styles.title}>Estructura Comercial</h1>
          <p style={styles.text}>
            Consulta los organigramas oficiales y revisa la distribucion general de la estructura
            comercial.
          </p>

          <div style={styles.infoBox}>
            <h3 style={styles.infoHeading}>Reporte Cambio de Estructura</h3>
            <ul style={styles.infoList}>
              <li>
                Formulario creado para el reporte de cambios de director o jefe inmediato,
                cambios de localidad, asignacion o eliminacion de claves a promotores y cambios
                de cargo que no esten actualizados por recursos humanos.
              </li>
              <li>
                <strong>
                  Los cambios deben ser reportados los 3 primeros dias habiles de cada mes.
                  Los reportes realizados despues de esta fecha quedaran para el mes siguiente.
                </strong>
              </li>
            </ul>

            <div style={styles.reportCta}>
              <p style={styles.reportLabel}>
                Donde reportar: <span style={styles.reportBadge}>Formulario oficial</span>
              </p>
              <a
                href="https://forms.gle/8gCPHzqZD9whWNfB8"
                target="_blank"
                rel="noreferrer"
                style={styles.reportButton}
              >
                Ir al formulario
              </a>
            </div>
          </div>
        </section>

        <section style={styles.viewerShell}>
          <div style={styles.viewerHeader}>
            <div>
              <h2 style={styles.viewerTitle}>Organigramas oficiales</h2>
              <p style={styles.viewerNote}>
                
              </p>
            </div>

          </div>

          <div style={styles.imageStack}>
            {estructuraImagenes.map((imageSrc, index) => (
              <img
                key={imageSrc}
                src={imageSrc}
                alt={`Organigrama comercial pagina ${index + 1}`}
                style={styles.pageImage}
              />
            ))}
          </div>

          <div style={styles.fallback}>
            Si sigues viendo una version anterior, recarga la pagina con `Ctrl + F5`.
          </div>
        </section>
      </div>
    </div>
  );
}

export default Estructura;
