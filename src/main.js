window.addEventListener("load", () => {
  setDate();
});

function setDate() {
  const dateEl = document.getElementById("current-date");

  if (!dateEl) return;

  const date = new Date();
  dateEl.innerHTML = new Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
    dateStyle: "full",
  }).format(date);
}
