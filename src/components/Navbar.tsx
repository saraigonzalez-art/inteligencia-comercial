import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ExternalLink, Search } from "lucide-react";
import logo from "../assets/Logo.png";
import navbarBg from "../assets/navbar-bg.png";
import { useLocation, useNavigate } from "react-router-dom";

const presentacionBonificacionesLinks = [
  {
    label: "Presentación",
    href: "https://docs.google.com/presentation/d/1J4sO92Z1T4rY_lnu64jDXRVT2eXG-HpyDZVXt6Xo6_s/edit#slide=id.p1",
  },
  {
    label: "Director Comercial",
    href: "https://docs.google.com/presentation/d/1J4sO92Z1T4rY_lnu64jDXRVT2eXG-HpyDZVXt6Xo6_s/edit?slide=id.g3936da25e3f_0_503#slide=id.g3936da25e3f_0_503",
  },
  {
    label: "Director de Ventas y Relacionamiento",
    href: "https://docs.google.com/presentation/d/1J4sO92Z1T4rY_lnu64jDXRVT2eXG-HpyDZVXt6Xo6_s/edit?slide=id.g3936da25e3f_0_485#slide=id.g3936da25e3f_0_485",
  },
  {
    label: "Asesor de Ventas",
    href: "https://docs.google.com/presentation/d/1J4sO92Z1T4rY_lnu64jDXRVT2eXG-HpyDZVXt6Xo6_s/edit?slide=id.g39366069afe_0_10818#slide=id.g39366069afe_0_10818",
  },
  {
    label: "Relacionistas y Vinculadores",
    href: "https://docs.google.com/presentation/d/1J4sO92Z1T4rY_lnu64jDXRVT2eXG-HpyDZVXt6Xo6_s/edit?slide=id.g3936da25e3f_0_0#slide=id.g3936da25e3f_0_0",
  },
  {
    label: "Convención Nacional de Ventas",
    href: "https://docs.google.com/presentation/d/1J4sO92Z1T4rY_lnu64jDXRVT2eXG-HpyDZVXt6Xo6_s/edit?slide=id.g3936da25e3f_0_511#slide=id.g3936da25e3f_0_511",
  },
];

const agentesAgenciasLinks = [
  {
    label: "Compensación A&A",
    href: "https://docs.google.com/presentation/d/1DMWizD57AQ8RxwahXGy_jGSV_jvcZ8BYaqf8SG5f_TI/edit?slide=id.g396afe731a1_4_0#slide=id.g396afe731a1_4_0",
    highlighted: true,
  },
  {
    label: "Concurso Nacional De Ventas",
    href: "https://docs.google.com/presentation/d/1DMWizD57AQ8RxwahXGy_jGSV_jvcZ8BYaqf8SG5f_TI/edit?slide=id.g396afe731a1_4_0#slide=id.g396afe731a1_4_0",
  },
];

const normalizeSearchText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const searchItems = [
  { label: "Aprendamos de Power BI", type: "route", value: "/aprendamos-powerbi", category: "Navegacion" },
  { label: "Estructura", type: "route", value: "/estructura", category: "Navegacion" },
  { label: "Tableros", type: "route", value: "/tableros", category: "Navegacion" },
  { label: "Glosario", type: "section", value: "glosario", category: "Navegacion" },
  { label: "FAQ", type: "section", value: "faq", category: "Navegacion" },
  { label: "Sage Force", type: "external", value: "https://www.forcemanager.com/es/", category: "Herramientas" },
  { label: "Simon Ventas", type: "external", value: "https://registro.segurosbolivar.com/nidp/idff/sso?id=114&sid=1", category: "Herramientas" },
  { label: "Simon Cotizador", type: "external", value: "https://registro.segurosbolivar.com/nidp/idff/sso?id=114&sid=2", category: "Herramientas" },
  { label: "Simon Servicio", type: "external", value: "https://registro.segurosbolivar.com/nidp/saml2/sso?id=112&sid=3", category: "Herramientas" },
  { label: "Tronador", type: "external", value: "jnlps://prodtronador.bolnet.com.co/forms/frmservlet?config=TRON", category: "Herramientas" },
  { label: "Jira", type: "external", value: "https://jirasegurosbolivar.atlassian.net/servicedesk/customer/portal/2", category: "Herramientas" },
  { label: "Intranet", type: "external", value: "https://intranet.bolnet.com.co/", category: "Herramientas" },
  { label: "Area Usuaria", type: "external", value: "https://sites.google.com/segurosbolivar.com/sitecompras/inicio/e-procurement-coupa?authuser=0", category: "Herramientas" },
  { label: "CAI", type: "external", value: "https://erp.grupobolivar.com/psp/ERPPRD/EMPLOYEE/ERP/?cmd=expire", category: "Herramientas" },
  { label: "Aprecio", type: "external", value: "https://usuarios.apprecio.com.co/#/es_co/usuarios", category: "Herramientas" },
  { label: "Coupa", type: "external", value: "https://segurosbolivar.coupahost.com", category: "Herramientas" },
  { label: "Quantum Pay", type: "external", value: "https://quantumpay.com.co/", category: "Herramientas" },
  { label: "SARO", type: "external", value: "https://suc.ores.resolver.com/#/session", category: "Herramientas" },
  { label: "Impulsa 2X Estrategia VP", type: "external", value: "https://docs.google.com/presentation/d/1Pb2uVPa8GwibBhM59YCe-wiYXyZhCxOLINLHNZ32gJ4/edit?slide=id.g39285d738ec_0_0#slide=id.g39285d738ec_0_0", category: "Canales" },
  { label: "Impulsa 2X Estrategias de linea de negocio", type: "external", value: "https://drive.google.com/drive/folders/1vLkNbSN2UMHHQwTC4maz0ruUz_N1mJDK", category: "Canales" },
  { label: "Memoria Impulsa A&A-GH", type: "external", value: "https://drive.google.com/drive/folders/1DA6Lhd8aszm9LPI_G3FBKy7Z-zlgRiJ9", category: "Canales" },
  { label: "Plan Comercial", type: "external", value: "https://docs.google.com/presentation/d/176zINhfTGQL7SXJ8lVKTfiMy8nW9HGz-Wo94VxjqaVQ/edit?slide=id.g397a59941db_0_0#slide=id.g397a59941db_0_0", category: "Canales" },
  { label: "Segmentacion de Intermediarios", type: "external", value: "https://docs.google.com/presentation/d/1MbQp2jhZdkHAlG7TCDvuVmw0z2RI8OCJW2m4g8u8OSk/edit", category: "Canales" },
  { label: "Positivos y Negativos", type: "route", value: "/vp/positivos", category: "Tableros" },
  { label: "Cotizaciones", type: "route", value: "/vp/cotizaciones", category: "Tableros" },
  { label: "Resultados VP", type: "route", value: "/vp/resultados", category: "Tableros" },
  { label: "Bonificaciones", type: "route", value: "/gh/bonificaciones", category: "Tableros" },
  { label: "Detalle GH", type: "route", value: "/gh/detalle", category: "Tableros" },
  { label: "Informe GPS", type: "route", value: "/gh/gps-powerbi", category: "Tableros" },
  { label: "Tablero Asesor A&A", type: "route", value: "/aa/tablero", category: "Tableros" },
  { label: "Estrategia Comercial", type: "route", value: "/aa/estrategia", category: "Tableros" },
  { label: "Registro Individual", type: "route", value: "/registro-individual", category: "Navegacion" },
  { label: "Presentacion", type: "external", value: "https://docs.google.com/presentation/d/1J4sO92Z1T4rY_lnu64jDXRVT2eXG-HpyDZVXt6Xo6_s/edit#slide=id.p1", category: "Compensacion" },
  { label: "Director Comercial", type: "external", value: "https://docs.google.com/presentation/d/1J4sO92Z1T4rY_lnu64jDXRVT2eXG-HpyDZVXt6Xo6_s/edit?slide=id.g3936da25e3f_0_503#slide=id.g3936da25e3f_0_503", category: "Compensacion" },
  { label: "Director de Ventas y Relacionamiento", type: "external", value: "https://docs.google.com/presentation/d/1J4sO92Z1T4rY_lnu64jDXRVT2eXG-HpyDZVXt6Xo6_s/edit?slide=id.g3936da25e3f_0_485#slide=id.g3936da25e3f_0_485", category: "Compensacion" },
  { label: "Asesor de Ventas", type: "external", value: "https://docs.google.com/presentation/d/1J4sO92Z1T4rY_lnu64jDXRVT2eXG-HpyDZVXt6Xo6_s/edit?slide=id.g39366069afe_0_10818#slide=id.g39366069afe_0_10818", category: "Compensacion" },
  { label: "Relacionistas y Vinculadores", type: "external", value: "https://docs.google.com/presentation/d/1J4sO92Z1T4rY_lnu64jDXRVT2eXG-HpyDZVXt6Xo6_s/edit?slide=id.g3936da25e3f_0_0#slide=id.g3936da25e3f_0_0", category: "Compensacion" },
  { label: "Convencion Nacional de Ventas", type: "external", value: "https://docs.google.com/presentation/d/1J4sO92Z1T4rY_lnu64jDXRVT2eXG-HpyDZVXt6Xo6_s/edit?slide=id.g3936da25e3f_0_511#slide=id.g3936da25e3f_0_511", category: "Compensacion" },
  { label: "Compensacion A&A", type: "external", value: "https://docs.google.com/presentation/d/1DMWizD57AQ8RxwahXGy_jGSV_jvcZ8BYaqf8SG5f_TI/edit?slide=id.g396afe731a1_4_0#slide=id.g396afe731a1_4_0", category: "Compensacion" },
  { label: "Sobre Comisiones Autos", type: "info", value: "#", category: "Compensacion" },
  { label: "Sobre Comisiones vida", type: "info", value: "#", category: "Compensacion" },
  { label: "Concurso Nacional de Ventas", type: "external", value: "https://docs.google.com/presentation/d/1DMWizD57AQ8RxwahXGy_jGSV_jvcZ8BYaqf8SG5f_TI/edit?slide=id.g396afe731a1_4_0#slide=id.g396afe731a1_4_0", category: "Compensacion" },
  { label: "Que es Power BI", type: "route", value: "/aprendamos-powerbi", category: "Aprendamos Power BI" },
  { label: "Como solicitar acceso", type: "route", value: "/aprendamos-powerbi", category: "Aprendamos Power BI" },
  { label: "Tips de navegacion", type: "route", value: "/aprendamos-powerbi", category: "Aprendamos Power BI" },
  { label: "Controles generales", type: "route", value: "/aprendamos-powerbi", category: "Aprendamos Power BI" },
  { label: "Manejo de filtros", type: "route", value: "/aprendamos-powerbi", category: "Aprendamos Power BI" },
  { label: "Parcial Bonificaciones y Vigentes", type: "route", value: "/aprendamos-powerbi", category: "Aprendamos Power BI" },
  { label: "Detalle Bonificaciones", type: "route", value: "/aprendamos-powerbi", category: "Aprendamos Power BI" },
  { label: "Cambios de Estructura", type: "external", value: "https://forms.gle/ba3YQJypkEJaC7F99", category: "Reportes" },
  { label: "Reporte de Proyeccion", type: "external", value: "https://docs.google.com/spreadsheets/d/1T3szvBDqXFomv8LN3XI0f_84KolPzelJ6URLY4zY_e8/edit?gid=0#gid=0", category: "Reportes" },
  { label: "Rubros Transporte/Premios", type: "external", value: "https://docs.google.com/spreadsheets/d/1KXSvOBQIqNHc_ijFCH3ebLSYJPvOx9Po/edit?gid=576474272#gid=576474272", category: "Reportes" },
  { label: "726 No Contributivo", type: "external", value: "https://docs.google.com/spreadsheets/d/1Yff6evlnsFLB_pjCpDielEa5omSvpNc8JUV_DOVV9Q/edit?usp=sharing", category: "Reportes" },
  { label: "303 Salud Colectivo", type: "external", value: "https://docs.google.com/spreadsheets/d/1QAnmT0iD7x8yAjIWQKgxeWR0aQJu0gevFGaKQZkSB0AU/edit?usp=sharing", category: "Reportes" },
  { label: "Asignacion de Empresas", type: "external", value: "https://docs.google.com/forms/d/e/1FAIpQLSeaRk8djXjJUSIQQNA6vNZ8-tpl_W0AQjJ2yJk3aXYovrHrw/viewform", category: "Reportes" },
  { label: "Espejo GH y Sinergia", type: "external", value: "https://forms.gle/qRHEXWHGmY5iovZh7", category: "Reportes" },
  { label: "Promotor Multiproducto", type: "external", value: "https://forms.gle/eKbZaianSVZYETf69", category: "Reportes" },
  { label: "Indicadores y gestion comercial", type: "section", value: "glosario", category: "Glosario" },
  { label: "Polizas y operacion", type: "section", value: "glosario", category: "Glosario" },
  { label: "Personas y siniestros", type: "section", value: "glosario", category: "Glosario" },
  { label: "Facturacion y estados", type: "section", value: "glosario", category: "Glosario" },
];

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tablerosOpen, setTablerosOpen] = useState(false);
  const [canalesOpen, setCanalesOpen] = useState(false);
  const [bonificacionesOpen, setBonificacionesOpen] = useState(false);
  const [rolesComercialesOpen, setRolesComercialesOpen] = useState(false);
  const [areaUsuarioOpen, setAreaUsuarioOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileHerramientasOpen, setMobileHerramientasOpen] = useState(false);
  const [mobileCanalesOpen, setMobileCanalesOpen] = useState(false);
  const [mobileCompensacionOpen, setMobileCompensacionOpen] = useState(false);
  const [mobileBonificacionesDetalleOpen, setMobileBonificacionesDetalleOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const desktopNavClass = (isActive: boolean) =>
    `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "text-[#166534]"
        : "text-[#166534] hover:text-[#15803d]"
    }`;

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const navbarOffset = 96;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${sectionId}`);
  };

  const handleSectionNavigation = (sectionId: string) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    scrollToSection(sectionId);
  };

  const dropdownRef = useRef(null);
  const tablerosRef = useRef(null);
  const canalesRef = useRef(null);
  const bonificacionesRef = useRef(null);
  const searchRef = useRef(null);

  const normalizedQuery = normalizeSearchText(searchQuery);
  const filteredSearchItems = normalizedQuery
    ? searchItems
      .filter((item) =>
        normalizeSearchText(`${item.label} ${item.category}`).includes(normalizedQuery),
      )
      .slice(0, 20)
    : [];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }

      if (tablerosRef.current && !tablerosRef.current.contains(event.target)) {
        setTablerosOpen(false);
      }

      if (canalesRef.current && !canalesRef.current.contains(event.target)) {
        setCanalesOpen(false);
      }

      if (bonificacionesRef.current && !bonificacionesRef.current.contains(event.target)) {
        setBonificacionesOpen(false);
      }

      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.replace("#", "");
    const timeoutId = window.setTimeout(() => {
      scrollToSection(sectionId);
    }, 150);

    return () => window.clearTimeout(timeoutId);
  }, [location.hash]);

  useEffect(() => {
    if (!dropdownOpen) {
      setAreaUsuarioOpen(false);
    }
  }, [dropdownOpen]);

  useEffect(() => {
    if (!bonificacionesOpen) {
      setRolesComercialesOpen(false);
    }
  }, [bonificacionesOpen]);

  useEffect(() => {
    setOpen(false);
    setMobileHerramientasOpen(false);
    setMobileCanalesOpen(false);
    setMobileCompensacionOpen(false);
    setMobileBonificacionesDetalleOpen(false);
  }, [location.pathname, location.hash]);

  const handleSearchItemSelect = (item) => {
    setSearchOpen(false);
    setOpen(false);
    setSearchQuery("");

    if (item.type === "route") {
      navigate(item.value);
      return;
    }

    if (item.type === "section") {
      handleSectionNavigation(item.value);
      return;
    }

    if (item.type === "info") {
      return;
    }

    window.open(item.value, "_blank", "noopener,noreferrer");
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full border-b bg-white"
      style={{
        background: '#fff',
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-1 py-2 md:px-2" style={{ minHeight: '70px' }}>
        <a href="#" className="flex items-center" style={{ marginRight: '1rem', marginLeft: '-0.35rem' }}>
          <img src={logo} alt="Inicio" style={{ height: '48px', width: 'auto', marginLeft: '0' }} />
        </a>

        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={() => {
              navigate("/estructura");
            }}
            className={desktopNavClass(location.pathname === "/estructura")}
          >
            Estructura Comercial
          </button>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
              }}
              className={`${desktopNavClass(dropdownOpen)} flex items-center gap-1`}
            >
              Herramientas
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-5 w-[760px] rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-black/5">
                <h3 className="mb-6 text-xl text-gray-900">
                  Herramientas de Consulta
                </h3>

                <div className="grid max-h-[420px] grid-cols-2 gap-x-12 gap-y-8 overflow-y-auto pr-4">


                  <button
                    onClick={() =>
                      window.open("https://www.forcemanager.com/es/", "_blank", "noopener,noreferrer")
                    }
                    className="w-full rounded-xl border border-gray-200 bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
                  >
                    <h4 className="text-sm font-semibold text-gray-900">
                      Sage Force
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      Sage Sales Management es el CRM para los equipos de ventas con el objetivo de acelerar su productividad.
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-blue-600">
                      <ExternalLink size={12} />
                    </div>
                  </button>



                  <button
                    onClick={() =>
                      window.open(
                        "jnlps://prodtronador.bolnet.com.co/forms/frmservlet?config=TRON",
                        "_self"
                      )
                    }
                    className="w-full rounded-xl border border-gray-200 bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
                  >
                    <h4 className="text-sm font-semibold text-gray-900">
                      Tronador
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      Sistema que permite consultar las polizas activas y canceladas de Seguros Bolivar.
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-blue-600">
                      <ExternalLink size={12} />
                      
                    </div>
                  </button>

                  <button
                    onClick={() =>
                      window.open(
                        "https://jirasegurosbolivar.atlassian.net/servicedesk/customer/portal/2",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="w-full rounded-xl border border-gray-200 bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
                  >
                    <h4 className="text-sm font-semibold text-gray-900">
                      Jira
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      Catalogo de Servicios de TI de Seguros Bolivar para el reporte de incidencias tecnologicas.
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-blue-600">
                       <ExternalLink size={12} />
                    </div>
                  </button>

                  <button
                    onClick={() =>
                      window.open(
                        "https://intranet.bolnet.com.co/",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="w-full rounded-xl border border-gray-200 bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
                  >
                    <h4 className="text-sm font-semibold text-gray-900">
                      Intranet
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      Una intranet de empresa es una red privada y digital, segura y de uso exclusivo para empleados, que funciona como un espacio de trabajo centralizado para compartir informacion.
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-blue-600">
                      <ExternalLink size={12} />
                    </div>
                  </button>


                  <button
                    onClick={() =>
                      window.open(
                        "https://us.core.resolver.com/#/session",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="w-full rounded-xl border border-gray-200 bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
                  >
                    <h4 className="text-sm font-semibold text-gray-900">
                      SARO
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      Sistema de administracion y mitigacion efectiva del riesgo asociado a los procesos y el riesgo legal, apoyando el cumplimiento de los objetivos misionales y evitando perdidas asociadas a los factores de riesgo operacional, internos y externos.
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-blue-600">
                      <ExternalLink size={12} />
                    </div>
                  </button>
                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md">
                    <h4 className="text-sm font-semibold text-gray-900">
                      Simon
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      Sistema de informacion de Seguros Bolivar, que permite cotizar y emitir las polizas de los clientes.
                    </p>

                    <div className="mt-4 flex flex-col gap-2">

                      <button
                        onClick={() =>
                          window.open(
                            "https://registro.segurosbolivar.com/nidp/idff/sso?id=114&sid=1",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-xs text-blue-600 transition hover:border-yellow-400 hover:bg-gray-50"
                      >
                        <span>Simon ventas</span>
                        <ExternalLink size={12} />
                      </button>

                      <button
                        onClick={() =>
                          window.open(
                            "https://registro.segurosbolivar.com/nidp/idff/sso?id=114&sid=2",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-xs text-blue-600 transition hover:border-yellow-400 hover:bg-gray-50"
                      >
                        <span>Simon cotizador</span>
                        <ExternalLink size={12} />
                      </button>

                      <button
                        onClick={() =>
                          window.open(
                            "https://registro.segurosbolivar.com/nidp/saml2/sso?id=112&sid=3",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-xs text-blue-600 transition hover:border-yellow-400 hover:bg-gray-50"
                      >
                        <span>Simon servicio</span>
                        <ExternalLink size={12} />
                      </button>

                    </div>
                  </div>
                  <div className="border-l-2 border-gray-100 pl-4 hover:border-yellow-400 transition-colors">
                    <h4 className="text-gray-900">Compras</h4>
                    <p className="mt-1 text-xs text-gray-600">
                      Pagina web donde se encuentra todo lo relacionado con documentos publicos, politicas de compras, procedimientos en herramientas como Coupa y CAI, reglamentos a proveedores y mas.
                    </p>
                    <a
                      href="https://sites.google.com/segurosbolivar.com/sitecompras/inicio/e-procurement-coupa?authuser=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-start gap-1 text-xs text-blue-600 hover:underline"
                    >
                      sites.google.com/segurosbolivar.com/sitecompras/inicio/e-procurement-coupa <ExternalLink size={12} />
                    </a>
                    <button
                      type="button"
                      onClick={() => setAreaUsuarioOpen(!areaUsuarioOpen)}
                      className="mt-4 flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs shadow-sm transition"
                      style={{
                        backgroundColor: "#FFB703",
                        border: "1px solid #F59E0B",
                        color: "#78350F",
                      }}
                    >
                      Compras
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${areaUsuarioOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {areaUsuarioOpen && (
                      <div className="mt-3 space-y-3 rounded-xl border border-gray-100 bg-white p-3">
                        <a
                          href="https://erp.grupobolivar.com/psp/ERPPRD/EMPLOYEE/ERP/?cmd=expire"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-lg border border-gray-100 px-3 py-2 transition hover:border-yellow-400 hover:bg-yellow-50"
                        >
                          <span className="flex items-center justify-between text-xs text-gray-900">
                            CAI
                            <ExternalLink size={12} />
                          </span>
                          <span className="mt-1 block text-[11px] text-gray-600">
                            Validacion de facturas, comprobantes de pago, gastos y presupuesto por centro de costos.
                          </span>
                        </a>

                        <a
                          href="https://usuarios.apprecio.com.co/#/es_co/usuarios"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-lg border border-gray-100 px-3 py-2 transition hover:border-yellow-400 hover:bg-yellow-50"
                        >
                          <span className="flex items-center justify-between text-xs text-gray-900">
                            Aprecio
                            <ExternalLink size={12} />
                          </span>
                          <span className="mt-1 block text-[11px] text-gray-600">
                            Plataforma habilitada para incentivos de Tecnicos correspondiente al CNV.
                          </span>
                        </a>

                        <a
                          href="https://segurosbolivar.coupahost.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-lg border border-gray-100 px-3 py-2 transition hover:border-yellow-400 hover:bg-yellow-50"
                        >
                          <span className="flex items-center justify-between text-xs text-gray-900">
                            Coupa
                            <ExternalLink size={12} />
                          </span>
                          <span className="mt-1 block text-[11px] text-gray-600">
                            Solicitudes, recepcion y consulta de ordenes de compra.
                          </span>
                        </a>

                        <a
                          href="https://quantumpay.com.co/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-lg border border-gray-100 px-3 py-2 transition hover:border-yellow-400 hover:bg-yellow-50"
                        >
                          <span className="flex items-center justify-between text-xs text-gray-900">
                            Quantum Pay
                            <ExternalLink size={12} />
                          </span>
                          <span className="mt-1 block text-[11px] text-gray-600">
                            Bonos por tarjeta digital para compras en plataformas y comercios con pagos digitales.
                          </span>
                        </a>
                      </div>
                    )}
                  </div>

                </div>

              </div>
            )}
          </div>

          <div className="relative" ref={canalesRef}>
            <button
              onClick={() => {
                setCanalesOpen(!canalesOpen);
              }}
              className={`${desktopNavClass(canalesOpen)} flex items-center gap-1`}
            >
              Canales
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${canalesOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {canalesOpen && (
              <div className="absolute left-0 top-full mt-5 w-[500px] rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-black/5">
                <h3 className="mb-6 text-lg text-gray-900">Detalle de Canal</h3>

                <div className="space-y-5 text-xs text-gray-700">

                  <div>
                    <h4 className="mb-2 text-gray-900">Vicepresidencia</h4>
                    <div className="flex flex-wrap gap-2">

                      <a
                        href="https://docs.google.com/presentation/d/1Pb2uVPa8GwibBhM59YCe-wiYXyZhCxOLINLHNZ32gJ4/edit?slide=id.g39285d738ec_0_0#slide=id.g39285d738ec_0_0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-left text-xs text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                      >
                        Impulsa 2X Estrategia VP
                      </a>

                      <a
                        href="https://drive.google.com/drive/folders/1vLkNbSN2UMHHQwTC4maz0ruUz_N1mJDK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-left text-xs text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                      >
                        Impulsa 2X Estrategias de linea de negocio
                      </a>

                    </div>
                  </div>

                  <div>

                    <div className="flex flex-wrap gap-2">

                      <a
                        href="https://drive.google.com/drive/folders/1DA6Lhd8aszm9LPI_G3FBKy7Z-zlgRiJ9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-left text-xs text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                      >
                        Memoria Impulsa A&A-GH
                      </a>

                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 text-gray-900">Agentes y Agencias</h4>
                    <div className="flex flex-wrap gap-2">

                      <a
                        href="https://docs.google.com/presentation/d/176zINhfTGQL7SXJ8lVKTfiMy8nW9HGz-Wo94VxjqaVQ/edit?slide=id.g397a59941db_0_0#slide=id.g397a59941db_0_0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-left text-xs text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                      >
                        Plan Comercial
                      </a>

                      <a
                        href="https://docs.google.com/presentation/d/1MbQp2jhZdkHAlG7TCDvuVmw0z2RI8OCJW2m4g8u8OSk/edit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-left text-xs text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                      >
                        Segmentacion de Intermediarios
                      </a>

                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          <div className="relative" ref={bonificacionesRef}>
            <button
              onClick={() => {
                setBonificacionesOpen(!bonificacionesOpen);
              }}
              className={`${desktopNavClass(bonificacionesOpen)} flex items-center gap-1`}
            >
              Compensacion
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${bonificacionesOpen ? "rotate-10" : ""
                  }`}
              />
            </button>

            {bonificacionesOpen && (
              <div className="absolute left-0 top-full mt-5 w-[520px] rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-black/5">
                <h3 className="mb-5 text-center text-lg text-gray-700">

                </h3>

                <div className="flex flex-col gap-5 text-sm">
                  <div>
                    <p className="mb-3 text-gray-900">GRUPOS HOMOGENEOS</p>
                    <div className="flex flex-wrap gap-3">
                      <div className="w-full max-w-sm">
                        <button
                          type="button"
                          onClick={() => setRolesComercialesOpen(!rolesComercialesOpen)}
                          className="flex w-full items-center justify-between rounded-lg border bg-gray-50 px-3 py-2 text-left transition hover:bg-green-50"
                        >
                          <span>Bonificaciones y Concursos</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${rolesComercialesOpen ? "rotate-180" : ""
                              }`}
                          />
                        </button>

                        {rolesComercialesOpen && (
                          <div className="mt-3 flex flex-wrap gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                            {presentacionBonificacionesLinks.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                              >
                                {item.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-gray-900">AGENTES Y AGENCIAS</p>
                    <div className="grid max-w-[520px] grid-cols-2 gap-3">
                      {agentesAgenciasLinks.map((item) =>
                        item.href ? (
                          <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`rounded-2xl border px-4 py-3 text-left text-sm text-slate-700 shadow-sm transition ${item.highlighted
                                ? "border-emerald-200 bg-emerald-50 hover:border-emerald-300 hover:bg-emerald-100"
                                : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                              }`}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <div
                            key={item.label}
                            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-700 shadow-sm"
                          >
                            {item.label}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              navigate("/aprendamos-powerbi");
            }}
            className={`${desktopNavClass(location.pathname === "/aprendamos-powerbi")} flex items-center gap-1`}
          >
            Power BI
          </button>
          <button
            onClick={() => {
              handleSectionNavigation("glosario");
            }}
            className={desktopNavClass(false)}
          >
            Glosario
          </button>
          <button
            onClick={() => {
              handleSectionNavigation("faq");
            }}
            className={desktopNavClass(false)}
          >
            FAQ
          </button>

          <div className="relative" ref={searchRef}>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#002B5C] transition-colors hover:text-[#004B8D]"
              title="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>

            {searchOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 rounded-lg bg-white p-4 shadow-2xl ring-1 ring-black/5">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  autoFocus
                />
                {normalizedQuery && (
                  <div className="mt-3 max-h-72 space-y-2 overflow-y-auto">
                    {filteredSearchItems.length > 0 ? (
                      filteredSearchItems.map((item) => (
                        <button
                          key={`${item.category}-${item.label}`}
                          type="button"
                          onClick={() => handleSearchItemSelect(item)}
                          className="w-full rounded-lg border border-gray-100 px-3 py-3 text-left transition hover:border-yellow-300 hover:bg-yellow-50"
                        >
                          <span className="block text-sm text-[#2D8B3A]">{item.label}</span>
                          <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-gray-500">
                            {item.category}
                          </span>
                        </button>
                      ))
                    ) : (
                      <div className="rounded-lg border border-dashed border-gray-200 px-3 py-4 text-sm text-gray-500">
                        No encontramos resultados.
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white px-4 pb-5 pt-3 shadow-lg md:hidden">
          <div className="flex flex-col gap-2">
            <div className="rounded-2xl border border-gray-100 bg-[#f8faf8] p-2">
              <button
                onClick={() => setMobileHerramientasOpen(!mobileHerramientasOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-[#2D8B3A] transition hover:bg-green-50"
              >
                Herramientas
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${mobileHerramientasOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileHerramientasOpen && (
                <div className="mt-2 flex flex-col gap-2 px-2 pb-2">
                  <a
                    href="#"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    SOFI APP
                  </a>
                  <a
                    href="https://www.forcemanager.com/es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Sage Force
                  </a>
                  <a
                    href="https://registro.segurosbolivar.com/nidp/idff/sso?id=114&sid=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Simon Ventas
                  </a>
                  <a
                    href="https://registro.segurosbolivar.com/nidp/idff/sso?id=114&sid=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Simon Cotizador
                  </a>
                  <a
                    href="https://registro.segurosbolivar.com/nidp/saml2/sso?id=112&sid=3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Simon Servicio
                  </a>
                  <a
                    href="jnlps://prodtronador.bolnet.com.co/forms/frmservlet?config=TRON"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Tronador
                  </a>
                  <a
                    href="https://jirasegurosbolivar.atlassian.net/servicedesk/customer/portal/2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Jira
                  </a>
                  <a
                    href="https://intranet.bolnet.com.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Intranet
                  </a>
                  <a
                    href="https://sites.google.com/segurosbolivar.com/sitecompras/inicio/e-procurement-coupa?authuser=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Area Usuaria
                  </a>
                  <a
                    href="https://erp.grupobolivar.com/psp/ERPPRD/EMPLOYEE/ERP/?cmd=expire  "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    CAI
                  </a>
                  <a
                    href="https://usuarios.apprecio.com.co/#/es_co/usuarios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Aprecio
                  </a>
                  <a
                    href="https://segurosbolivar.coupahost.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Coupa
                  </a>
                  <a
                    href="https://quantumpay.com.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Quantum Pay
                  </a>
                  <a
                    href="https://us.core.resolver.com/#/session"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    SARO
                  </a>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-gray-100 bg-[#f8faf8] p-2">
              <button
                onClick={() => setMobileCanalesOpen(!mobileCanalesOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-[#2D8B3A] transition hover:bg-green-50"
              >
                Canales
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${mobileCanalesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileCanalesOpen && (
                <div className="mt-2 flex flex-col gap-2 px-2 pb-2">
                  <p className="px-2 pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Vicepresidencia
                  </p>
                  <a
                    href="https://docs.google.com/presentation/d/1Pb2uVPa8GwibBhM59YCe-wiYXyZhCxOLINLHNZ32gJ4/edit?slide=id.g39285d738ec_0_0#slide=id.g39285d738ec_0_0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Impulsa 2X Estrategia VP
                  </a>
                  <a
                    href="https://drive.google.com/drive/folders/1vLkNbSN2UMHHQwTC4maz0ruUz_N1mJDK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Estrategias de linea
                  </a>
                  <p className="px-2 pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Memorias
                  </p>
                  <a
                    href="https://drive.google.com/drive/folders/1DA6Lhd8aszm9LPI_G3FBKy7Z-zlgRiJ9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Memoria Impulsa A&A-GH
                  </a>
                  <p className="px-2 pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Agentes y Agencias
                  </p>
                  <a
                    href="https://docs.google.com/presentation/d/176zINhfTGQL7SXJ8lVKTfiMy8nW9HGz-Wo94VxjqaVQ/edit?slide=id.g397a59941db_0_0#slide=id.g397a59941db_0_0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Plan Comercial
                  </a>
                  <a
                    href="https://docs.google.com/presentation/d/1MbQp2jhZdkHAlG7TCDvuVmw0z2RI8OCJW2m4g8u8OSk/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    Segmentacion de Intermediarios
                  </a>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-gray-100 bg-[#f8faf8] p-2">
              <button
                onClick={() => setMobileCompensacionOpen(!mobileCompensacionOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-[#2D8B3A] transition hover:bg-green-50"
              >
                Compensacion
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${mobileCompensacionOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileCompensacionOpen && (
                <div className="mt-2 flex flex-col gap-2 px-2 pb-2">
                  <p className="px-2 pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Grupos Homogeneos
                  </p>
                  <button
                    type="button"
                    onClick={() => setMobileBonificacionesDetalleOpen(!mobileBonificacionesDetalleOpen)}
                    className="flex w-full items-center justify-between rounded-xl border border-gray-100 bg-white px-4 py-3 text-left text-sm font-medium text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                  >
                    <span>Bonificaciones y Concursos</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${mobileBonificacionesDetalleOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileBonificacionesDetalleOpen && (
                    <div className="flex flex-col gap-2 pl-2">
                      {presentacionBonificacionesLinks.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}

                  <p className="px-2 pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Agentes y Agencias
                  </p>
                  {agentesAgenciasLinks.map((item) =>
                    item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm transition hover:bg-green-50"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <div
                        key={item.label}
                        className="rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm text-[#2D8B3A] shadow-sm"
                      >
                        {item.label}
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>

            <button
              onClick={() => navigate("/aprendamos-powerbi")}
              className="rounded-xl px-4 py-3 text-left text-sm font-medium text-[#2D8B3A] transition hover:bg-green-50"
            >
              Aprendamos de Power BI
            </button>

            <button
              onClick={() => navigate("/estructura")}
              className="rounded-xl px-4 py-3 text-left text-sm font-medium text-[#2D8B3A] transition hover:bg-green-50"
            >
              Estructura
            </button>

            <button
              onClick={() => handleSectionNavigation("glosario")}
              className="rounded-xl px-4 py-3 text-left text-sm font-medium text-[#2D8B3A] transition hover:bg-green-50"
            >
              Glosario
            </button>

            <button
              onClick={() => handleSectionNavigation("faq")}
              className="rounded-xl px-4 py-3 text-left text-sm font-medium text-[#2D8B3A] transition hover:bg-green-50"
            >
              FAQ
            </button>

            <div className="relative mt-2">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#2D8B3A]" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-[#f8faf8] py-3 pl-11 pr-4 text-sm text-gray-700 outline-none focus:border-yellow-400"
              />
              {normalizedQuery && (
                <div className="mt-3 max-h-72 space-y-2 overflow-y-auto">
                  {filteredSearchItems.length > 0 ? (
                    filteredSearchItems.map((item) => (
                      <button
                        key={`mobile-${item.category}-${item.label}`}
                        type="button"
                        onClick={() => handleSearchItemSelect(item)}
                        className="w-full rounded-xl border border-gray-100 bg-white px-4 py-3 text-left shadow-sm transition hover:bg-green-50"
                      >
                        <span className="block text-sm text-[#2D8B3A]">{item.label}</span>
                        <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-gray-500">
                          {item.category}
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className="rounded-xl border border-dashed border-gray-200 bg-white px-4 py-4 text-sm text-gray-500">
                      No encontramos resultados.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
