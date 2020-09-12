if (window.location.href.includes("https://purdue.brightspace.com/d2l/login")) {
    window.location.href = "https://purdue.brightspace.com/d2l/lp/auth/saml/initiate-login?entityId=https://idp.purdue.edu/idp/shibboleth";
}
else {
    console.log("we're in bois");
}