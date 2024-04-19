var data = [];
var intervalId = 0;

// Generate data -------------------------------------------------
function generateData() {
    
    // Clear the array
    data = [];
    var dataSize = parseInt(document.getElementById("datasize").value);
    var maxVal = parseInt(document.getElementById("datamax").value);

    // Generate random numbers
    for (var i = 0; i < dataSize; i ++)
    data.push(Math.round(Math.random() * maxVal));

    // Display the data to the page
    document.getElementById("data").innerHTML = `${[data]}`;
   
    // Graph the data
    graphData();

    // Stop any algorithms still running
    clearInterval(intervalId);
}
// -------------------------------------------------

// Plot data on the graph -------------------------------------------------
function graphData() {

    var dataSize = parseInt(document.getElementById("datasize").value);

    const xValues = [];
    const yValues = [];
    const colours = [];
    for (let x = 0; x < dataSize; x ++){
        xValues.push(x);
        yValues.push(data[x]);
        colours.push("blue");
    }

    new Chart("graph", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: colours,
                data: yValues
            }]
        },
        options: {
            animation: {duration: 100},
            scales: {
                xAxes: [{
                    ticks: {display: false},
                    gridLines: {display: false}
                }],
                yAxes: [{
                    ticks: {display: false},
                    gridLines: {display: false}
                }]
            },
            events: [],     // stops the display box appearing when you hover over the graph
            legend: {display: false},
            title: {display: false},
        }
    });
}
// -------------------------------------------------

// Begin sorting -------------------------------------------------
function beginSorting() {

    // Begin graphing the data at the time interval specified
    const interval = document.getElementById("interval");
    intervalId = setInterval(sortBubble, interval.textContent);

}
// -------------------------------------------------

// Sorting algorithm: BUBBLE SORT -------------------------------------------------
function sortBubble() {

    // One step of bubble sort
    var dataSize = parseInt(document.getElementById("datasize").value);
    var swapped = false;

    for (var i = 0; i < dataSize - 1; i ++) {

        // If current element < next element: swap them
        if (data[i] > data[i+1])
        {
            var tempData = data[i];
            data[i] = data[i+1];
            data[i+1] = tempData;

            swapped = true;
        }
        
    }

    // Graph the data
    graphData();

    // Stop sorting if no swaps were made
    if (!swapped)
    clearInterval(intervalId);
}
// -------------------------------------------------