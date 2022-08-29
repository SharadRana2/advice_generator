const newRandom = document.querySelector(".new");
const addNew = document.querySelector(".main-div p");
const heading = document.querySelector(".main-div h3");

//Getting Random advice
const advice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data;
};

// Adding advice to html template
const generateTemplate = (data) => {
  const newHeading = `<h3 class="col-green">ADVICE # ${data.slip.id}</h3>`;
  heading.innerHTML = newHeading;
  const html = `<p>${data.slip.advice}</p>`;
  addNew.innerHTML = html;
};

newRandom.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log("fn fired");
  advice()
    .then((data) => {
      generateTemplate(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
