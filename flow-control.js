function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
  // do something
  return 'You are a teenager!'
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19 ) {
  return 'You are a teenager!' //  truthy
  } else {
  return 'You are not a teenager' //  falsey
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19 ) {
  return 'You are a teenager!' // executed if if is truthy
} else if(age <= 12) {
  return 'You are a kid' // executed if else if is truth
  }
  else {
    return 'You are a grownup'
  }
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? 'You are a teenager!' : 'You are not a teenager'
}

function switchAge(age) {

}
