!function(){function e(){localStorage.removeItem("name"),localStorage.removeItem("orderID"),localStorage.removeItem("itemSum"),localStorage.removeItem("email")}document.querySelector(".customerName").innerText=localStorage.getItem("name"),document.querySelector(".totalPrice").innerText=(localStorage.getItem("itemSum")/100).toFixed(2)+" €",document.querySelector(".email").innerText=localStorage.getItem("email"),document.querySelector(".orderID").innerText=localStorage.getItem("orderID"),document.querySelector(".btn--backToHome").addEventListener("click",(function(){e(),location.assign("home.html")}));for(let t of document.getElementsByTagName("nav"))t.addEventListener("click",e)}();