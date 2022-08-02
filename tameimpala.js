const he = {
    said: "I'm in love with you",
}
const she = {
    said: function (){ 
        console.log('Is it true?')
        she.isItTrue(he.said)
    },
    
    isItTrue: function(somethingHeTolds) {
        console.log('Is it true?')
        somethingHeTolds ? she.tellMeNow() : "We'll see";
    },
    
    tellMeNow: function(){
        console.log('Tell me now!')
        console.log(`- Yes, ${he.said}!`);
    }
}

she.said();