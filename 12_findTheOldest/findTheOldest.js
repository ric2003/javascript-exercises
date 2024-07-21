const currentYear = new Date().getFullYear();

const findTheOldest = function(people) {
    let peopleAge = people.map(person => ({
        name: person.name,
        age: (person.yearOfDeath||currentYear) - person.yearOfBirth
    }));
    let topAge=0;
    let personTopAge;
    for(let i = 0; i<peopleAge.length;i++){
        if(peopleAge[i].age>topAge){
            topAge=peopleAge[i].age;
            personTopAge=peopleAge[i];
        }
    }
    return personTopAge;
};

// Do not edit below this line
module.exports = findTheOldest;
