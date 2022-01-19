if (window.sessionStorage.getItem("session-id")) {
  const main = document.querySelector(".main");
  main.innerHTML += `Hello!`;
} else {
  const header = document.querySelector(".header");
  header.innerHTML += `<form id="formElem">
                        <label for="fname">First name:</label><br>
                        <input type="text" id="fname" name="fname" value="John"><br>
                        <label for="lname">Last name:</label><br>
                        <input type="text" id="lname" name="lname" value="Doe"><br><br>
                        <input type="submit" value="Submit">
                        </form>`;
  formElem = document.getElementById("formElem");
  formElem.onsubmit = async (e) => {
    e.preventDefault();
    const data = new URLSearchParams();
    for (const pair of new FormData(formElem)) {
      data.append(pair[0], pair[1]);
    }
    let response = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: data,
    });

    let result = await response.json();

    alert(result.message);
  };
}
