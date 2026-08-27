import { useSyncExternalStore } from "react";

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
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getTheme,
    getServerTheme,
  );

  function chooseTheme(nextTheme: Theme) {
    applyTheme(nextTheme);
  }

  return (
    <div
      className="theme-toggle"
      role="group"
      aria-label="Color theme"
      data-active-theme={theme}
    >
      <span className="theme-indicator" aria-hidden="true" />
      {themes.map((option) => (
        <button
          className="theme-option"
          type="button"
          key={option.value}
          aria-label={`${option.label} theme`}
          aria-pressed={theme === option.value}
          title={option.label}
          onClick={() => chooseTheme(option.value)}
        >
          <span className="theme-symbol" aria-hidden="true">
            {option.symbol}
          </span>
        </button>
      ))}
    </div>
  );
}
