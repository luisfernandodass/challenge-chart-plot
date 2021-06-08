
// Below we have a way to get the operation system and browser from user, can be useful

let os;
if (navigator.appVersion.indexOf("Win") != -1) os = "windows";
if (navigator.appVersion.indexOf("Mac") != -1) os = "mac";
if (navigator.appVersion.indexOf("X11") != -1) os = "linux";

let browser = navigator.appCodeName;


let now = new Date();
let timestamp = now.getTime();
