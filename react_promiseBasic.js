const myGetData = async (num) => {  
    if(typeof num === 'number') {  
      return 2*num;  
    } else {  
      throw new Error('Something went wrong');  
    }  
};  
  
  
myGetData(21)
    .then((data) => {  
        console.log('DATA from myGetData() with async( When promise gets RESOLVED ): ' + data); // prints data 
    }).catch((error) => {  
        console.log('ERROR from myGetData() with async( When promise gets REJECTED ): ' + error); // prints error 
    });
