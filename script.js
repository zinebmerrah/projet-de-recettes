let myData;

for(i = 0 ; i < 6 ; i++){
    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then( result =>{
        myData = result.json();
        console.log(myData)
          return myData
          
    }).then(result =>{
        create(result)
    })
}

function create(array){
  document.querySelector('#carte').innerHTML += ""
  array.meals.forEach(meals => {
      let card = document.createElement('div');
      let img = document.createElement('img');
      let cardB = document.createElement ('div');
      let name = document.createElement ('h5');
      let button = document.createElement ('button');
      let texteBtn = document.createTextNode ('read more');
    
    // fenetre modale

    let modal = `
    <div class="modal fade" id="modal-${meals.idMeal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${meals.strMeal}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img src="${meals.strMealThumb}" width="40%">
            <h4>${meals.strArea}</h4>
            <h4>${meals.strCategory}</h4>
            ${meals.strInstructions}
          </div>
        </div>
      </div>
    </div>`;
    
    document.getElementById('modals').innerHTML += modal;
      
  /////////////
      card.setAttribute('class', 'card col-md-5 col-lg-3 p-0');
      img.setAttribute('src', meals.strMealThumb);
      img.setAttribute("class","card-img-top");
      cardB.setAttribute('class', 'card-body');
      name.setAttribute('class', 'card-title');
      button.setAttribute('class','btn btn-primary');
      button.setAttribute('data-bs-toggle','modal');
      let modalId = "#modal-" + meals.idMeal;
      button.setAttribute('data-bs-target',modalId);
      button.appendChild(texteBtn);
      

      name.append(meals.strMeal);
      cardB.append(name,button);
      card.append(img)
      card.append(cardB);
      document.querySelector('#carte').append(card);
  })
}

// search
document.querySelector('#search').onkeyup = function(){
    document.querySelector('#carte').innerHTML = '';
    var urlvalue =document.querySelector('#search').value;
   
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${urlvalue}`).then(result=>{
            let searchdata = result.json();
            return searchdata
            
    }).then(result=>{
            result.meals.forEach(meals => {
              let card = document.createElement('div');
              let img = document.createElement('img');
              let cardB = document.createElement ('div');
              let name = document.createElement ('h5');
              let button = document.createElement ('button');
              let texteBtn = document.createTextNode ('read more');
            // fenetre modale
        
            let modal = `
            <div class="modal fade" id="modal-${meals.idMeal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${meals.strMeal}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src="${meals.strMealThumb}" width="40%">
                    <h4>${meals.strArea}</h4>
                    <h4>${meals.strCategory}</h4>
                    ${meals.strInstructions}
                  </div>
                </div>
              </div>
            </div>`;
            
            document.getElementById('modals').innerHTML += modal;
              
          /////////////
              card.setAttribute('class', 'card col-md-5 col-lg-3 p-0');
              img.setAttribute('src', meals.strMealThumb);
              img.setAttribute("class","card-img-top");
              cardB.setAttribute('class', 'card-body');
              name.setAttribute('class', 'card-title');
              button.setAttribute('class','btn btn-primary');
              button.setAttribute('data-bs-toggle','modal');
              let modalId = "#modal-" + meals.idMeal;
              button.setAttribute('data-bs-target',modalId);
              button.appendChild(texteBtn);
              
        
              name.append(meals.strMeal);
              cardB.append(name,button);
              card.append(img)
              card.append(cardB);
              document.querySelector('#carte').append(card);
          })
            
           
           
    });
          
}


let pagination = document.createElement("ul");
        pagination.setAttribute("class","pagination");
        for (let i = 0; i <Math.ceil(( response.meals.length)/6 ); i++) {
                let li = document.createElement('li');
                li.setAttribute("class", "page-item");
                let a = document.createElement("a");
                a.setAttribute("class","page-link")
                a.append(i+1);
                a.id = i*6;
                a.addEventListener("click",e=>{
                        document.querySelectorAll('.page-link').forEach(e=>{
                                e.classList.remove("active");
                        })
                        e.target.classList.add("active");
                        document.querySelector('#cards').innerHTML =""
                        response.meals.slice(+(e.target.id),+(e.target.id)+6).forEach(element => {
                          let card = document.createElement('div');
                          let img = document.createElement('img');
                          let cardB = document.createElement ('div');
                          let name = document.createElement ('h5');
                          let button = document.createElement ('button');
                          let texteBtn = document.createTextNode ('read more');
                        
                        // fenetre modale
                    
                        let modal = `
                        <div class="modal fade" id="modal-${meals.idMeal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">${meals.strMeal}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <img src="${meals.strMealThumb}" width="40%">
                                <h4>${meals.strArea}</h4>
                                <h4>${meals.strCategory}</h4>
                                ${meals.strInstructions}
                              </div>
                            </div>
                          </div>
                        </div>`;
                        
                        document.getElementById('modals').innerHTML += modal;
                          
                      /////////////
                          card.setAttribute('class', 'card col-md-5 col-lg-3 p-0');
                          img.setAttribute('src', meals.strMealThumb);
                          img.setAttribute("class","card-img-top");
                          cardB.setAttribute('class', 'card-body');
                          name.setAttribute('class', 'card-title');
                          button.setAttribute('class','btn btn-primary');
                          button.setAttribute('data-bs-toggle','modal');
                          let modalId = "#modal-" + meals.idMeal;
                          button.setAttribute('data-bs-target',modalId);
                          button.appendChild(texteBtn);
                          
                    
                          name.append(meals.strMeal);
                          cardB.append(name,button);
                          card.append(img)
                          card.append(cardB);
                          document.querySelector('#carte').append(card);
                });  
                })
                li.append(a);
                pagination.appendChild(li);
        }
        document.querySelector('#pagination').appendChild(pagination);
        

