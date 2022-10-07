function camelCaseConnect(input) {
    let words = input.split(" ");
    let result = "";
    let count = 0;

    for(const word of words){
        if (count != 0){
          result+= word.charAt(0).toUpperCase() + word.slice(1);
        }else{
          result+= word.charAt(0).toLowerCase() + word.slice(1);
        }
        count++;
    }
    console.log(result);
  }

  camelCaseConnect("Funkcija je prava");