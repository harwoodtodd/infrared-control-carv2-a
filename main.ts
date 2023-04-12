makerbit.onIrButton(IrButton.NUM8, IrButtonAction.Pressed, function () {
    basic.showNumber(8)
})
makerbit.onIrButton(IrButton.NUM3, IrButtonAction.Pressed, function () {
    basic.showNumber(3)
})
makerbit.onIrButton(IrButton.TLeft, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 100)
})
makerbit.onIrButton(IrButton.Light, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
})
makerbit.onIrButton(IrButton.NUM9, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
	
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
	
})
makerbit.onIrButton(IrButton.Minus, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
	
})
makerbit.onIrButton(IrButton.NUM2, IrButtonAction.Pressed, function () {
    basic.showNumber(2)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 0)
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 0, 100)
})
makerbit.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
})
makerbit.onIrButton(IrButton.NUM0, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
})
makerbit.onIrButton(IrButton.TRight, IrButtonAction.Pressed, function () {
	
})
makerbit.onIrButton(IrButton.Plus, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
})
basic.showString("IR")
makerbit.connectIrReceiver(DigitalPin.P8)
