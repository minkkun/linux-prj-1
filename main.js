document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", () => {
    const searchText = document.getElementById("searchbar").value;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        try {
          const classData = JSON.parse(this.responseText); // retrieve JSON from echo of php file
          var found = true;
          // Use the matching class data as needed
          const code = classData[0];
          const title = classData[1];
          const units = classData[2];
          const description = classData[3];
          console.log(code);
          console.log(title);
          console.log(units);
          console.log(description);
          // Update the search results
          document.getElementById("class-code-input").textContent = code;
          document.getElementById("class-title-input").textContent = title;
          document.getElementById("class-unit-input").textContent = units;
          document.getElementById("class-desc-input").textContent = description;
        } catch (error) {
          // handle the error
          console.log("No matching class found");
          // Update the search results with an error message
          document.getElementById("class-code-input").textContent = "";
          document.getElementById("class-title-input").textContent = "";
          document.getElementById("class-unit-input").textContent = "";
          document.getElementById("class-desc-input").textContent = "No matching class found";
        }
      }
    };

    /* Send the results of the click events to server */
    xhttp.open("POST", "server.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("searchText=" + searchText);
  });
});
