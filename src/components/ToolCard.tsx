import { ExternalLink } from "lucide-react";

interface ToolCardProps {
  name: string;
  description: string;
  route?: string;
  routeLabel?: string;
  utility?: string;
  note?: string;
  icon: React.ReactNode;
}

const ToolCard = ({
  name,
  description,
  route,
  routeLabel,
  utility,
  note,
  icon,
}: ToolCardProps) => (
  <div className="group rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
    <div className="mb-5">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#166534] text-white">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-[#166534]">{name}</h3>
    </div>

    <p className="mb-3 font-body text-sm leading-7 text-[#666666]">{description}</p>

    {utility && (
      <p className="mb-3 text-sm text-[#666666]">
        <span className="font-semibold text-[#166534]">Utilidad:</span> {utility}
      </p>
    )}

    {note && (
      <p className="mb-3 rounded-2xl border border-[#FFE58A] bg-[#FFF9DB] px-3 py-2 text-xs font-medium leading-relaxed text-[#666666]">
        {note}
      </p>
    )}

    {route && route !== "#" && (
      <div className="mb-4 break-all rounded-2xl bg-[#F5F5F5] px-3 py-2 text-xs leading-relaxed text-[#666666]">
        <span className="font-semibold text-[#166534]">Ruta:</span> {routeLabel ?? route}
      </div>
    )}

    {route && route !== "#" && (
      <a
        href={route}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-[#FFD100] px-4 py-2 text-sm font-medium text-[#166534] transition-colors hover:bg-[#f3c900]"
      >
        Acceder <ExternalLink className="h-3.5 w-3.5" />
      </a>
    )}
  </div>
);

export default ToolCard;
