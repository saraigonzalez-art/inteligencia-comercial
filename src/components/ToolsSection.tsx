import SectionHeader from "./SectionHeader";
import ToolCard from "./ToolCard";
import {
  FileText,
  BarChart3,
  Search,
  Globe,
  Ticket,
  Users,
  Heart,
  Shield,
  AlertTriangle,
  CreditCard,
  ClipboardList,
} from "lucide-react";

const tools = [
  {
    name: "SOFI",
    description:
      "Centralizador de solicitudes para los canales de ventas. Indicadores: ANS, insatisfaccion y SES.",
    route: "#",
    utility: "Reporte de solicitudes",
    icon: <Ticket className="h-5 w-5" />,
  },
  {
    name: "Simon Ventas",
    description:
      "Sistema de informacion de Seguros Bolivar. Cotiza y emite polizas, consulta bonificaciones y procesos internos.",
    route: "#",
    utility: "Cotizacion, emision y bonificaciones",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    name: "Tronador",
    description:
      "Herramienta especializada para consultar polizas vigentes, historial y detalles de cobertura.",
    route: "#",
    utility: "Consulta de polizas",
    icon: <Search className="h-5 w-5" />,
  },
  {
    name: "Salesforce",
    description:
      "Plataforma CRM para la gestion integral de clientes y seguimiento de oportunidades comerciales.",
    route: "#",
    utility: "Gestion de clientes y oportunidades",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    name: "Jira",
    description:
      "Herramienta de gestion de proyectos y seguimiento de tareas para el equipo comercial.",
    route: "https://jirasegurosbolivar.atlassian.net/servicedesk/customer/portal/2",
    utility: "Gestion de proyectos y tareas",
    routeLabel: "jirasegurosbolivar.atlassian.net/servicedesk/customer/portal/2",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    name: "Intranet",
    description:
      "Portal interno corporativo con recursos, comunicados y documentacion de la compania.",
    route: "https://intranet.bolnet.com.co/",
    utility: "Recursos y comunicados internos",
    icon: <Users className="h-5 w-5" />,
  },
  {
    name: "Area Usuaria",
    description:
      "Pagina web donde se encuentra todo lo relacionado con documentos publicos de todas las companias, politicas de compras, procedimientos en herramientas habilitadas como Coupa y CAI, reglamentos a proveedores y mas.",
    route:
      "https://sites.google.com/segurosbolivar.com/sitecompras/inicio/e-procurement-coupa?authuser=0",
    utility: "Consulta de politicas, documentos y procedimientos de compras",
    routeLabel:
      "sites.google.com/segurosbolivar.com/sitecompras/inicio/e-procurement-coupa?authuser=0",
    icon: <ClipboardList className="h-5 w-5" />,
  },
  {
    name: "CAI",
    description:
      "Herramienta de compras para validacion de facturas, comprobantes de pago, consulta de gastos y presupuesto por centro de costos.",
    route:
      "https://erp.grupobolivar.com/psp/ERPPRD/EMPLOYEE/ERP/?cmd=expire",
    utility: "Validacion de facturas, pagos, gastos y presupuesto",
    note: "Pendiente agregar el PDF que Lina envio por correo.",
    routeLabel:
      "erp.grupobolivar.com/psp/ERPPRD/EMPLOYEE/ERP/?cmd=expire",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    name: "Coupa",
    description:
      "Herramienta de compras para crear solicitudes, realizar recepcion y consultar ordenes de compra.",
    route: "https://segurosbolivar.coupahost.com",
    utility: "Solicitudes, recepcion y consulta de ordenes de compra",
    note: "Pendiente agregar el PDF que Lina envio por correo.",
    routeLabel: "segurosbolivar.coupahost.com",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    name: "Aprecio",
    description:
      "Plataforma habilitada para incentivos de tecnicos correspondiente al CNV.",
    route: "https://usuarios.apprecio.com.co/#/es_co/usuarios",
    utility: "Incentivos y reconocimiento de tecnicos",
    note: "Pendiente agregar el PDF que Lina envio por correo.",
    routeLabel: "usuarios.apprecio.com.co/#/es_co/usuarios",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    name: "Quantum Pay",
    description:
      "Proveedor autorizado para bonos por medio de tarjeta digital, facilitando la realizacion de compras en cualquier plataforma de comercio electronico o establecimiento que acepte pagos digitales.",
    route: "https://quantumpay.com.co/",
    utility: "Bonos y pagos digitales",
    routeLabel: "quantumpay.com.co",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    name: "SARO",
    description:
      "Sistema de Administracion de Riesgo Operativo. Permite conocer los riesgos asociados al area de Inteligencia.",
    route: "#",
    utility: "Gestion de riesgo operativo",
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    name: "Power BI",
    description:
      "Plataforma de visualizacion de datos e inteligencia de negocio con dashboards interactivos.",
    route: "#",
    utility: "Dashboards y reportes analiticos",
    icon: <Shield className="h-5 w-5" />,
  },
];

const ToolsSection = () => (
  <section id="herramientas" >
    
  </section>
);

export default ToolsSection;
