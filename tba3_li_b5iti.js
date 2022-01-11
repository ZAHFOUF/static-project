           // var of my element 
            const u=document.querySelector("img#user-d");
            const u1=document.querySelector("div.user-des");
            const ifi=document.querySelector("input#user-file");
            const op=document.querySelector("output#op");
            const ifi2=document.querySelector("input#swal2-input");
            const pi=document.querySelectorAll("a.pi");
            const t=document.querySelector("button#liveToastBtn");
            const t1=document.querySelector("p#text-user");
            const t2=document.querySelector("input#commant-1");
            const t4=document.querySelector("input#customRange1");
            const t6=document.querySelector("p.val-1");
            const t7=document.querySelector("input#c_u");
            const t8=document.querySelector("select.form-select")
            const t9=document.querySelectorAll("option")
            const t10=document.querySelector("input.form-check-input")
            // file user
            if (window.localStorage.getItem("display") == "block") {
            u.setAttribute("src",window.localStorage.getItem("src-user"))
            u.style=`${window.localStorage.getItem("style-user")}`
            t4.value= window.localStorage.getItem("va")
            t6.textContent= `${window.localStorage.getItem("va")}px`
          }

           // file change 
           // file change 
           ifi.addEventListener("change",function () {
              const file =this.files[0]
              if (file) {
                Swal.fire({
            icon: 'success',
            title:'Succès',
            timer :1500,
            showConfirmButton: false,
            width :300
          })
                const reader=new FileReader();
                reader.addEventListener("load",function () {
                  window.localStorage.setItem("display","block");
                  u.style="display:block; width:80px; position: absolute; "
                  t1.textContent=``
                  t2.value=``
                  u.setAttribute("src",this.result)
                  window.localStorage.setItem("src-user",this.result);
                  u.style=`display:block; width:85px; position: absolute;`
                  window.localStorage.setItem("style-user",`width:85px; position: absolute;` )
                  window.localStorage.setItem("display","block");
                  window.localStorage.setItem("va",85)
                  t6.textContent=`85px`
                  t4.value="85px"
                })
                reader.readAsDataURL(file);}})
            

                  // text user
                  if (window.localStorage.getItem("display")  == "none" ) {
                    t1.textContent=`${ window.localStorage.getItem("text-user")}`
                    t2.value=`${ window.localStorage.getItem("text-user")}`
                    t1.style.color=window.localStorage.getItem("c_t")
                    t7.value=window.localStorage.getItem("c_t")
                    t1.style.fontFamily=window.localStorage.getItem("font-family")
                    t8.value=window.localStorage.getItem("font-family")
                    if (window.localStorage.getItem("t-s")) {
                      t1.style.setProperty("text-shadow",` black 2px 0px 2px`)
                      t10.checked=true
                    }
                    if (t1.offsetWidth >= 145) {
                        t1.style.setProperty("padding-left","20px")
                      }
                  }
                  t.addEventListener("click",function () {
                    if (t2.value == '') {
                      Swal.fire({
                      icon: 'error',
                      title: 'Erreur',
                      text: 'tu ne peut pas ajouter un text vide !!!!',
                      width:400
                      })
                    }
                    if(t2.value !='' ){
                      u.style.setProperty("display","none");
                      ifi.value=''
                      window.localStorage.setItem("display","none");
                      window.localStorage.setItem("text-user",`${t2.value}`)
                      t1.textContent=`${t2.value}`
                      if (t1.offsetWidth >= 145) {
                        t1.style.setProperty("padding-left","20px")
                      }else{
                        t1.style.setProperty("padding-left","0px")
                      }
                      Swal.fire({
                      icon: 'success',
                      title: 'Succès',
                      width:300,
                      timer:1500,
                      showConfirmButton: false})
                      
                    }
                  })
                  t4.onclick=function(){
                    if (window.localStorage.getItem("display") == "none") {
                      Swal.fire({
                        icon: 'error',
                        title: 'Erreur',
                        text: 'ce pas un prametre de text !!!!',
                        width:400
                      })
                    }
                  }
                  let va;
                  t4.addEventListener("input",function () {
                    u.style=`width:${t4.value}px; position: absolute; `
                    if (window.localStorage.getItem("display") == "none") {
                      u.style.display="none"
                    }
                    if (window.localStorage.getItem("display") == "block") {
                      window.localStorage.setItem("style-user",`width:${t4.value}px; position: absolute;` )
                      t6.textContent=`${t4.value}px`
                      va=t4.value;
                      window.localStorage.setItem("va",va)
                    }
                  })
                  t7.addEventListener("input",function(){
                    if (window.localStorage.getItem("display") == "none" || u.style.display == "none"){
                    t1.style.color=t7.value;
                    window.localStorage.setItem("c_t",t7.value)
                    }else{
                      t7.onfocus=function (){
                        Swal.fire({
                        icon: 'error',
                        title: 'Erreur',
                        text: 'ce pas un prametre de image !!!!',
                        width:400
                      })
                      }

                    }
                  })
                  var opp;
                  t8.addEventListener("change",function () {
                    opp=t8.selectedIndex;
                    t1.style.setProperty("font-family",`${t8[opp].value}`)
                    window.localStorage.setItem("font-family",t8[opp].value)
                  })
                  t10.addEventListener("click",function () {
                    if (t10.checked) {
                      t1.style.setProperty("text-shadow",` black 2px 0px 2px`)
                      window.localStorage.setItem("t-s",` black 2px 0px 2px`)
                    }else{
                      t1.style.removeProperty("text-shadow")
                      window.localStorage.removeItem("t-s")
                    }
                  })
