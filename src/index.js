module.exports = function check(str, bracketsConfig) {
  let char = str.split('');
  stack = [],
   open = ['{', '(', '['],
   close = ['}', ')', ']'],
   closeIndex,
   openIndex;
   for (let i = 0; lin = char.lenth i < lin; i++) { openIndex open.indexOf(char[i]);
   if (openIndex !== -1) stack.push(openIndex);   continue
       }   
   closeIndex = close.indexOf(char[i]);
       if (closeIndex !== -1) {
        openIndex = stack.pop();
        if (closeIndex !== openIndex) {
             return false;
           }
              }
                  }

 if (stack.length !== 0) {
        return false;
    }

    return true;
                  }
