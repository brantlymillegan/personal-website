import {
  Children,
  useId,
  useState,
  type ReactNode,
} from "react";

type MobileCollapsibleListProps = {
  children: ReactNode;
  label: string;
  mobileFullWidth?: boolean;
  summary: (toggle: ReactNode | null) => ReactNode;
};

export default function MobileCollapsibleList({
  children,
  label,
  mobileFullWidth = false,
  summary,
}: MobileCollapsibleListProps) {
  const [isOpen, setIsOpen] = useState(false);
  const listId = useId();
  const items = Children.toArray(children);
  const hasDetails = items.length > 0;
  const toggleDetails = () => setIsOpen((current) => !current);

  const chevron = (
    <svg
      className="mobile-collapsible-chevron"
      aria-hidden="true"
      viewBox="0 0 20 20"
      width="12"
      height="12"
    >
      <path d="m5.5 7.5 4.5 4.5 4.5-4.5" />
    </svg>
  );

  const toggle = hasDetails ? (
    <button
      className="mobile-collapsible-toggle"
      type="button"
      aria-controls={listId}
      aria-expanded={isOpen}
      aria-label={`${isOpen ? "Hide" : "Show"} details for ${label}`}
      onClick={toggleDetails}
    >
      {chevron}
    </button>
  ) : null;

  const indicator = hasDetails ? (
    <span className="mobile-collapsible-indicator" aria-hidden="true">
      {chevron}
    </span>
  ) : null;

  return (
    <div
      className={`mobile-collapsible${
        mobileFullWidth ? " mobile-collapsible-full-width" : ""
      }${hasDetails && isOpen ? " is-open" : ""}`}
    >
      {mobileFullWidth ? (
        <div className="mobile-collapsible-summary-tappable">
          {summary(indicator)}
          <button
            className="mobile-collapsible-summary-hit-area"
            type="button"
            aria-controls={listId}
            aria-expanded={isOpen}
            aria-label={`${isOpen ? "Hide" : "Show"} details for ${label}`}
            onClick={toggleDetails}
          />
        </div>
      ) : (
        summary(toggle)
      )}
      {hasDetails ? (
        <div className="mobile-collapsible-content" id={listId}>
          <ul>{items}</ul>
        </div>
      ) : null}
    </div>
  );
}
