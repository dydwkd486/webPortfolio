import "./main.js";

const toast = document.querySelector("#copy-toast");

const showToast = () => {
  if (!toast) return;

  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1400);
};

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy");
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      showToast();
    } catch (error) {
      console.error("Failed to copy color token.", error);
    }
  });
});
