function showDate() {
    let timeStamp = new Date();
    document.getElementById('display');
    console.log(timeStamp.toUTCString());
    alert(timeStamp.toUTCString());
}