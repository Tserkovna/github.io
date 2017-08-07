const max = process.argv[2];
    let FizzBuzz = {
      [Symbol.iterator]() {
        let cur = 1;
        return {
          next() {
            if( cur <= max) {
                if( ( cur % 3 === 0 ) && ( cur % 5 === 0 ) ) {
                    return { done: false, value: 'FizzBuzz' };
                } else {
                    if( cur % 3 === 0 ) {
                        return { done: false, value: 'Fizz' };
                    } else {
                        if( cur % 5 === 0 ) {
                            return { done: false, value: 'Buzz' };
                        } else {
                            return { done: false, value: cur };
                        }
                    }
                }
            } else {
                return { done: true };
            }
            ++cur;
          }
        }
      }
    }

for ( let n of FizzBuzz ) {
    console.log(n);
}