

// document.getElementById('blog-btn').addEventListener('click', function(event){
//     event.preventDefault();
// })



// Donation for Noakhali


document.getElementById('Noakhali-donation-btn').addEventListener('click', function(event){
    event.preventDefault();

    const nKhalidonation = getDonationInput('input-d-nKhali');

    const mainBalance = currentBalance('balance-nKhali');

    const resarveBalance = currentBalance('reserve-balance');

    if(isNaN(nKhalidonation) || nKhalidonation < 0){

        alert ('Please input right Amount');
    }
    else{
        const newBalance = nKhalidonation + mainBalance;

        reserveminus = resarveBalance - nKhalidonation;

        document.getElementById('balance-nKhali').innerText = newBalance;

        document.getElementById('reserve-balance').innerText = reserveminus;

        const now = new Date();

        const displayhistory = document.createElement('div');

        displayhistory.classList.add('border-2');
        displayhistory.classList.add('rounded-md');
        displayhistory.classList.add('mx-20');
        displayhistory.classList.add('gap-6');
        displayhistory.classList.add('my-4');
        displayhistory.classList.add('p-4');
       
    


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


// Donation for Feni


document.getElementById('feni-donation-btn').addEventListener('click', function(event){
    event.preventDefault();

    const donationInputfeni = getDonationInput('input-d-feni');

    const fenibalance = currentBalance('fani-balance');

    const resarveBalance = currentBalance('reserve-balance');

    if(isNaN(donationInputfeni) || donationInputfeni < 0){
        alert ('Please input right Amount')
    }
    else{

       const donationForFeni = donationInputfeni + fenibalance;

       const feniResarve = resarveBalance - donationInputfeni;

       document.getElementById('fani-balance').innerText= donationForFeni;
       document.getElementById('reserve-balance').innerText= feniResarve;

       const now = new Date();

        const displayhistory = document.createElement('div');

        displayhistory.classList.add('border-2');
        displayhistory.classList.add('rounded-md');
        displayhistory.classList.add('mx-20');
        displayhistory.classList.add('gap-6');
        displayhistory.classList.add('my-4');
        displayhistory.classList.add('p-4');
       
    


        const childdiv1 = document.createElement('div');
        childdiv1.innerHTML=`
        <h2 class="font-bold">${donationInputfeni} Taka is Donated for Flood Relief in Feni,Bangladesh </h2>
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


// Donation for Quota-movement


document.getElementById('quota-donation-btn').addEventListener('click', function(event){
    event.preventDefault();

    const quotaDInput = getDonationInput ('quota-donation-input');

    const quotaBalance = currentBalance('quota-balance');

    const resarveBalance = currentBalance('reserve-balance');

    if(isNaN(quotaDInput) || quotaDInput < 0){
        alert ('Please input right Amount')
    }
    else{

        const quotaDonation = quotaBalance + quotaDInput;

        const quotaresarve = resarveBalance - quotaDInput;

        document.getElementById('quota-balance').innerText = quotaDonation;

        document.getElementById('reserve-balance').innerText = quotaresarve;

        const now = new Date();

        const displayhistory = document.createElement('div');

        displayhistory.classList.add('border-2');
        displayhistory.classList.add('rounded-md');
        displayhistory.classList.add('mx-20');
        displayhistory.classList.add('gap-6');
        displayhistory.classList.add('my-4');
        displayhistory.classList.add('p-4');
       
    


        const childdiv1 = document.createElement('div');
        childdiv1.innerHTML=`
        <h2 class="font-bold">${quotaDInput} Taka is Donated for Injured in the Quota Movement</h2>
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