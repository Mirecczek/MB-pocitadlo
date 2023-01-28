input.onButtonPressed(Button.A, function () {
    pocet += 1
    basic.showNumber(pocet)
})
input.onButtonPressed(Button.B, function () {
    pocet += -1
    basic.showNumber(pocet)
})
input.onGesture(Gesture.Shake, function () {
    pocet = 0
    basic.showNumber(pocet)
})
let pocet = 0
pocet = 0
basic.clearScreen()
