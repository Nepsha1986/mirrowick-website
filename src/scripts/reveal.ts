/** Fades `[data-reveal]` up as each comes into view, once. */
const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('shown');
      io.unobserve(e.target);
    }
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
);
items.forEach((el) => io.observe(el));
