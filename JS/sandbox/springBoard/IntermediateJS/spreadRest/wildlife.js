/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.

const animals = ['zebra', 'lion', 'koala', 'penguin']
 function animalSightings(...name){
    console.log(name)
}

animalSightings(...animals)



/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

const bothHabitats = [...forestHabitats, ...savannahHabitats]
console.log(bothHabitats)



/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

const update = {...rhinoStatus, population:'550'}
console.log(rhinoStatus)


/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.

const lionCopy = {...lionProfile, genetics:"male?"}
console.log(lionProfile)
console.log(lionCopy)

/*
 * Observations: 
        Added genetics. The copy has genetics and the original does not.

 * TODO: Explain here.
        Apread made a copy of the whole array, not just the reference point. They ARE 2 different arrays
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.

const ecosystemHealthShallow = {...ecosystemHealth, foodSupply: {...ecosystemHealth.foodSupply, carnivores: "Insufficient"}}
console.log(ecosystemHealth)
console.log(ecosystemHealthShallow)
/*
 * Observations:
        When I tried to make changes to carnivores, there was a reference to the original object
 * TODO: Explain here.
        I'm not sure, it was not covered in the videos...
 */
