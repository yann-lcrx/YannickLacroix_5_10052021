!function(){let e=new URL(window.location.href).searchParams.toString().slice(3);(void fetch("http://localhost:3000/api/teddies/"+e).then((e=>e.json())).then((t=>{let n=new Teddy(t);for(color of(document.querySelector(".teddyPage").innerHTML+=`<img src="${n.imageUrl}" alt="ours en peluche">\n                                                                    <div class="card-body">\n                                                                        <h1 class="h2">${n.name}</h1>\n                                                                        <p class="h5">Prix: <span class="text-secondary">${n.getFormatedPrice()}</span></p>\n                                                                        <p>Nos prix incluent la TVA</p>\n                                                                        <strong>Description de l'article</strong>\n                                                                        <p>${n.description}</p>\n                                                                        <select name="colorSelect" class="teddyPage__colorSelect">\n                                                                        \n                                                                        </select>\n                                                                        <button class="btn--addToCart btn-primary">Ajouter au panier</button>\n                                                                    </div>`,n.colors))document.querySelector(".teddyPage__colorSelect").innerHTML+="<option>"+color+"</option>";document.querySelector(".btn--addToCart").addEventListener("click",(function(t){t.stopPropagation,addToCart(e)}))}))).catch((function(e){console.error(e)}))}();