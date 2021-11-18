/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

console.log("Copyright *my code only, anything that is not my code is published and copyrighted by their respective owners* Wesley Bryie, 2021.");
console.log("This website was designed and published to https://wesbryie.cf/. If you see it on a domain that is not wesbryie.cf please contact me at wesleybryie@protonmail.com.");

function getDomainName(url, subdomain) {
    subdomain = subdomain || false;

    url = url.replace(/(https?:\/\/)?(www.)?/i, '');

    if (!subdomain) {
        url = url.split('.');

        url = url.slice(url.length - 2).join('.');
    }

    if (url.indexOf('/') !== -1) {
        return url.split('/')[0];
    }

    return url;
}


getDomainName();

function isDomainCorrect() {
    if ("url" = "*wesbryie.cf") {
console.log("This websites javascript code says that it is correct.");
stop();
}
    
else {
    console.log("I SEE YOU.");
    stop();
}
}