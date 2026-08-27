import { useId, useState, type ReactNode } from "react";

type MobileCollapsibleListProps = {
  children: ReactNode;
  label: string;
  summary: (toggle: ReactNode) => ReactNode;
};

export default function MobileCollapsibleList({
  children,
  label,
  summary,
}: MobileCollapsibleListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const listId = useId();

  const toggle = (
    <button
      className="mobile-collapsible-toggle"
      type="button"
      aria-controls={listId}
      aria-expanded={isOpen}
      aria-label={`${isOpen ? "Hide" : "Show"} details for ${label}`}
      onClick={() => setIsOpen((current) => !current)}
    >
      <svg
        className="mobile-collapsible-chevron"
        aria-hidden="true"
        viewBox="0 0 20 20"
        width="16"
        height="16"
      >
        <path d="m5.5 7.5 4.5 4.5 4.5-4.5" />
      </svg>
    </button>
  );

  return (
    <div className={`mobile-collapsible${isOpen ? " is-open" : ""}`}>
      {summary(toggle)}
      <div className="mobile-collapsible-content" id={listId}>
        <ul>{children}</ul>
      </div>
    </div>
  );
}
