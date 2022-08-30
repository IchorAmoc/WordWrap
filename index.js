const colors = require('colors')

class Wrapper {
    // Wraps strings
    // Takes in a string and a column length.
    static Wrap(str, length) {
        let inputStr = str
        let strArr = []
        let finalStr = ''
        let breaker = '\n'

        // If the string is shorter than the maxlength, return it.
        if (inputStr.length <= length) {
            return str
        }

        // Too long words
        let tooLongWordCondition = false
        let checkForLongWords = str.split(' ')
        checkForLongWords.forEach(word => {
            if(word.length > length) tooLongWordCondition = true
        });

        // Loop through text, find whitespace to slice string, push to array
        for (let i = 0; i < str.length; i += length) {
            let sliced = inputStr.slice(0, inputStr.lastIndexOf(' ', length))
            if(tooLongWordCondition) sliced = inputStr.slice(0, length)
            inputStr = inputStr.replace(sliced, '')
            if (sliced != '') strArr.push(sliced.trim())
        }

        // Remaining text
        if(inputStr != '') strArr.push(inputStr.trim())

        // Combine all pieces of the string
        strArr.forEach((str, i) => {
            if (strArr.length - 1 != i && tooLongWordCondition)  finalStr += /* str.length + " | " + */ str + '-' + breaker
            if (strArr.length - 1 != i && !tooLongWordCondition) finalStr += /* str.length + " | " + */ str + breaker
            if (strArr.length - 1 == i)                          finalStr += /* str.length + " | " + */ str
        })

        return finalStr
    }
}

// Outputs
console.log('Shorter string | 10 Length' .blue)
console.log(Wrapper.Wrap('Hello there I am a string.', 10))
console.log() // Empty line
console.log('Lorem ipsum text | 56 Length' .blue)
console.log(Wrapper.Wrap('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 56))
console.log() // Empty line
console.log('Shorter than max length | 30 Length' .blue)
console.log(Wrapper.Wrap('Hello there I am a string.', 30))
console.log() // Empty line
console.log('OneLongWord | 6 Length' .blue)
console.log(Wrapper.Wrap('HelloThereIAmALongWord.', 6))
