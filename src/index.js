require('./css/styles.scss');

window.onload = function() {

  var btn = document.getElementById("btn");
  var content = document.getElementById("animal-info");
  var pageCounter = 1;

  btn.addEventListener("click", () => {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);

    ourRequest.onload = () => {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    };

    ourRequest.send();
    pageCounter++;
    if(pageCounter > 3) {
      btn.classList.add("hide-me");
    }
  });

  btn.onmouseover = () => {
    btn.innerHTML = "Fetch Info for 3 New Animals";
  };

  btn.onmouseout = () => {
    btn.innerHTML = "Fetch Info";
  };

  function renderHTML(data) {
    var htmlString = '';

    for(i = 0; i < data.length; i++) {
      htmlString += `<p>${data[i].name} is a ${data[i].species} that likes to eat ${data[i].foods.likes} and hates ${data[i].foods.dislikes}.</p>`;
    }

    content.insertAdjacentHTML('beforeend', htmlString);
  }

};
