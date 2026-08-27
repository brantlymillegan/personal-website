import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

type Theme = "system" | "light" | "dark";

const themes: { value: Theme; label: string; symbol: string }[] = [
  { value: "system", label: "System", symbol: "◐" },
  { value: "light", label: "Light", symbol: "☀" },
  { value: "dark", label: "Dark", symbol: "☾" },
];

const storageKey = "brantly-theme";
const themeChangeEvent = "brantly-theme-change";

function getTheme(): Theme {
  try {
    const savedTheme = window.localStorage.getItem(storageKey);

    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : "system";
  } catch {
    return "system";
  }
}

function getServerTheme(): Theme {
  return "system";
}

function subscribeToTheme(onThemeChange: () => void) {
  window.addEventListener("storage", onThemeChange);
  window.addEventListener(themeChangeEvent, onThemeChange);

  return () => {
    window.removeEventListener("storage", onThemeChange);
    window.removeEventListener(themeChangeEvent, onThemeChange);
  };
}

function applyTheme(nextTheme: Theme) {
  if (nextTheme === "system") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.dataset.theme = nextTheme;
  }

  try {
    if (nextTheme === "system") {
      window.localStorage.removeItem(storageKey);
    } else {
      window.localStorage.setItem(storageKey, nextTheme);
    }
  } catch {
    // The selected theme still applies for this page if storage is unavailable.
  }

  window.dispatchEvent(new Event(themeChangeEvent));
}

export default function ThemeToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getTheme,
    getServerTheme,
  );
  const optionsId = useId();
  const toggleRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const selectedTheme =
    themes.find((option) => option.value === theme) ?? themes[0];
  const otherThemes = themes.filter((option) => option.value !== theme);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function closeOnOutsidePress(event: PointerEvent) {
      if (!toggleRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  function chooseTheme(nextTheme: Theme) {
    applyTheme(nextTheme);
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div
      className={`theme-toggle${isOpen ? " is-open" : ""}`}
      data-active-theme={theme}
      ref={toggleRef}
    >
      <div
        className="theme-menu-options"
        id={optionsId}
        role="group"
        aria-label="Choose color theme"
        aria-hidden={!isOpen}
      >
        {otherThemes.map((option) => (
          <button
            className="theme-option"
            type="button"
            key={option.value}
            aria-label={`Use ${option.label.toLowerCase()} theme`}
            title={option.label}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => chooseTheme(option.value)}
          >
            <span className="theme-symbol" aria-hidden="true">
              {option.symbol}
            </span>
          </button>
        ))}
      </div>
      <button
        className="theme-trigger"
        type="button"
        ref={triggerRef}
        aria-controls={optionsId}
        aria-expanded={isOpen}
        aria-label={`${selectedTheme.label} theme. ${isOpen ? "Close" : "Open"} theme options`}
        title={`${selectedTheme.label} theme`}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span
          className="theme-symbol theme-trigger-symbol"
          aria-hidden="true"
          key={theme}
        >
          {selectedTheme.symbol}
        </span>
      </button>
    </div>
  );
}
