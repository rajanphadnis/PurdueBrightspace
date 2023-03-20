if (window.location.href.includes("https://purdue.brightspace.com/d2l/login")) {
  window.location.href =
    "https://purdue.brightspace.com/d2l/lp/auth/saml/initiate-login?entityId=https://idp.purdue.edu/idp/shibboleth";
}

try {
  document.getElementById("ContentPluginTree").lastChild.remove();
  document.getElementById("D2L_LE_Content_TreeBrowser").firstChild.remove();
  document.getElementById("ContentPluginTree").lastChild.remove();
  document.getElementById("ContentPluginTree").lastChild.remove();
  document.getElementById("ContentPluginTree").lastChild.remove();
  document.querySelector(".d2l-page-search").style.display = "none";
} catch (error) {}

try {
  document.getElementById("AdditionalInfoPlaceholder").parentElement.style.display = "none";
  var parent1 = document.getElementById("ContentView").parentElement;
  var dwnldButton = document.getElementById("ContentView").nextElementSibling;
  dwnldButton.style.padding = "0px 0 20px 0";
  // console.log(dwnldButton.children);
  dwnldButton.children[1].style.display = "none";
  parent1.firstElementChild.style.margin = "0 0 0.75rem 0";
  parent1.firstElementChild.style.color = "#ffffff";
  parent1.insertBefore(document.getElementById("ContentView").nextElementSibling, document.getElementById("ContentView"));
  document.querySelector(".d2l-min-width").style.backgroundColor = "#424242";
  document.getElementById("StatusPlaceholder").firstElementChild.style.color = "#ffffff";
} catch (error) {
  
}

var annoucementPage =
  /https:\/\/purdue\.brightspace\.com\/d2l\/home\/\d{6}$/gm.exec(
    window.location.href
  );
var contentPage =
  /https:\/\/purdue\.brightspace\.com\/d2l\/home\/\d{6}$/gm.exec(
    window.location.href
  );
var homePage = /https:\/\/purdue\.brightspace\.com\/d2l\/home\/\d{4}$/gm.exec(
  window.location.href
);
try {
  if (homePage[0]) {
    console.log("home page");
    document.getElementById("CourseImageBannerPlaceholderId").style.display =
      "none";
    document.querySelector("d2l-navigation-main-footer").style.display = "none";
    document.querySelector(".d2l-min-width").style.backgroundColor = "#424242";
  }
} catch (error) {}

try {
  if (annoucementPage[0]) {
    var fromHomePage =
      /https:\/\/purdue\.brightspace\.com\/d2l\/home\/\d{4}$/gm.exec(
        document.referrer
      );
    if (fromHomePage[0]) {
      var baseURL = window.location.href.toString().slice(0, -11);
      var docURL = window.location.href.toString().slice(-6);
      console.log(docURL);
      window.location.href = baseURL + "le/content/" + docURL + "/Home";
    }
  }
} catch (error) {}

try {
  if (window.location.href.includes("https://purdue.brightspace.com/d2l")) {
    document.querySelector("d2l-navigation-main-header").style.backgroundColor =
      "#2A2A2E";
  }
} catch (error) {
  console.log(error);
}
