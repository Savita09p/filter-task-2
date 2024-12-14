let cl=console.log;

const selectFlowers=document.getElementById('selectFlowers');

const allDivs=[...document.querySelectorAll('.all')]
cl(allDivs)
const onFlowerChange = (eve) =>{
    let selectedClassName = eve.target.value
    allDivs.forEach(div => {
       div.classList.add('d-none')
    })

    let selectedDivs = [...document.querySelectorAll("."+selectedClassName)];
    
    selectedDivs.forEach(div => div.classList.remove('d-none'))
}
selectFlowers.addEventListener("change" , onFlowerChange)




