const patternFormater = (pattern, data) => {

  if (pattern[0] === 'X') {

    let regex = '';
  
    for(var i = 1; pattern.indexOf('X') >= 0; ++i) {
        pattern = pattern.replace('X', '$'+i);
        regex += '(\\d)';
    }
  
    regex += '[^]*';

    return String(data).replace(new RegExp(regex), pattern);

  } 
  
  
  if (pattern[0] === '#') {

    // Not find .

    console.log(pattern.indexOf('.'))

    if (pattern.indexOf('.') === -1) {
      console.log('not found .')
      return String(data).replace(/(.)(?=(\d{3})+$)/g,'$1,');
    }

    // (patter) total digits after .
    const patternDeciamls = pattern.split('.')[1].length;

    const dataDigits = String(data).split('.');

    let newValue = '';
   
    // (data) verify and get numbers before .

    if(dataDigits[0]) {
      newValue = String(dataDigits[0]).replace(/(.)(?=(\d{3})+$)/g,'$1,');
    } else {
      newValue = '0';
    }

    // (data) Verify and get digits after .

    if(dataDigits[1]) {

      newValue = newValue + '.' + dataDigits[1].substr(0, patternDeciamls);

      if(dataDigits[1].length < patternDeciamls) {

        const total = patternDeciamls - dataDigits[1].length;

        for (let index = 0; index < total; index++) {
          newValue = newValue + '0'
          
        }
      }

    } else {
      newValue = newValue + '.' + pattern.split('.')[1];
    }

    return newValue;
  
  }


}

// module.exports = patternFormater
export default patternFormater;