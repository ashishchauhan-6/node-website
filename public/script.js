const menuButton = document.querySelector("#menu-button");
const navLinks = document.querySelector("#nav-links");

menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#message-button").addEventListener("click", async () => {
  const button = document.querySelector("#message-button");
  const output = document.querySelector("#api-message");
  button.disabled = true;
  output.textContent = "Talking to the server…";

  try {
    const response = await fetch("/api/message");
    if (!response.ok) throw new Error("The server returned an error.");
    const data = await response.json();
    output.textContent = `${data.message} (at ${new Date(data.timestamp).toLocaleTimeString()})`;
  } catch (error) {
    output.textContent = `Could not reach the server: ${error.message}`;
  } finally {
    button.disabled = false;
  }
});
