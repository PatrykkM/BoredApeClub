export const scrollToElement = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | any> | any,
  href: string
) => {
  e.preventDefault();
  if (!href) return;
  const id = href;
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};
