
function startCheck() { 
    console.log("Starting domain check. This check makes sure that the website hosted at https://github.com/wesleybryie/wes-website/ is running on https://wesbryie.cf.")
};

startCheck();

var firstDot = window.location.hostname.indexOf('.');
var tld = ".cf";
var isSubdomain = firstDot < window.location.hostname.indexOf(tld);
var domain;

if (isSubdomain) {
    domain = window.location.hostname.substring(firstDot == -1 ? 0 : firstDot + 1);
}
else {
  domain = window.location.hostname;
}

function isDomainCorrect() {
    if (domain = "wesbryie" + tld) {
console.log("Thank you for using wesbryie.cf.");
}
    
else {
    console.log("why uh, why ya doin that? why ya taking my code?");
    close();
    stop();
}
}

isDomainCorrect();