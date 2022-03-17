


    function longestWord(str){

        //variables
        newStr = str.replace(/,/g, '');
        let array = newStr.split(' ');
        let consonant = /[bcdfghjklmnpqrstvwxys]/gi;
        let vowelCount = 0;
    

        //longest word
        let count = array.reduce( (result, el) => result < el.length ? result = el.length : result, 0)
        let newArray = array.filter(el => el.length == count)
      
        //which have more vowels
        for (let i = 0; i < newArray.length; i++) {
            let word = newArray[i];
            let wordVowels = word.replace(consonant, '');
            if(wordVowels.length > vowelCount){
             answer = word;
             vowelCount = 0;       
            }else{
                vowelCount = 0;
            }
            for (let j = 0; j < wordVowels.length; j++) {   
                vowelCount++
            }
        }  
        console.log(answer);              
    }

    //to call function in console

    //longestWord('Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers')