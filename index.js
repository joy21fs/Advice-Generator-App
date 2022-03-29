function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.slip);
      document.querySelector(
        ".advice--title"
      ).innerHTML = `Advice #${data.slip.id}`;
      document.querySelector(
        ".advice--content"
      ).innerHTML = `“${data.slip.advice}”`;
    });
}
