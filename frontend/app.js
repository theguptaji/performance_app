if (window.sessionStorage.getItem("session-id")) {
  authorizedHTML();
} else {
  const header = document.querySelector(".header");
  header.innerHTML += `<form id="formElem">
                        <label for="uname">First name:</label><br>
                        <input type="text" id="uname" name="uname" value="John"><br>
                        <label for="pass">Last name:</label><br>
                        <input type="password" id="pass" name="pass" value="Doe"><br><br>
                        <input type="submit" value="Submit">
                        </form>`;

  formElem.onsubmit = async (e) => {
    e.preventDefault();

    uname = formElem.elements["uname"].value;
    pass = formElem.elements["pass"].value;
    console.log(uname, pass);
    let response = await fetch("http://localhost:3000/login", {
      method: "POST",
      redirect: "follow",
      agent: null,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${uname}:${pass}`),
      },
      timeout: 5000,
    });
    if (response.status) {
      authorizedHTML();
    }
  };
}

const authorizedHTML = () => {
  const header = document.querySelector(".header");
  header.innerHTML = "";
  const main = document.querySelector(".main");
  main.innerHTML += `Hello!`;
};
