const findTheOldest = function(people) {
    return people
           .sort((person1, person2) => {
            let person1Age;
            let person2Age;
            let date = new Date().getFullYear()

            if ('yearOfDeath' in person1){
                person1Age = (person1.yearOfDeath - person1.yearOfBirth);
            }
            else {
                person1Age = (date - person1.yearOfBirth);
            }

            if ('yearOfDeath' in person2) {
                person2Age = (person2.yearOfDeath - person2.yearOfBirth);
            }
            else {
                person2Age = (date - person2.yearOfBirth);
            }

            return person2Age - person1Age
        })
           [0];

};

// Do not edit below this line
module.exports = findTheOldest;
