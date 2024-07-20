const gameObject = {
    home: {
        teamName:"Brooklyn Nets",
        color: "Black, White",
        players: {
            "Alan Anderson": {
                number: 0,
                shoes: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1, 
                slamDunks: 1,
            },
            "Reggie Evans": {
                number: 30,
                shoes: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12, 
                slamDunks: 7,
            },
            "Brooks Lopez": {
                number: 11,
                shoes: 17,
                points: 17,
                rebounds: 10,
                assists: 10,
                steals: 3,
                blocks: 1, 
                slamDunks: 15,
            },
            "Mason Plumlee": {
                number: 1,
                shoes: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8, 
                slamDunks: 5,
            },
            "Jason Terry": {
                number: 31,
                shoes: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11, 
                slamDunks: 1,
            },
        }
    },



    away: {
        teamName:"Charlotte Hornets",
        color: "Turquoise, Purple",
        players: {
            "Jeff Adrien": {
                number: 4,
                shoes: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
            },
            "Bismark Biyombo": {
                number: 0,
                shoes: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
            },
            "DeSagna Diop": {
                number: 2, 
                shoes: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
            },
            "Ben Gordon": {
                number: 8,  
                shoes: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood": {
                number: 33,
                shoes: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
            }
        }
    }
}



function gameObjectFunction(obj){
    return gameObject
}

function homeTeamName() {
    let object = gameObjectFunction();
    return object["home"]["teamName"]
}

// console.log(homeTeamName())

// console.log("Object.keys(gameObject)", Object.keys(gameObject));
// console.log("Object.values(gameObject)", Object.values(gameObject));
// console.log("Object.entries(gameObject)", Object.entries(gameObject))

function numPointScored(playerName){
    if (gameObject.home.players.hasOwnProperty(playerName)){
        return gameObject.home.players[playerName].points;
    }
    else if (gameObject.away.players.hasOwnProperty(playerName)){
        return gameObject.away.players[playerName].points;
    } 
    else {
        return "Invalid Player's Name";
    }
}

// TEST 
// console.log(numPointScored("Alan Anderson")) // => 22
// console.log(numPointScored("Jason Terry")) // 19


function shoeSize(playerName){
    if (gameObject.home.players.hasOwnProperty(playerName)){
        return gameObject.home.players[playerName].shoes;
    }
    else if (gameObject.away.players.hasOwnProperty(playerName)){
        return gameObject.away.players[playerName].shoes;
    } 
    else {
        return "Invalid Player's Name";
    }

}

// TEST 
// console.log(shoeSize("Alan Anderson")) // => 16
// console.log(shoeSize("Jason Terry")) // => 15
// console.log(shoeSize("Marlon Shade")) // Invalid Player's Name


function teamColor(teamName){ 
   if (gameObject.home.teamName === teamName){
    return gameObject.home.color.split(",");
   }
   else if (gameObject.away.teamName === teamName){
    return gameObject.away.color.split(",");
   }
   else {
    return "Team Name Invalid!"
   }
}

// // TEST 
// console.log(teamColor("Brooklyn Nets")) // => [ 'Black', ' White' ]
// console.log(teamColor("Charlotte Hornets")) // => [ 'Turquoise', ' Purple' ]
// console.log(teamColor("My Crew")) // => Team Name Invalid!

function teamNames(onlyTeamNames) {
    return [gameObject.home.teamName, gameObject.away.teamName]
}

// console.log(teamNames()) // => [ 'Brooklyn Nets', 'Charlotte Hornets' ]



function playerNumbers(teamName) {
    return []
}



function playerStats(playerName) {
    if (gameObject.home.players.hasOwnProperty(playerName)){
        return gameObject.home.players[playerName];
    }
    else if (gameObject.away.players.hasOwnProperty(playerName)){
        return gameObject.away.players[playerName];
    } 
    else {
        return "Invalid Player's Name";
    }

}

// TEST 
// console.log(playerStats("Alan Anderson")) // returns full stats

function bigShoesRebounds(){
    return 
}

// BONUS 

function mostPointsScored(){
    return 
}

function winningTeam(){
    return
}

function playerWithLongestName(){
    return
}

// SUPER BONUS 
function doesLongNameSteaATon(){

}