// $('#ele').click(function () {
//     console.log("hello welcomr to jQuery tutorial");
// })

// $('#ele').on('mouseleave', function () {
//     console.log('You leaved using mouse');
// })

$('#ele').hover(function () {
    console.log('You hovered using mouse')
})

$('#ele').keypress(function () {
    console.log("You pressed a key")
})
$('#ele').on('mouseenter', function () {
    console.log("You enetred the mouse a key")
})

$('input').on('keyup', function () { console.log('You left the key') })
$('input').on({ 'keydown': function () { console.log('You pressed a key') } });



$('p').css({ "color": "red", "background": "blue" });
// $('p').html('<h1>This is h1 text from jQuery DOM manipulation</h1>').css({ "color": "red", "background": "blue" });

$('p').animate({ opacity: 0 }, 3000)
$('p').animate({ opacity: 1 }, 3000)