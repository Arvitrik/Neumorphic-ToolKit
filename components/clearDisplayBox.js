// REMOVE PREVIOUS CONTENT AND SHOW ONLY WHAT IS REQUESTED LATEST
const DISPLAY_INFO_EL = document.getElementById("display-info");
const clearDisplayBox = () => {
  // Checks for: null, if null do nothing, else continue
  if (DISPLAY_INFO_EL.firstElementChild) {
    // Checks for: if display contains any content, if yes remove it and show new content.
    if (
      DISPLAY_INFO_EL.firstElementChild.classList.contains("display-wrapper")
    ) {
      DISPLAY_INFO_EL.removeChild(DISPLAY_INFO_EL.firstElementChild);
    }
  }
};

export { clearDisplayBox };
