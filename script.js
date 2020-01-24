document.getElementById('display').addEventListener('click', function(){
    let date = new Date();
    console.log(date);
    alert('Current Date And Time: ' + date.toUTCString());
});
