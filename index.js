// Part 1
function add(numbers) {

    if (numbers === "") {
        return 0
    }

   let split = numbers.split(",");

    return iterateNumbers(split)
}

// Part 2
function add2(numbers) {

    if (numbers === "") {
        return 0
    }

    let split = numbers.split(/[\n,]/);

    return iterateNumbers(split)
}

// Part 3
function add3(numbers) {
    if (numbers === "") {
        return 0
    }

    let split = numbers.split(/[^0-9]/);

    return iterateNumbers(split)
}

//Bonus 2

add4 = (numbers) => {
    if (numbers === "") {
        return 0
    }

    let split = numbers.split(/[^0-9]/g);

    return iterateNumbers(split)
}

function iterateNumbers(array) {
    let result = 0;
    let negativeNumbers = [];
    array.forEach((number) => {
        if (number !== "") {
            let integer = parseInt(number, 10);
            if (integer < 0) {
                negativeNumbers.push(integer);
            }
            if (integer <= 1000) {
                result += integer;
            }
        }
    });

    if (negativeNumbers.length > 0) {
        throw new Error("Negatives not allowed, these are the numbers that cause the issue: " + negativeNumbers)
    }

    return result
}


//Testing for add function.
function testingAdd() {

    // Testing for part 1
    if (add("") !== 0) {
        console.log("Test 1 failed");
    }
    if (add("5") !== 5) {
        console.log("Test 2 failed");
    }
    if (add("1,10") !== 11) {
        console.log("Test 3 failed");
    }
    if (add("1,2,10") !== 13) {
        console.log("Test 4 failed");
    }

    // Testing for part 2

    if (add2("1\n2,3") !== 6) {
        console.log("Test 5 failed");
    }
    if (add2("") !== 0) {
        console.log("Test 6 failed");
    }
    if (add2("1\n2") !== 3) {
        console.log("Test 7 failed");
    }
    if (add2("1,2\n3") !== 6) {
        console.log("Test 8 failed");
    }

    // Testing for part 3
    if (add3('//;\n1;3;4') !== 8) {
        console.log("Test 9 failed");
    }
    if (add3("//@\n2@3@8") !== 13) {
        console.log("Test 10 failed")
    }
    if (add3("//$\n1$2$3") !== 6) {
        console.log("Test 11 failed");
    }
    if (add3("//*\n1*2*3") !== 6) {
        console.log("Test 12 failed");
    }

    // Testing for negative numbers
    // if (add("-5,5") !== 5) {
    //     console.log("Test 2 failed");
    // }
    // if (add("1,-10") !== 11) {
    //     console.log("Test 3 failed");
    // }
    // if (add("1,2,-10") !== 13) {
    //     console.log("Test 4 failed");
    // }

    // Testing for Bonus 1
    if (add("") !== 0) {
        console.log("Test 13 failed");
    }
    if (add("5,1001") !== 5) {
        console.log("Test 14 failed");
    }
    if (add("1,10001,5") !== 6) {
        console.log("Test 15 failed");
    }
    if (add("1,2000,10") !== 11) {
        console.log("Test 16 failed");
    }

    // Testing for Bonus 2
    if (add4("//***\n1***2***3") !== 6) {
        console.log("Test 17 failed");
    }
    if (add4("//$$$\n12$$$2$$$3") !== 17) {
        console.log("Test 18 failed");
    }
    if (add4("//%%%\n200%%%2%%%3") !== 205) {
        console.log("Test 19 failed");
    }

    //Testing for Bonus 3 and 4

    if (add4("//*#$\n1*#$2*#$3") !== 6) {
        console.log("Test 20 failed");
    }
    if (add4("//$%\n12$%2$%3") !== 17) {
        console.log("Test 21 failed");
    }
    if (add4("//%%$^&\n200%%$^&2%%$^&3") !== 205) {
        console.log("Test 22 failed");
    }

    console.log("Testing complete")
}

testingAdd();