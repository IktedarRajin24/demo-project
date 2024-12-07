let keyPressed = document.getElementById("field");
let keyId = document.getElementById("key");
let statusText = document.getElementById("status");

function onKeyDown(event) {
  if (event.key === "W" || event.key === "w") {
    statusText.innerHTML = "Sprite moves up.";
    keyId.src = "../img/up.PNG";
  } else if (event.key === "S" || event.key === "s") {
    statusText.innerHTML = "Sprite moves down.";
    keyId.src = "../img/up.PNG";
  } else if (event.key === "D" || event.key === "d") {
    statusText.innerHTML = "Sprite moves right.";
    keyId.src = "../img/right.PNG";
  } else if (event.key === "A" || event.key === "a") {
    statusText.innerHTML = "Sprite moves left.";
    keyId.src = "../img/left.PNG";
  } else {
    statusText.innerHTML = "Sprite stops moving.";
    keyId.src = "../img/keyboard.PNG";
  }
}
function onKeyUp(event) {
  if (event.key === "W" || event.key === "w") {
    statusText.innerHTML = "Sprite stops moving.";
    keyId.src = "../img/keyboard.PNG";
  } else if (event.key === "S" || event.key === "s") {
    statusText.innerHTML = "Sprite stops moving.";
    keyId.src = "../img/keyboard.PNG";
  } else if (event.key === "D" || event.key === "d") {
    statusText.innerHTML = "Sprite stops moving.";
    keyId.src = "../img/keyboard.PNG";
  } else if (event.key === "A" || event.key === "a") {
    statusText.innerHTML = "Sprite stops moving.";
    keyId.src = "../img/keyboard.PNG";
  }
}
function onKeyPress(event) {
  if (event.code === "Space") {
    statusText.innerHTML = "Sprite shoot the enemy.";
    keyId.src = "../img/hitEnemy.PNG";
  }
}
keyPressed.addEventListener("keydown", onKeyDown);
keyPressed.addEventListener("keyup", onKeyUp);
keyPressed.addEventListener("keypress", onKeyPress);
