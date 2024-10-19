
// Prevent section button load


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














// prevent load

// document.getElementById('feni-donation-btn').addEventListener('click', function(event){
//     event.preventDefault();
// })


// document.getElementById('quota-donation-btn').addEventListener('click', function(event){
//     event.preventDefault();
// })

// document.getElementById('blog-btn').addEventListener('click', function(event){
//     event.preventDefault();
// })



// Donation for Noakhali


document.getElementById('Noakhali-donation-btn').addEventListener('click', function(event){
    event.preventDefault();

    const nKhalidonation = getDonationInput('input-d-nKhali');

    const mainBalance = currentBalance('balance-nKhali');

    const resarveBalance = currentBalance('reserve-balance');

    console.log('donationpaise', nKhalidonation)
    if(isNaN(nKhalidonation) || nKhalidonation < 0){

        alert ('input right input');
    }
    else{
        const newBalance = nKhalidonation + mainBalance;

        reserveminus = resarveBalance - nKhalidonation;

        document.getElementById('balance-nKhali').innerText = newBalance;

        document.getElementById('reserve-balance').innerText = reserveminus;

        const now = new Date();

        const displayhistory = document.createElement('.devclass');

        displayhistory.classList.add('border-2');
        displayhistory.classList.add('rounded-md');
        displayhistory.classList.add('m-20');
        displayhistory.classList.add('gap-2');
        displayhistory.classList.add('')
    


        const childdiv1 = document.createElement('div');
        childdiv1.innerHTML=`
        <h2 class="font-bold">${nKhalidonation} Taka is Donated for Flood at Noakhali, Bangladesh </h2>
        `
        const childdiv2 = document.createElement('div');
        childdiv2.innerHTML=`
        <h2 class="">Date: ${now}</h2>
        `

        displayhistory.appendChild(childdiv1);
        displayhistory.appendChild(childdiv2);

        document.getElementById('history-section').appendChild(displayhistory);
    }

    
})
