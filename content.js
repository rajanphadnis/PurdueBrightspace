if (window.location.href.includes("https://purdue.brightspace.com/d2l/login")) {
  window.location.href =
    "https://purdue.brightspace.com/d2l/lp/auth/saml/initiate-login?entityId=https://idp.purdue.edu/idp/shibboleth";
}

try {
  document.getElementById("ContentPluginTree").lastChild.remove();
  document.getElementById("D2L_LE_Content_TreeBrowser").firstChild.remove();
  document.getElementById("ContentPluginTree").lastChild.remove();
  document.getElementById("ContentPluginTree").lastChild.remove();
  document.querySelector(".d2l-page-search").style.display = "none";
} catch (error) {}

var contentPage =
  /https:\/\/purdue\.brightspace\.com\/d2l\/home\/\d{6}$/gm.exec(
    window.location.href
  );
try {
  if (contentPage[0]) {
    var homePage =
      /https:\/\/purdue\.brightspace\.com\/d2l\/home\/\d{4}$/gm.exec(
        document.referrer
      );
    if (homePage[0]) {
        var baseURL = window.location.href.toString().slice(0,-11);
        var docURL = window.location.href.toString().slice(-6);
        console.log(docURL);
        window.location.href = baseURL + "le/content/" + docURL + "/Home";
    }
  }
} catch (error) {}
