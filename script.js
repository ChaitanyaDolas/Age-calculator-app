function calculateAge(){
  var inputs = {
    year: document.getElementById('yearinput').value.trim(),
    month: document.getElementById('monthinput').value.trim(),
    day: document.getElementById('dayinput').value.trim(),
  };

  const presentDate = new Date();
  var pYear = presentDate.getFullYear();
  var pMonth = presentDate.getMonth() + 1;
  var pDay = presentDate.getDate();

  var birthYear = parseInt(inputs.year, 10);
  var birthMonth = parseInt(inputs.month, 10);
  var birthDate = parseInt(inputs.day, 10);

  var opYear = pYear - birthYear;
  var opMonth = pMonth - birthMonth;
  var opDay = pDay - birthDate;


  // Adjust opMonth and opDay if they are negative
  if (opDay < 0) {
    opMonth--; //Reduce Month by 1
    opDay += 31; //Add 31 days to opDay
  }

  if (opMonth < 0) {
    opYear--; //Reduce Year by 1
    opMonth += 12; //Add 12 months to opMonth
  }

  return { opYear: opYear, opMonth: opMonth, opDay: opDay};
}


function logDetails() {
  var dayerror = document.getElementById("dayerror").textContent;
  var montherror = document.getElementById("montherror").textContent;
  var yearerror = document.getElementById("yearerror").textContent;

  if (dayerror || montherror || yearerror){
    return;
  }

  var age = calculateAge();
  console.log(age.opYear, age.opMonth, age.opDay);
  document.getElementById("displayYears").textContent=age.opYear;
  document.getElementById("displayMonths").textContent=age.opMonth;
  document.getElementById("displayDays").textContent=age.opDay;
}

document.getElementById('logButton').addEventListener('click', logDetails);
// document.getElementById('logButton').addEventListener("keypress", function(event) {
//   if (event.keyCode === 13) {
//     logDetails();
//   }
// });
function errorMessage() {
  var inputs = {
    year: document.getElementById('yearinput').value.trim(),
    month: document.getElementById('monthinput').value.trim(),
    day: document.getElementById('dayinput').value.trim(),
  };

  var dayerror = document.getElementById("dayerror");
  if (inputs.day === "") {
    dayerror.textContent = "This field is required";
  } else {
    var day = parseInt(inputs.day, 10);
    if(isNaN(day) || day<1 || day>31){
      dayerror.textContent = "Must be a valid date";
    } else {
    dayerror.textContent = "";
    }
  }

  var montherror = document.getElementById("montherror");
  if(inputs.month === ""){
    montherror.textContent = "This field is required";
  } else {
    var month = parseInt(inputs.month, 10);
    if(isNaN(month) || month<1 || month>12){
      montherror.textContent = "Must be a valid month";
    } else {
      montherror.textContent = "";
    }
  }

  var yearError = document.getElementById("yearerror");
  if(inputs.year === ""){
    yearError.textContent = "This field is required";
  } else {
    var year = parseInt(inputs.year, 10);
    var presentYear = new Date().getFullYear();
    if(year > presentYear){
      yearError.textContent = "Must be in the past";
    } else {
      yearError.textContent = "";
    }
  }
}

document.getElementById('dayinput').addEventListener('blur', errorMessage);
document.getElementById('monthinput').addEventListener('blur', errorMessage);
document.getElementById('yearinput').addEventListener('blur', errorMessage);