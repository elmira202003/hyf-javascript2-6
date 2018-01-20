
    'use strict'

const listOfBooks = ["true_colours",
    "the_god_of_small_things",
    "interpreter_of_maladies",
    "unaccustomed_earth",
    "lowland",
    "truth_always_prevails",
    "playing_it_my_way",
    "unbreakable",
    "runs_in_ruins",
    "india_at_risk"];

const informationAboutBooks = [
    { id: "true_colours", title: "True Colours", language: "English", author: "Adam Gilchrist" },
    { id: "the_god_of_small_things", title: "The God of Small Things", language: "English", author: "Arundhati Roy" },
    { id: "interpreter_of_maladies", title: "Interpreter of Maladies", language: "English", author: "Jhumpa Lahiri" },
    { id: "unaccustomed_earth", title: "Unaccustomed Earth", language: "English", author: "Jhumpa Lahiri" },
    { id: "lowland", title: "Lowland", language: "English", author: "Jhumpa Lahiri" },
    { id: "truth_always_prevails", title: "Truth Always Prevails", language: "English", author: "Sadruddin Hashwani" },
    { id: "playing_it_my_way", title: "Playing It My Way", language: "English", author: "Sachin Tendulkar and Boria Mazumder" },
    { id: "unbreakable", title: "Unbreakable", language: "English", author: "Mary Kom" },
    { id: "runs_in_Ruins", title: "Runs in Ruins", language: "English", author: "Sunil Gavaskar" },
    { id: "india_at_risk", title: "India at Risk", language: "English", author: "Jaswant Singh" }
];

const listOfImages = {
     true_colours: "http://t1.gstatic.com/images?q=tbn:ANd9GcQpbZvwdnRGfuL3_YzGAXqZLOxsusF9Wau3J2novw7kBl4iYJYt" ,
     the_god_of_small_things: "http://t0.gstatic.com/images?q=tbn:ANd9GcQlP2JU6glm6eDWEFFuquGo8uyF7vxFoNb3RvwI3qUeoHWO8blJ" ,
     interpreter_of_maladies: "http://t0.gstatic.com/images?q=tbn:ANd9GcQcIqCkURDBU5TuwGQVtpww0ozTPgdjI7_12EQOXoU8zeaHnPQH" ,
    unaccustomed_earth: "https://images.gr-assets.com/books/1320398140l/85301.jpg" ,
     lowland: "http://t3.gstatic.com/images?q=tbn:ANd9GcQD0BmxJakwsJ2hXIfTQxL8En9FBm1Z1jbvpJACY-0n5Eo86M5P" ,
     truth_always_prevails: "http://t1.gstatic.com/images?q=tbn:ANd9GcTK04w7W11WsuTfSF2deDUJcBcKCfHbrpMN7Q92EWwWjgiQcLtM" ,
     playing_it_my_way: "http://t0.gstatic.com/images?q=tbn:ANd9GcRtPs5QyklSm5Ms_2FyxDT1zYfeB_dV5aoAbgz9mR0tIRIotgD_" ,
     unbreakable: "http://t2.gstatic.com/images?q=tbn:ANd9GcS_9fmVQchnUiIY5A_I2Xgb6PF3SzNkhjsNUnH7CWKgahPKyOCb" ,
     runs_in_ruins: "http://bestbookcentre.com/images/products/400x400/Runs_n_Ruins_by_Sunil_Gavaskar.jpg" ,
     india_at_risk:"http://www.tribuneindia.com/2013/20131208/spectrum/book6e.jpg"
    };

let x = Object.values(listOfImages);

// the body
const body = document.getElementById("root");
// end body

// the header
const header = document.createElement("h1");
body.appendChild(header);
header.innerHTML = "Recommended books!";
// end header

// the unordered list
const unorderedList = document.createElement("ul");
body.appendChild(unorderedList);
// end list

// start hr
const hrLine = document.createElement("hr");
body.appendChild(hrLine);
// end hr line

// start function
function callList() {
    for (let index = 0; index < listOfBooks.length; index++) {
        // start list item
        const listItem = document.createElement("li");
        unorderedList.appendChild(listItem);
        listItem.innerHTML = listOfBooks[index];
        // end list item 

        // start books info
        const paragraph = document.createElement("p");
        unorderedList.appendChild(paragraph);
        paragraph.innerHTML = "This book has the ID "+ informationAboutBooks[index].id+
            " and has the title "+ informationAboutBooks[index].title+
            " comes in "+ informationAboutBooks[index].language+
            " and the author is "+ informationAboutBooks[index].author;    
        // end books info

        //start images

        const covers = document.createElement("img");
        listItem.appendChild(covers);
        covers.setAttribute("src", x[index]);
        covers.setAttribute("width", "100px");
        covers.setAttribute("height", "100");


    };
};

callList();
// end function
