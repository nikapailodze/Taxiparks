// login with password

function redirect(){
    const actualNumber='12345'
    const actualPassword='nikolozi'


    let phoneNumber=document.getElementById('phoneNumber').value
    let passowrd=document.getElementById('password').value
    // console.log(phoneNumber)
    // console.log(passowrd)

    if(phoneNumber==actualNumber&&actualPassword==passowrd){
        window.location.href ='file:///Users/nikapailodze/Desktop/Taxiparks/mainPage.html'
    }
    else{
        alert("password incorrect try again")
    }

    
}

