//doorlopen van array en per item html genereren en in hoofditem plaatsen (meerdere li's in ul pompen)

const ul = document.querySelector("ul");
const vrienden = [
  { id: 5, naam: "Jos" },
  { id: 18, naam: "Els" },
];
// winner
ul.innerHTML = vrienden.map((el) => `<li>${el.naam}</li>`).join("");

//for
let opgebouwdeHtml1 = "";
for (let i = 0; i < vrienden.length; i++) {
  opgebouwdeHtml1 += `<li>${vrienden[i].naam}</li>`;
}
ul.innerHTML = opgebouwdeHtml1;

//foreach
let opgebouwdeHtml2 = "";
vrienden.forEach((el) => {
  opgebouwdeHtml2 += `<li>${el.naam}</li>`;
});
ul.innerHTML = opgebouwdeHtml2;
