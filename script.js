function hitung(operator) {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;

  // validasi hanya angka
  if (isNaN(input1) || isNaN(input2)) {
    alert("Input harus berupa angka!");
    return;
  }

  input1 = Number(input1);
  input2 = Number(input2);

  var hasil;

  switch (operator) {
    case "+":
      hasil = input1 + input2;
      break;
    case "-":
      hasil = input1 - input2;
      break;
    case "*":
      hasil = input1 * input2;
      break;
    case "/":
      hasil = input1 / input2;
      break;
  }

  document.getElementById("hasil").value = hasil;
}

function reset() {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("hasil").value = "";
}
