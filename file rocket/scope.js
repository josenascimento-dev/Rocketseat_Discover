//function scope
let subject = 'create video'
//só vai existir un novo subject se for criado um parâmetro na função

function createThink(subject){
  subject = 'study'
  return subject
}
console.log(createThink(subject))
console.log(subject);