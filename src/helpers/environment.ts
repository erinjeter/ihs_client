let APIURL = "";
switch (window.location.hostname) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:4000";
    break;
  case "ihs-project-client.herokuapp.com":
    APIURL = "https://ihs-project-server.herokuapp.com";
    break;
}
export default APIURL;
