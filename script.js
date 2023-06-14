function convert() {
  var inputValue = document.getElementById("inputValue").value;
  var inputUnit = document.getElementById("inputUnit").value;
  var outputUnit = document.getElementById("outputUnit").value;
  var outputValue = document.getElementById("outputValue");

  var conversionFactors = {
    mm: {
      cm: 0.1,
      dm: 0.01,
      m: 0.001,
      km: 0.000001,
      ft: 0.00328084,
      in: 0.0393701,
      mi: 0.000000621371,
      yd: 0.00109361
    },
    cm: {
      mm: 10,
      dm: 0.1,
      m: 0.01,
      km: 0.00001,
      ft: 0.0328084,
      in: 0.393701,
      mi: 0.00000621371,
      yd: 0.0109361
    },
    dm: {
      mm: 100,
      cm: 10,
      m: 0.1,
      km: 0.0001,
      ft: 0.328084,
      in: 3.93701,
      mi: 0.0000621371,
      yd: 0.109361
    },
    m: {
      mm: 1000,
      cm: 100,
      dm: 10,
      km: 0.001,
      ft: 3.28084,
      in: 39.3701,
      mi: 0.000621371,
      yd: 1.09361
    },
    km: {
      mm: 1000000,
      cm: 100000,
      dm: 10000,
      m: 1000,
      ft: 3280.84,
      in: 39370.1,
      mi: 0.621371,
      yd: 1093.61
    },
    ft: {
      mm: 304.8,
      cm: 30.48,
      dm: 3.048,
      m: 0.3048,
      km: 0.0003048,
      in: 12,
      mi: 0.000189394,
      yd: 0.333333
    },
    in: {
      mm: 25.4,
      cm: 2.54,
      dm: 0.254,
      m: 0.0254,
      km: 0.0000254,
      ft: 0.0833333,
      mi: 0.000015783,
      yd: 0.0277778
    },
    mi: {
      mm: 1609344,
      cm: 160934,
      dm: 16093.4,
      m: 1609.34,
      km: 1.60934,
      ft: 5280,
      in: 63360,
      yd: 1760
    },
    yd: {
      mm: 914.4,
      cm: 91.44,
      dm: 9.144,
      m: 0.9144,
      km: 0.0009144,
      ft: 3,
      in: 36,
      mi: 0.000568182
    }
  };

  var result = inputValue * conversionFactors[inputUnit][outputUnit];
  outputValue.value = result.toFixed(2);
}

function clearFields() {
  document.getElementById("inputValue").value = "";
  document.getElementById("outputValue").value = "";
}
