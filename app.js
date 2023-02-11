const Name = 'Abdul Hannan'
const n = Name.toUpperCase()
console.log('Name: ' + n)

displayPosition('Google', 'Software Engineer', 'I love Coding💖')

console.log('Skills\n')
displaySkills('javascript', true)
displaySkills('Java', false)
displaySkills('English', true)

function displayPosition (companyname, jobtitle, description) {
  console.log('Company Name: ' + companyname, '\nJob: ' + jobtitle, '\nDescription: ' + description)
}

function displaySkills (skillName, boolean) {
  if (boolean == true) { console.log('\n*BAM:' + skillName) } else if (boolean == false) { console.log('\n*' + skillName) }
}
