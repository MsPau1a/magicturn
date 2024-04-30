namespace MagicTurn{
    export function plaLeft (seconds: number) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 5)
    basic.pause(seconds)
    maqueen.motorStop(maqueen.Motors.All)
    }

    
}



