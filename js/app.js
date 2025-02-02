let $ = document
const text_element = $.querySelector(".text-guess")
const second_text_element = $.querySelector(".text-guess2")
const buttons_container = $.querySelector(".buttons-div")
const holder_container = $.querySelector(".titles-holder")
const okay_button = $.querySelector("#OK")
const yes_button = $.querySelector("#Yes")
const no_button = $.querySelector("#No")
const lower_button = $.querySelector("#Lower")
const higher_button = $.querySelector("#Higher")
const again_button = $.querySelector("#Again")

let numbers_len = 1000
let allNumbers = []
let shownNumbers = []

for (let i = 1; i <= numbers_len; i++) {
    allNumbers.push(i);
}
holder_container.insertAdjacentHTML('beforeend', `<p class="header-text">I will find your chosen number, between ${numbers_len} numbers in the lowest estimates</p>`)
text_element.innerHTML = `choose a number between ${allNumbers[0]} and ${allNumbers.length} (keep this number in mind)`
second_text_element.innerHTML = `Click on " OK " Button to Continue \n <p class="text-guess3"><span class="Bold">Attention!</span> If you answer even one of the questions <br />incorrectly, the number will not be found.</p>`

let low = allNumbers[0]
let mid = allNumbers.length / 2
let high = allNumbers.length
let guessCounter = 1

let step_one = () => {
    second_text_element.style.display = 'none'
    okay_button.style.display = 'none'
    yes_button.style.display = 'inline'
    no_button.style.display = 'inline'
    text_element.innerHTML = `is ${mid} your Number?`
    buttons_container.addEventListener("click", step_two)
}
let step_two = event => {
    console.log(event)
    if (event.target.innerHTML === "Yes") {
        text_element.style.display = 'none'
        second_text_element.style.display = 'flex'
        second_text_element.innerHTML = "I found your number with only one estimate 😎 your number is " + mid
        yes_button.style.display = 'none'
        no_button.style.display = 'none'
        again_button.style.display = 'inline'
        again_button.addEventListener('click', reload_fn)
    } else if (event.target.innerHTML === "No") {
        yes_button.style.display = 'none'
        no_button.style.display = 'none'
        lower_button.style.display = 'inline'
        higher_button.style.display = 'inline'
        arrayChecker(shownNumbers, mid)
    }
}
let arrayChecker = (array, mid) => {
    array.push(mid)
    yes_button.innerHTML = "Yes, it's my number 👍"
    if (mid == allNumbers.length / 2) {
        text_element.innerHTML = `is your number lower than <span class="Bold">${mid}</span> or higher?`
    } else {
        text_element.innerHTML = `is <span class="Bold">${mid}</span> your number? If no, is your number lower than <span class="Bold">${mid}</span> or higher?`
    }
    buttons_container.addEventListener("click", step_three)
}
let step_three = event => {
    yes_button.style.display = 'inline'
    guessCounter++
    if (mid === (allNumbers[0] + 1)) {
        mid = allNumbers[0]
        show_result()
    } else if (mid === allNumbers.length - 1) {
        mid = allNumbers.length
        show_result()
    } else {
        if (event.target.id === "Lower") {
            mid -= 2
            let numberFinder = shownNumbers.filter(function (rejectedNum) {
                return rejectedNum === mid
            })
            if (numberFinder.length > 0) {
                mid += 1
                show_result()
            } else {
                mid += 2
                high = mid
                mid = mid - Math.ceil(((high - low) / 2))
            }
        } else if (event.target.id === "Higher") {
            mid += 2
            let numberFinder = shownNumbers.filter(function (rejectedNum) {
                return rejectedNum === mid
            })
            if (numberFinder.length > 0) {
                mid -= 1
                show_result()
            } else {
                mid -= 2
                low = mid
                mid = mid + Math.ceil(((high - low) / 2))
            }
        } else if (event.target.id === "Yes") {
            show_result()
        }
        arrayChecker(shownNumbers, mid)
    }
}
let show_result = () => {
    text_element.style.display = 'none'
    second_text_element.style.display = 'flex'
    second_text_element.innerHTML = "i beat you with only " + guessCounter + " questions 😎 your number is " + mid
    yes_button.style.display = 'none'
    lower_button.style.display = 'none'
    higher_button.style.display = 'none'
    again_button.style.display = 'inline'
    again_button.addEventListener('click', reload_fn)
}
let reload_fn = () => {
    location.reload()
}
okay_button.addEventListener('click', step_one)
