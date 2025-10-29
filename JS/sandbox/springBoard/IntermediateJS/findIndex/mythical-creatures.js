const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

const firstAir = mythicalCreatures.find(function(creature){
        return creature.type === "Air"
    })

const griffen = mythicalCreatures.findIndex(function(creature){
        return creature.name === "Griffin"
    })

const forest = mythicalCreatures.find(function(creature){
        return creature.lastSeen === "Enchanted Forest"
    })