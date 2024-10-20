// Common function for DOnation

function getDonationInput (id){
    const donationvalue = document.getElementById(id).value;
    const inputnumber = parseFloat(donationvalue);

    return inputnumber;
}

//Common function for Balance 

function currentBalance (id){
    const textbalance = document.getElementById(id).innerText;
    const balance = parseFloat(textbalance);
    return balance;
}



// common function to switch function
function showsection (id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

// Button color switch

function btnColorSwitch (id){
    document.getElementById('history-button').classList.remove('btnclr')
    document.getElementById('donation-button').classList.remove('btnclr')
    

    document.getElementById(id).classList.add('btnclr');
}




