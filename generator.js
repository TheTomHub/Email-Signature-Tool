//Photo

function previewFile() {
       var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }
  previewFile();  //calls the function named previewFile()

//Name

function addname()
 {
var name = document.getElementById("name");
var s = name.value;
document.getElementById('name1').innerHTML = s;
}

//Title

function addjobtitle()
 {
var jobtitle = document.getElementById("jobtitle");
var s = jobtitle.value;
document.getElementById('jobtitle1').innerHTML = s;
}

//Region

function addregion()
 {
var region = document.getElementById("region");
var s = region.value;
document.getElementById('region1').innerHTML = s;
}

//Location

function getOption() {
    var obj = document.getElementById("mySelect");
    document.getElementById("demo").innerHTML = 
    obj.options[obj.selectedIndex].text;
}

//Mobile no

function addmobileno()
 {
var mobileno = document.getElementById("mobileno");
var s = mobileno.value;
document.getElementById('mobileno1').innerHTML = s
}

//Office no

function addofficeno()
 {
var officeno = document.getElementById("officeno");
var s = officeno.value;
document.getElementById('officeno1').innerHTML = s
}

//Twitter

function addtwitter()
 {
var twitter = document.getElementById("twitter");
var s =twitter.value;

document.getElementById("twimg").style.display= "inline";
document.getElementById("tw").href= s;
}

//LinkedIn

function addlinkedin()
 {
var linkedin = document.getElementById("linkedin");
var s =linkedin.value;

document.getElementById("limg").style.display= "inline";
document.getElementById("li").href= s;
}

//Copy

$(function() {
    new Clipboard('#copy-button');
});