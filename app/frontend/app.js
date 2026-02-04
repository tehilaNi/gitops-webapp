function callBackend() {
  fetch("http://backend-service:5000/api/hello")
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText = data.message;
    });
}
