//мой код возвращает только одно значние не смотря на то что в массиве еще куча чисел,
// скорее всего надо правильно деструктуризировать данные входящие в data, или правильно
// использовать цикл i

// function openOrSenior(data){
//     let str = []; 
//     for (let i = 0; i < data.length; i++) { 
//     if (data == '') {  
//       return 'error!'; 
//     } else if (data[i[0]] >= 55 && data[i[1]] > 7){ 
//       str.push('Senior'); 
//     } else { 
//       str.push('Open'); 
//     }
    
//   }
//   return str;
//   }
  
//   console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [99, 9]]));


// нужно настроить даную функцию так, чтобы при неправильной информации, например вместо числа  будут введены даные типа строка, или пустой масив, то в том месте output масива должно быть написано "Ошибка, неправильный тип данных", а также выдавать ошибку в консоле "Неправильный тип данных в [номер масива] масиве данных"

  function openOrSenior(data){
    let str = []; 
    for (let el of data) { 
    if (data == '') {  
      return 'error!'; 
    } else if (el[0] >= 55 && el[1] > 7){ 
      str.push('Senior'); 
    } else { 
      str.push('Open'); 
    }
    
  }
  return str;
  }
  
  console.log(openOrSenior([[243,17], ['err'], [61, 12], [37, 6], [71, 21], [99, 9]]));



  //работающий код с инета, сделан с помощью другого метода map(), 
  // он как раз и возвращает все данные в массив не зависимо сколько их на входе 

  
// function openOrSenior(data) {
//     return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }

// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));