/** Google's tag, set up in `Base.astro` on the built site only. */
interface Window {
  gtag?: (...args: unknown[]) => void;
}
