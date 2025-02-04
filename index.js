// Premium Cards
const buyMeCards = {
    card1: { front: "https://i.pinimg.com/originals/3c/d9/c4/3cd9c417e306464378e1011577f4b68f.gif", back: "https://w0.peakpx.com/wallpaper/842/336/HD-wallpaper-black-sonic-heroes-amoled-dark-knuckles-sega-sonic-heroes-tails-thumbnail.jpg" },
    card2: { front: "https://i.pinimg.com/originals/8b/d5/52/8bd552b7ed048b3b4b28cdb07ade4c44.gif", back: "https://i.pinimg.com/564x/80/a1/1b/80a11b571d12029f80c1a09553574fc5.jpg" },
    card3: { front: "https://i.pinimg.com/originals/9c/41/ab/9c41abdbfa14e30f012bb57fda6fe293.gif", back: "https://w0.peakpx.com/wallpaper/434/381/HD-wallpaper-fast-black-black-and-white-car-chevy-cool-logo-motion-my-speed-super.jpg" },
    card4: { front: "", back: "" },
    card5: { front: "", back: "" },
    card6: { front: "", back: "" }
};

// Player1 image sets
const P1_card_front_1 = "https://wallpapercat.com/w/full/3/0/7/34786-1080x1920-mobile-1080p-naruto-background.jpg";
const P1_card_back_1 = "https://i.pinimg.com/originals/6f/f6/3e/6ff63e36931a975d1677021735e003db.png";
const P1_card_front_2 = "https://applescoop.org/image/wallpapers/iphone/goku-dragon-ball-z-anime-cartoon-manga-tv-show-powerful-28-10-2024-1730184405-hd-wallpaper.webp";
const P1_card_back_2 = "https://i.pinimg.com/736x/6d/0a/7d/6d0a7dc45f0a8f0cbaf281e6b2452b53.jpg";
const P1_card_front_3 = "https://wallpaperaccess.com/full/3894340.jpg";
const P1_card_back_3 = "https://i.pinimg.com/736x/cb/83/2c/cb832c596699ade06a6c47442d4a4715.jpg";

// Player2 image sets
const P2_card_front_1 = "https://sasiwallpaper.co.za/cdn/shop/files/Screenshot2021-09-13at12.48.52_c3fad912-5d50-4b54-96d1-16b0b3755f73.png?v=1683532338";
const P2_card_back_1 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aaa79357-9476-4c1d-b9a8-6e881f2449d3/dfqt5vc-949f6edd-1395-4789-97de-e9812fc6b803.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FhYTc5MzU3LTk0NzYtNGMxZC1iOWE4LTZlODgxZjI0NDlkM1wvZGZxdDV2Yy05NDlmNmVkZC0xMzk1LTQ3ODktOTdkZS1lOTgxMmZjNmI4MDMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2Ef0yKKgGT28owSGxCG6kXALA1XPr8IOY3kw7cZo_8A";
const P2_card_front_2 = "https://i.pinimg.com/736x/af/a1/8e/afa18e4397302db6101aa079cdc9b67f.jpg";
const P2_card_back_2 = "https://imgcdn.stablediffusionweb.com/2024/4/20/c4d2c0fd-c075-47c2-b5ad-3c8ef334b3a6.jpg";
const P2_card_front_3 = "https://i.pinimg.com/736x/90/83/24/9083245a2bb9a5eb82480830f0f979e5.jpg";
const P2_card_back_3 = "https://i.pinimg.com/originals/e0/ab/a4/e0aba4a26f4476293ace530cd35790a0.jpg";

// Bugaw/Player3 image set
const P3_card_front_1 = "https://m.media-amazon.com/images/M/MV5BMzE0ZDU1MzQtNTNlYS00YjNlLWE2ODktZmFmNDYzMTBlZTBmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg";
const P3_card_back_1 = "https://i.pinimg.com/474x/92/cf/09/92cf093e80c6ba6e212f53d8aed527e2.jpg";
const P3_card_front_2 = "https://i.pinimg.com/originals/73/dc/b8/73dcb82a864a1ae4739f573b948b2939.jpg"
const P3_card_back_2 = "https://www.shutterstock.com/shutterstock/photos/2295107843/display_1500/stock-photo-marvel-comics-wallpaper-for-mobile-full-hd-wallpaper-2295107843.jpg"
const P3_card_front_3 = "https://wallpapersmug.com/download/1224x1224/4c2607/justice-league-cartoon-comic-artwork-4k.jpg"
const P3_card_back_3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmx1_QBO9Mpi0yEeOZN3eo1JuferbIQemoog&s"

// Image sets for easy access with "imageFront" and "imageBack" naming
const p1_imageSet_1 = [P1_card_front_1, P1_card_back_1];
const p1_imageSet_2 = [P1_card_front_2, P1_card_back_2];
const p1_imageSet_3 = [P1_card_front_3, P1_card_back_3];
const p1_imageSet_4 = [buyMeCards.card1.front, buyMeCards.card1.back]
const p1_imageSet_5 = [buyMeCards.card2.front, buyMeCards.card2.back]
const p1_imageSet_6 = [buyMeCards.card3.front, buyMeCards.card3.back]

const p2_imageSet_1 = [P2_card_front_1, P2_card_back_1];
const p2_imageSet_2 = [P2_card_front_2, P2_card_back_2];
const p2_imageSet_3 = [P2_card_front_3, P2_card_back_3];

const p3_imageSet_1 = [P3_card_front_1, P3_card_back_1];
const p3_imageSet_2 = [P3_card_front_2, P3_card_back_2];
const p3_imageSet_3 = [P3_card_front_3, P3_card_back_3];

// Result 
let randomNumPlayer1;
let randomNumPlayer2;
let randomNumPlayer3;

// Bet
let tossCards = document.getElementById("tossCard");
let resHolder = document.getElementById("result");
let finalBet = 0;
let p1_initial;
let p2_initial;
let betModal;
let p1Money = 2000; // Initial money for Player 1
let p2Money = 2000; // Initial money for Player 2

// This object will store which card has been picked
let buyCards = {premC1: null};
let pickedCards = { demo1: null, demo: null, demo2: null };

// Function to flip the card between front and back based on its current src
function flip(element, imageSet) {
    let currentImage = element.src;

    // If imageSet is picked
    if (imageSet === 1) {
        currentImage === P1_card_front_1 ? element.src = P1_card_back_1 : element.src = P1_card_front_1;
    } 
    else if (imageSet === 2) {
        currentImage === P1_card_front_2 ? element.src = P1_card_back_2 : element.src = P1_card_front_2;
    }
    else if (imageSet === 3) {
        currentImage === P1_card_front_3 ? element.src = P1_card_back_3 : element.src = P1_card_front_3
    }
    else if(imageSet === 4) {
        currentImage === P2_card_front_1 ? element.src = P2_card_back_1 : element.src = P2_card_front_1;
    }
    else if(imageSet === 5) {
        currentImage === P2_card_front_2 ? element.src = P2_card_back_2 : element.src = P2_card_front_2;
    }
    else if(imageSet === 6) {
        currentImage === P2_card_front_3 ? element.src = P2_card_back_3 : element.src = P2_card_front_3;
    }
    else if(imageSet === 7) {
        currentImage === P3_card_front_1 ? element.src = P3_card_back_1 : element.src = P3_card_front_1;
    }
    else if(imageSet === 8) {
        currentImage === P3_card_front_2 ? element.src = P3_card_back_2 : element.src = P3_card_front_2;
    }
    else if(imageSet === 9) {
        currentImage === P3_card_front_3 ? element.src = P3_card_back_3 : element.src = P3_card_front_3;
    } 
    else if(imageSet === 10) {
        currentImage === buyMeCards.card1.front ? element.src = buyMeCards.card1.back : element.src = buyMeCards.card1.front;
    }
    else if(imageSet === 11) {
        currentImage === buyMeCards.card2.front ? element.src = buyMeCards.card2.back : element.src = buyMeCards.card2.front;  
    }
    else if(imageSet === 12) {
        currentImage === buyMeCards.card3.front ? element.src = buyMeCards.card3.back : element.src = buyMeCards.card3.front;
    }
}

// Function to set the initial card image when a player picks a card
function pickCard(cardId, imageSet) {
    const card = document.getElementById(cardId);
    pickedCards[cardId] = imageSet;  // Store which set the player picked

    // Set the initial image for the card based on the image set picked
    if (imageSet === 1) {
        card.src = P1_card_back_1; 
    } else if (imageSet === 2) {
        card.src = P1_card_back_2; 
    } else if (imageSet === 3) {
        card.src = P1_card_back_3; 
    } else if (imageSet === 4) {
        card.src = P2_card_back_1;
    } else if (imageSet === 5) {
        card.src = P2_card_back_2;
    } else if (imageSet === 6) {
        card.src = P2_card_back_3;
    } else if (imageSet === 7) {
        card.src = P3_card_back_1;
    } else if (imageSet === 8) {
        card.src = P3_card_back_2;
    } else if (imageSet === 9) {
        card.src = P3_card_back_3;
    } else if (imageSet === 10) {
        card.src = buyMeCards.card1.back
    } else if (imageSet === 11) {
        card.src = buyMeCards.card2.back
    } else if (imageSet === 12) {
        card.src = buyMeCards.card3.back
    }
}

function showCardBack(playerId, imageSet) {
    const card = document.getElementById(playerId);
    const cardBacks = [
        P1_card_back_1, P1_card_back_2, P1_card_back_3,
        P2_card_back_1, P2_card_back_2, P2_card_back_3,
        P3_card_back_1, P3_card_back_2, P3_card_back_3,
        buyMeCards.card1.back, buyMeCards.card2.back, buyMeCards.card3.back,
    ];
    if (imageSet >= 1 && imageSet <= 12) {
        card.src = cardBacks[imageSet - 1];  // imageSet is 1-indexed, array is 0-indexed
    }
}

// Function to simulate the game logic and randomly assign images to picked cards
function teksPlay() {
    let num = [0, 1];
    let index = 0;

    // Check if either player has not picked a card, and if so, display "Pick Card"
    if (pickedCards.demo1 === null || pickedCards.demo2 === null || pickedCards.demo === null) {
        return;
    }

    document.getElementById("moveUp").style.zIndex = "500";

    // Toss Card animation
        if (tossCards.classList.contains("fa-hand-point-right")) {
            tossCards.classList.remove("fa-hand-point-right")
            tossCards.classList.add("fa-thumbs-up")
        } else {
            tossCards.classList.remove("fa-thumbs-up")
            tossCards.classList.add("fa-hand-point-right")
            return;
        }   

    // Randomly assign image for Player 1 (demo1)
    if (pickedCards.demo1 !== null) {
    let imageSetForPlayer1 = pickedCards.demo1 === 1 ? p1_imageSet_1 : pickedCards.demo1 === 2 ? p1_imageSet_2 : pickedCards.demo1 === 3 ? p1_imageSet_3 : pickedCards.demo1 === 10 ? p1_imageSet_4 : pickedCards.demo1 === 11 ? p1_imageSet_5 :  p1_imageSet_6;
    let ranTimeOut = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;;
    console.log(ranTimeOut)
        let interval = setInterval(() => {
            document.getElementById("demo1").src = imageSetForPlayer1[index];
            index = (index + 1) % num.length;
        }, 200);

        // After 3 seconds, clear the interval and set final result for Player 1, then call player2()
        setTimeout(() => {
            clearInterval(interval);
            randomNumPlayer1 = Math.floor(Math.random() * imageSetForPlayer1.length);
            imageRes = imageSetForPlayer1[randomNumPlayer1];
            document.getElementById("demo1").src = imageRes;
            player3();  // Start Player 2's interval after Player 1 is finished
        }, ranTimeOut);  // 3 seconds delay
    }

    function player2() {
        // Randomly assign image for Player 2 (demo2)
        if (pickedCards.demo2 !== null) {
            let imageSetForPlayer2 = pickedCards.demo2 === 4 ? p2_imageSet_1 : pickedCards.demo2 === 5 ? p2_imageSet_2 : p2_imageSet_3;
            let ranTimeOut = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;;
            console.log(ranTimeOut)
            let index = 0; // Reset index for Player 2's images
            let interval = setInterval(() => {
                document.getElementById("demo2").src = imageSetForPlayer2[index];
                index = (index + 1) % num.length;
            }, 200);

            // After 3 seconds, clear the interval and set final result for Player 2
            setTimeout(() => {
                clearInterval(interval);
                randomNumPlayer2 = Math.floor(Math.random() * imageSetForPlayer2.length);
                imageRes = imageSetForPlayer2[randomNumPlayer2];
                document.getElementById("demo2").src = imageRes; // Correct assignment
                setTimeout(showModal, 500);
            }, ranTimeOut);  // 3 seconds delay
        }
    }

    function player3() {
        if(pickedCards.demo !== null) {
            let imageSetForPlayer3 = pickedCards.demo === 7 ? p3_imageSet_1 : pickedCards.demo === 8 ? p3_imageSet_2 : p3_imageSet_3;
            let ranTimeOut = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;;
            console.log(ranTimeOut)
            let index = 0;
            let interval = setInterval(() => {
                document.getElementById("demo").src = imageSetForPlayer3[index];
                index = (index + 1) % num.length;
            }, 200);

            setTimeout(() => {
                clearInterval(interval);
                randomNumPlayer3 = Math.floor(Math.random() * imageSetForPlayer3.length);
                imageRes = imageSetForPlayer3[randomNumPlayer3];
                document.getElementById("demo").src = imageRes;
                player2();
            }, ranTimeOut)
        }
    }
}

function resultLabel() {
    let winBet = finalBet * 2; // Winnings if a player wins
    let labelBet = document.getElementById("winBet");

    // Use the global p1Money and p2Money variables
    let p1_current = p1Money; // Current money for Player 1
    let p2_current = p2Money; // Current money for Player 2

    if (randomNumPlayer1 === randomNumPlayer2) {
        // Draw: Return the finalBet to both players
        resHolder.innerHTML = "Draw";
        labelBet.innerHTML = "";
        p1Money = p1_current + finalBet; // Return the bet to Player 1
        p2Money = p2_current + finalBet; // Return the bet to Player 2
        p1_initial.innerHTML = p1Money; // Update UI for Player 1
        p2_initial.innerHTML = p2Money; // Update UI for Player 2
    } else if (randomNumPlayer3 === randomNumPlayer2) {
        // Player 1 wins: Add winnings to Player 1's balance
        resHolder.innerHTML = "Player I";
        labelBet.innerHTML = "+ " + "₱" + winBet;
        p1Money = p1_current + winBet; // Add winnings to Player 1's balance
        p1_initial.innerHTML = p1Money; // Update UI for Player 1
    } else if (randomNumPlayer3 === randomNumPlayer1) {
        // Player 2 wins: Add winnings to Player 2's balance
        resHolder.innerHTML = "Player II";
        labelBet.innerHTML = "+ " + "₱" + winBet;
        p2Money = p2_current + winBet; // Add winnings to Player 2's balance
        p2_initial.innerHTML = p2Money; // Update UI for Player 2
    } else {
        // No result (e.g., if the game is not yet played)
        resHolder.innerHTML = "Pick";
        labelBet.innerHTML = "";
    }
}

function showModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "flex"
    resultLabel()
    tossCards.classList.remove("fa-hand-fist");
    tossCards.classList.add("fa-hand-point-right");
}

function playAgain() {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
    document.getElementById("moveUp").style.zIndex = "-1";
    tossCards.classList.remove("fa-thumbs-up");
    tossCards.classList.add("fa-hand-point-right");
    betModal.style.display = "flex";

    // Reset card images to their back faces
    showCardBack("demo1", pickedCards.demo1);  // Reset Player 1's card
    showCardBack("demo2", pickedCards.demo2);  // Reset Player 2's card
    showCardBack("demo", pickedCards.demo);    // Reset Player 3's card

    // Do not reset player money here; it should persist
    // Update the UI to reflect the current money balance
    p1_initial.innerHTML = p1Money;
    p2_initial.innerHTML = p2Money;
}

function placeBet(amount) {
    let betResult = document.getElementById("betRes");
    
    if(amount === 1) {
        betResult.innerHTML = 100;
    } else if (amount === 2) {
        betResult.innerHTML = 200;
    } else if (amount === 3) {
        betResult.innerHTML = 300;
    } else if (amount === 4) {
        betResult.innerHTML = 1000;
    } else {
        betResult.innerHTML = 0;
    }
    
    finalBet = parseInt(betResult.innerHTML);
}

function placeBetandStart() {
    p1_initial = document.getElementById("p1_initial");
    p2_initial = document.getElementById("p2_initial");
    betModal = document.querySelector(".betModal");

    if (p1Money < finalBet) {
        document.getElementById("moneyStatus").innerHTML = "Player I: Insufficient balance!";
        return;
    } 
    
    if (p2Money < finalBet) {
        document.getElementById("moneyStatus").innerHTML = "Player II: Insufficient balance!";
        return;
    }

    if (finalBet !== 0) {
        betModal.style.display = "none";
        p1Money -= finalBet; // Deduct finalBet from Player 1's balance
        p2Money -= finalBet; // Deduct finalBet from Player 2's balance
        p1_initial.innerHTML = p1Money; // Update UI for Player 1
        p2_initial.innerHTML = p2Money; // Update UI for Player 2
    }

    document.getElementById("moneyStatus").innerHTML = "";
    document.getElementById("betLabel").innerHTML = finalBet;
}

function premCardsOpen() {
    const premCard = document.querySelector(".prem_card_modal");
    premCard.style.display = "flex"
}

function premCardsClose() {
    const premCard = document.querySelector(".prem_card_modal");
    premCard.style.display = "none"
}

function buyPremCard(cardId, imageSet) {
    const premCardId = document.getElementById(cardId);
    let premCardValue = 500;

    if (imageSet === 10) { // Player 1 buys the card
        document.getElementById("premBuyerStat").innerHTML = "Congratulations! You acquired a premium card!";
        document.querySelector(".premBtn10").style.display = "none"
        if (p1Money >= premCardValue) {
            document.querySelector(".premBtnPick10").style.display = "block"
            p1Money -= premCardValue; // Deduct money
            p1_initial.innerHTML = p1Money; // Update UI
            document.getElementById("bal").innerHTML = p1Money;
        } else {
            document.querySelector(".premBtn10").style.display = "block"
            document.getElementById("premBuyerStat").innerHTML = "Insufficient balance!"
        }
    } else if (imageSet === 11) {
        document.getElementById("premBuyerStat").innerHTML = "Congratulations! You acquired a premium card!";
        document.querySelector(".premBtn11").style.display = "none"
        if (p1Money >= premCardValue) {
            document.querySelector(".premBtnPick11").style.display = "block"
            p1Money -= premCardValue; // Deduct money
            p1_initial.innerHTML = p1Money; // Update UI
            document.getElementById("bal").innerHTML = p1Money;
        } else {
            document.querySelector(".premBtn11").style.display = "block"
            document.getElementById("premBuyerStat").innerHTML = "Insufficient balance!"
        }
    } else if (imageSet === 12) {
        document.getElementById("premBuyerStat").innerHTML = "Congratulations! You acquired a premium card!";
        document.querySelector(".premBtn12").style.display = "none"
        if (p1Money >= premCardValue) {
            document.querySelector(".premBtnPick12").style.display = "block"    
            p1Money -= premCardValue; // Deduct money
            p1_initial.innerHTML = p1Money; // Update UI
            document.getElementById("bal").innerHTML = p1Money;
        } else {
            document.querySelector(".premBtn12").style.display = "block"
            document.getElementById("premBuyerStat").innerHTML = "Insufficient balance!"
        }
    }
}

function hideModal() {
    document.querySelector(".modal_style").style.visibility = "hidden";
    document.querySelector(".showResultModal").style.visibility = "visible"
}

function showResultModal() {
    document.querySelector(".modal_style").style.visibility = "visible";
    document.querySelector(".showResultModal").style.visibility = "hidden"
}