var calculate = document.querySelector('.calculate')
var answer = document.querySelector('.answer')
var input = document.querySelector('.input')
var planets = document.querySelector('#planets')
var massText = document.querySelector('.massText')
var imgs = document.querySelector('.imgs')




var planetData = [{ Earth: 9.8, src: "imgs/Earth.png" }, { Mercury: 3.59, src: "imgs/Mercury.png" }, { Venus: 8.87, src: "imgs/Venus.png" },
{ Mars: 3.7, src: "imgs/Mars.png" },{ Jupiter: 24.5, src: "imgs/Jupiter.png" }, { Saturn: 11.08, src: "imgs/Saturn.png" },
{ Urnanus: 10.67, src: "imgs/Uranus.png" }, { Neptune: 14.07, src: "imgs/Neptune.png" },{ Moon: 1.6, src: "imgs/Moon.png" }]



calculate.addEventListener('click', function () {
    var inputValue = document.querySelector(".input").value;
    planetData.forEach((Element, i) => {
        const keys = Object.keys(Element)
        keys.forEach((key, i) => {
            if (planets.selectedOptions[0].label === key) {
                answer.innerHTML = 'Weight of the object on ' + key + ' = ' + inputValue * Element[key] + ' N';
                imgs.src = Element[keys[i + 1]]
                massText.textContent = '';
                // hello saf
            }
        })
    })
})

// ========================================
//  USING FOR EACH (SIMPLIFIED) 
// ========================================


    //     planetData.forEach((e, i) => {
    //         for (const key in e) {
    //             if (planets.selectedOptions[0].label === key){
    //                    imgs.src = (e["src"]);
    //                    massText.textContent = '';
    //             }
    //         }
    //     })
    // })


// ========================================================
//  USING FOR IN (INITIAL METHOD/NOT RECOMMENDED BUT WORKS)
// ========================================================


        // for (const key in Element) {
        //     if (planets.selectedOptions[0].label === key) {
        //         answer.innerHTML = 'Weight of the object on ' + key + ' = ' + inputValue * Element[key] + ' N';
        //         massText.textContent = '';
        //         console.log()
        //     }
        //     if (Element[key] === `imgs/${planets.selectedOptions[0].label}.png`) {
        //         imgs.src = Element[key]
        //     }
        // }
    
    


// ========================================
//  USING IF
// ========================================


    // for (var i = 0; i < planets.length; i++) {
    // if (planets.selectedOptions[0].label === 'Earth') {
    //     answer.innerHTML = inputValue * 9.8 + " N";
    // } else if (planets.selectedOptions[0].label === 'Mars') {
    //     answer.innerHTML = inputValue * 3.7 + " N";
    // } else if (planets.selectedOptions[0].label === 'Jupiter') {
    //     answer.innerHTML = inputValue * 24.5 + " N";
    // } else if (planets.selectedOptions[0].label === 'Saturn') {
    //     answer.innerHTML = inputValue * 11.08 + " N";
    // } else if (planets.selectedOptions[0].label === 'Neptune') {
    //     answer.innerHTML = inputValue * 14.07 + " N";
    // } else if (planets.selectedOptions[0].label === 'Venus') {
    //     answer.innerHTML = inputValue * 8.87 + " N";
    // } else if (planets.selectedOptions[0].label === 'Mercury') {
    //     answer.innerHTML = inputValue * 3.59 + " N";
    // } else if (planets.selectedOptions[0].label === 'Moon') {
    //     answer.innerHTML = inputValue * 1.6 + " N";
    // } else if (planets.selectedOptions[0].label === 'Mars') {
    //     answer.innerHTML = inputValue * 3.7 + " N";
    // }
    // }



