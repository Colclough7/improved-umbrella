let button = [...document.querySelectorAll('[type="button"]')]
const equals = document.querySelector('[type="submit"]')
const input = document.querySelector('input')
button.map(item=>{
    item.addEventListener('click',()=>{
        input.value+= item.value
        if(item.value === 'AC'){
            input.value = ''
        }
    })
     
})

equals.addEventListener('click',()=>{
   try{
    input.value = eval(input.value || 0)
     /* Warning: Executing JavaScript from a string is an enormous security risk. 
    It is far too easy for a bad actor to run arbitrary code when you use eval()
     */
   } catch(error){
       alert(error.message)
       input.value = ''
   }
})