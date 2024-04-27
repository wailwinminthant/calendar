//GET UI 

const getcurmonth = document.getElementById('curmonth');
const getcuryear = document.getElementById('curyear');
const getuimonths =document.getElementById('months');
const getuiyears = document.getElementById('years');
const getcaldays = document.getElementById('caldays');
const getmonthbtn = document.querySelector('.month-btn');
const getyearbtn = document.querySelector('.year-btn');

const months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
let startyear = 2020;
let endyear = 2030;

let month,year;

window.addEventListener('load',()=>{

    let getday = new Date();
    month = getday.getMonth();
    year = getday.getFullYear();

    getcurmonth.textContent = months[month];
    getcuryear.textContent = year;

    initmonths();
    inityears();
    initdays();

});


function initmonths(){
    getuimonths.innerHTML = '';

    for(let x=0; x < months.length; x++){
        const newdiv = document.createElement('div');
        newdiv.textContent = months[x];
        newdiv.classList.add('dropdown-item');

        // newdiv.onclick = updatedays(x);

        newdiv.onclick = ()=>{
            month = x;
            getcurmonth.textContent = months[month];
            initdays();
        }
        

        getuimonths.appendChild(newdiv);
    }
}

function inityears(){
    getuiyears.innerHTML = '';

    for(let x = startyear; x <= endyear; x++){

        const newdiv = document.createElement('div');
        newdiv.textContent = x;
        newdiv.classList.add('dropdown-item');

        newdiv.onclick = ()=>{
            year=x;
            getcuryear.textContent = year;
            initdays();
        }

        getuimonths.appendChild(newdiv);

        getuiyears.appendChild(newdiv);
        
    }

}

function initdays(){
    getcaldays.innerHTML = '';

    let tmpdays = new Date(year,month,0);
    let getalldays = alldays(year,month);
    let getprevendday = tmpdays.getDay();

    for(let x =0;x <= getprevendday;x++){
        let newlabel = document.createElement('label');
        newlabel.textContent='-';
        newlabel.className = 'day blank';
        getcaldays.appendChild(newlabel);
    }

    for(let y =0; y < getalldays;y++){
        let eachday = y+1;

        let newlabel = document.createElement('label');
        newlabel.textContent=eachday;
        newlabel.classList.add("day");
        getcaldays.appendChild(newlabel); 
    }

}

function alldays(year,month){
    let curalldays = new Date(year,month+1,0);
    curalldays = curalldays.getDate();
    return curalldays;
}