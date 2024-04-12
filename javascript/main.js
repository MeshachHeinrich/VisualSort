// Generate data -------------------------------------------------
function generateData() {

    var data = $('#data').data('values');
    alert(data);
    var dataSize = parseInt(document.getElementById("datasize").value);
    var maxVal = parseInt(document.getElementById("datamax").value);

    // Generate random numbers
    for (var i = 0; i < dataSize; i ++)
    data.push(Math.round(Math.random() * maxVal));

    // Display the data to the page
    document.getElementById("data").innerHTML = `${[data]}`;
    document.getElementById("datasorted").innerHTML = `${[data]}`;
}
// -------------------------------------------------

// Sorting algorithm: BUBBLE SORT -------------------------------------------------
function sortBubble() {

    var data = document.getElementById("data").innerHTML;

    document.getElementById("datasorted").innerHTML = `${data}`;
    alert(data);
}
// -------------------------------------------------