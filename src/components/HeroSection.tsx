import logo from "../assets/Logo.png";
import img from "../assets/img.jpeg.png";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const neonPanelBase =
  "border border-[#facc15] bg-[#ffe066] shadow-[0_10px_22px_-18px_rgba(22,101,52,0.35)]";

const neonButtonBase =
  "rounded-[18px] px-5 py-2.5 text-left transition duration-300 hover:brightness-95";

const neonLinkBase =
  "block rounded-2xl border border-[#bbf7d0] bg-white p-3 text-sm font-medium text-[#166534] shadow-[0_0_0_1px_rgba(22,101,52,0.06),0_8px_16px_rgba(22,101,52,0.08)] transition hover:border-[#facc15] hover:bg-[#fefce8] hover:text-[#166534]";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=2070&q=80",
    imageClassName: "",
    title: "Bienvenido al Centro de Inteligencia Presenciales",
    description:
      "Un acceso más claro a información, tableros, reportes y recursos de la Vicepresidencia de Canales Presenciales.",
    buttonText: "Comenzar",
    buttonLink: "#herramientas",
  },
  {
    id: 2,
    image: "/tableros.jpeg",
    imageClassName: "object-contain scale-85",
    title: "Tableros de consulta",
    description:
      "Accede a dashboards estratégicos con métricas clave para la toma de decisiones comerciales.",
    estructura: [
      {
        titulo: "VICEPRESIDENCIA",
        color: "border-[#86efac]/70",
        items: [
          {
            nombre: "Positivos y Negativos",
            link: "https://app.powerbi.com/groups/4ae8598e-13ea-4372-a46d-5efd3191b8fe/reports/a05e96f0-42cf-4bf6-8bf3-8356b43f1920?ctid=e62b3c46-c775-4b6a-9c2f-9dbe85c61a85&pbi_source=linkShare",
          },
          {
            nombre: "Cotizaciones",
            link: "https://login.microsoftonline.com/e62b3c46-c775-4b6a-9c2f-9dbe85c61a85/oauth2/v2.0/authorize?client_id=871c010f-5e61-4fb1-83ac-98610a7e9110&scope=https%3A%2F%2Fanalysis.windows.net%2Fpowerbi%2Fapi%2F.default%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fapp.powerbi.com%2Fsignin&client-request-id=019d2078-af67-79a2-9423-4fda0c319b22&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=3.28.0&client_info=1&code_challenge=Xa0RRl3OobECN9nCNQawH7PVPvfTMZR48WKg-xWMn8c&code_challenge_method=S256&nonce=019d2078-af69-7f96-895c-4257d07f946b&state=eyJpZCI6IjAxOWQyMDc4LWFmNjktNzFiMS1hMjI1LTYzZjU5ZGRhM2Y0YiIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D%7C1774366273377%3B1774366273382.2998%3B1774366272501.4&site_id=500453&nux=1",
          },
          {
            nombre: "Resultados VP",
            link: "https://login.microsoftonline.com/e62b3c46-c775-4b6a-9c2f-9dbe85c61a85/oauth2/v2.0/authorize?client_id=871c010f-5e61-4fb1-83ac-98610a7e9110&scope=https%3A%2F%2Fanalysis.windows.net%2Fpowerbi%2Fapi%2F.default%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fapp.powerbi.com%2Fsignin&client-request-id=019d207a-1705-78a1-9201-33a7848c54de&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=3.28.0&client_info=1&code_challenge=YAJGt5-vasUUWDPaKybEox0rZGNhg_2mZCjmwlFBSiA&code_challenge_method=S256&nonce=019d207a-1707-7007-ae23-733393a3ac48&state=eyJpZCI6IjAxOWQyMDdhLTE3MDYtNzcyMy1hYTZiLThlNGIxZDRhYzMzYyIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D%7C1774366365443.0999%3B1774366365445.0999%3B1774366365062.4&site_id=500453&nux=1",
          },
        ],
      },
      {
        titulo: "GRUPOS HOMOGÉNEOS",
        color: "border-[#FFD100]/60",
        items: [
          {
            nombre: "Bonificaciones",
            link: "https://app.powerbi.com/groups/4ae8598e-13ea-4372-a46d-5efd3191b8fe/reports/4bb70e6d-0d86-4bac-8638-02376631ece5?ctid=e62b3c46-c775-4b6a-9c2f-9dbe85c61a85&pbi_source=linkShare",
          },
          { nombre: "Detalle GH", 
            link: "https://datastudio.google.com/s/gO5ApO44pdw" },
          {
            nombre: "Informe GPS",
            link: "  https://lookerstudio.google.com/s/twIIGXd2ND8",
          },
        ],
      },
      {
        titulo: "AGENTES Y AGENCIAS",
        color: "border-[#86efac]/70",
        items: [
          {
            nombre: "Tablero Asesor A&A",
            link: "https://app.powerbi.com/groups/4ae8598e-13ea-4372-a46d-5efd3191b8fe/reports/b6f9c01c-71cb-4e21-8471-ad37d5d82726?ctid=e62b3c46-c775-4b6a-9c2f-9dbe85c61a85&pbi_source=linkShare",
          },
          {
            nombre: "Estrategia Comercial",
            link: "https://app.powerbi.com/groups/4ae8598e-13ea-4372-a46d-5efd3191b8fe/reports/4cb9ecf9-4dff-445d-8854-ffef55357a87?ctid=e62b3c46-c775-4b6a-9c2f-9dbe85c61a85&pbi_source=linkShare",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    image: img,
    title: "Reportes",
    description:
      "Diligencia los formularios de reporte segun tu canal.",
    reportesEstructura: [
      {
        titulo: "VICEPRESIDENCIA",
        color: "border-[#86efac]/70",
        items: [
          { nombre: "Cambios de Estructura", link: "https://forms.gle/ba3YQJYpkEJaC7F99" },
          {
            nombre: "Reporte de Proyeccion",
            link: "https://docs.google.com/spreadsheets/d/1T3szvBDqXFomv8LN3XI0f_84KolPzelJ6URLY4zY_e8/edit?gid=0#gid=0",
          },
        ],
      },
      {
        titulo: "GRUPOS HOMOGÉNEOS",
        color: "border-[#FFD100]/60",
        items: [
          {
            nombre: "Rubros Transporte/Premios",
            link: "https://docs.google.com/spreadsheets/d/1JOJ5FO8MbRHVKYcQ8D5qNabnqLn0TLVwZSa98kTCubg/edit?gid=1681406759#gid=1681406759",
          },
          {
            nombre: "726 No Contributivo",
            link: "https://docs.google.com/spreadsheets/d/1YFs6ev6lhZFLB_pj6cPdleEIa9om5YpNc8JUvDv0W9Q/edit?usp=sharing",
          },
          {
            nombre: "30 Salud Colectiva",
            link: "https://docs.google.com/spreadsheets/d/1qann0Tld0X7syAijW0KgxsWRoAQJQeveFGaK0ZkSBA0/edit?usp=sharing",
          },
          {
            nombre: "Asignación de Empresas",
            link: "http://docs.google.com/forms/d/e/1FAIpQLSeaRk8b9IXzjUSiOQNA6qNZ8-tpT_wOAgJ2JyQlkaaykOv7Hw/viewform",
          },
        ],
      },
      {
        titulo: "AGENTES Y AGENCIAS",
        color: "border-[#86efac]/70",
        items: [
          { nombre: "Espejo GH y Sinergia", link: "https://forms.gle/qRHExWHGmY5iovZh7" },
          { nombre: "Promotor Multiproducto", link: "https://forms.gle/eKzBzianSVZYETf69" },
        ],
      },
    ],
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    setOpenPanel(null);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const togglePanel = (panelId: string) => {
    setOpenPanel((prev) => (prev === panelId ? null : panelId));
  };

  return (
    <>
      <section
        className="relative mt-14 overflow-hidden px-4 pb-8 pt-6 sm:px-6 md:mt-16 md:pt-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-[28px] border border-[#0b7d45] shadow-[0_18px_42px_-30px_rgba(0,0,0,0.45)]"
            >
              <div className="grid min-h-[420px] grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-center bg-[#008f52] px-7 py-10 text-white sm:px-10 lg:px-12">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffe48d]">
                    Vicepresidencia Canales Presenciales
                  </p>

                  <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                    {slides[current].title}
                  </h1>
                  <p className="mt-4 text-base leading-relaxed text-white/95 sm:text-lg">
                    {slides[current].description}
                  </p>

                  {slides[current].buttonText &&
                    (slides[current].buttonLink.startsWith("/") ? (
                      <Link
                        to={slides[current].buttonLink}
                        className="mt-8 inline-flex w-fit rounded-full bg-[#ffe066] px-6 py-3 text-sm font-bold text-[#166534] transition hover:brightness-95"
                      >
                        {slides[current].buttonText}
                      </Link>
                    ) : (
                      <a
                        href={slides[current].buttonLink}
                        className="mt-8 inline-flex w-fit rounded-full bg-[#ffe066] px-6 py-3 text-sm font-bold text-[#166534] transition hover:brightness-95"
                      >
                        {slides[current].buttonText}
                      </a>
                    ))}

                  {(slides[current].estructura || slides[current].reportesEstructura) && (
                    <div className="mt-8">
                      {slides[current].estructura ? (
                        <div id="tableros-consulta" className="grid max-w-[340px] gap-4">
                          {slides[current].estructura.map((section, i) => (
                            <div key={i} className="flex flex-col">
                              <button
                                type="button"
                                onClick={() => togglePanel(`estructura-${current}-${i}`)}
                                className={`flex items-center justify-between ${neonButtonBase} ${neonPanelBase} ${section.color}`}
                              >
                                <span className="text-sm font-bold text-[#166534] md:text-base">
                                  {section.titulo}
                                </span>
                                <ChevronDown
                                  className={`h-3.5 w-3.5 text-[#166534] transition-transform duration-200 ${
                                    openPanel === `estructura-${current}-${i}` ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              {openPanel === `estructura-${current}-${i}` && (
                                <div className={`mt-3 space-y-3 rounded-[24px] p-4 text-[#166534] ${neonPanelBase}`}>
                                  {section.items.map((item, j) => (
                                    <a key={j} href={item.link} className={neonLinkBase}>
                                      {item.nombre}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : slides[current].reportesEstructura ? (
                        <div id="reportes-consulta" className="grid max-w-[340px] gap-4">
                          {slides[current].reportesEstructura.map((section, i) => (
                            <div key={i} className="flex flex-col">
                              <button
                                type="button"
                                onClick={() => togglePanel(`reportes-${current}-${i}`)}
                                className={`flex items-center justify-between ${neonButtonBase} ${neonPanelBase} ${section.color}`}
                              >
                                <span className="text-sm font-bold text-[#166534] md:text-base">
                                  {section.titulo}
                                </span>
                                <ChevronDown
                                  className={`h-3.5 w-3.5 text-[#166534] transition-transform duration-200 ${
                                    openPanel === `reportes-${current}-${i}` ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              {openPanel === `reportes-${current}-${i}` && (
                                <div className={`mt-3 space-y-3 rounded-[24px] p-4 text-[#166534] ${neonPanelBase}`}>
                                  {section.items.map((item, j) => (
                                    <a
                                      key={j}
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={neonLinkBase}
                                    >
                                      {item.nombre}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>

                <div className="relative min-h-[260px] lg:min-h-full">
                  <img
                    src={slides[current].image}
                    alt={slides[current].title}
                    className={`h-full w-full object-cover transition-transform duration-500 ${
                      slides[current].imageClassName ?? ""
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={prevSlide}
          aria-label="Slide anterior"
          className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/25 p-3 text-white backdrop-blur-sm transition hover:bg-white/35 active:scale-95 sm:left-6"
          style={{ touchAction: "manipulation" }}
        >
          <ChevronLeft />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Slide siguiente"
          className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/25 p-3 text-white backdrop-blur-sm transition hover:bg-white/35 active:scale-95 sm:right-6"
          style={{ touchAction: "manipulation" }}
        >
          <ChevronRight />
        </button>

        <a
          href="#herramientas"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </section>

      <section className="bg-[#ffffff] px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="text-[#166534]">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Qué encontrarás en este portal
            </h2>

            <div className="mt-6 space-y-3 text-[18px] leading-8 text-[#666666]">
              <p>
                Este portal es su acceso único y directo a todo lo que necesitan para impulsar
                sus resultados.
              </p>

              <p>
                ¿Dudas sobre cómo acceder a la plataforma de análisis X? ¿Necesitas entender
                cómo interpretar un dashboard específico? Aquí encontrarán explicaciones
                sencillas, tutoriales y la ruta de acceso para cada herramienta tecnológica que la
                compañía pone a su disposición.
              </p>
            </div>

            <div className="mt-6 inline-flex rounded-full border border-[#FFD100] bg-[#FFF7CC] px-5 py-3 text-base font-semibold text-[#166534]">
              Procesos y Recursos de la Vicepresidencia:
            </div>

            <div className="mt-5 space-y-3 text-[18px] leading-8 text-[#666666]">
              <p>
                Accedan a una sección dedicada a cada uno de nuestros procesos clave. Este
                apartado incluye:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Presentaciones de referencia sobre la metodología.</li>
                <li>Información clara sobre "Con quién tratar el tema" para una gestión eficiente.</li>
                <li>Las políticas y lineamientos más importantes que rigen nuestra labor.</li>
              </ul>

              <p>
                Este Site es un pilar fundamental de nuestro compromiso para que la fuerza
                comercial opere con la máxima eficiencia y autonomía. Los invitamos a explorar,
                guardar el enlace y usarlo como su referencia diaria para asegurar que cada
                decisión esté respaldada por la mejor información.
              </p>

              <p>¡Hagamos de 2026 nuestro año más inteligente!</p>

              <div>
                <p>Atentamente,</p>
                <p>El Equipo de Inteligencia Comercial.</p>
              </div>
            </div>
          </div>

          <div className="lg:pt-10">
            <div className="overflow-hidden rounded-[32px] border border-[#E5E7EB] bg-white shadow-[0_18px_50px_-30px_rgba(0,43,92,0.35)]">
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/1279995963/es/foto/feliz-familia-bajo-falso-techo-en-la-sala-de-estar.jpg?s=612x612&w=0&k=20&c=LgqKJDCPR6ZtKBlum7eOGymGtCLPTaC6S_lqt5NPJmM="
                  alt="Personas formando un corazón con las manos en un evento"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative flex items-center justify-center bg-white px-6 pb-8 pt-6">
                <div className="absolute inset-x-0 -top-10 h-20 rounded-[100%] bg-white" />
                <img
                  src={logo}
                  alt="Seguros Bolivar"
                  className="relative z-10 h-16 w-auto object-contain sm:h-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default HeroSection;
