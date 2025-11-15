/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.


const name = 'Lee'
const age = 24
const studyField = 'hope'

const participant = { name, age, studyField };


console.log('participant:', participant)


/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

 const participantCopy= {...participant,displayInfo()
    {
      console.log(`Participant: ${this.name}, Age: ${this.age}, Area of Study: ${this.studyField}`)
    }
 }

console.log("participantCopy.displayInfo()", participantCopy.displayInfo())

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.

const participantCopy2= {...participant,displayInfo: () =>
    {
      console.log(`Participant: ${this.name}, Age: ${this.age}, Area of Study: ${this.studyField}`)
    }
 }

/*
 * Observations:
      Displays undefined 
 * TODO: Explain here.
      just throws an error - global scope
 */

console.log('participantCopy2:', participantCopy2.displayInfo())

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

function updateParticipantInfo(participant,key, value) {
  { 
    return {...participant, [key]: value}
    
  } 
}

const updatedParticipant = updateParticipantInfo(participant,"attitude:", "sweet")

console.log('updateParticipantInfo:',updatedParticipant)
