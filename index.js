let homeCountEl = document.getElementById('homeCount');
let guestCountEl = document.getElementById('guestCount');
let addHome1 = document.getElementById('addHome1');
let addHome2 = document.getElementById('addHome2');
let addHome3 = document.getElementById('addHome3');
let addGuest1 = document.getElementById('addGuest1');
let addGuest2 = document.getElementById('addGuest2');
let addGuest3 = document.getElementById('addGuest3');
let newGame = document.getElementById('newGame');

let homeCount = 0;
let guestCount = 0;

addHome1.onclick = function (){
    homeCount += 1;
    homeCountEl.textContent = homeCount;
    leaderChecker()            
}

addHome2.onclick = function (){
    homeCount += 2;
    homeCountEl.textContent = homeCount;
    leaderChecker()            
}

addHome3.onclick = function (){
    homeCount += 3;
    homeCountEl.textContent = homeCount;
    leaderChecker()            
}

addGuest1.onclick = function (){
    guestCount += 1;
    guestCountEl.textContent = guestCount;
    leaderChecker()        
}

addGuest2.onclick = function (){
    guestCount += 2;
    guestCountEl.textContent = guestCount;
    leaderChecker()        
}

addGuest3.onclick = function (){
    guestCount += 3;
    guestCountEl.textContent = guestCount;
    leaderChecker()        
}

newGame.onclick = function (){
    homeCount = 0;
    guestCount = 0;
    homeCountEl.textContent = homeCount;
    guestCountEl.textContent = guestCount;
    leaderChecker();   
 }
 
 
 function leaderChecker(){
     if(homeCount > guestCount){
         homeCountEl.style.color = 'rgba(128, 255, 128, 0.809)';
         guestCountEl.style.color = '#F94F6D';
     } else if (guestCount > homeCount){
         homeCountEl.style.color = '#F94F6D';
         guestCountEl.style.color = 'rgba(128, 255, 128, 0.809)';
     } else if (guestCount == homeCount) {
         homeCountEl.style.color = '#F94F6D';
         guestCountEl.style.color = '#F94F6D';
     }
 }
 