function calculate(input1, input2, operator) {
  if (operator === "+") {
    return input1 + input2;
  } else if (operator === "-") {
    return input1 - input2;
  } else if (operator === "*") {
    return input1 * input2;
  } else {
    return input1 / input2;
  }
}

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let input1 = parseInt(document.getElementById("number_1").value);
  let input2 = parseInt(document.getElementById("number_2").value);
  let operator = document.getElementById("select_operator");

  console.log(input1);
  console.log(input2);

  const answer = calculate(input1, input2, operator.value);

  let answerOutput = document.getElementById("answer");
  answerOutput.value = answer;
  console.log(answer);
});
