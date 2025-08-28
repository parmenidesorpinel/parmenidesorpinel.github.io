simplyCountdown('#countdown', {
    year: 2025,
    month: 9,
    day: 27,
    hours: 0,
    minutes: 0,
    seconds: 0,
    words: { //words displayed into the countdown
        days: { singular: ' day', plural: ' days' },
        hours: { singular: ' hour', plural: ' hours' },
        minutes: { singular: ' minute', plural: ' minutes' },
        seconds: { singular: ' second', plural: ' seconds' }
    },
    plural: true,
    inline: false,
    enableUtc: false,
    onEnd: function() { return; },
    refresh: 1000
});