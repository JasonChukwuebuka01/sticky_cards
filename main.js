window.onload = () => {
  const button = document.querySelector("#btn");
  const stickyBox = document.querySelector("#sticky_box");
  const popUpBox = document.querySelector("#popup_box");
  const save = document.querySelector("#save");
  const del = document.querySelector("#delete");
  const pen = document.querySelector("#pen");
  const userInput = document.querySelector("#userInput");
  let colArray = [
    "#FE4A49",
    "#FED766",
    "#2AB7CA",
    "#F39237",
    "#456990",
    "#1C77C3",
    "#E980FC",
    "#DDFFF7",
    "#F45B69",
  ];
  let colorcount = -1;
  let num = 1;
  let count = 0;
  let count2 = 0;
  let count3 = 0;

  let contentArray = []; // Array that accepts user input;

  //Adding EventListener();
  button.addEventListener("click", () => {
    count += 1;
    popUpBox.style.display = "block";

    if (count === 1) {
      pen.style.animation = "color .3s 20 ease";
    } else if (count === 2) {
      pen.style.animation = "colorr .3s 20 ease";
      count = 0;
    }
  });

  del.addEventListener("click", () => {
    popUpBox.style.display = "none";
  });

  save.addEventListener("click", () => {
    count2 += 1;
    createSticker();

    if (count2 === 1) {
      save.style.animation = "shadow .3s ease";
    } else if (count2 === 2) {
      save.style.animation = "shadows .3s ease";
      count2 = 0;
    }
  });
  // End of All EventListener().

  //CASE 1:(A () that pushes user input in an array and calls a function thats creates a Div forEach value in the array(contentArray));
  function createSticker() {
    if (userInput.value.trim() !== "") {
      contentArray.push(userInput.value.trim());
      divMaker(contentArray[contentArray.length - 1]);
      userInput.value = "";
    } else {
      alert("Please Enter a field");
    }
  } // End of Case 1;

  // CASE 2:(passing a () ForEach array method to create individual div for each array vale )
  contentArray.forEach(divMaker);

  function divMaker(text) {
    let div = document.createElement("div");
    let h2Tag = document.createElement("h2");
    h2Tag.innerHTML = text;

    //performing little logic on colorcount variable to access colArray. this is to give our created Div different bg-colors
    colorcount += 1;
    if (colorcount > colArray.length) {
      colorcount = 0;
    }

    div.style.backgroundColor = colArray[colorcount]; //colCount logic end.

    //performing simple logic on num variable to achieve different transform:rotate(num); its goes in this format (2,7 8,-5,-4,-3,-2,-1);
    //console.log(num) uncomment to confirm;

    num += 1;
    num = num >= 9 ? 1 : num;
    num = num == 3 ? 7 : num;
    num = num == 1 ? -5 : num;
    num = num == -9 ? 7 : num;
    num = num == 0 ? 2 : num;
    div.style.transform = `rotate(${num}deg)`; // End of num logic.

    div.className = "sticker";
    div.appendChild(h2Tag);
    stickyBox.appendChild(div);

    div.addEventListener("dblclick", () => {
      div.style.display = "none";
    });

    div.addEventListener("click", () => {
      count3 += 1;
      if (count3 === 1) {
        div.style.animation = "scale .3s 2";
      } else if (count3 === 2) {
        div.style.animation = "scaler .3s";
        count3 = 0;
      }
    });
  } // End of Case 2;
}; // End of General()✅
