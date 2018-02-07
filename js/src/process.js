// PROCESSING THE UPLOADED DATA
// NOTE: Assumed that we are getting temprature in 'Celcius'

// processData is the function where I am writting my logic to get the data and show it as its required
// NOTE: assumptions

var firstMatchForFreezing = true,
    firstMatchForBoiling  = true,
    difference            = 0.5,
    threshold, dataRecords, direction;

var directionChange = direction => {
    direction = direction.id;
    alert(`Please specify threshold for ${direction}`);
    specifyThreshold();
    showOutput(dataRecords, direction);
}


var specifyThreshold = () => {
    threshold = parseFloat(prompt('Please Specify Threshold', 'enter a number'));
    var radio = document.querySelector('.radios');

    radio.setAttribute('class', 'radios');
};

var provideThreshold = async() => {
    await specifyThreshold();
    processData(csv);
};

var processData = csv => {
    var allRecords = csv.split(/\r\n|\n/);
    // console.log('allRecords: ', allRecords);
    dataRecords = [];
    while (allRecords.length - 1) {
        dataRecords.push(allRecords.shift().split(','));
    }
	showOutput(dataRecords);
};

var showOutput = (dataRecords, direction) => {
    var showInCelcius     = document.querySelector('#celcius'),
        showInFahrenheit  = document.querySelector('#fahrenheit'),
        previousRecord    = 0,
        result            = [],
        fahrenheit, cell1, cell2, row;

    direction = direction;

    showInCelcius.innerHTML = '';
    showInFahrenheit.innerHTML = '';
    if (!isNaN(threshold)) {
      if (threshold <= 10) {
        direction = 'freezing';
      } else if (threshold >= 40) {
        direction = 'boiling';
      } else {
        direction = 'normal'
      }
    }

    for (var i = 0; i < dataRecords.length; i++) {
      // debugger;
      dataRecords[i] = parseFloat(dataRecords[i]);
      fahrenheit = ((dataRecords[i] * 1.8) + 32).toFixed(2);

      result.push(dataRecords[i], parseFloat(fahrenheit));

      if (direction ) {
        if (direction === 'freezing') {
          // debugger;
          if (isNaN(threshold)) {
            specifyThreshold();
          }

          show(dataRecords[i], fahrenheit, direction, previousRecord);
          previousRecord = dataRecords[i];

        } else if (direction === 'boiling') {
          // debugger;
          if (isNaN(threshold)) {
            specifyThreshold();
          }

          show(dataRecords[i], fahrenheit, direction, previousRecord);
          previousRecord = dataRecords[i];

        } else if (direction === 'normal') {
          show(dataRecords[i], fahrenheit, direction, previousRecord);
          previousRecord = dataRecords[i];
        }
      } else {
        // debugger;
        show(dataRecords[i], fahrenheit, direction, previousRecord);
        previousRecord = dataRecords[i];

        previousRecord = dataRecords[i];
        // Just storing datapoints in an array for future usage
        datapoints.push(dataRecords[i]);
      }
      previousRecord = dataRecords[i];
    }
    return result;
};

var show = (dataRecord, fahrenheit, direction, previousRecord) => {
    var showInCelcius         = document.querySelector('#celcius'),
        showInFahrenheit      = document.querySelector('#fahrenheit'),
        prevRec               = previousRecord,
        fahrenheit, cell1, cell2, row;

    row = document.createElement('div');
    cell1 = createColumn(`${dataRecord} °C`);
    cell2 = createColumn(`${fahrenheit} °F`);

    if (dataRecord === threshold) {
      debugger;
      if (direction === 'freezing') {
        if ((dataRecord - prevRec) < 0.5 || firstMatchForFreezing) {
          firstMatchForFreezing = false;
          cell1.style.color = 'blue';
          cell2.style.color = 'blue';
        }
      } else if (direction === 'boiling'){
        if ((dataRecord - prevRec) > 0.5 || firstMatchForBoiling) {
          firstMatchForBoiling = false;
          cell1.style.color = 'red';
          cell2.style.color = 'red';
        }
      } else if (direction === 'normal') {
        cell1.style.color = 'green';
        cell2.style.color = 'green';
      } else {
        cell1.style.color = 'grey';
        cell2.style.color = 'grey';
      }
    }

    showInCelcius.append(cell1);
    showInFahrenheit.append(cell2);

    // Just storing datapoints in an array for future usage
    datapoints.push(dataRecord);
}

var createColumn = text => {
    var column = document.createElement('div'),
        txt    = document.createTextNode(text);

    column.appendChild(txt);
    column.setAttribute('class', 'col-lg-10 col-md-10 col-sm-10 col-xs-10');
    column.setAttribute('className', 'col-lg-10 col-md-10 col-sm-10 col-xs-10');
    return column;
};
