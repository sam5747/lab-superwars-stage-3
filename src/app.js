const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers=players.map((players,i) => {
        return {
            name: players,
            strength: getRandomStrength(),
            image:"images/super-"+(i+1)+".png",
            type: i % 2 == 0 ? "hero" : "villain"
            }
    });
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    let fragment = players.filter(players => players.type == type).map(players =>
        `<div class="player">
        <img src="${players.image}" alt="">
        <div class="name">${players.name}</div>
        <div class="strength">${players.strength}</div>
        </div>`).join();
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
