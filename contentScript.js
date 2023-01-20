console.log("Content Loaded");
let logo = document.querySelector(".logo");

setTimeout(() => {
  let rows = document.querySelectorAll("table tr");
  console.log("Table rows: ", rows);

  rows.forEach((row) => {
    row.addEventListener("click", (event) => {
      event.target.parentNode.classList.add("selected");

      const selectedRows = document.querySelectorAll("table tr.selected");

      const selectedRowsArray = Array.from(selectedRows);

      const selectedProfileLinks = selectedRowsArray.map((row) =>
        row.querySelector(".playerAvatar").getAttribute("href")
      );

      console.log("Selected Profiles", selectedProfileLinks);

      console.log(selectedRowsArray);

      chrome.storage.local.set({ selectedRows: selectedProfileLinks }, () => {
        console.log("Selected rows saved to chrome.storage");
      });
    });
  });

  window.addEventListener("load", () => {
    chrome.storage.local.get("selectedRows", (result) => {
      // If there are selected rows in storage
      if (result.selectedRows) {
        // Loop through all table rows
        console.log("Storage Rows: ", result.selectedRows);
        console.log("New Rows", rows);

        for (let i = 0; i < rows.length; i++) {
          console.log("Getting Rows", rows[i])
          let profileLink = rows[i].querySelector(".playerAvatar")?.getAttribute("href") || ""

          if (result.selectedRows.includes(profileLink)) {
            rows[i].classList.add("selected");
          }
        }
      }
    });
  });

}, 8000);
