class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }

    let delimiter = ",";
    let numStr = numbers;

    if (numbers.startsWith("//")) {
      const newlineIndex = numbers.indexOf("\n");
      delimiter = numbers.substring(2, newlineIndex);
      numStr = numbers.substring(newlineIndex + 1);
    }

    numStr = numStr.replace(/\n/g, delimiter);

    const tokens = numStr.split(delimiter);
    const numbersList = [];
    const negativeNumbers = [];

    for (const token of tokens) {
      const number = parseInt(token, 10);
      if (number < 0) {
        negativeNumbers.push(number);
      }
      numbersList.push(number);
    }

    if (negativeNumbers.length > 0) {
      throw new Error(
        `negative numbers not allowed: ${negativeNumbers.join(", ")}`
      );
    }

    return numbersList.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = new StringCalculator();
