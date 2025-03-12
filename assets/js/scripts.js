const db = new IndexedDBRepository("db", 2);

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

const addUserForm = document.querySelector("#addUser");
if (addUserForm) {
  addUserForm.addEventListener("submit", async (event) => {
    document.querySelector(".loader").classList.add("show");
    event.preventDefault();
    setTimeout(async () => {
      const username = document.querySelector("input[name='username']").value.trim();
      const email = document.querySelector("input[name='email']").value.trim();

      const params = {
        username: username.toUpperCase(), 
        email: email.toLowerCase(),
        created_at: getFormattedDate(),
      };
      
      await db.init(["user"]);
      const userAlreadyExists = await db.search("user", {email});
      if (userAlreadyExists.length === 0) {
        await db.add("user", params);
      }
      const currentUser = await db.search("user", {email});
      window.localStorage.setItem("currentUser", JSON.stringify(currentUser[0]));
      window.location.href = "../../escolher_atividade.html";
    }, 1000);
  });
}

const activityList = document.querySelectorAll(".activity-item");
activityList.forEach((item) => {
  item.addEventListener("click", (event) => {
    const fileName = event.target.closest("div").dataset.link;
    window.location.href = `/${fileName}.html`;
  });
});