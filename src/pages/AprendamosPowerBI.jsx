import React, { useEffect, useState } from "react";
import imgPositivosNegativos from "../assets/powerbi_jira1.png.png";
import imgResultados from "../assets/powerbi_jira2.png.png";
import imgCotizaciones from "../assets/powerbi_jira3.png.png";
import imgPositivosNegativosDetalle from "../assets/powerbi_jira.4.png.png";
import imgResultadosNuevo from "../assets/powerbi_jira5.png.jpeg";
import imgCotizacionesNuevo from "../assets/powerbi_jira6.png.jpeg";
import imgInformeGPSNuevo from "../assets/powerbi_jira7.png.jpeg";
import imgParcialBonificacionesNuevo from "../assets/powerbi_jira8.png.jpeg";
import imgAsesorAANuevo from "../assets/powerbi_jira9.png.jpeg";
import imgEstrategiaAANuevo from "../assets/powerbi_jira10.png.jpeg";

const img1 = imgPositivosNegativos;
const img2 = imgResultados;
const imgInformeGPS =
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80";
const imgParcialBonificaciones =
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80";
const imgAgentesAgencias =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80";

const styles = {
  root: {
    fontFamily: "'Segoe UI', Arial, sans-serif",
    background:
      "radial-gradient(circle at 50% 40%, #fffbe6 0%, #fffde4 40%, #fff 100%)",
    color: "#333333",
    margin: 0,
    minHeight: "100vh",
    paddingLeft: "240px",
  },
  header: {
    backgroundColor: "white",
    borderBottom: "4px solid #FFD200",
    padding: "30px 20px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  h1: {
    color: "#2D8B3A",
    margin: 0,
    fontSize: 32,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  subtitle: {
    color: "#666",
    fontSize: 16,
    fontWeight: 400,
    margin: 0,
  },
  container: {
    maxWidth: 1000,
    margin: "40px auto",
    background: "white",
    padding: 50,
    borderRadius: 16,
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  },
  section: {
    marginBottom: 60,
  },
  h2: {
    color: "#2D8B3A",
    borderLeft: "6px solid #FFD200",
    paddingLeft: 20,
    marginTop: 0,
    marginBottom: 25,
    fontSize: 26,
    fontWeight: 600,
  },
  h3: {
    color: "#2D8B3A",
    fontSize: 20,
    fontWeight: 600,
    marginTop: 30,
    marginBottom: 15,
  },
  p: {
    lineHeight: 1.8,
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  stepCard: {
    border: "2px solid #E8F5E8",
    borderRadius: 12,
    padding: 25,
    margin: "25px 0",
    backgroundColor: "#FAFFFB",
    boxShadow: "0 2px 8px rgba(45, 139, 58, 0.1)",
  },
  stepInstruction: {
    fontWeight: "bold",
    color: "#2D8B3A",
    display: "block",
    marginBottom: 15,
    fontSize: 18,
  },
  img: {
    display: "block",
    maxWidth: "100%",
    margin: "20px auto",
    borderRadius: 8,
    border: "3px solid #FFD200",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  performanceTip: {
    backgroundColor: "#FFF8E1",
    border: "2px solid #FFD54F",
    borderRadius: 12,
    padding: 25,
    marginTop: 40,
    boxShadow: "0 2px 8px rgba(255, 213, 79, 0.2)",
  },
  infoBlock: {
    backgroundColor: "#F1F8E9",
    border: "2px solid #AED581",
    borderRadius: 12,
    padding: 25,
    marginTop: 25,
    boxShadow: "0 2px 8px rgba(174, 213, 129, 0.2)",
  },
  infoTitle: {
    color: "#2D8B3A",
    fontSize: 22,
    fontWeight: 700,
    marginTop: 0,
    marginBottom: 15,
  },
  infoList: {
    margin: "0 0 20px 0",
    paddingLeft: 25,
    lineHeight: 1.8,
  },
  infoListItem: {
    marginBottom: 12,
    paddingLeft: 5,
  },
  perfTitle: {
    color: "#F57C00",
    marginTop: 0,
    display: "flex",
    alignItems: "center",
    fontWeight: 600,
    fontSize: 20,
  },
  badgeGreen: {
    backgroundColor: "#2D8B3A",
    color: "white",
    padding: "4px 10px",
    borderRadius: 6,
    fontSize: 14,
    fontWeight: 600,
    marginLeft: 6,
    marginRight: 6,
  },
  highlightBox: {
    backgroundColor: "#E8F5E8",
    border: "2px solid #4CAF50",
    borderRadius: 12,
    padding: 20,
    margin: "20px 0",
    boxShadow: "0 2px 8px rgba(76, 175, 80, 0.15)",
  },
};

const sidebarItems = [
  { label: "TABLEROS PBI", type: "title" },
  { label: "Que es PBI", href: "#que-es-pbi" },
  { label: "Como solicitar acceso", href: "#como-solicitar" },
  { label: "Tips de navegacion", href: "#tips-navegacion" },
  { label: "Controles generales", href: "#controles-generales" },
  { label: "Manejo de filtros", href: "#manejo-filtros" },

  { label: "TABLEROS VP", type: "title" },
  { label: "Positivos y negativos", href: "#positivos-negativos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Cotizaciones", href: "#cotizaciones" },

  { label: "GRUPOS HOMOGENEOS", type: "title" },
  { label: "Informe GPS", href: "#gps" },
  { label: "Parcial bonificaciones", href: "#parcial-boni" },
  

  { label: "AGENTES Y AGENCIAS", type: "title" },
  { label: "Tablero asesor A&A", href: "#asesor-aa" },
  {
    label: "Estrategia comercial",
    href: "#estrategia",
    highlight: true,
  },
];

const sidebarStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "240px",
  height: "100vh",
  background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
  borderRight: "2px solid #e9ecef",
  padding: "30px 0 0 0",
  zIndex: 100,
  overflowY: "auto",
  fontSize: 14,
  boxShadow: "2px 0 8px rgba(0,0,0,0.05)",
};

const sidebarListStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const sidebarItemStyle = {
  padding: "8px 20px",
  color: "#495057",
  cursor: "pointer",
  textDecoration: "none",
  display: "block",
  border: "none",
  background: "none",
  width: "100%",
  textAlign: "left",
  transition: "all 0.3s ease",
  position: "relative",
  outline: "none",
  borderRadius: "0 8px 8px 0",
  margin: "2px 0",
};

const sidebarTitleStyle = {
  ...sidebarItemStyle,
  color: "#6c757d",
  fontWeight: 700,
  marginTop: 25,
  marginBottom: 8,
  cursor: "default",
  fontSize: 12,
  letterSpacing: 1,
  textTransform: "uppercase",
  padding: "12px 20px 8px 20px",
};

const sidebarHighlightStyle = {
  ...sidebarItemStyle,
  color: "#1976d2",
  fontWeight: 600,
  backgroundColor: "rgba(25, 118, 210, 0.08)",
  borderLeft: "4px solid #1976d2",
};

const sidebarActiveStyle = {
  ...sidebarItemStyle,
  background: "linear-gradient(90deg, rgba(255, 210, 0, 0.15) 0%, rgba(255, 210, 0, 0.05) 100%)",
  color: "#2D8B3A",
  fontWeight: 600,
  borderLeft: "4px solid #FFD200",
  boxShadow: "0 2px 8px rgba(255,210,0,0.15)",
};

const backButtonStyle = {
  position: "fixed",
  top: 8,
  left: 8,
  zIndex: 200,
  background: "rgba(255,255,255,0.85)",
  border: "1.5px solid #FFD200",
  color: "#2D8B3A",
  borderRadius: "20px",
  padding: "4px 12px",
  fontWeight: 500,
  fontSize: 13,
  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  cursor: "pointer",
  transition: "background 0.2s, color 0.2s",
  opacity: 0.92,
};

const scrollToSection = (id) => {
  const el = document.getElementById(id.replace("#", ""));
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const ImageCard = ({ src, alt }) => (
  <div style={{ textAlign: "center", margin: "24px 0" }}>
    <img src={src} alt={alt} style={styles.img} />
    <div style={{ fontSize: 13, color: "#888" }}>{alt}</div>
  </div>
);

const AprendamosPowerBI = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div style={{ ...styles.root, paddingLeft: isMobile ? 0 : styles.root.paddingLeft }}>
      <button
        style={{ ...backButtonStyle, position: isMobile ? "absolute" : backButtonStyle.position, top: isMobile ? 10 : backButtonStyle.top, left: isMobile ? 10 : backButtonStyle.left }}
        onClick={() => window.history.back()}
        aria-label="Volver atras"
        onMouseOver={(e) => {
          e.currentTarget.style.background = "#FFFDE4";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "#fff";
        }}
      >
        {"<-"} Atras
      </button>

      <aside style={isMobile ? { position: "sticky", top: 0, width: "100%", height: "auto", background: "#ffffff", borderBottom: "1px solid #e9ecef", padding: "48px 10px 10px", zIndex: 30, overflowX: "auto", overflowY: "hidden" } : sidebarStyle}>
        <ul style={isMobile ? { ...sidebarListStyle, display: "flex", gap: 8, minWidth: "max-content" } : sidebarListStyle}>
          {sidebarItems.map((item, idx) =>
            item.type === "title" ? (
              <li key={idx} style={isMobile ? { ...sidebarTitleStyle, marginTop: 0, whiteSpace: "nowrap" } : sidebarTitleStyle}>
                {item.label}
              </li>
            ) : (
              <li key={idx}>
                <button
                  style={
                    activeIdx === idx
                      ? item.highlight
                        ? { ...sidebarHighlightStyle, ...sidebarActiveStyle }
                        : sidebarActiveStyle
                      : item.highlight
                        ? sidebarHighlightStyle
                        : isMobile ? { ...sidebarItemStyle, whiteSpace: "nowrap", borderRadius: 999, padding: "8px 14px" } : sidebarItemStyle
                  }
                  onClick={() => {
                    if (item.href) {
                      scrollToSection(item.href);
                    }
                    setActiveIdx(idx);
                  }}
                  onBlur={() => setActiveIdx(null)}
                >
                  {item.label}
                  <span
                    style={{
                      position: "absolute",
                      left: 24,
                      right: 24,
                      bottom: 2,
                      height: 2,
                      background: activeIdx === idx ? "#FFD200" : "transparent",
                      borderRadius: 2,
                      transition: "background 0.3s",
                    }}
                  />
                </button>
                {item.subitems && (
                  <ul style={{ ...sidebarListStyle, paddingLeft: 12 }}>
                    {item.subitems.map((subitem, subidx) => (
                      <li key={`${idx}-${subidx}`}>
                        <button
                          style={{
                            ...sidebarItemStyle,
                            fontSize: 12,
                            padding: "3px 24px 3px 36px",
                            color: "#666",
                          }}
                          onClick={() => {
                            if (subitem.href) {
                              scrollToSection(subitem.href);
                            }
                          }}
                        >
                          {subitem.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ),
          )}
        </ul>
      </aside>

      <header style={{ ...styles.header, padding: isMobile ? "20px 14px" : styles.header.padding }}>
        <h1 style={{ ...styles.h1, fontSize: isMobile ? 22 : styles.h1.fontSize, lineHeight: isMobile ? 1.2 : 1.15, letterSpacing: isMobile ? 0.5 : 1 }}>Aprendamos de Power BI</h1>
        <p style={{ ...styles.subtitle, fontSize: isMobile ? 15 : styles.subtitle.fontSize }}>Guía completa para el uso de tableros en Seguros Bolívar</p>
      </header>

      <div style={{ ...styles.container, margin: isMobile ? "16px 10px 24px" : styles.container.margin, padding: isMobile ? 18 : styles.container.padding, borderRadius: isMobile ? 12 : styles.container.borderRadius }}>
        {/* Introducción */}
        <section id="que-es-pbi" style={styles.section}>
          <h2 style={styles.h2}>¿Qué es Power BI?</h2>
          <p style={styles.p}>
            Power BI es la plataforma de análisis empresarial de <strong>Microsoft</strong> que ayuda a convertir datos en
            información accionable mediante reportes, visualizaciones y paneles compartidos.
          </p>
          <div style={styles.highlightBox}>
            <p style={styles.p}>
              Esta herramienta es fundamental para la toma de decisiones estratégicas en Seguros Bolívar,
              permitiendo a los equipos comerciales acceder a datos en tiempo real y generar insights valiosos.
            </p>
          </div>
        </section>

        {/* Cómo solicitar acceso */}
        <section id="como-solicitar" style={styles.section}>
          <h2 style={styles.h2}>Cómo solicitar acceso a los tableros</h2>
          <p style={styles.p}>
            Para acceder a los tableros de Power BI, debe solicitar acceso a través del portal de soporte técnico.
            Siga estos pasos:
          </p>

          <div style={styles.stepCard}>
            <span style={styles.stepInstruction}>1. Buscar: Catálogo de Servicio TI</span>
            <ImageCard src={img1} alt="Catálogo de Servicios TI" />
          </div>

          <div style={styles.stepCard}>
            <span style={styles.stepInstruction}>2. Seleccionar: Analítica y Requerimientos BI</span>
            <ImageCard src={img2} alt="Analítica y Requerimientos BI" />
          </div>

          <div style={styles.stepCard}>
            <span style={styles.stepInstruction}>3. Diligenciar datos: Área de Trabajo y Tablero</span>
            <ImageCard src={imgCotizaciones} alt="Formulario Requerimientos BI" />
          </div>
        </section>

        {/* Guía de Usuario */}
        <section id="tips-navegacion" style={styles.section}>
          <h2 style={styles.h2}>Guía de Usuario</h2>

          <div style={styles.infoBlock}>
            <h3 style={styles.infoTitle}>Tips de Navegación</h3>
            <ul style={styles.infoList}>
              <li style={styles.infoListItem}>
                <strong>Filtros Cruzados:</strong> Puedes hacer clic en una Regional específica en cualquier gráfico
                y todo el reporte se filtrará automáticamente para esa zona.
              </li>
              <li style={styles.infoListItem}>
                <strong>Tooltips:</strong> Pasa el ratón sobre las barras o líneas para ver el dato exacto sin
                necesidad de buscarlo en la tabla.
              </li>
              <li style={styles.infoListItem}>
                <strong>Jerarquías (Drill-down):</strong> En las tablas de Directores, busca el icono + para
                desplegar el detalle de los Asesores a su cargo.
              </li>
            </ul>
          </div>

          <div style={styles.infoBlock}>
            <h3 id="controles-generales" style={styles.infoTitle}>Controles Generales (Filtros)</h3>
            <p style={styles.p}>
              En la parte superior de todas las páginas encontrarás la barra de segmentación.
              Los filtros clave son:
            </p>
            <ul style={styles.infoList}>
              <li style={styles.infoListItem}>
                <strong>Regional:</strong> Filtra por zona geográfica (Bogotá, Caribe, Occidente, etc.).
              </li>
              <li style={styles.infoListItem}>
                <strong>Año/Mes:</strong> Define el periodo de análisis.
              </li>
              <li style={styles.infoListItem}>
                <strong>Tipo de Negocio:</strong> Generalmente predeterminado en "Nuevo Negocio".
              </li>
              <li style={styles.infoListItem}>
                <strong>Línea Comercial:</strong> Permite segmentar por Acc. Escolares, Personales, Afines,
                Colectivos o Educadores.
              </li>
              <li style={styles.infoListItem}>
                <strong>Nombre Canal / Estrategia:</strong> Para profundizar en grupos específicos o
                tácticas de venta (Débito, Libranza).
              </li>
            </ul>
          </div>

          <div style={styles.performanceTip}>
            <h3 id="manejo-filtros" style={styles.perfTitle}>
              ⚠️ Manejo de Filtros y Problemas de Rendimiento en Power BI
            </h3>
            <p style={styles.p}>
              Si Power BI presenta lentitud en las consultas, existe un botón verde al lado de "Copilot"
              que restablece todos los filtros que se hayan aplicado previamente.
            </p>
            <p style={styles.p}>
              <strong>Recomendación:</strong> En "director", Power BI guarda esos filtros para el próximo
              ingreso, por lo que se recomienda borrar siempre el filtro e iniciar de nuevo para que el
              sistema se reinicie y muestre los datos correctamente.
            </p>
          </div>
        </section>
      </div>

      <div id="positivos-negativos" style={{ ...styles.container, marginTop: 24 }}>
        <h2 style={styles.h2}>Tableros de Vicepresidencia</h2>
        <div style={styles.p}>
          <strong>Tablero Positivos y Negativos</strong>
          <ImageCard
            src={imgPositivosNegativosDetalle}
            alt="Detalle: Tablero Positivos y Negativos"
          />

          <div style={styles.infoBlock}>
            <ul style={styles.infoList}>
              <li id="tablero-positivos" style={styles.infoListItem}>
                <strong>Positivos y negativos:</strong> Se enfoca en conocer el
                detalle de los movimientos negativos y positivos por medio de
                gráficas más llamativas que muestran el total del indicador. Si
                el porcentaje de negativos es crítico, refleja la cantidad de
                cancelaciones que se han realizado en determinado periodo de
                tiempo.
              </li>
              <li id="tablero-tendencias" style={styles.infoListItem}>
                <strong>Tendencias:</strong> Muestra graficos de negocios
                positivos vs. negativos, segmentados por producto, empresa y
                regional, sirviendo como un resumen intuitivo y mostrando el
                comportamiento mensual de los ramos. No muestra el detalle por
                intermedio o asesor.
              </li>
              <li id="tablero-gerencial" style={styles.infoListItem}>
                <strong>Gerencial:</strong> Muestra el desempeño por grupo e
                intermediario o asesor y, a diferencia de las anteriores
                páginas, presenta la producción mes a mes. Este reporte permite
                a los directores hacer seguimiento de si los nuevos negocios se
                caen a los dos o tres meses, lo cual indica un problema de
                persistencia en la colocación. El gerente puede ver el resumen
                de su equipo, mes a mes y año a año.
              </li>
              <li id="tablero-detalle-polizás" style={styles.infoListItem}>
                <strong>Detalle de Polizás:</strong> Permite ver los clientes y
                las polizás especificas que estan generando los negativos,
                facilitando la gestion proactiva.
              </li>
              <li id="tablero-valor-mes" style={styles.infoListItem}>
                <strong>Valor Mes a Mes:</strong> Ofrece una visión gerencial
                diaria para identificar los dias de la semana con mayor
                porcentaje de cancelaciones y asi poder diseñar estrategias.
              </li>
            </ul>
          </div>
        </div>

        <section id="resultados">
          <h2 style={styles.h2}>Resultados</h2>
          <div style={styles.p}>
            <ImageCard
              src={imgResultadosNuevo}
              alt="Ejemplo: Tablero Resultados"
            />

            <div style={styles.infoBlock}>
              <p style={styles.p}>
                Este tablero esta destinado principalmente para conocer el
                resultado a nivel de regional, gerencia y sucursal.
              </p>
              <ul style={styles.infoList}>
                <li id="tablero-resultados-desc" style={styles.infoListItem}>
                  <strong>Resultados:</strong> Es una version identica al
                  informe de "resultados finales" que Alejandro Ramirez envia a
                  final de mes. Muestra el resultado diario con su respectiva
                  proyeccion, reflejando el cumplimiento de la regional.
                </li>
                <li style={styles.infoListItem}>
                  Es un tablero de vision gerencial que ayuda a entender el
                  comportamiento de la localidad.
                </li>
                <li id="contable-gh" style={styles.infoListItem}>
                  <strong>Contable GH Vig. Futura:</strong> Esta consulta
                  permite solo al canal de Grupos Homogeneos conocer la
                  producción contable futura que esta pendiente de ingresar,
                  teniendo en cuenta que se trabaja en el mes de emisión y la
                  producción ingresa solo en el mes de vigencia.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="cotizaciones">
          <h2 style={styles.h2}>Cotizaciones</h2>
          <div style={styles.p}>
            <ImageCard
              src={imgCotizacionesNuevo}
              alt="Ejemplo: Tablero Cotizaciones"
            />
             <div
      style={{
        marginTop: "20px",
        backgroundColor: "#eef4e8",
        border: "2px solid #8bcf6a",
        borderRadius: "14px",
        padding: "24px 28px",
        color: "#374151",
        lineHeight: "1.9",
      }}
    >
      <p style={{ marginBottom: "18px" }}>
        <strong>Resumen:</strong> Tablero está diseñado para ramos
        simonizados donde es posible mapear cotizaciones, cantidad de
        negocios y la convertibilidad. La idea es conocer la dinámica de los
        intermediarios que están cotizando y gestionando oportunidades.
      </p>

      <p style={{ marginBottom: "18px" }}>
        <strong>Detalle de Cotizaciones:</strong> muestra las cotizaciones
        por día, número de póliza y clientes.
      </p>

      <p style={{ marginBottom: 0 }}>
        <strong>Cot. Asistentes Regionales:</strong> Consulta creada para los
        asistentes regionales, muestra el detalle de cada número de
        cotización por un filtro determinado.
      </p>
    </div>
          </div>
        </section>

        <section id="gps">
          <h2 style={styles.h2}>Grupos Homogeneos</h2>
          <div style={styles.p}>
            <strong>Tablero Informe GPS</strong>
            <p>
              Informa emisiones, cancelaciones y rehabilitaciones de negocios
              nuevos y renovados.
            </p>
            <ImageCard src={imgInformeGPSNuevo} alt="Ejemplo: Tablero Informe GPS" />
            
            <div style={styles.infoBlock}>
              <h3 style={styles.infoTitle}></h3>
              
              <div id="resumen-emision" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Resumen Emisión Grupo:</p>
                <p style={styles.p}>Vista macro del volumen de ventas y convenios.</p>
              </div>

              <div id="resumen-polizás" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Resumen Pólizas:</p>
                <p style={styles.p}>Compara Pólizas Año Actual vs. Año Anterior, Prima Anual y % de participación por Regional.</p>
              </div>

              <div id="resumen-grs" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Resumen GR'S (Pólizas Principales):</p>
                <p style={styles.p}>Indica la cantidad de convenios nuevos abiertos.</p>
              </div>

              <div id="emision-estrategia" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Emisión por Estrategia:</p>
                <p style={styles.p}>Desglose por método de recaudo (Libranza vs. Débito).</p>
              </div>

              <div id="potencial-asegurados" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Potencial Asegurados:</p>
                <p style={styles.p}>Proyección de alcance por sublínea.</p>
              </div>

              <div id="mes-7-dias" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Mes en 7 Días:</p>
                <p style={styles.p}>Seguimiento táctico y temporal de la emisión.</p>
              </div>

              <div id="tabla-dinámica" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Tabla Dinámica:</p>
                <p style={styles.p}>Muestra emisiones y prima anual desglosada por Director de Ventas y semana del mes.</p>
              </div>

              <div id="grafico-barras" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Gráfico de Barras (Cant. Pólizas por Día):</p>
                <p style={styles.p}>Permite identificar picos de producción diaria comparando el año actual (2026) vs. anterior (2025).</p>
              </div>

              <div id="clientes-netos" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Clientes Netos:</p>
                <p style={styles.p}>Evalua la salud de la cartera (Venta real después de bajas); Fórmula: Clientes Netos = Emisiones - (Cancelaciones + Rehabilitaciones)</p>
              </div>

              <div id="tabla-desempeno" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Tabla de Desempeño:</p>
                <p style={styles.p}>Cruza Regional y Director para mostrar emisiones vs. cancelaciones y el resultado neto.</p>
              </div>

              <div id="tendencia-clientes" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Tendencia Clientes Netos:</p>
                <p style={styles.p}>Gráfico de líneas que muestra la evolución mensual del indicador, permitiendo ver estacionalidad y desviaciones.</p>
              </div>

              <div id="clientes-netos-detalle" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Clientes Netos Detalle:</p>
                <p style={styles.p}>Análisis profundo de la deserción y efectividad por equipo.</p>
              </div>

              <div id="cancelados" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>% Cancelados:</p>
                <p style={styles.p}>Métrica crítica para identificar directores o asesores con alta tasa de bajas.</p>
              </div>

              <div id="grafico-barras-h" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Gráfico de Barras Horizontal:</p>
                <p style={styles.p}>Comparativa visual rápida entre Directores basada en la cantidad de pólizas emitidas vs. netas.</p>
              </div>

              <div id="detalle-polizás" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}> Detalle Pólizas NN / RE_CAN / GR'S:</p>
                <p style={styles.p}>Auditoría y revisión línea a línea. Estas páginas son tablas granulares que muestran el Número de Póliza, Nombre del Cliente, Asesor, Clave, y Prima.</p>
              </div>

              <div id="detalle-grs" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Detalle GR'S:</p>
                <p style={styles.p}>Se enfoca específicamente en los convenios (Pólizas Madre) y sus vigencias.</p>
              </div>

              <div id="detalle-educadores" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Detalle Pólizas NN Educadores:</p>
                <p style={styles.p}>Monitoreo exclusivo del nicho de Educadores.</p>
              </div>

              <div id="resumen-localidad" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Resumen por Localidad:</p>
                <p style={styles.p}>Ranking de ciudades por valor de prima y cantidad de negocios.</p>
              </div>

              <div id="desglose-descuento" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Desglose por Descuento:</p>
                <p style={styles.p}>Clasificación de la venta según si es por Libranza, Cuenta de Ahorros o tarjetas.</p>
              </div>

              <div id="vigencia" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Vigencia:</p>
                <p style={styles.p}>Permite evaluar el comportamiento de este producto bajo el año fiscal seleccionado</p>
              </div>
            </div>
          </div>
        </section>

        <section id="parcial-boni">
          <h2 style={styles.h2}>Parcial Bonificaciones y Vigentes</h2>
          <div style={styles.p}>
            <p>
              Este tablero permite visualizar rendimiento parcial, metas y base
              de clientes vigentes para apoyar el cierre del periodo.
            </p>
            <ImageCard
              src={imgParcialBonificacionesNuevo}
              alt="Ejemplo: Tablero Parcial Bonificaciones y Vigentes"
            />
            
            <div style={styles.infoBlock}>
              <div id="parcial-bonif-detalle" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Parcial Bonificaciones</p>
                <p style={styles.p}>Detalle de tus bonificaciones parciales de acuerdo a tus jugadas.</p>
                <p style={styles.p}>Indicadores claros para que sepas exactamente cuánto te falta para alcanzar tu siguiente meta.</p>
              </div>

              <div id="info-clientes-vigentes" style={{ marginBottom: 20 }}>
                <p style={{ ...styles.p, fontWeight: 'bold', marginBottom: 8 }}>Información Clientes Vigentes</p>
                <p style={styles.p}>Un desglose completo de la base de clientes vigentes dentro del canal.</p>
                <p style={styles.p}>Información estratégica para gestionar y fidelizar a tu cartera de forma eficiente.</p>
                <p style={styles.p}>Estado de las pólizas vigentes para los ramos de: Afines, Educadores, Salud, Vida y Hogar.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="asesor-aa">
  <h2 style={styles.h2}>Agentes y Agencias</h2>

  <div style={styles.p}>
    <ImageCard
      src={imgAsesorAANuevo}
      alt="Ejemplo: Tablero Asesor A&A"
    />

    <div
      style={{
        marginTop: "20px",
        backgroundColor: "#eef4e8",
        border: "2px solid #8bcf6a",
        borderRadius: "14px",
        padding: "24px 28px",
        color: "#374151",
        lineHeight: "1.9",
      }}
    >
      <p style={{ marginBottom: "18px" }}>
        <strong>Tablero Asesor A&amp;A:</strong> Fue diseñado para que los
        directores entiendan y visualicen el comportamiento de producción de
        sus intermediarios.
      </p>

      <p id="hoja-vida" style={{ marginBottom: "18px" }}>
        <strong>Hoja de Vida:</strong> Esta página muestra el resumen de todos
        los indicadores claves del intermediario. Para su consulta se debe
        ingresar una clave en el filtro, la cual al ejecutar valida su razón
        social.
      </p>

      <p style={{ marginBottom: "18px" }}>
        Este informe funciona como un acumulado y no permite seleccionar varios
        meses, por lo que a menudo los directores lo consideran un error, pero
        no lo es. Se utiliza el concepto de rolling 12 meses, mostrando la
        cartera del intermediario en los 12 meses anteriores a la fecha
        seleccionada. Por ejemplo, si se selecciona diciembre, muestra de enero
        a diciembre; si se selecciona noviembre, muestra de noviembre de 2024 a
        noviembre de 2025.
      </p>

      <p style={{ marginBottom: "18px" }}>
        El objetivo es comparar la cartera del intermediario con la del año
        anterior, así como su comisión, utilidad y siniestros. También muestra
        datos básicos del intermediario, como ranking del director, regional y
        pasarela, y lo más importante: su tipo de cartera, nuevos y
        renovaciones, negocios vigentes, cancelados, factor de renovación y
        factor de persistencia.
      </p>

      <p style={{ marginBottom: "18px" }}>
        Esta información es fundamental para iniciar la conversación comercial
        con el intermediario, permitiendo analizar su comportamiento antes de
        reunirse con ellos, por ejemplo si solo tienen renovaciones o nuevos
        negocios, o si generan utilidad o comisión.
      </p>

      <p id="indicadores-director" style={{ marginBottom: "18px" }}>
        <strong>Indicadores Director A&amp;A:</strong> Creada con base en los
        planes de negocio del año anterior. Algunas secciones como metas podrían
        no tener datos, por lo que solo muestran la información real.
      </p>

      <p style={{ marginBottom: "18px" }}>
        Esta vista muestra los intermediarios asignados al director y su
        desempeño con indicadores claves como número de cotizaciones, negocios,
        involucrados y su cumplimiento.
      </p>

      <p id="semaforo-director" style={{ marginBottom: "18px" }}>
        <strong>Semáforo Director A&amp;A:</strong> Se enfoca en el
        cumplimiento de la producción respecto a las metas establecidas para
        cada director y es la herramienta de seguimiento diario para conocer el
        resultado de las bonificaciones.
      </p>

      <p style={{ marginBottom: "18px" }}>
        Esta pestaña muestra la fecha de corte, el frente, la estructura, el
        director, el tipo de negocio, la localidad y el intermediario. Uno de
        los cuadros presenta la meta, la producción, el cumplimiento y la
        brecha, segmentada en nuevos y renovaciones.
      </p>

      <p style={{ marginBottom: "18px" }}>
        La sección de nuevos se subdivide según las bolsas de las tablas de
        bonificaciones o bolsas foco, y luego por ramos, permitiendo ver la
        meta de cada ramo, el real y el cumplimiento para la gestión.
      </p>

      <p style={{ marginBottom: "18px" }}>
        Al seleccionar un dato en la parte superior, por ejemplo autos, la
        parte inferior despliega las pólizas y los clientes correspondientes:
        frente, póliza, cliente y producción. Se muestran dos columnas de
        producción: la normal y la anualizada ARL, que se utiliza para los
        cálculos de los 12 meses.
      </p>

      <p style={{ marginBottom: "18px" }}>
        Este tablero es de uso diario y se actualiza a las 9:30 AM.
      </p>

      <p id="tendencia-aa" style={{ marginBottom: "18px" }}>
        <strong>Tendencia:</strong> La pestaña Tendencias presenta la misma
        información que las páginas anteriores, pero en formato de gráficas,
        facilitando la visualización de la evolución de un intermediario, por
        ejemplo producción versus comisión y fluctuaciones mensuales.
      </p>

      <p id="gerencial-aa" style={{ marginBottom: "18px" }}>
        <strong>Gerencial:</strong> Ofrece un resumen gerencial para que los
        directores puedan conocer la composición de su grupo completo de
        intermediarios. Esta sección es una base de datos que resume la cartera
        total, nuevos negocios, utilidad y siniestros de todo el grupo.
      </p>

      <p style={{ marginBottom: 0 }}>
        Al igual que la página de hoja de vida, funciona con el concepto de
        rolling 12 meses. También incluye el top de cartera y el top de
        asesores por utilidad, siendo una visual diferente para conocer el
        grupo y los intermediarios.
      </p>
    </div>
  </div>
</section>

        <section id="estrategia">
  <h2 style={styles.h2}>Estrategia Comercial A&amp;A</h2>

  <div style={styles.p}>
    <ImageCard
      src={imgEstrategiaAANuevo}
      alt="Ejemplo: Estrategia Comercial A&A"
    />

    <div
      style={{
        marginTop: "20px",
        backgroundColor: "#eef4e8",
        border: "2px solid #8bcf6a",
        borderRadius: "14px",
        padding: "24px 28px",
        color: "#374151",
        lineHeight: "1.9",
      }}
    >
      <p style={{ marginBottom: "18px" }}>
        <strong>Estrategia Comercial A&amp;A:</strong> Tiene como objetivo
        identificar oportunidades para desarrollar con cada intermediario
        durante las conversaciones comerciales. El tablero de Estrategia busca
        entender el desempeño y la producción del intermediario en el mercado,
        incluyendo perfil de clientes, clasificación y los ramos más vendidos.
      </p>

      <p id="panorama-general" style={{ marginBottom: "18px" }}>
        <strong>Panorama General:</strong> La primera visión,
        &quot;Panorama General,&quot; ayuda al director a conocer el
        intermediario desde la perspectiva de sus clientes: tomadores vigentes,
        clientes jurídicos, pólizas individuales y colectivas, comisiones,
        desempeño y el perfil de sus clientes. Esto lo diferencia del Tablero
        Asesor, que se enfoca en el comportamiento interno del intermediario
        dentro de Bolívar.
      </p>

      <p id="análisis-tomadores" style={{ marginBottom: "18px" }}>
        <strong>
          Análisis tomadores jurídicos y Análisis tomadores naturales:
        </strong>{" "}
        estas páginas muestran la distribución del portafolio, clasificación
        empresarial, ubicación, cantidad de riesgos y la matriz de fidelización
        de clientes jurídicos. La parte más valiosa es que el tablero identifica
        posibles clientes con oportunidades de desarrollo según las políticas de
        Seguros Bolívar.
      </p>

      <p style={{ marginBottom: "18px" }}>
        Por ejemplo, si un intermediario tiene una póliza ARL de una empresa
        con 1000 empleados, el tablero la identifica como una oportunidad
        potencial para ofrecer productos adicionales como salud colectiva, vida
        grupo o pymes. La idea es que el director use esta información para ser
        un generador de estrategia con el intermediario, en lugar de enfocarse
        solo en el cumplimiento de metas, reforzando la sensación de
        acompañamiento.
      </p>

      <p id="oportunidades" style={{ marginBottom: "18px" }}>
        <strong>Oportunidades:</strong> la página de Oportunidades presenta un
        embudo comercial que estima las oportunidades por ramo, las
        cotizaciones necesarias según el porcentaje nacional, las conversiones,
        la prima esperada y la comisión esperada.
      </p>

      <p style={{ marginBottom: "18px" }}>
        Esta herramienta facilita una conversación comercial basada en cifras,
        preguntando al intermediario si le interesa la comisión esperada de las
        oportunidades identificadas y enfatizando que no es necesario ir a
        buscar nuevos clientes externamente.
      </p>

      <p id="asegurados" style={{ marginBottom: 0 }}>
        <strong>Asegurados jurídicos y Asegurados naturales:</strong>{" "}
        estas páginas ofrecen diferentes vistas de la información sobre los
        asegurados vigentes en Bolívar del intermediario y su perfil, por
        ejemplo ubicación, actividad económica, rango de empleados y otras
        variables relevantes para la gestión comercial.
      </p>
    </div>
  </div>
</section>
      </div>
    </div>
  );
};

export default AprendamosPowerBI;
