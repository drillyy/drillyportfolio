export default function scrollDown(ref) {
  window.scrollTo({
    top: ref.current.offsetTop-100,
    behavior: "smooth",
  });
}
