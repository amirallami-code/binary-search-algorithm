let $ = document
const guessTextElem = $.querySelector(".text-guess")
const guessTextElem2 = $.querySelector(".text-guess2")
const guessTextElem3 = $.querySelector(".text-guess3")
const buttonsWrapper = $.querySelector(".buttons-div")
const okBtn = $.querySelector("#OK")
const yesBtn = $.querySelector("#Yes")
const noBtn = $.querySelector("#No")
const lowerBtn = $.querySelector("#Lower")
const higherBtn = $.querySelector("#Higher")
const againBtn = $.querySelector("#Again")

let allNumbers = []
let shownNumbers = []

for (let i = 1; i <= 1000; i++) {
    allNumbers.push(i);
}

guessTextElem.innerHTML = "pick a number between " + allNumbers[0] + " and " + allNumbers.length + " (Keep this number to your head)"
guessTextElem2.innerHTML = "and Click on \" OK \" Button to Continue"
guessTextElem3.innerHTML = `<span class="Bold">Warning:</span> If you answer even one of the questions <br> incorrectly, the number will not be found.`

yesBtn.style.display = 'none'
noBtn.style.display = 'none'
lowerBtn.style.display = 'none'
higherBtn.style.display = 'none'
againBtn.style.display = 'none'

let low = allNumbers[0]
let mid = allNumbers.length / 2
let high = allNumbers.length
let guessCounter = 1

let guessUserNumber = () => {
    guessTextElem2.style.opacity = '0'
    guessTextElem3.style.opacity = '0'
    okBtn.style.display = 'none'
    yesBtn.style.display = 'inline'
    noBtn.style.display = 'inline'
    guessTextElem.innerHTML = mid + " is your number? "
    buttonsWrapper.addEventListener("click", stepTwo)
}
let stepTwo = event => {
    console.log(mid);
    if (event.target.innerHTML === "Yes") {
        guessTextElem.style.opacity = '0'
        guessTextElem2.style.opacity = '1'
        guessTextElem2.innerHTML = "i found your number with a guess, your number is " + mid
        yesBtn.style.display = 'none'
        noBtn.style.display = 'none'
        againBtn.style.display = 'inline'
        againBtn.addEventListener('click', AgainFunction)
    } else if (event.target.innerHTML === "No") {
        yesBtn.style.display = 'none'
        noBtn.style.display = 'none'
        lowerBtn.style.display = 'inline'
        higherBtn.style.display = 'inline'
        arrayChecker(shownNumbers, mid)
    }
}
let arrayChecker = (array, mid) => {
    array.push(mid)
    if (mid == allNumbers.length / 2) {
        guessTextElem.innerHTML = `is your number lower than <span class="Bold">${mid}</span> or higher?`
    } else {
        guessTextElem.innerHTML = `is <span class="Bold">${mid}</span> your number? If no, is your number lower than <span class="Bold">${mid}</span> or higher?`
    }
    buttonsWrapper.addEventListener("click", stepThree)
}
let stepThree = event => {
    yesBtn.style.display = 'inline'
    guessCounter++
    if (mid === (allNumbers[0] + 1)) {
        mid = allNumbers[0]
        showResult()
    } else if (mid === allNumbers.length - 1) {
        mid = allNumbers.length
        showResult()
    } else {
        if (event.target.innerHTML === "Lower") {
            mid -= 2
            let numberFinder = shownNumbers.filter(function (rejectedNum) {
                return rejectedNum === mid
            })
            if (numberFinder.length > 0) {
                mid += 1
                showResult()
            } else {
                mid += 2
                high = mid
                mid = mid - Math.ceil(((high - low) / 2))
            }
        } else if (event.target.innerHTML === "Higher") {
            mid += 2
            let numberFinder = shownNumbers.filter(function (rejectedNum) {
                return rejectedNum === mid
            })
            if (numberFinder.length > 0) {
                mid -= 1
                showResult()
            } else {
                mid -= 2
                low = mid
                mid = mid + Math.ceil(((high - low) / 2))
            }
        } else if (event.target.innerHTML === "Yes") {
            showResult()
        }
        arrayChecker(shownNumbers, mid)
    }
}
let showResult = () => {
    guessTextElem.style.opacity = '0'
    guessTextElem2.style.opacity = '1'
    guessTextElem2.innerHTML = "i beat you with only " + guessCounter + " questions, your number is " + mid
    yesBtn.style.display = 'none'
    lowerBtn.style.display = 'none'
    higherBtn.style.display = 'none'
    againBtn.style.display = 'inline'
    againBtn.addEventListener('click', AgainFunction)
}
let AgainFunction = () => {
    location.reload()
}
okBtn.addEventListener('click', guessUserNumber)