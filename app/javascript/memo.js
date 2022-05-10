function post () {
  const submit = document.setElementById("submit");
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form)
    const XHR = new XMLHttpRequest();
    XHR.open("POST","/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('click', post);