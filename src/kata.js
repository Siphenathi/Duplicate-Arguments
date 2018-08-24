
function DuplicateChecker(){

  return{

    DuplicatesFound:function(){
      console.log(arguments);
    let lengthOfArguments = arguments.length;

      if(lengthOfArguments == 0){
        return false;
      }
      let storeRemainingValue = [];

      for(let x = 0; x<lengthOfArguments;x++){
        var value = arguments[x];

        if(storeRemainingValue.length == 0){

          storeRemainingValue[x] = value;
          continue;
        }

        let arrayLength = storeRemainingValue.length;

      for(let i = 0; i<arrayLength;i++)
      {
        if(value == storeRemainingValue[i])
        {
          return true;
        }
        storeRemainingValue[x] = value;
      }        
    }
    return false;

    }
  }
}