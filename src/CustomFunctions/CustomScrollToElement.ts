export const scrollToElement = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  href: string
) => {
  e.preventDefault();
  if (!href) return;
  const id = href;
  const element = document.getElementById(id);
  const width = window.innerWidth;
  if (element) {
    const offset = width >= 768 ? 72 : 64;
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};
