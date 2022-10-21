input.onButtonPressed(Button.A, function () {
    counter += 1
    basic.showNumber(counter)
})
input.onButtonPressed(Button.AB, function () {
    count_down = counter
    while (count_down >= 0) {
        basic.showNumber(count_down)
        count_down += -1
    }
})
input.onButtonPressed(Button.B, function () {
    counter += 10
    basic.showNumber(counter)
})
let count_down = 0
let counter = 0
counter = 0
