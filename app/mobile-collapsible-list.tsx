import { useId, useState, type ReactNode } from "react";

type MobileCollapsibleListProps = {
  children: ReactNode;
  label: string;
};

export default function MobileCollapsibleList({
  children,
  label,
}: MobileCollapsibleListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const listId = useId();

  return (
    <div className={`mobile-collapsible${isOpen ? " is-open" : ""}`}>
      <button
        className="mobile-collapsible-toggle"
        type="button"
        aria-controls={listId}
        aria-expanded={isOpen}
        aria-label={`${isOpen ? "Hide" : "Show"} details for ${label}`}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="mobile-collapsible-caret" aria-hidden="true" />
      </button>
      <ul id={listId}>{children}</ul>
    </div>
  );
}
