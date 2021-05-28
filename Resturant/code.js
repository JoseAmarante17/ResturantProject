// Initialize and add the map
function initMap() {
  // The location of the ramen
  const ramen = { lat: 40.85083323891756, lng: -73.9364464966924 };
  // The map, centered at the shop
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: ramen,
  });
  // The marker, positioned at THE SHOP
  const marker = new google.maps.Marker({
    position: ramen,
    map: map,
  });
}

//creates alert when submit button is click in reservation
function reservation() {

  // assings the locations of these inputs to variales
  let name = document.getElementById("name").value;
  let tel = document.getElementById("tel").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("today").value;
  let time = document.getElementById("time").value;
  if (name == "" || tel == '' || email == "" || date == "" || time == "") {
    alert("Please fill out all fields");
  }

  else if (time < "09:00" || time > "20:00") {
    alert("Select an available time. Our hours are from 9 AM to 8 PM");
  }

  else {
    alert("You have successfully booked a reservation.");
    console.log("alert works");
  } //set date on reservation to today

}
//when web page loads, place these pre-configured values
window.onload = function load() {
  let today = new Date().toISOString().substr(0, 10);
  document.querySelector("#today").value = today;
  document.querySelector("#today").min = today;
}

//MOBILE SECTION BELOW 


//navigation for mobile

function myFunction() {
  var menu = document.getElementById("myLinks");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

//MENU FOR MOBILE
//MENU SECTION
let menuAppetizer = document.getElementById("menu-section-1");
let menuRamen = document.getElementById("menu-section-2");
let menuRicebowl = document.getElementById("menu-section-3");
let menuAlcohol = document.getElementById("menu-section-4");

function menuCheck() {
  //LOCATION OF SELECT AND THE VALUE WITHIN SELECT
  let selector = document.getElementById("menu-select").value;
  //A
  let appetizer1 = document.getElementById("appetizers").value;
  //R
  let ramen1 = document.getElementById("ramen").value;
  //RICE
  let riceBowl1 = document.getElementById("riceBowl").value;
  //ALCOHOL
  let alcohol1 = document.getElementById("alcohol").value;
  //MENU SECTION

  //THE IF STATEMENTS
  if (selector == appetizer1) {
    appetizers();
  }

  if (selector == ramen1) {
    ramen();
  }

  if (selector == riceBowl1) {
    riceBowl();
  }

  if (selector == alcohol1) {
  alcohol();
  }
 
}

function appetizers() {
  let menuAppetizer = document.getElementById("menu-section-1");
  let menuRamen = document.getElementById("menu-section-2");
  let menuRicebowl = document.getElementById("menu-section-3");
  let menuAlcohol = document.getElementById("menu-section-4");
  //what is being applied
  menuAppetizer.style.display = "block";
  menuRamen.style.display = 'none';
  menuRicebowl.style.display = 'none';
  menuAlcohol.style.display = 'none';
}

function ramen() {
  let menuAppetizer = document.getElementById("menu-section-1");
  let menuRamen = document.getElementById("menu-section-2");
  let menuRicebowl = document.getElementById("menu-section-3");
  let menuAlcohol = document.getElementById("menu-section-4");
  //what it being applied
  menuAppetizer.style.display = 'none';
  menuRamen.style.display = 'block';
  menuRicebowl.style.display = 'none';
  menuAlcohol.style.display = 'none';

}

function riceBowl() {
  let menuAppetizer = document.getElementById("menu-section-1");
  let menuRamen = document.getElementById("menu-section-2");
  let menuRicebowl = document.getElementById("menu-section-3");
  let menuAlcohol = document.getElementById("menu-section-4");
  //what it being applied

  menuAppetizer.style.display = 'none';
  menuRamen.style.display = 'none';
  menuRicebowl.style.display = 'block';
  menuAlcohol.style.display = 'none';


}

function alcohol() {
  let menuAppetizer = document.getElementById("menu-section-1");
  let menuRamen = document.getElementById("menu-section-2");
  let menuRicebowl = document.getElementById("menu-section-3");
  let menuAlcohol = document.getElementById("menu-section-4");
  //what it being applied

  menuAppetizer.style.display = 'none';
  menuRamen.style.display = 'none';
  menuRicebowl.style.display = 'none';
  menuAlcohol.style.display = 'block';

}

//SETS DISPLAY TO BLOCK ON WHEN PIXELS ARE ABOVE 810PX
let media = window.matchMedia("(min-width:810px)");
function displayCheck(x){

  let menuAppetizer = document.getElementById("menu-section-1");
  let menuRamen = document.getElementById("menu-section-2");
  let menuRicebowl = document.getElementById("menu-section-3");
  let menuAlcohol = document.getElementById("menu-section-4");

  if(x.matches){
    menuAppetizer.style.display = 'block';
    menuRamen.style.display = 'block';
    menuRicebowl.style.display = 'block';
    menuAlcohol.style.display = 'block';
    console.log('ta bien manin');
  }
}
//does the first check
displayCheck(media);
//keeps checking
media.addListener(displayCheck);

