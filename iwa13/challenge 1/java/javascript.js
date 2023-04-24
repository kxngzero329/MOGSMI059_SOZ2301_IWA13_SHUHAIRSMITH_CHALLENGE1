let state = 'idle'
let user = null
let calculated = 1

const logCalc = () => { //removed the = sign
    const isString = typeof calculated === 'string' //added 2 = signs and removed numerical
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated //used parse in function instead of parse number
    calculated = calculatedAsNumber + 1 //not neccessary to use 3 = signs
}

const calcUser = () => { //removed the = sign
  logCalc() //added brackets
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => { // removed the = sign by the const var
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()
