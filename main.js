 let cards=[
 {  icon:"fa-solid fa-medal",
	title:"Decade Hottest Career",
	content:"2021 witnessed a 21% jump in professionals.Industry Average Salary of an experienced developer is around INR 6.8 LPA"
 },
 {  icon:"fa-solid fa-briefcase",
	title:"Decade Hottest Career",
	content:"2021 witnessed a 21% jump in professionals.Industry Average Salary of an experienced developer is around INR 6.8 LPA"
 },
 {
    icon:"fa-solid fa-chart-line",
	title:"Decade Hottest Career",
	content:"2021 witnessed a 21% jump in professionals.Industry Average Salary of an experienced developer is around INR 6.8 LPA"
 }
]

function elementcreate(card){


// CreateElement

var cardIcon=document.createElement("i"),
    cardTitle=document.createElement("h2"),
    cardCont=document.createElement("p"),
	cardSec=document.createElement("div");
	
//object value assign to Element
	
// cardIcon.innerHTML=cards.icon;
cardTitle.innerHTML=card.title;
cardCont.innerHTML=card.content;

// Add class to Element
cardIcon.setAttribute("class",card.icon);
cardTitle.setAttribute("class","title");
cardCont.setAttribute("class","content");
cardSec.setAttribute("class","card");

console.log(cardIcon,cardTitle,cardCont);

//AddChild

cardSec.appendChild(cardIcon)
cardSec.appendChild(cardTitle)
cardSec.appendChild(cardCont)

console.log(cardSec)


var cardlist= document.getElementById("card-list");
cardlist.appendChild(cardSec)
}

for(let i=0; i<cards.length;i++){
	elementcreate(cards[i]);
}

