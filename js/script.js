// window.addEventListener("load", function () {
//   var searchBtn = document.getElementById("search-btn");
//   searchBtn.addEventListener("click", function () {
//     console.log("The Button was Clicked.");
//   })
// });

//or like this will do the same thing...
// function search () {
//   console.log("The Button was clicked.");
// }
// window.addEventListener("load", function () {
//   var searchBtn = document.getElementById("search-btn");
//   searchBtn.addEventListener("click", search);
// });

//JSON Data Model to grap data instead of getting
//that data from a database or a data source...
var users = [
  {
    name: "Lucy",
    gender: "F",
    hobby: "pets",
    avatar: "avatar1.png"
  },
  {
    name: "Betty",
    gender: "F",
    hobby: "pets",
    avatar: "avatar2.png",
  },
  {
    name: "Ronald",
    gender: "M",
    hobby: "music",
    avatar: "avatar3.png",
  },
  {
    name: "Christopher",
    gender: "M",
    hobby: "sports",
    avatar: "avatar4.png",
  },
  {
    name: "Ximena",
    gender: "F",
    hobby: "reading",
    avatar: "avatar5.png",
  },
  {
    name: "Paul",
    gender: "M",
    hobby: "pets",
    avatar: "avatar6.png",
  },
  {
    name: "Charlie",
    gender: "M",
    hobby: "pets",
    avatar: "avatar7.png",
  }
];

window.addEventListener("load", function () {

  function search () {
    //Taking HobbiesField input from user...
    var hobbiesField = document.getElementById("hobby-text");
    var hobby = hobbiesField.value;

    //Taking GenderField input from user...
    var genderField = document.getElementById("gender");
    var selected = genderField.selectedIndex;
    var gender = genderField.options[selected].value;

    //Iterating and showing users...
    var resultsHTML = "";
    var len = users.length;
    for (var i = 0; i < len; i++) {
      //check for gender...
      if (gender == "Both" || gender == users[i].gender) {
        //check for hobbies...
        if (hobby == "" || hobby == users[i].hobby) {
          resultsHTML += '<div class="some-container">\
                          <div class="person">\
                          <img src="images/' + users[i].avatar + '">\
                          <div class="person-info">\
                          <div>' + users[i].name + '</div>\
                          <div>' + users[i].hobby + '</div>\
                          </div>\
                          <button>Add as Friend</button>\
                          </div>\
                          </div>';
        }
      }
    }

    var results = document.getElementById("results");
    results.innerHTML = resultsHTML;
  }

  var searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", search);
});
