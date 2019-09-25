//filter buttons
(function(){
//select all buttons

const filterBtn = document.querySelectorAll('.filter-btn');

filterBtn.forEach(btn => {
    btn.addEventListener('click',function(event){
        //prevent default action
        event.preventDefault();

        const value = event.target.dataset.filter;

        const items = document.querySelectorAll('.store-item');

        items.forEach(item => {
            if(value === 'all'){
                item.style.display = 'block';
            }else{
                if(item.classList.contains(value)){
                    item.style.display = 'block';
                }else{
                    item.style.display = 'none';
                }
            }
        });
        
        
    })
});
})();




//search input
(function(){

    const search = document.getElementById('search-item');

    search.addEventListener('keyup',function(){

        let value = search.value.toLowerCase().trim();

        const items = document.querySelectorAll('.store-item');


        items.forEach(function(item){

            let type = item.dataset.item;


          let length = value.length;

          let match = type.slice(0,length);


          if(value === match){
              item.style.display = 'block';
          }else{
              item.style.display = 'none';
          }





        });
        
});
})();