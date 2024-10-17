// function preventbuttonloader (id){
//     document.getElementById()
//     .addEventListener('click', function(event){
//         event.preventDefault(id);
//     })
// }

document.getElementById('donation-button').addEventListener('click', function(event){
    event.preventDefault();
})

document.getElementById('history-button').addEventListener('click', function(event){
    event.preventDefault();
})
// button switching

document.getElementById('donation-button')
.addEventListener('click', function(){
    showsection('donation-section');
})

document.getElementById('history-button')
.addEventListener('click', function(){
    showsection('history-section');
})

// common function to switch functionality
function showsection (id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');



    document.getElementById('donation-button').classList.add('btnclr')
    document.getElementById('history-button').classList.add('btnclr')

    document.getElementById(id).classList.remove('btnclr');
}

// button color changing

// function changeColor (event){
//     var color = 'yellow'
//     event.style.backgroundColor = color;
// }



