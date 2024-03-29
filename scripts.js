const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

// create function to select all elements by name, cause we cant do anything without having to create a functions
function selector(className) {
    return document.getElementsByClassName(className); //This function takes a class name as input and returns something like an array object of all elements with that class name in the document.
}
// Now we need to utter repeatedly over each div of book
for (let i = 0; i < Object.keys(STATUS_MAP).length; i++) {  //this is a loop, this loop determines the number of book divs by getting the length of the keys in the STATUS_MAP object.
    //Inside this loop, we selects the status, reserve button, checkout button, and checkin button for the current book based on their class names.
    //we use [i] to access our elements since they are more likely to be arrays(collection).
    const status = selector('status')[i];
    const reserve = selector('reserve')[i];
    const checkout = selector('checkout')[i];
    const checkin = selector('checkin')[i];
    //we have to take the text content of the status span element, make it to lowercase, and stores it in the bookStatus variable.
    const bookStatus = status.innerText.toLowerCase();
    //set the color of the status text by accessing the corresponding color value from the STATUS_MAP object based on the bookStatus.
    status.style.color = STATUS_MAP[bookStatus].color;
    //disable/enable the reserve, checkout, and checkin buttons based on the properties defined in the STATUS_MAP object for the current bookStatus.
    reserve.disabled = !STATUS_MAP[bookStatus].canReserve;
    checkout.disabled = !STATUS_MAP[bookStatus].canCheckout;
    checkin.disabled = !STATUS_MAP[bookStatus].canCheckIn;
    //apply a grayscale filter to each button, making them black and white, irrespective of their original color.
    reserve.style.filter = 'grayscale(100%)';
    checkout.style.filter = 'grayscale(100%)';
    checkin.style.filter = 'grayscale(100%)';
}
=======

// let status = selector(status);
// let reserve = selector(reserve);
// let checkout = selector(checkout);
// let checkin = selector(checkin);


// checkin[0].color = ''
// status[0].style.color = STATUS_MAP.shelf.color
// reserve[0] = STATUS_MAP.shelf.canReserve ? 'enabled' 
// checkout[0] = STATUS_MAP.shelf.canCheckout ? 'enabled' 
// checkin[0] = STATUS_MAP.shelf.canCheckIn ? 'disabled'

// checkin[1].color = ''
// status[1].style.color = STATUS_MAP.reserved.color
// reserve[1] = STATUS_MAP.reserved.canReserve ? 'disabled'
// checkout[1] = STATUS_MAP.reserved.canCheckout ? 'enabled' 
// checkin[1] = STATUS_MAP.reserved.canCheckIn ?  'disabled'

// checkin[2].color = ''
// status[2].style.color = STATUS_MAP.overdue.color
// reserve[2] = STATUS_MAP.overdue.canReserve ?  'disabled'
// checkout[2] = STATUS_MAP.overdue.canCheckout ?  'disabled'
// checkin[2] = STATUS_MAP.overdue.canCheckIn ? 'enabled' 
