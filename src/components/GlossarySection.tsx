import {
  Activity,
  BadgeDollarSign,
  BriefcaseBusiness,
  ChevronRight,
  FileSpreadsheet,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

interface GlossaryTerm {
  name: string;
  definition: React.ReactNode;
  highlight?: boolean;
}

interface GlossaryCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  accent: string;
  terms: GlossaryTerm[];
}

const glossaryCategories: GlossaryCategory[] = [
  {
    id: "comercial",
    title: "Conceptos Estratégicos y de Gestión",
    icon: <Activity className="h-5 w-5" />,
    accent: "green",
    terms: [
      {
        name: "Indicador (KPI)",
        definition:
          "Medida que permite monitorear el comportamiento de un proceso, meta o resultado comercial. Pueden ser de gestión, cumplimiento, productividad, calidad, recaudo, producción o rentabilidad",
      },
      {
        name: "Plan Comercial",
        definition:
          " Hoja de ruta que define metas, estrategias, acciones y responsables para alcanzar los objetivos de ventas.",
      },
      {
        name: "Plan de Negocios",
        definition:
          " Documento estructural más amplio que define objetivos, recursos y proyecciones para desarrollar un intermediario o abrir nuevos mercados.",
      },
      {
        name: "Sinergia entre Canales / Venta Cruzada: ",
        definition:
          " Coordinación entre diferentes canales comerciales para generar oportunidades, compartir información y potenciar resultados conjuntos (Ej.: trabajar con intermediarios para apertura de convenios).",
      },
      {
        name: "Saro",
        definition:
          "Documento de reporte utilizado para riesgo operativo, requerido para informar procedimientos no realizados (como la omisión en asignación de claves).",
      },
    ],
  },
  {
    id: "operacion",
    title: "Ciclo de Vida de la Póliza y el Negocio",
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    accent: "amber",
    terms: [
      {
        name: "Riesgo",
        definition:
          "Posibilidad de que ocurra un evento cubierto por el seguro que genere una pérdida.",
      },
      {
        name: "Póliza",
        definition:
          "Contrato de seguro que establece coberturas, condiciones, vigencia y primas.",
      },
      {
        name: "GR o Pol Pal (Póliza Principal)",
        definition:
          "Certificado global o negocio base que agrupa a los asegurados (ej. empleados de una empresa) bajo condiciones pactadas.",
      },
      {
        name: "Emisión / Negocio por Emisión",
        definition:
          " Proceso donde la póliza queda formalmente creada y registrada en el sistema con un número asignado.",
      },
      {
        name: "Producción / Negocio por Producción",
        definition:
          "Valor de los negocios generados en un periodo. Se consolida cuando la póliza se emite, inicia vigencia y genera facturación.",
      },
      {
        name: "Recaudo / Negocio por Recaudó:",
        definition:
          "Es el contrato de seguro que establece las coberturas, condiciones, vigencia, primas y partes involucradas.",
        highlight: true,
      },
      {
        name: "Recaudo / Negocio por Recaudó:",
        definition:
          "Es el contrato de seguro que establece las coberturas, condiciones, vigencia, primas y partes involucradas.",
      },
     {
  name: "Endoso",
  definition: (
    <div className="space-y-3">
      <p>
        Modificación a una póliza vigente para ajustar datos,
        valores o coberturas.
      </p>

      <ul className="list-disc space-y-2 pl-5">
        <li>
          <span className="font-semibold text-slate-800">
            Endoso Provisorio:
          </span>{" "}
          Ajuste temporal mientras se completa la información definitiva.
        </li>

        <li>
          <span className="font-semibold text-slate-800">
            Endoso AT:
          </span>{" "}
          Movimiento específico para el servicio de cancelación de una póliza.
        </li>

        <li>
          <span className="font-semibold text-slate-800">
            Estado Factura (EP / CT):
          </span>{" "}
          Indicadores del flujo de la factura (pendiente, aprobada, pagada)
          dentro de los procesos operativos EP o CT.
        </li>
      </ul>
    </div>
  ),
},
      {
        name: "Siniestro",
        definition:
          "Evento que activa la cobertura (accidente, daño, fallecimiento).",
      },
      {
        name: "Indemnización",
        definition:
          "Compensación económica pagada por la aseguradora ante un siniestro.",
      },
    ],
  },
  {
    id: "personas",
    title: "Métricas y Análisis de Datos",
    icon: <ShieldCheck className="h-5 w-5" />,
    accent: "slate",
    terms: [
      {
      name: "% de Cumplimiento (CUMP%)",
      definition:
        "Comparación del resultado real (producción/recaudo) frente a la meta proyectada. Es la base para el pago de bonos.",
    },
    {
      name: "Pesos (Ponderación)",
      definition:
        "Porcentaje de importancia asignado a un indicador específico dentro de un plan de compensación.",
    },
    {
      name: "NN (Nuevo Negocio)",
      definition:
        "Negocios de primera vez o nuevos ingresos.",
    },
    {
      name: "RN (Renovación)",
      definition:
        "Negocios que corresponden a la renovación de pólizas existentes.",
    },
    {
      name: "TTL (Total)",
      definition:
        "Sumatoria de la meta y el resultado real de NN y RN.",
    },
    {
      name: "Variable Cordada",
      definition:
        "Indicador de cantidad (CANT) para directores (Ramo ARL). Mide el % de directores en una oficina que cumplen su meta (requiere un 30% para cumplirse).",
    },
    {
      name: "Póliza no proyectada",
      definition:
        "Póliza que no se suma al cumplimiento si no estaba incluida originalmente en la base de renovaciones.",
    },
    {
      name: "Semáforo Director PBI",
      definition:
        "Tablero de control (Business Intelligence) para verificar en tiempo real la facturación que suma para la liquidación.",
    },
    ],
  },
  {
  id: "facturacion",
  title: "Comisiones y Bonificaciones",
  icon: <FileSpreadsheet className="h-5 w-5" />,
  accent: "green",
  terms: [
    {
      name: "Comisión",
      definition:
        "Pago base asociado a un producto (ej. 12.5% en autos), administrado por el área de personal e intermediarios.",
    },
    {
      name: "Bonificación",
      definition:
        "Pago calculado según el % de cumplimiento de metas y tablas de rangos. Utiliza fórmulas logarítmicas para cumplimientos superiores al 130% en NN. Se paga mes vencido.",
    },
    {
      name: "Premios / Concursos",
      definition:
        "Incentivos adicionales (como el Concurso Nacional de Ventas) que se asignan si se cumplen rangos específicos de producción o recaudo.",
    },
    {
      name: "Garantizados",
      definition:
        "Valor mínimo asegurado que se paga a un comercial nuevo o que cambia de rol por un periodo limitado (2 a 3 meses).",
    },
    {
      name: "Liquidación / Preliquidación",
      definition:
        "Proceso de cálculo de bonificaciones. La preliquidación es el ejercicio quincenal automático para actualizar datos antes del pago final.",
    },
    {
      name: "Extracto de Pagos",
      definition:
        "Documento que detalla el valor final que recibirá el comercial por sus comisiones y bonos.",
    },
  ],
},
  {
    id: "compensacion",
    title: "Esquemas de Compensación y Pago",
    icon: <FileSpreadsheet className="h-5 w-5" />,
    accent: "green",
    terms: [
     {
  name: "Canal de Descuento",
  definition: (
    <div className="space-y-3">
      <p>
        Mecanismo para aplicar deducciones a pagos o primas.
      </p>

      <ul className="list-disc space-y-2 pl-5">
        <li>
          <span className="font-semibold text-slate-800">
            Libranza:
          </span>{" "}
          Descuento directo de la nómina del empleado.
        </li>

        <li>
          <span className="font-semibold text-slate-800">
            Débito Automático:
          </span>{" "}
          Cobro a través de tarjeta de crédito o cuenta bancaria.
        </li>
      </ul>
    </div>
  ),
},,
{
  name: "Segmentos y Ramos",
  definition: (
    <div className="space-y-3">
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <span className="font-semibold text-slate-800">
            PF (Protección Familiar):
          </span>{" "}
          Agrupa Vida, Hogar, Salud y Autos.
        </li>

        <li>
          <span className="font-semibold text-slate-800">
            Pymes:
          </span>{" "}
          Seguros para pequeñas y medianas empresas
          (daños, hurtos, RC).
        </li>

        <li>
          <span className="font-semibold text-slate-800">
            Afines / Educadores:
          </span>{" "}
          Frentes que agrupan productos específicos de Vida
          (717, 719, 710, 766, etc.).
        </li>

        <li>
          <span className="font-semibold text-slate-800">
            ARL Diagonal:
          </span>{" "}
          Ramo donde solo se liquida el primer aporte de la
          vigencia para bonificar.
        </li>
      </ul>
    </div>
  ),
},
{
  name: "People Soft",
  definition:
    "Sistema de nómina y estructura jerárquica para el pago a la fuerza comercial interna.",
},
    ],

},
];

const navItems = [
  {
    id: "comercial",
    label: "Conceptos Estratégicos y de Gestión",
    icon: <Activity className="h-4 w-4" />,
    tone: "text-emerald-700",
  },
  {
    id: "operacion",
    label: "Ciclo de Vida de la Póliza y el Negocio",
    icon: <BriefcaseBusiness className="h-4 w-4" />,
    tone: "text-amber-600",
  },
  {
    id: "personas",
    label: "Métricas y Análisis de Datos",
    icon: <Scale className="h-4 w-4" />,
    tone: "text-slate-600",
  },
  {
    id: "facturacion",
    label: "Comisiones y Bonificaciones",
    icon: <BadgeDollarSign className="h-4 w-4" />,
    tone: "text-emerald-700",
  },
  {
    id: "compensacion",
    label: "Esquemas de Compensación y Pago",
    icon: <FileSpreadsheet className="h-4 w-4" />,
    tone: "text-emerald-700",
  },
];

const accentStyles = {
  green: {
    badge: "bg-emerald-600 text-white",
    border: "hover:border-emerald-500",
    strip: "border-emerald-500",
    chip: "bg-emerald-50 text-emerald-700",
  },
  amber: {
    badge: "bg-[#fed34c] text-[#6b5300]",
    border: "hover:border-[#d4a900]",
    strip: "border-[#d4a900]",
    chip: "bg-amber-50 text-amber-700",
  },
  slate: {
    badge: "bg-slate-600 text-white",
    border: "hover:border-slate-400",
    strip: "border-slate-500",
    chip: "bg-slate-100 text-slate-700",
  },
};

const GlossarySection = () => {
  const [selectedCategory, setSelectedCategory] = useState(navItems[0]?.id ?? "");
  const activeCategory =
    glossaryCategories.find((category) => category.id === selectedCategory) ??
    glossaryCategories[0];

  return (
  <section id="glosario" className="scroll-mt-24 bg-[#F5F5F5] px-6 py-20">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-[#002B5C] md:text-5xl">
          Glosario de Términos
        </h2>
          <p className="mt-5 text-lg leading-8 text-[#666666]">
          Entiende los conceptos clave del entorno comercial y operativo con una guía más clara,
          organizada y fácil de consultar.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#004B8D]">
              Categorías
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(item.id)}
                    className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition hover:bg-slate-50 ${
                      selectedCategory === item.id ? "bg-slate-50" : ""
                    }`}
                  >
                    <span className={item.tone}>{item.icon}</span>
                    <span className="text-sm font-medium text-slate-700 transition group-hover:text-slate-900">
                      {item.label}
                    </span>
                    <ChevronRight className="ml-auto h-4 w-4 text-slate-300 transition group-hover:text-slate-500" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="space-y-14 lg:col-span-9">
          {(() => {
            const category = activeCategory;
            const style = accentStyles[category.accent as keyof typeof accentStyles];

            return (
              <section key={category.id} id={category.id} className="scroll-mt-28">
                <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${style.badge}`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.terms.map((term) =>
                    term.highlight ? (
                      <div
                        key={term.name}
                        className="grid gap-4 md:grid-cols-3"
                      >
                        
                      
                      </div>
                    ) : (
                      <article
                        key={term.name}
                        className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition ${style.border}`}
                      >
                        <div className={`mb-4 w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${style.chip}`}>
                        </div>
                        <h4 className={`border-l-4 pl-4 text-xl font-semibold text-slate-900 ${style.strip}`}>
                          {term.name}
                        </h4>
                        <p className="mt-4 text-[15px] leading-7 text-slate-600 md:text-base">
                          {term.definition}
                        </p>
                      </article>
                    )
                  )}
                </div>
              </section>
            );
          })()}

          
        </div>
      </div>
    </div>
  </section>
  );
};

export default GlossarySection;
