module.exports = function check(str, bracketsConfig) {
  
    let char = str.split(''),
        mas = [],
        open = ['{', '(', '['],
        close = ['}', ')', ']'],
        closeIndex,
        openIndex;

    for (let i = 0, len = char.length; i < len; i++) {
       openIndex = open.indexOf(char[i]);
       if (openIndex !== -1) {
           mas.push(openIndex);
           continue;
       }

       closeIndex = close.indexOf(char[i]);
       if (closeIndex !== -1) {
           openIndex = mas.pop();
           if (closeIndex !== openIndex) {
               return false;
                             }
                                   }
                                       }

    if (mas.length !== 0) {
        return false;
    }

    return true;
}
