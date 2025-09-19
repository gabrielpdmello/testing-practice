function AnalyzeArray(array) {
    let sum = 0;
    
    array.forEach(number => {
        sum += number;
    });

    let average = sum / array.length;

    let min;
    
    array.forEach((number, i) => {
        if (i === 0) {
            min = number;
        } else {
            if (number < min) {
                min = number;
            }
        }
    })

    let max;

    array.forEach((number, i) => {
        if (i === 0) {
            max = number;
        } else {
            if (number > max) {
                max = number;
            }
        }
    })

    let length = array.length;


    return {average, min, max, length}
}

export default AnalyzeArray