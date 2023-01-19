console.log("Content Loaded");
let logo = document.querySelector(".logo");

console.log(logo);

setTimeout(() => {
  let allTr = document.getElementsByTagName("tr");
  console.log("Hello nigga: ", allTr[1]);

  for (let i = 0; i < allTr.length; i++) {
    let clickableEl = allTr[i].firstChild;
    clickableEl.style.outline = "1px solid white";

    let clicked = false;

    clickableEl.addEventListener("click", () => {
      console.log("clicked: ", allTr[i]);

      // make color green
      if (clicked) {
        allTr[i].style.backgroundColor = "inherit";
        clicked = false;
      } else {
        allTr[i].style.backgroundColor = "green";
        clicked = true;
      }

      // get profile link of the user
      let profileLink = allTr[i]
        .querySelector(".playerAvatar")
        .getAttribute("href");
      console.log(profileLink);

      if (clicked) {
        chrome.storage.sync.set({
          profileId: profileLink,
        });
      }
    });

    console.log(allTr[i]);
  }
}, 8000);

// let allTr = document.querySelectorAll('tr')

// allTr.forEach((el) => {
//   console.log(el);
//   el.addEventListener('click', () => {
//     el.style.backgroundColor = 'green'
//   })
// });
