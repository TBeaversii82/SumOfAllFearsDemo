
document.getElementById("SumRun").addEventListener('click', function () {

    let SfNumber1 = Number(document.getElementById("SfNumber1").value);
    let SfNumber2 = Number(document.getElementById("SfNumber2").value);
    let SfNumber3 = Number(document.getElementById("SfNumber3").value);
    let SfNumber4 = Number(document.getElementById("SfNumber4").value);
    let SfNumber5 = Number(document.getElementById("SfNumber5").value);
    let kValue = Number(document.getElementById("kValue").value);

    let userArray = [SfNumber1, SfNumber2, SfNumber3, SfNumber4, SfNumber5];
    let result = document.getElementById("result");
    result.innerHTML = "";

    for (let i = 0; i < userArray.length; i++) {
        for (let j = i + 1; j < userArray.length; j++) {
            if (userArray[i] + userArray[j] == kValue) {
                result.innerHTML = `${userArray[i]} and ${userArray[j]
                    } are two numbers in our array that add up to ${kValue}!`;
                return;
            }
            else {
                document.getElementById("result").innerHTML = "No solution found, try again!";
            }
        }
    }

});