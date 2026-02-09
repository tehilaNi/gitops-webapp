const BACKEND_URL = "http://192.168.49.2:32694/api/hello";

function logEvent(message) {
  const log = document.getElementById("log");
  const item = document.createElement("li");
  item.innerText = `${new Date().toLocaleTimeString()} - ${message}`;
  log.prepend(item);
}

function setStatus(text, state) {
  const status = document.getElementById("status");
  status.innerText = text;
  status.className = `status ${state}`;
}

function callBackend() {
  setStatus("Checking backend...", "idle");
  logEvent("Sending request to backend");

  fetch(BACKEND_URL)
    .then(res => res.json())
    .then(data => {
      setStatus("Backend is UP ✅", "ok");
      logEvent(`Response: ${data.message}`);
    })
    .catch(err => {
      setStatus("Backend ERROR ❌", "error");
      logEvent("Backend request failed");
      console.error(err);
    });
}