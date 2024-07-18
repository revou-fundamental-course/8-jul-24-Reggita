document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        let bmi = weight / ((height / 100) ** 2);
        bmi = bmi.toFixed(2);

        let result = `BMI mu :  ${bmi}. `;

        if (bmi < 18.5) {
            result += 'Berat Badanmu Kurang (SPIRIT).';
        } else if (bmi < 24.9) {
            result += 'Berat Badanmu Normal (GOOD).';
        } else if (bmi < 29.9) {
            result += 'Berat Badanmu Lebih (OOWW).';
        } else {
            result += 'Kamu Obesitas (NOT GOOD).';
        }

        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = 'Please enter valid values.';
    }
});
