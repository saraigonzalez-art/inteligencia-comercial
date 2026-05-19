import React from "react";

interface OrgNodeProps {
  title: string;
  color: string;
  children?: any[];
}

const OrgNode: React.FC<OrgNodeProps> = ({ title, color, children }) => (
  <div className="flex flex-col items-center">
    <div className={`rounded px-3 py-2 shadow text-center text-xs sm:text-sm mb-2 ${color}`}>{title}</div>
    {children && children.length > 0 && (
      <div className="flex flex-wrap justify-center gap-2 border-t border-gray-200 pt-2">
        {children.map((child, idx) => (
          <OrgNode key={idx} {...child} />
        ))}
      </div>
    )}
  </div>
);

export default OrgNode;
