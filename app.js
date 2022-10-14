simplyCountdown('#cuenta', {
    year: 2022, // required
    month: 11, // required
    day: 18, // required
    hours: 14, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'Dia', plural: 'Dias' },
        hours: { singular: 'Hora', plural: 'Horas' },
        minutes: { singular: 'Min.', plural: 'Min.' },
        seconds: { singular: 'Seg.', plural: 'Seg.' }
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true, //Use UTC or not - default : false
    onEnd: function() { 
        alert('Finalizo')
        return; 
    }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});

const sectionClass = document.getElementsByClassName('simply-section')
for(let x of sectionClass) {
    x.classList.add('border', 'border-dorado', 'p-2', 'min-w-50px', 'min-h-50px', 'rounded-lg', 'bg-back')
    x.firstChild.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'p-2')
}

const amountClass = document.getElementsByClassName('simply-word')
for(let x of amountClass) {
    x.classList.add('text-sm')
}

