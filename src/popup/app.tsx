import React from "react";
// import { onclickFunc } from "../contentScript";

export const App = () => {
  const onclickFunc = () => {
    console.log("hello");

    let ptag = document.querySelectorAll("p");
    for (let i = 0; i < ptag.length; i++) {
      if (ptag[i].innerHTML.includes("The script itself is fairly simple:")) {
        ptag[i].innerHTML = ptag[i].innerHTML.replace(
          ptag[i].innerHTML,
          "<h1>Script is replaced</h1>"
        );
      }
    }
  };

  return (
    <div>
      <h1 onClick={onclickFunc} className="cursor-pointer">
        Popup{" "}
      </h1>
      <p className="text-green-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ut
        magnam vel tempora? Pariatur, eius cumque nemo veritatis quasi porro
        voluptatibus. Ullam explicabo molestiae dolorem soluta, iste repellat
        praesentium aspernatur.
      </p>
    </div>
  );
};
