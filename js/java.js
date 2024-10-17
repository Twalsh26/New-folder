const d = new Date();
let hour = d.getHours();
hour = 12
if(hour < 12){
    console.log("Its day time");
} else if (hour < 17){
    console.log("Its afternoon");
} else {
    console.log("Its night time");
}

