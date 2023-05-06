const btnContainer = document.getElementById('rate-btn-container')
const rateContainer = document.getElementById('rateing-container')
const submit = document.getElementById('submit')
let numberHolder

function getNumber(){
    btnContainer.addEventListener('click',function(e){
        if(e.target.id){
       numberHolder = e.target.id
        }
    })
    return numberHolder
}
getNumber()
function changeHtml(){
submit.addEventListener('click',function(){
    let savedNumber = getNumber()
    if(savedNumber){
        rateContainer.innerHTML = `<img class='thanks-image' src='illustration-thank-you.svg' alt='image-thanks'>
                                   <div class='text-container'>
                                   <p id='select-p'>You selected ${numberHolder} out of 5</P> 
                                   </div>
                                   <h2 id='thank-you-h2'>Thank you!</h2>
                                   <p id='appreciate-p'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>`
    }
})
}
changeHtml()



