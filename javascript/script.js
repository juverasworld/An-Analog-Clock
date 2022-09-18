const hr = document.querySelector('.hr')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')
setInterval(() => {
  let time = new Date()
  let hour = time.getHours()
  let mina = time.getMinutes()
  let seca = time.getSeconds()

    let hrrotation = (30 * hour) + (0.5 * mina);
    let minrotation = 6 * mina;
    let secrotation = 6 * seca;
  
    hr.style.transform =
        `translate(-50%,-100%) rotate(${hrrotation}deg)`
    min.style.transform =
        `translate(-50%,-100%) rotate(${minrotation}deg)`
    sec.style.transform =
        `translate(-50%,-85%) rotate(${secrotation}deg)`
});
    


//  hour hand moves 360deg.

// i.e.  12hrs   ⇢   360degs

// so,    1hr    ⇢   30degs

// and, 60mins   ⇢   30degs
    
// so,    1min   ⇢   0.5degs
    
// Total Rotation of hour hand:
//      (30deg * hrs) + (0.5deg * mins)
// For Achieving 60mins,
// hour hand moves 360deg.

// i.e.  60mins   ⇢   360degs

// so,    1min    ⇢   6degs
    
// Total Rotation of minute hand:
//         6deg * mins
//         For Achieving 60secs,
// hour hand moves 360deg.

// i.e.  60secs   ⇢   360degs

// so,    1sec    ⇢   6degs
    
// Total Rotation of minute hand:
//         6deg * secs