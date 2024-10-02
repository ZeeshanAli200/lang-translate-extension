// console.log("loaded");

// export const onclickFunc = () => {
let ptag = document.querySelectorAll("p");
for (let i = 0; i < ptag.length; i++) {
  if (ptag[i].innerHTML.includes("The script itself is fairly simple:")) {
    ptag[i].innerHTML = ptag[i].innerHTML.replace(
      ptag[i].innerHTML,
      "<h1>Script is replaced</h1>"
    );
  }
}
// };
