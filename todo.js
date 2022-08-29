

const container = document.getElementById("container")

const up = document.getElementById("upload")


const inputbtn = document.getElementById("inp")

let f = true


up.addEventListener("click", (eo) => {

    eo.preventDefault()


    const newtask = ` <div class="task2 task">
    
    <span class="icon-star str"></span>

    <p class="task-p">  ${inputbtn.value}  </p>

    <div class="emojy">
        <span class="icon-trash-o ic"></span>
        <span class="icon-angry2"></span>
        <span style="display: none;" class="icon-heart"></span>
    </div> `



if(f == true){
  const g = document.querySelectorAll(".hhh")
  g.forEach(item => {

    item.remove()

    f= false
    
  });
 

}




    container.innerHTML += newtask

    inputbtn.value = "  "

})



container.addEventListener("click", (eo) => {



switch(eo.target.className ) {

    case "icon-trash-o ic":
        eo.target.parentElement.parentElement.remove()
      break;


    case "icon-angry2":

    

      eo.target.style.display = "none"

      eo.target.classList.add("icon-heart")

      const xx = `<span class="icon-heart"></span> `

      eo.target.parentElement.parentElement.getElementsByTagName("p")[0].classList.add("taskname")

      eo.target.parentElement.innerHTML += xx

      break;



      case "icon-heart":
        eo.target.style.display = "none"

        eo.target.parentElement.parentElement.getElementsByTagName("p")[0].classList.remove("taskname")

     

       
        
       const xxx = `<span class="icon-angry2"></span> `
 
       

      
 
       eo.target.parentElement.innerHTML += xxx




      break;


      case "icon-star str":

      eo.target.classList.add("orange")

        const z =    eo.target.parentElement

        container.prepend(z)

      break;



      case "icon-star str orange":

      eo.target.classList.remove("orange")

        container.append(eo.target.parentElement)

    

      break;


    default:
      // code block
  }

    
    
})


 const xx = document.querySelectorAll(".icon-angry2")
 console.log(xx)