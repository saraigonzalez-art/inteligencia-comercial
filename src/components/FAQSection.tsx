import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Activity,
  Briefcase,
  Scale,
  CircleDollarSign,
  ClipboardList,
  HelpCircle,
} from "lucide-react";

const faqData: {
  id: number;
  category: string;
  question: string;
  answer: React.ReactNode;
}[] = [
  {
    id: 2,
    category: "Estrategia y gestion",
    question:
      "¿¿Con quién puedo tratar temas relacionados con cada canal de ventas?",
    answer: (
      <>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-slate-800">
              Grupos homogéneos:
            </h4>

            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Cargos de vinculadores y relacionistas; solicitar apoyo a
                Maria Paula Tinjaca.
              </li>
              <li>
                Cargos de Asesores y Director de ventas; solicitar apoyo a
                Michael Moreno.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800">
              Agentes y agencias:
            </h4>

            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Cargos de Director de Grupo, promotores y gestores junior;
                solicitar apoyo a Ingrid Zamora.
              </li>
              <li>
                Cargos de Directores de Oficina, especializados y nacionales;
                solicitar apoyo a Cesar Paramo.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800">
              Temas relacionados con:
            </h4>

            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Gastos y Promocionales: Lina Castillo.</li>
              <li>
                Autorización de Viáticos y gastos: Bryam Cardenas.
              </li>
              <li>
                Proyecciones y seguimiento de datos a nivel de oficina:
                Alejandro Ramirez.
              </li>
              <li>
                Estructura Comercial de GH Y A&A: Ingrid Zamora.
              </li>
              <li>
                Convención de Ventas y organización de eventos:
                Laura Joya.
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 1,
    category: "Compensacion y pago",
    question: "¿Dónde puedo pedir mi reliquidación?",
    answer:
      "El proceso de reliquidación es administrado por Recursos Humanos el área de desvinculación, se solicita a través de sofi con un ticket, si la persona retirada tiene bonificaciones pendientes debe comunicarse con el encargado de bonificaciones de cada canal antes de solicitar la reliquidación para confirmar el valor pendiente de pago.",
  },
  {
    id: 3,
    category: "Estrategia y gestion",
    question: "¿Cómo sé qué negocios tengo proyectados?",
    answer:
      "Consulta el tablero de proyecciones disponible en la sección de Tableros de Consulta para tu canal correspondiente.",
  },
  {
    id: 4,
    category: "Compensacion y pago",
    question: "¿Cómo se liquidan las bonificaciones?",
    answer:
      "Las bonificaciones se liquidan según el esquema vigente para cada cargo. Consulta la sección de Esquemas de Bonificaciones para revisar tablas y políticas aplicables.",
  },
  {
    id: 5,
    category: "Polizas y negocio",
    question: "¿Qué es producción, recaudo y emisión?",
    answer:
      "Producción es el valor total de las pólizas vendidas. Recaudo es el dinero efectivamente cobrado. Emisión es el proceso de formalización de la póliza. Puedes ampliar estos conceptos en el glosario.",
  },
  {
    id: 6,
    category: "Metricas y analisis",
    question: "¿Cuáles son las condiciones para CNV?",
    answer:
      "Las condiciones para la Convención Nacional de Ventas se encuentran en la presentación oficial disponible en la sección de Concursos y Convenciones.",
  },
  {
    id: 7,
    category: "Compensacion y pago",
    question: "¿Dónde puedo consultar mi detalle de bonificaciones?",
    answer:
      "Para el canal de grupos homogéneos, puedes consultar el detalle de tus bonificaciones en los tableros de Looker Studio de tu canal o en el tablero de liquidaciones.",
  },
  {
    id: 8,
    category: "Canales y sistemas",
    question:
      "¿Cuál es el proceso para solicitar un equipo de cómputo para un nuevo colaborador o para uno con requerimientos especiales de salud?",
    answer:
      "Si el usuario no tiene dominio de red, el líder debe gestionar su creación con el área de Seguridad de la Información (Control de Accesos). Una vez se confirme que el usuario está en el directorio activo, se debe generar un Jira individual por cada persona para crear las subtareas de asignación de máquina.",
  },
  {
    id: 9,
    category: "Compensacion y pago",
    question:
      "¿Si se emite una póliza con pago mensual, la prima anual se tiene en cuenta para el pago de bonificaciones y comisiones?",
    answer: `Respuesta (para directores): El pago de bonificaciones se realiza por producción; si la producción ingresa anual, suma la anualidad.

Respuesta (para intermediarios): Las comisiones se pagan por recaudo, por lo que si recauda mensual, se paga su comisión cada mes.

Aclaración sobre concursos: El concurso también le suma al intermediario de forma mensual, ya que el concurso es por recaudos netos.`,
  },
  {
    id: 10,
    category: "Compensacion y pago",
    question:
      "¿El CNV de directores se paga adicional al total de las bonificaciones o no se suma en el total reportado?",
    answer:
      "Ese valor es concepto de premio y aparecerá en el desprendible como concepto aparte.",
  },
  {
    id: 11,
    category: "Compensacion y pago",
    question:
      "¿Por qué hay una diferencia de valor entre el tablero de PBI y el desprendible de nómina?",
    answer:
      "Los negocios no proyectados al nombre del director en la base de renovación no son tenidos en cuenta en la liquidación lo que implica un valor diferente.",
  },
  {
    id: 12,
    category: "Polizas y negocio",
    question:
      "¿Se tienen en cuenta en la producción los negocios de vida grupo y salud colectiva?",
    answer:
      "No. Los negocios que se tienen en cuenta son salud, hogar, vida y pymes. Los de colectivas y vida grupo no.",
  },
  {
    id: 13,
    category: "Metricas y analisis",
    question:
      "¿El cumplimiento en ramos aplica a todos los ramos, incluyendo Auto?",
    answer:
      "No, solo son los ramos foco. El cumplimiento se mide por el cumplimiento del ramo, y en ese trimestre el objetivo es cumplir al 50%.",
  },
  {
    id: 14,
    category: "Canales y sistemas",
    question:
      "¿Cómo se asigna un asesor nuevo a la directora especializada o gestora junior para el acompañamiento de ARL?",
    answer:
      'Debes registrarla usando el link de Cambios de Estructura GH y A&A (Director/Localidad/Promotor), en la opción que dice "Asignar intermediario o clave al especialista". Aplica para gestor junior.',
  },
  {
    id: 15,
    category: "Canales y sistemas",
    question:
      "¿Por qué una clave no aparece en mi estructura si ya se registró?",
    answer:
      "La clave no aparece porque la persona encargada no la registró.",
  },
  {
    id: 16,
    category: "Canales y sistemas",
    question:
      "El tablero de estrategia comercial no tiene la estructura correcta y la base de renovaciones en Excel también está incorrecta. ¿Quién me ayuda a actualizarla?",
    answer: `Todo lo relacionado con la estructura Ingrid Zamora le puede guiar.

(Base de Renovaciones): La base de renovaciones se modifica una sola vez al año. Solo es necesario filtrar tus claves y cambiar el nombre del director por el tuyo.`,
  },
  {
    id: 17,
    category: "Metricas y analisis",
    question:
      "Una emisión con GH (Grupos Humanos) en marzo, ¿cuándo se ve reflejada en el tablero?",
    answer:
      "Si se hicieron nuevos ingresos en emisión de marzo, eso es esa corresponde a la vigencia de abril y aparecerá hasta el reproceso, que es el 5 de mayo. No se refleja durante el mes de vigencia porque el proceso es mensual.; se espera que terminen de reportar todo el mes y luego se carga en el reproceso mensual. Aclaración: La producción de GH es casi a tres meses.",
  },
  {
    id: 18,
    category: "Canales y sistemas",
    question:
      "Herramientas y Recursos Adicionales para Resolver Dudas",
   answer: (
  <>
    <div className="space-y-4">
      <p className="text-slate-700">
        Seguros Bolívar ha dispuesto los siguientes canales para resolver
        preguntas frecuentes:
      </p>

      <div>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <span className="font-semibold text-slate-800">
              Portal de Apoyo Comercial:
            </span>{" "}
            Visita la sección "¿Quiere mejorar sus procesos y productos?"
            para encontrar respuestas a preguntas frecuentes sobre
            coberturas y trámites.
          </li>

          <li>
            <span className="font-semibold text-slate-800">
              Chatbot en WhatsApp:
            </span>{" "}
            Disponible 24/7 y diseñado para responder a más de 400
            preguntas frecuentes sobre el proceso de venta.
          </li>

          <li>
            <span className="font-semibold text-slate-800">
              #773:
            </span>{" "}
            Opción para Atención General y Cartera Unificada. También se
            ofrece un servicio de preguntas y respuestas 24/7.
          </li>

          <li>
            <span className="font-semibold text-slate-800">
              Gestión a la Mano:
            </span>{" "}
            Una herramienta digital que incluye una videoteca con
            tutoriales para la resolución de preguntas frecuentes sobre
            procesos de cotización, emisión de nuevos negocios,
            renovación y modificación de pólizas.
          </li>
        </ul>
      </div>
    </div>
  </>
    ),
  },
];

const categoriesMenu = [
  {
    name: "",
    matches: [
      "Estrategia y gestion",
      "Polizas y negocio",
      "Metricas y analisis",
      "Compensacion y pago",
      "Canales y sistemas",
    ],
    icon: <Activity className="h-5 w-5" />,
    iconColor: "text-teal-600",
  },
  {
    name: "Bonificaciones",
    matches: ["Compensacion y pago"],
    icon: <CircleDollarSign className="h-5 w-5" />,
    iconColor: "text-teal-500",
  },
  {
    name: "Procesos y Herramientas",
    matches: ["Canales y sistemas"],
    icon: <ClipboardList className="h-5 w-5" />,
    iconColor: "text-orange-500",
  },
  {
    name: "Conceptos Comerciales",
    matches: ["Estrategia y gestion", "Metricas y analisis"],
    icon: <Scale className="h-5 w-5" />,
    iconColor: "text-slate-500",
  },
  {
    name: "Ramos Especificos",
    matches: ["Polizas y negocio"],
    icon: <Briefcase className="h-5 w-5" />,
    iconColor: "text-orange-500",
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>(
    categoriesMenu[0]?.name || ""
  );

  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  const selectedCategory =
    categoriesMenu.find(
      (category) => category.name === activeCategory
    ) || null;

  const filteredFAQs = selectedCategory
    ? faqData.filter((faq) =>
        selectedCategory.matches.includes(faq.category)
      )
    : faqData;

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-white px-4 py-16 font-sans sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center md:text-bold">
          <h2 className="mb-2 text-3xl font-bold text-[#006847]">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="flex-1">
          <h3 className="mb-6 flex items-center text-xl font-bold text-slate-800">
            {activeCategory}
          </h3>

          <div className="space-y-3">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => {
                const isOpen = openQuestionId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`overflow-hidden rounded-xl border bg-white transition-all duration-200 ${
                      isOpen
                        ? "border-teal-300 shadow-md ring-1 ring-teal-100"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <button
                      className="flex w-full items-center justify-between px-5 py-4 text-left focus:outline-none"
                      onClick={() => toggleQuestion(faq.id)}
                    >
                      <span
                        className={`pr-4 text-sm font-medium md:text-base ${
                          isOpen ? "text-teal-900" : "text-slate-700"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <div className="flex-shrink-0 text-slate-400">
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-teal-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden px-5 transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-[1000px] pb-5 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t border-slate-100 pt-4 text-[15px] leading-relaxed text-slate-600">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-white py-12 text-center">
                <HelpCircle className="mx-auto mb-3 h-12 w-12 text-slate-300" />

                <p className="text-slate-500">
                  No hay preguntas configuradas para esta categoría.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}