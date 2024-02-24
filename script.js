let gridImg = document.querySelectorAll('.grid .gird-item img');
let navList =document.querySelectorAll('ul li');
let photoList =document.querySelectorAll('.grid .gird-item');
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
function addClassToAllPhoto(className){
    for(let photo of photoList){
        photo.classList.add(className)

    }

}


function showPhotoFunction(arrayName){
    for(let item of arrayName){

   
        if(item.classList.contains('check')){
            item.classList.remove('hidden');
            item.classList.remove('check')
        
        }else if(!item.classList.contains('check')){
           
           
            item.classList.add('check')
            item.classList.remove('hidden');
        }
    
       }
    }

let mountainClass = document.querySelectorAll('.mountain');
let animalClass = document.querySelectorAll('.animal');
let birdClass = document.querySelectorAll('.bird');

let lakeClass = document.querySelectorAll('.lake');
let flowerClass = document.querySelectorAll('.flower');
let catClass = document.querySelectorAll('.cat');
let photoClass = document.querySelectorAll('.my-pics');


let mountainArr=[]


for(let item of mountainClass){
    mountainArr.push(item)
    
}
let animalArr=[]

for(let item of animalClass){
    animalArr.push(item)
    
}
let birdArr=[]

for(let item of birdClass){
    birdArr.push(item)
    
}
let lakeArr=[]

for(let item of lakeClass){
    lakeArr.push(item)
    
}
let flowerArr=[]

for(let item of flowerClass){
    flowerArr.push(item)
    
}
let catArr=[]

for(let item of catClass){
    catArr.push(item)
    
}
let photoArr=[]

for(let item of photoClass){
    photoArr.push(item)
    
}



function changePhoto(){

  let listInnerText =  this.innerText.toLowerCase();
  if(listInnerText === 'all'){
    for(let photo of photoList){
        photo.classList.remove('hidden')

    }
  }
  
  


  if(listInnerText === 'mountain'){
    addClassToAllPhoto('hidden');
    showPhotoFunction(mountainArr)

  }
  if(listInnerText === 'animal'){
    addClassToAllPhoto('hidden');
    showPhotoFunction(animalArr)

  }
  if(listInnerText === 'bird'){
    addClassToAllPhoto('hidden');
    showPhotoFunction(birdArr)

  }
  if(listInnerText === 'lake'){
    addClassToAllPhoto('hidden');
    showPhotoFunction(lakeArr)

  }
  

  if(listInnerText === 'flower'){
    addClassToAllPhoto('hidden');
    showPhotoFunction(flowerArr)

  }
  if(listInnerText === 'cat'){
    addClassToAllPhoto('hidden');
    showPhotoFunction(catArr)

  }
  if(listInnerText === 'photo'){
    addClassToAllPhoto('hidden');
    showPhotoFunction(photoArr)

  }
  

  
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





