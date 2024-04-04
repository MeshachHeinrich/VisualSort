// Generate data -------------------------------------------------
function generateData() {

    var data = []; 
    var dataSize = parseInt(document.getElementById("datasize").value);

    // Generate random numbers
    for (var i = 0; i < dataSize; i ++)
    data.push(Math.round(Math.random() * 100));

    // Display the data to the page
    document.getElementById("data").innerHTML = `${data}`;
}
// -------------------------------------------------

