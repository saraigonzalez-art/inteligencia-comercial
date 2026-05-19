import { ArrowRight, Menu, UserCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const dashboardSections = [
  {
    title: "VICEPRESIDENCIA",
    icon: "leaderboard",
    containerClass: "bg-[#008739] text-[#f7fff2]",
    borderClass: "border-white/20",
    items: [
      { label: "Positivos y Negativos", to: "/vp/positivos" },
      { label: "Cotizaciones", to: "/vp/cotizaciones" },
      { label: "Resultados VP", to: "/vp/resultados" },
    ],
  },
  {
    title: "GRUPOS HOMOGÉNEOS",
    icon: "groups",
    containerClass: "bg-[#fed34c] text-[#725a00]",
    borderClass: "border-[#725a00]/20",
    items: [
      { label: "Bonificaciones", to: "/gh/bonificaciones" },
      { label: "Detalle GH", to: "/gh/detalle" },
      { label: "Informe GPS", to: "/gh/gps-powerbi" },
    ],
  },
];

const agentesAgenciasCards = [
  {
    label: "Tablero Asesor A&A",
    to: "/aa/tablero",
    icon: "analytics",
  },
  {
    label: "Estrategia Comercial",
    to: "/aa/estrategia",
    icon: "insights",
  },
];

const filledIconStyle = {
  fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
} as const;

const Tableros = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fbf9f8] font-body text-[#1b1c1c]">
      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-6">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-full p-1 text-emerald-700 transition hover:bg-[#f6f3f2]"
            aria-label="Volver"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-lg font-bold tracking-tight text-emerald-700">Seguros Bolívar</span>
        </div>

        <div className="flex items-center text-emerald-700">
          <UserCircle2 className="h-6 w-6" />
        </div>
      </header>

      <main className="min-h-screen pb-24 pt-16">
        <section
          className="relative flex h-[353px] flex-col justify-end p-6"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuCFOVym52sD0YFmDumIIAtyjRf0_qJAFSkcjJKrCSBvER5Xaa2S5k07B7AtoMCGzxwsJKBAdiAzbSsrbXd_eUKCPmjLJUHvTrSTPPT5vZHPA1iJyQUJL0DiWJVYP988K7qvqy3Yrhx-V1uYeMp9XBJLV8zISA84InCVI87oVJxVWFuvTyT9_vDlMaNo02dWwPj-OzPtCZjBdXCkudVYV9jHxsGmcoOZkTU9O0dhcqzHaJhxojWeUH5w0DLErYJwf8BNd2uuUUU6TSo)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="z-10">
            <h1 className="mb-2 text-[32px] font-semibold leading-[40px] text-white">
              Tableros de consulta
            </h1>
            <p className="max-w-[280px] text-sm font-light leading-5 text-white/90">
              Accede a dashboards estratégicos con métricas clave para la toma de decisiones comerciales.
            </p>
          </div>

          <div className="absolute right-6 top-6 flex gap-1">
            <div className="h-1 w-8 rounded-full bg-white/30" />
            <div className="h-1 w-8 rounded-full bg-white" />
            <div className="h-1 w-8 rounded-full bg-white/30" />
          </div>
        </section>

        <div className="space-y-6 p-6">
          {dashboardSections.map((section) => (
            <div
              key={section.title}
              className={`rounded-lg border border-[#bdcaba] p-6 ${section.containerClass}`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined" style={filledIconStyle}>
                  {section.icon}
                </span>
                <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
              </div>

              <ul className="space-y-3">
                {section.items.map((item, index) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className={`flex items-center justify-between py-2 ${
                        index !== section.items.length - 1 ? `border-b ${section.borderClass}` : ""
                      }`}
                    >
                      <span className="text-base font-light leading-6">{item.label}</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="rounded-lg border border-[#bdcaba] bg-[#e4e2e1] p-6 text-[#1b1c1c]">
            <div className="mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#006b2b]" style={filledIconStyle}>
                store
              </span>
              <h2 className="text-2xl font-semibold tracking-tight">AGENTES Y AGENCIAS</h2>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {agentesAgenciasCards.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="flex items-center justify-between rounded-lg border border-[#bdcaba] bg-white p-4 transition-colors hover:bg-[#f6f3f2]"
                >
                  <span className="text-base font-semibold">{item.label}</span>
                  <span className="material-symbols-outlined text-[#006b2b]">{item.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 pb-12">
          <button
            type="button"
            onClick={() => navigate("/estructura")}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-[#745b00] text-base font-semibold text-white shadow-sm"
          >
            VER TODOS LOS REPORTES
            <span className="material-symbols-outlined">trending_up</span>
          </button>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-gray-200 bg-white md:hidden">
        <Link to="/" className="flex flex-col items-center text-[#006b2b]">
          <span className="material-symbols-outlined" style={filledIconStyle}>
            home
          </span>
          <span className="text-[10px] font-medium">Inicio</span>
        </Link>
        <div className="flex flex-col items-center text-[#006b2b]">
          <span className="material-symbols-outlined" style={filledIconStyle}>
            analytics
          </span>
          <span className="text-[10px] font-medium">Dashboards</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <span className="material-symbols-outlined">summarize</span>
          <span className="text-[10px] font-medium">Reportes</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-medium">Ajustes</span>
        </div>
      </nav>

      <div className="hidden md:block">
        <Link
          to="/"
          className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-[#006b2b] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
        >
          Volver al inicio
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default Tableros;
