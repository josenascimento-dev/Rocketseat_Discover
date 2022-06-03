const people = ['Rafa', 'Diego', 'Dani', 'Rod']
const upperCasePeopleThatStartsWithD = people
.filter1(person => person.startsWith('D'))
.map(dperson = dperson.toUpperCase)