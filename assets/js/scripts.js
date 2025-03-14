const db = new IndexedDBRepository("db", 2);
async function dbInit() {
  await db.init(["user", "activity"]);
}
dbInit();

const language = window.localStorage.getItem("language") ?? "pt";
window.localStorage.setItem("language", language);
const selectLanguageInput = document.querySelector("#language");
if (selectLanguageInput) {
  selectLanguageInput.value = language;
  selectLanguageInput.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    window.localStorage.setItem("language", selectedLanguage);
    window.location.reload();
  });
}

function getFormattedDate() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const activityList = document.querySelectorAll(".activity-item");
activityList.forEach((item) => {
  item.addEventListener("click", (event) => {
    const fileName = event.target.closest("div").dataset.link;
    window.location.href = `/${fileName}.html`;
  });
});