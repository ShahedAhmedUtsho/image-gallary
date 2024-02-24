let gridImg = document.querySelectorAll('.grid .gird-item img');
let navList =document.querySelectorAll('ul li');
for(let list of navList){
    list.style.backgroundColor="#619ce855";
    list.style.borderRadius="50px";
    list.style.padding="0.3em 1.2em";
    list.style.border="1px solid #619ce8";

    list.addEventListener('mouseover',function(){
        this.style.backgroundColor="#619ce8b3";
        this.style.color="#fff";
        
    });
    list.addEventListener('mouseout',function(){
        this.style.backgroundColor="#619ce855";
        this.style.color="#000";
    })
}


for(let img of gridImg ){
    
    img.style.width="100%";
    img.style.height="100%";
    img.style.objectFit="cover";
    img.style.backgroundColor="gray";
    

}
