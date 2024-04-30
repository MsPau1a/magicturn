namespace MagicTurn{
    export function queenLeft (seconds: number) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 5)
    basic.pause(seconds)
    maqueen.motorStop(maqueen.Motors.All)
    }

    export function queenRight(seconds2: number) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 5)
        basic.pause(seconds2)
        maqueen.motorStop(maqueen.Motors.All)
    }

}



