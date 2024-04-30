def turnLeft(seconds: number):
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 40)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 5)
    basic.pause(seconds)
    maqueen.motor_stop(maqueen.Motors.ALL)
def turnRight(seconds2: number):
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 40)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 5)
    basic.pause(seconds2)
    maqueen.motor_stop(maqueen.Motors.ALL)