input.onGesture(Gesture.LogoUp, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
})
basic.showLeds(`
    # # . # #
    . # . # .
    . . # . .
    . # . # .
    # # . # #
    `)
basic.forever(function () {
	
})
