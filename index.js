function likes(names) {
  let nameLength = names.length
  
  if (nameLength === 0) {
    return 'no one likes this'
  }
  
  if (nameLength === 1){
    return `${names} likes this`
  } else if (nameLength === 2){
    return `${names[0]} and ${names[1]} like this`
  } else if (nameLength === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${nameLength - 2} others like this`
  }
}