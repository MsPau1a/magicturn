function turnLeft (sec: number) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 5)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
    basic.pause(sec)
    maqueen.motorStop(maqueen.Motors.All)
}
function turnRight (sec2: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 5)
    basic.pause(sec2)
    maqueen.motorStop(maqueen.Motors.All)
}
