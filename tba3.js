     // var of connection
     let user=document.querySelector("a#con");
     let c19=document.querySelector("div#c1");
     let c20=document.querySelector("div#c2");
     let c21=document.querySelector("i.fa-times");
     let c22=document.querySelector("button#nu");
     let c23=document.querySelector("input#user-name");
     let c24=document.querySelector("a#con");
     //tread of user
     user.onclick=function () {
       c20.style="display: flex; justify-content: center; ";
       c19.style="display:block;";
       document.body.style="overflow-y:hidden;";
     }
     c21.onclick=function () {
       c20.style="display: none;  ";
       c19.style="display:none;";
       document.body.style="overflow-y:auto;";
     }
     // Dynamique Local Storage
     c22.onclick=function () {
       window.localStorage.setItem("user-name",`${c23.value}`);
       c24.innerHTML=`
       <i class="far fa-user img-fluid"></i> ${window.localStorage.getItem("user-name")}`;
     }
             if(window.localStorage.getItem("user-name"))
             {
                c24.innerHTML=`
       <i class="far fa-user img-fluid"></i> ${window.localStorage.getItem("user-name")}`;
   
             }
