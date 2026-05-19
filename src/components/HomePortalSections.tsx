import { BarChart3, BookOpen, BriefcaseBusiness, Building2, FolderKanban, Network } from "lucide-react";
import { Link } from "react-router-dom";




const cardClasses =
  "rounded-[28px] border border-[#E5E7EB] bg-white p-7 shadow-[0_18px_45px_-28px_rgba(0,43,92,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_-28px_rgba(0,43,92,0.35)]";

const Cta = ({ href, internal, label }: { href: string; internal?: boolean; label: string }) => {
  const classes =
    "mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#FFD100] px-5 py-2.5 text-sm font-semibold text-[#002B5C] transition hover:bg-[#f3c900]";

  if (internal && href.startsWith("/")) {
    return (
      <Link to={href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {label}
    </a>
  );
};

const HomePortalSections = () => null;

export default HomePortalSections;
