@import "tailwindcss";

:root {
  color-scheme: light;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  margin: 0;
  min-width: 320px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes rise {
  from { opacity: 0; transform: translateY(10px) scale(0.99); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes queue-glow {
  0%, 100% { box-shadow: 0 18px 60px rgba(37, 99, 235, 0.18); }
  50% { box-shadow: 0 18px 80px rgba(37, 99, 235, 0.35); }
}

.animate-fade-in {
  animation: fade-in 0.55s ease both;
}

.animate-slide-up {
  animation: slide-up 0.75s ease both;
}

.animate-rise {
  animation: rise 0.5s ease both;
}

.queue-glow {
  animation: queue-glow 3.5s ease-in-out infinite;
}
