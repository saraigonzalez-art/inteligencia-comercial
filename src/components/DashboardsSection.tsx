import SectionHeader from "./SectionHeader";
import { ExternalLink, BarChart3, TrendingUp, Users, FileSpreadsheet } from "lucide-react";

interface DashboardItem {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const ghDashboards: DashboardItem[] = [
  { name: "Positivos y Negativos", description: "Seguimiento de indicadores de desempeño GH", icon: <TrendingUp className="h-4 w-4" /> },
  { name: "GPS", description: "Gestión de Plan Estratégico", icon: <BarChart3 className="h-4 w-4" /> },
  { name: "Looker Studio — Detalle Liquidaciones GH", description: "Detalle completo de liquidaciones", icon: <FileSpreadsheet className="h-4 w-4" /> },
  { name: "CNV GH", description: "Convención Nacional de Ventas — Etapa Innovación", icon: <Users className="h-4 w-4" /> },
];

const aaDashboards: DashboardItem[] = [
  { name: "Positivos y Negativos", description: "Indicadores de desempeño A&A", icon: <TrendingUp className="h-4 w-4" /> },
  { name: "CNV A&A", description: "Convención Nacional de Ventas Agentes", icon: <Users className="h-4 w-4" /> },
  { name: "Tablero Asesor", description: "Métricas individuales por asesor", icon: <BarChart3 className="h-4 w-4" /> },
  { name: "Ranking Convenciones", description: "Clasificación y posiciones CNV", icon: <TrendingUp className="h-4 w-4" /> },
];

const DashboardGroup = ({ title, items }: { title: string; items: DashboardItem[] }) => (
  <div className="rounded-lg border border-border bg-card p-6 shadow-card">
    <h3 className="mb-4 font-display text-xl font-semibold text-card-foreground">{title}</h3>
    <ul className="space-y-3">
      {items.map((d) => (
        <li key={d.name} className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-muted/50">
          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
            {d.icon}
          </div>
          <div>
            <p className="font-body text-sm font-semibold text-foreground">{d.name}</p>
            <p className="font-body text-xs text-muted-foreground">{d.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const DashboardsSection = () => (
  <section className="bg-muted/50 py-20 px-6">
    <div className="mx-auto max-w-7xl">
      <SectionHeader
        title="Tableros de Consulta"
        subtitle="Dashboards y reportes para el seguimiento de tus indicadores clave."
        id="tableros"
      />
      <div className="grid gap-6 md:grid-cols-2">
        <DashboardGroup title="Grupos Homogéneos (GH)" items={ghDashboards} />
        <DashboardGroup title="Agentes & Agencias (A&A)" items={aaDashboards} />
      </div>
    </div>
  </section>
);

export default DashboardsSection;
