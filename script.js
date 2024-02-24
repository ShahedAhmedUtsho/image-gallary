let gridImg = document.querySelectorAll('.grid .gird-item img');
let navList =document.querySelectorAll('ul li');
function hoverList(){
    let helloTrue =   this.classList.contains('hello');
    if(!helloTrue){
       this.classList.add('hello');
       this.style.backgroundColor="#619ce8b3";
       this.style.color="#fff";
   
    }else{
       this.classList.remove('hello');
       this.style.backgroundColor="#619ce855";
       this.style.color="#000";
    }
   
       
}

let mountainClass = document.querySelectorAll('.mountain');
let animalClass = document.querySelectorAll('.animal');
let birdsClass = document.querySelectorAll('.bird');

let lakeClass = document.querySelectorAll('.lake');
let flowerClass = document.querySelectorAll('.flower');
let catClass = document.querySelectorAll('.cat');
let photoClass = document.querySelectorAll('.my-pics');



function changePhoto(){
  let listInnerText =  this.innerText.toLowerCase();
  
  console.log(listInnerText)
}











for(let list of navList){
    list.style.backgroundColor="#619ce855";
    list.style.borderRadius="50px";
    list.style.padding="0.3em 1.2em";
    list.style.border="1px solid #619ce8";

 // add hover 
 list.addEventListener('touchstart',function(){
    hoverList()


})


list.addEventListener('mouseover',function(){
    this.style.backgroundColor="#619ce8b3";
    this.style.color="#fff";
    
});
list.addEventListener('mouseout',function(){
    this.style.backgroundColor="#619ce855";
    this.style.color="#000";
})



   


  



    // add hover 


list.addEventListener('click', changePhoto)






}


for(let img of gridImg ){
    
    img.style.width="100%";
    img.style.height="100%";
    img.style.objectFit="cover";
    img.style.backgroundColor="gray";
    

}





