var studarray = [
    {
        id: '601',
        name: 'Anu',
        location: 'Tirunelveli',
        dept: 'ECE',
    },
    {
        id: '602',
        name: 'Dhina',
        location: 'Tanjore',
        dept: 'CSE',
    },
    {
        id: '603',
        name: 'Sandhiya',
        location: 'Perambur',
        dept: 'Physics',
    },
    {
        id: '604',
        name: 'Dhanvarshi',
        location: 'Tanjore',
        dept: 'EEE',
    },
    {
        id: '605',
        name: 'Keerthana',
        location: 'Trichy',
        dept: 'D.Pharm',
    },
    {
        id: '606',
        name: 'Prema',
        location: 'Kallakurichi',
        dept: 'CSE',
    },
    {
        id: '607',
        name: 'Ananthi',
        location: 'KArur',
        dept: 'It',
    },

    {
        id: '608',
        name: 'Amala',
        location: 'Ariyalur',
        dept: 'MCA',
    },
    {
        id: '609',
        name: 'Ragavi',
        location: 'Namakkal',
        dept: 'Medical',
    },
    {
        id: '610',
        name: 'Sri',
        location: 'Namakkal',
        dept: 'Defence',
    },
    {
        id: '611',
        name: 'Anusha',
        location: 'Chennai',
        dept: 'Fashion DEsign',
    },
    {
        id: '612',
        name: 'vidhu',
        location: 'madurai',
        dept: 'EEE',
    },
    {
        id: '613',
        name: 'Pooja',
        location: 'Chengalpattu',
        dept: 'ECE',
    }, {
        id: '614',
        name: 'Priya',
        location: 'Kovilpatti',
        dept: 'IT',
    }, {
        id: '615',
        name: 'Lakshmi',
        location: 'Tirunelveli',
        dept: 'AI',
    }, {
        id: '616',
        name: 'Sarasvathi',
        location: 'NAmakkal',
        dept: 'Mech',
    }, {
        id: '617',
        name: 'Lavanya',
        location: 'Coimbatore',
        dept: 'AI',
    }, {
        id: '618',
        name: 'Dhivya',
        location: 'OOty',
        dept: 'IT',
    }
]

function displayrecords(Recarray) {
    document.getElementById('tablehere').innerHTML = `
        <tr class="bg-primary text-white fw-bold">
            <td>Student ID</td>
            <td>Name</td>
            <td>Location</td>
            <td>Department</td>
        </tr>
    `

    if (Recarray == "") {
        document.getElementById('errorhere').style.display = 'block';
    }

    else {
        document.getElementById('errorhere').style.display = "none";

        for (let i = 0; i < Recarray.length; i++) {
            document.getElementById('tablehere').innerHTML += `
            <tr >
                <td>${Recarray[i].id}</td>
                <td>${Recarray[i].name}</td>
                <td>${Recarray[i].location}</td>
                <td>${Recarray[i].dept}</td>
        </tr>
            `
        }

    }
}

displayrecords(studarray);



let newArray = [];

document.getElementById("searchinput").addEventListener("keyup", function () {
    let searchval = this.value.toLowerCase();

    newArray = studarray.filter(function (val) {

        if (val.id.includes(searchval) || val.name.includes(searchval) || val.location.includes(searchval) || val.dept.includes(searchval)) {

            let Objvalue = {
                id: val.id,
                name: val.name,
                Location: val.location, 
                department: val.dept
            }
              return Objvalue; 
        }
         
    })
    displayrecords(newArray);
})



