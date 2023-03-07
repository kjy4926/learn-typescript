// union type 
function logMessage(value: string | number) {
  console.log(value)
  if(typeof value === 'number'){
    value.toLocaleString()
  }
  if(typeof value === 'string'){
    value.toString()
  }
}
logMessage('hello')
logMessage(1000)