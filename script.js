document.getElementById('display').addEventListener('click', function(){
    let date = new Date();
    console.log(date);
    alert('Current Date And Time: ' + date.toUTCString());
});


// Another way:
/*

function showDate() {
    let timeStamp = new Date();
    document.getElementById('display');
    console.log(timeStamp.toUTCString());
    alert(timeStamp.toUTCString());
}

*/