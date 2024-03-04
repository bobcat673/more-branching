window.onload = function() {
  document.getElementById("submit").onclick = function() {
    event.preventDefault()
    favFood = document.querySelector('input[name="favFood"]:checked').value
    favColor = document.querySelector('input[name="favColor"]:checked').value
    if (favFood === "pizza" && favColor === "red" || favFood === "sandwich" && favColor === "black" || favFood ==="burger" && favColor === "black" || favFood === "pizza" && favColor === "black" || favFood === "sandwich" && favColor === "green" || favFood === "burger" && favColor === "green" || favFood === "pizza" && favColor === "green" || favFood === "sandwich" && favColor === "red" || favFood === "burger" && favColor === "red" ) {
      document.querySelector("p").innerText = "you are a " + favColor + " " + favFood
    } else {
      document.querySelector("p").innerText = "make sure to select one for both"
    }
  };
};
