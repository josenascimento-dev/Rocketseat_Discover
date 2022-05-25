//callback function
function sayMyName(name){
  console.log('antes de executara função callback');
  name()
  console.log('depois de executar a função callback');
}
sayMyName(
  () => {
    console.log('estou em um callback')
  }
)