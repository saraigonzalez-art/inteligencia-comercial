
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, FileText, Calendar, DollarSign, Target, ArrowRightLeft } from "lucide-react";

interface InfoBlock {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const ghInfo: InfoBlock[] = [
 
];

const aaInfo: InfoBlock[] = [
  {
    icon: <Target className="h-5 w-5" />,
    title: "Momentum 2025 — Estrategias",
    items: ["Plan Comercial Metas A&A 2025", "Embudo Comercial"],
  },
  {
    icon: <DollarSign className="h-5 w-5" />,
    title: "Esquemas de Bonificaciones",
    items: ["Compensación Ejecutivos A&A 2025", "Separación por cargo", "Políticas y tablas", "Subcomisiones: Vida, Autos, Pymes"],
  },
  {
    icon: <ArrowRightLeft className="h-5 w-5" />,
    title: "Sinergia entre Canales",
    items: ["Producción Espejo GH", "Formulario de reporte", "Estrategia de sinergia"],
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Reportes y Estructura",
    items: [
      "Cómo reportar cambios de estructura",
      "Fechas de reporte y visualización",
      "Concursos internos",
      "Segmentación de intermediarios",
    ],
  },
];

const InfoBlockCard = ({ block }: { block: InfoBlock }) => (
  <div className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-card">
    <div className="mb-3 flex items-center gap-2 text-[#166534]">
      {block.icon}
      <h4 className="font-display text-lg font-semibold text-[#166534]">{block.title}</h4>
    </div>
    <ul className="space-y-2">
      {block.items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 font-body text-sm leading-6 text-[#666666]">
          <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FFD100]" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ChannelsSection = () => (
  <section className="bg-white py-20 px-6">
    <div className="mx-auto max-w-7xl">
      
      <Tabs defaultValue="gh" className="w-full">
        
        <TabsContent value="gh">
          <div className="grid gap-6 sm:grid-cols-2">
            {ghInfo.map((block) => (
              <InfoBlockCard key={block.title} block={block} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="aa">
          <div className="grid gap-6 sm:grid-cols-2">
            {aaInfo.map((block) => (
              <InfoBlockCard key={block.title} block={block} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>
);

export default ChannelsSection;
