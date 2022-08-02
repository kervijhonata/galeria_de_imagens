function patchworker() {
    const patch = {}
    patch.test = function(){ return "Patchworker is up to run"; }
    const test = () => 'Patchworker is up to run';
    patch.test = test();

    patch.dict = { // Default List :: Dictionary of changes
        "_test_": test(),
        "_getYear_": getYearDate(),
    }

    function watch(selector, dictionary) {
        this.selector = selector || '.pwrk-fill'; // Default target = .pwrk-fill [CLASS SELECTOR]
        this.dictionary = dictionary || patch.dict;

        // console.log('patchworker is watching');

        var elements = document.querySelectorAll(this.selector);
        
        for(var element of elements){
            if(this.dictionary[element.textContent]){ //Verify if target reference exists on Dictionary
                element.textContent = this.dictionary[element.textContent];
            }
        }

        // console.log('patchworker stopped to watch');

    }

    function getYearDate(){
        let year = new Date().getFullYear();
        return year;
    }

    return {
        patch,
        watch,
        test,
    }

}

export default patchworker;