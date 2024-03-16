window.onload = function () {
  document.getElementById('userLoggedIn').innerText =
    'Welcome to Calculator App, ' + sessionStorage.getItem('user');
  document.getElementById('formV').onclick = inputValidate;
  document.getElementById('digit1').focus();
};

$(document).ready(() => {
  $('#addition').click(() => {
    document.calcForm.output.value =
      parseFloat($('#digit1').val()) + parseFloat($('#digit2').val());
  });

  $('#subtraction').click(() => {
    document.calcForm.output.value =
      parseFloat($('#digit1').val()) - parseFloat($('#digit2').val());
  });

  $('#division').click(() => {
    document.calcForm.output.value =
      parseFloat($('#digit1').val()) / parseFloat($('#digit2').val());
  });

  $('#multiplication').click(() => {
    document.calcForm.output.value =
      parseFloat($('#digit1').val()) * parseFloat($('#digit2').val());
  });
});

inputValidate = (theForm) => {
  with (theForm) {
    return (
      isNumber(digit1, 'Please enter only Numbers!', digit1Error) &&
      isNumber(digit2, 'Please enter only Numbers!', digit2Error)
    );
  }
};

isNumber = (digit, eMsg, digitError) => {
  var n = digit.value.trim();
  var check = n / n === 1;
  if (!check) {
    if (
      digitError !== undefined &&
      digitError !== null &&
      eMsg !== null &&
      eMsg !== undefined
    ) {
      digitError.innerText = eMsg;
    }
    if (digitError !== undefined && digitError !== null) {
      digit.classList.add('errorBox');
      digit.focus();
    }
  } else {
    if (digitError !== undefined && digitError !== null) {
      digitError.innerHTML = '';
    }
    if (digit !== undefined && digit !== null) {
      digit.classList.remove('errorBox');
    }
  }
  return check;
};
