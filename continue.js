var numbers = [45, 78, 89, 56, 42, 51, 25, 189, 38]

for (var i = 0; i < numbers.length; i++) {
          var number = numbers[i];
          if (number > 50){
                    continue
          }
          console.log(number);
}