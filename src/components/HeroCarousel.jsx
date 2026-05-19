import { useNavigate } from "react-router-dom";

const opciones = [
  {
    titulo: "VICEPRESIDENCIA",
    descripcion: "Consulta indicadores clave, cotizaciones y resultados del canal.",
    ruta: "/vp/positivos",
    icono: "leaderboard",
    color: "bg-[#008739] text-[#f7fff2]",
    borde: "border-white/20",
  },
  {
    titulo: "GRUPOS HOMOGENEOS",
    descripcion: "Accede a bonificaciones, detalle GH e informe GPS.",
    ruta: "/gh/detalle",
    icono: "groups",
    color: "bg-[#fed34c] text-[#725a00]",
    borde: "border-[#725a00]/20",
  },
  {
    titulo: "AGENTES Y AGENCIAS",
    descripcion: "Explora tablero asesor y estrategia comercial del frente A&A.",
    ruta: "/aa/tablero",
    icono: "store",
    color: "bg-[#dcfce7] text-[#166534]",
    borde: "border-[#166534]/20",
  },
];

export default function HeroCarousel() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#fbf9f8] px-4 pb-10 pt-2 sm:px-6 sm:pb-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col gap-3 md:mb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#006b2b]">
              Tableros PBI
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-[#166534] sm:text-3xl md:text-4xl">
              Accesos rapidos por canal
            </h2>
          </div>

          <button
            type="button"
            onClick={() => navigate("/tableros")}
            className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#166534] px-5 text-sm font-semibold text-white transition hover:brightness-110 sm:w-auto"
          >
            Ver todos los tableros
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6">
          {opciones.map((opcion) => (
            <button
              key={opcion.titulo}
              type="button"
              onClick={() => navigate(opcion.ruta)}
              className={`rounded-2xl border border-[#bdcaba] p-5 text-left shadow-[0_18px_40px_-34px_rgba(27,28,28,0.85)] transition duration-300 hover:-translate-y-1 sm:p-6 ${opcion.color}`}
            >
              <div className={`mb-3 flex items-center gap-3 border-b pb-3 sm:mb-4 sm:pb-4 ${opcion.borde}`}>
                <span
                  className="material-symbols-outlined text-[20px] sm:text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                >
                  {opcion.icono}
                </span>
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  {opcion.titulo}
                </h3>
              </div>

              <p className="text-sm font-light leading-6 opacity-90 sm:text-[15px]">
                {opcion.descripcion}
              </p>

              <div className={`mt-5 flex items-center justify-between border-t pt-4 sm:mt-6 ${opcion.borde}`}>
                <span className="text-sm font-semibold">Abrir vista</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
