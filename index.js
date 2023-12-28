var button = document.querySelector('.btn');
let text = document.querySelector('.quote');
let options = document.querySelector('.option');
// numCategories = category.length;

let bool = false
let api_url = "https://api.api-ninjas.com/v1/quotes?category=" 
const API_KEY = "gFBn407IFoHdBXiH6fMQHA==dHEYpwcDSOGM0SLU";
//Init the array of choices of quote gen:
const quoteCategories = ["Category","Dreams","Change","Business","Success","Inspirational","Education","Equality","Future","Dating"];
//Ninjas API_KEY: gFBn407IFoHdBXiH6fMQHA==dHEYpwcDSOGM0SLU

// console.log(numCategories)
// console.log(quoteCategories.length);
// console.log(quoteCategories[category[0].value]);
// console.log(quoteCategories[category[9].value]); //This is how we access the 9th category as a string...


//How to do we know category we clicked now?

//option:checked?

// category.addEventListener("click", () => {
//     let category = document.querySelector('select').value;
//     console.log(quoteCategories[category]);
// })


//Demo
// var category = 'happiness'
// $.ajax({ava
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });


button.addEventListener("click", async () =>{
    let category = document.querySelector('select').value;
    api_url += quoteCategories[category];
    if(quoteCategories[category] == quoteCategories[0]){
        api_url = "https://api.api-ninjas.com/v1/quotes?category="
    }
    text.textContent = "Generating quote ...";
    text.style.display = 'block';
    let res = getapi(api_url)
    .then((res) => {
        // console.log(res);
        text.textContent = res["0"]["quote"]
    })
    api_url = "https://api.api-ninjas.com/v1/quotes?category=";
});


async function getapi(url){
    // const response = await fetch(url);
    const response = await fetch(url,{
        method: 'GET',
        headers: {'X-Api-Key': API_KEY},
        contentType: 'application/json',
        success: function(result) {
            console.log(result)
        },
        error: function error(){
            console.error("ERROR");
        }
    });
    var data = await response.json();
    return data;
}