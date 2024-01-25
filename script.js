var darkMode = false;

    function dark() {
      var body = document.body;
      darkMode = !darkMode;

      if (darkMode) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
      } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
      }
    }
  
  