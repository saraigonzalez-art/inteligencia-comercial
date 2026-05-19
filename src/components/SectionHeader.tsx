interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionHeader = ({ title, subtitle, id }: SectionHeaderProps) => (
  <div id={id} className="mb-8 scroll-mt-24">
    <h2 className="font-display text-3xl font-bold text-[#166534] md:text-4xl">
      {title}
    </h2>
    <div className="mt-3 h-1.5 w-20 rounded-full bg-[#FFD100]" />
    {subtitle && (
      <p className="mt-4 max-w-2xl font-body text-lg leading-8 text-[#166534]">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
