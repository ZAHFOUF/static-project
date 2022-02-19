// var of My Element
let bt=document.querySelector("section.pro");
let ba=document.querySelector("form  a#go");
let bi=document.querySelector("form  input.form-control");
let bn=document.querySelector("[name='search']")
let bs=document.querySelector("div#cover")
let bc=document.querySelector("div#carouselExampleControls")
let bt1=document.querySelector("section#bt-1");
let bt2=document.querySelector("section#bt-2");
let bt3=document.querySelector("section#bt-3");
let btall=[bt,bt1,bt2,bt3]
let tx=["morooco","maroc","simpsons","nasa","plus demander","minecraft","one piece","joker","minions","siu"]
let tn=[` 
<div class="container-fluid" style="margin-top: 30px;">
<div class="header-pro">    
  <div class="row">
    <div class="col-11 "><p>Morooco</p></div>
    <div class="col-1 hvr-bounce-in" ><a href="#" class="dd">Voir tout</a></div>
  </div>
     <div class="row">
          <div class="col-md-3  col-6">  <a href="Tba3-client.html"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhKzttHqeR4PhTEI85WKiU2-ckS7na7b--YHg31NietkYnFV7a0joyVULaL_YFqJ5ANQrJKH6aLRqe_VoJSg4_K92qQq_tJ6ozemzlxl9ffPXqhbFt99Vg2R2-gOEaAyBoQzMRm_hOnT9lSwBJEhHIyND_iz_mhBw4s_VW0e9wFps9GKGe67yOW-KWzmA=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEh2-kAH_n6calNBe6wdvy-HqJRb0jWVVF2UGmMXd7OkJI_c2nHBfXps2sW7N9BBS8ZpKWPZF5QlEqj6Rskr6RldveXAk-Kgl9Mw8TB1y9Dz4BhpZVw-o3zJ2KHrTgvTJiXKhUch9j7nUZDJ9EgdvjnjjxawGQFV0J9GIMKLDOu0eERY80fE3rbYrLiJVQ=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="  https://blogger.googleusercontent.com/img/a/AVvXsEjOOU3tY8FWG4Ih0l0LlgzTSxDzg1TSUgh2BbCfNXKTO15aLCWT1Ty4hf_6z3HLff2mJQ22yhuPYKwCpRrllsyddPNytSNvTrxAz0W4A0_GsCsyR-72f3YVYiEQZ_BxgRT6bV0ZxYQKCgrOB39Wz6yi47FPnBz6TQAtcWAbAKdP48Vx5hO-k9SKzPEiRQ=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">   <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhXYoUAErdcT9NzQx8D24b65Tou_BJOepX5PynAo9xdwOG7X96MofPuMI0DAqZSr2oH9dQBqiP6_UNH21CYlzkbSmyDUxy2QKqELSr-zrlCUq9xU75fRNc9ExoDeICiKDw1UcqyPG4OsjZaVp1IAgfQBRswSzcL3MPJ3e6yT0bbprhcA4BHMPeAAMwvYg=s16000" class="img-fluid"/> </a> </div>
      </div>
</div>`,` 
<div class="container-fluid" style="margin-top: 30px;">
<div class="header-pro">    
  <div class="row">
    <div class="col-11 "><p>Morooco</p></div>
    <div class="col-1 hvr-bounce-in" ><a href="#" class="dd">Voir tout</a></div>
  </div>
     <div class="row">
          <div class="col-md-3  col-6">  <a href="Tba3-client.html"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhKzttHqeR4PhTEI85WKiU2-ckS7na7b--YHg31NietkYnFV7a0joyVULaL_YFqJ5ANQrJKH6aLRqe_VoJSg4_K92qQq_tJ6ozemzlxl9ffPXqhbFt99Vg2R2-gOEaAyBoQzMRm_hOnT9lSwBJEhHIyND_iz_mhBw4s_VW0e9wFps9GKGe67yOW-KWzmA=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEh2-kAH_n6calNBe6wdvy-HqJRb0jWVVF2UGmMXd7OkJI_c2nHBfXps2sW7N9BBS8ZpKWPZF5QlEqj6Rskr6RldveXAk-Kgl9Mw8TB1y9Dz4BhpZVw-o3zJ2KHrTgvTJiXKhUch9j7nUZDJ9EgdvjnjjxawGQFV0J9GIMKLDOu0eERY80fE3rbYrLiJVQ=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="  https://blogger.googleusercontent.com/img/a/AVvXsEjOOU3tY8FWG4Ih0l0LlgzTSxDzg1TSUgh2BbCfNXKTO15aLCWT1Ty4hf_6z3HLff2mJQ22yhuPYKwCpRrllsyddPNytSNvTrxAz0W4A0_GsCsyR-72f3YVYiEQZ_BxgRT6bV0ZxYQKCgrOB39Wz6yi47FPnBz6TQAtcWAbAKdP48Vx5hO-k9SKzPEiRQ=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">   <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhXYoUAErdcT9NzQx8D24b65Tou_BJOepX5PynAo9xdwOG7X96MofPuMI0DAqZSr2oH9dQBqiP6_UNH21CYlzkbSmyDUxy2QKqELSr-zrlCUq9xU75fRNc9ExoDeICiKDw1UcqyPG4OsjZaVp1IAgfQBRswSzcL3MPJ3e6yT0bbprhcA4BHMPeAAMwvYg=s16000" class="img-fluid"/> </a> </div>
      </div>
</div>`, ` <div class="container-fluid" style="margin-top: 30px;">
<div class="header-pro">    
  <div class="row">
    <div class="col-11 "><p>Simpsons</p></div>
    <div class="col-1 hvr-bounce-in" ><a href="#" class="dd">Voir tout</a></div>
  </div>
<div class="row">
    <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhefiUp_MGmcpmQAIwJa1O0gVndVcem5guVh16wH-dSRTCoedWQ8ky-byZvnL553L6_vpDau40XH56HFiPFTCKnHoNS10H-4hfL5J6FYpyMSF5ogDDOSljk1uchuBa2KxMw8sVXZqJZhWqWkGwX4IH36HjCsjnPUyvsjILgMj9FYxfNGZdSdN-9LGNz9w=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEifjIKmzNl_CmstYlWcmSP-ZBHkOG_7Xl99dAxx8Top9gOGgqBjRwGnkxGZE-6euZumc_Eafwq3V79NHvaHko4XO8vsxybr84EsuPI0zq-x9sZ_qQeGgLqq9NEAY0O2anGA8ptY5k0fqbtohTeFkXvcdSYc4ibolRVT4btA2qRLOc3IgJwBqbznIu6vGg=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEh4pyKs9hEq4ZCeg1ROB2e5p6nB2T18mZsKIhgayAFVNVGv7k3H8MYXM8wl_0y90HYPKH9jPd2sSfCsT15gGmBbVC3Lf6SOWcEPOfGl5mEHTG6_lShFaraTD1QdQJqU54zRbF5YP78KgpMv_AZozw4XiiL9uVCbY8eDt0ObIJ1zHYq9HHx7c-9P2EXCTw=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjZIWas9VKSwGgp8-QamSDbdYZFtaas83cLV75dnZdIbyIFySqlm_eLIblNIIcXEr4v_LHwojsNirl1wflwbdl_uw7DA46a2AGIrWF8gbqfQoszdpeFYxe91jl7LgDj88bAx7l1yFKc0phv65JW6sn6yzz4qGnoUNPRDdYqUS4MrdCSNs19P-vKLBUjbw=s16000" class="img-fluid"/> </a> </div>
</div>
</div>`,`   <!--nasa-->
<div class="container-fluid" style="margin-top: 30px;">
 <div class="header-pro">    
   <div class="row">
     <div class="col-11 "><p>Nasa</p></div>
     <div class="col-1 hvr-bounce-in" ><a href="#" class="dd">Voir tout</a></div>
   </div>
 <div class="row">
      <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEh_L5CH9x0iIEAnszN83E4k4zGY3ig_iH3AFg41z_d0Q6THstm0IQFLs37YyvtYbzdjAja1g_xT2vfuTn6Qn2jhDNuxPmRSMP5KgqWxcPGgFvEDhVg2lyZcj1ZBQg5-8btLXXc2dJrcXbT8KIJagwPbEWu2cRUNvQA5BKVP1NXT7hW8-ojF7aCXQlVFow=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEiLiZTOJhyOpRghqLGXyJbUoR1SVU68OWZGaf-WnAQdBB0uRPDtlfqkz4CwlZ8tdsPKpCn-hTqE5tUqSle1VjYcWiFS9szYBitWUK20wpDvuUXDzRns4ufI5t1XD4HOOoKlbIuUApdVhsv1MlwepCEJj4_6xT0qoR4rzoGYHUA2-T-GzLRjPPabpbcOcQ=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEiyi1Wb5B_kznmeNkn_2aV243Gp-pw28iNHCjnAvNudPx48P_GlufmGE8lQCB4eKr4-sCgwIvZdmOutHW34uCQtfAdpXBPnnpEZlwrNwXAQPfc-N3pOWruTARMja6qmXMRlh_qNxU7KShHFFRHP2UURwXAfvSRRNycMl30iHCAcHIrQYhWVPQAoV2Zl3g=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEj6TS3hf-hXLb9xv4E4jBJcaMyiJqcyqdHRW5so2yUy6-gkV34eXAlB9AuFZw73eaIr4RFNAhzGTrydGcCi3O3nECrC6kd1ojd9APCTONYUK7gBS5r4vZX_TI1e923ZkKY-OovpHio6OSKsaoF-1Vz3FWC-lrwbqI44DER-px6GUgxp3w9vrsbyWK0ufA=s16000" class="img-fluid"/> </a> </div>
 </div>
</div>`,` <div class="container-fluid" style="margin-top: 30px;">
<!--les plus demander -->
<div class="header-pro">    
<div class="row">
 <div class="col-11 "><p>les plus demandés</p></div>
 <div class="col-1 hvr-bounce-in"><a href="#" class="dd">Voir tout</a></div>
</div>
<div class="row">
      <div class="  col-md-3  col-6">   <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEgtbqkrrFGLH5HmDNL5TfObrtkaWSZmljqV6oBN60Vl5Wl4fGcLguC22F0x_dpbW2IHzInpat98jf7RDPqdrnkM98gitu7haI-7-g9xJGjyo7wirDarU2xfuPcLDihQIDWik1P6Yc1Z-J5VCgnYQ10SgsTTZAton63UinH45K-q7yd75eU6Y9pJ9zRb0g=s16000" class="img-fluid"/> </a> </div> 
        <div class="  col-md-3  col-6 ">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEg7zBSpi1mxq5vBQLZno55_3uMlF8_h3ihwKstP--41Exng5yRCNktOEQQcHKX9b6VacKPMVqAwE_sSxbogF6YOB5n4H8bgWlJGa6nvAZitIea9ByrtCwq4kMKc3l-nZkDgNq7GelgkzcU3g6yvqWILgrbF01p8bdHiZbV3vnBXJUSGMlFE339w83zqfQ=s16000" class="img-fluid"/> </a> </div>
        <div class="  col-md-3  col-6 ">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhQpHSjdKvJVs7mZ6QzQyhe0pbC2pdKilwG0n6YgGo_EWFmQmqWy4FthPiSiquuwN3pBGoXD1DKxoJcN43n8Nat2O8kXu0ApgnLbB9bR76LQ8xVrkfPBekZuXNzovTCCWvOOrM5bb91RCunySb7xSYD3a2QhOPJo00tizP1OWnzBaYPz6xKR8gpTK3jCw=s16000" class="img-fluid"/> </a> </div>
        <div class="  col-md-3  col-6 ">  <a href="#">  <img src="https://blogger.googleusercontent.com/img/a/AVvXsEgt0VO2J6uaTl9-c2URb2lsp-u4Kcs4E0HVtSMnzJWrSEQ_THcNG6-0EwFQ9Nb81jANh5t7wFhXbyHr08T1mQ7maBG_jn7Arl6y49axqj9OY13iNYzdyccav-UyQwk1UW0BxeACWqTb1Pb77fegNRj1BFLUkgDcutZJYgNcx9CO0yMmCHcoIoSXvZjPZQ=s16000" class="img-fluid"/> </a> </div>
</div>
</div>`,`  <!--Minecraft-->   
<div class="container-fluid" style="margin-top: 30px;">
<div class="header-pro">    
<div class="row">
  <div class="col-11 "><p>Minecraft</p></div>
  <div class="col-1 hvr-bounce-in" ><a href="#" class="dd">Voir tout</a></div>
</div>
</div>
<div class="row">
 <div class="  col-md-3  col-6">   <a href="https://fikramoaf.blogspot.com/"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhuRbb8CEiek50asaFERk6mGCVIkjZ-gLjBxdnGuRv-rbVRY1cdMOxBrz18dwuyXWQEDlgCsa7MecGwQPUKUt_5xgvyyJYm6SDgIx7npMPXeciMhLjtMlP05O1U2IUtVkoqX7w2CjHvhNu3n4y5PmqKjuYSe-NklKnPUFbRrWHTRxgSq1BPpF5g_ZH_Yw=s16000" class="img-fluid"/> </a> </div> 
        <div class="  col-md-3  col-6 ">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhpGfexqorFOyqucjBgHLv0BwE-PuCMyy3ZBtoR8YYRfYEJ7FF5FG6crKo2QTQ0AYvXYUWUWiTxcCVFHEh3zfV3j0i6J57UHNNBJQ9q8M3nYxdHPS6LzGJ6evpa1z9U4CCZiND2erDoQWteGR4O7MQRrabOwkkPkBsFeDV497ikUmFSOyHIgvNHk0o-Uw=s16000" class="img-fluid"/> </a> </div>
        <div class="  col-md-3  col-6 ">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEi4MLz6eDrtbpEkf3XG2sCrH2BLlkrEmYAElcIcN3ucBfIyPaqxnZ-9uR3P3JWjiW4NsMyoZYjKRKVsK8mIx3DPdqce1s7B5A-qbZfXvWFRRpeRu5d17jZnYGENd2wPzmzrxdc3ytlRaVrFaMPE_uBdv_YaFyqNipuIPTXpca9WxYy1zyn1WuNWIbB-zQ=s16000" class="img-fluid"/> </a> </div>
        <div class="  col-md-3  col-6 ">  <a href="#">  <img src="https://blogger.googleusercontent.com/img/a/AVvXsEi-Puvqcj_7gdPn-WYEjAGWFE-ebkDi8MPYGwD2F_slQaJuFCsEQV8Q20m1a9ictom7p7lYiCF9AIdyiROiGbiftSshYmEim0UMpKozy4L_LstxcAzx4uj5KUlYMGRD3xrZEYrgByA20IMdYk1gopASB9D6TnXwkARtMmVZKINO0ZLeqiQXthPTYzqZEg=s16000" class="img-fluid"/> </a> </div>
</div>
</div>`,` <!--one piece-->    <div class="container-fluid" style="margin-top: 30px;">
<div class="header-pro">    
  <div class="row">
    <div class="col-11 "><p>One piece</p></div>
    <div class="col-1 hvr-bounce-in" ><a href="#" class="dd">Voir tout</a></div>
  </div>
<div class="row">
      <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEiyOwHiLJN8B59Ym04FMAhpN7YdrJhWkPy0_6IMExoIIIyITbnaugAN_uZDa1BuqUy6KfOLZPkoq3eRYMRfxWdGv3Xf8AnSQ7oEyRewdvf46lq1dAE6c40NTZukkQVFSAePn1qtxvnW5aPO44B_hVg_bysaKiy4JEMmC4poanIcpQ3NC8l4ahW7JTdD_A=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEj8dHexN9crIZmpifYyJDHOtFHqfpg6pAyk8ngCzMmOJHKxQVZKtBbgz4L0eHy5ZSPJ7E6dtoy4BKx8uohDmPMSMsC6OEC0tL9v-kHbfVzQ4UJV-gMzqaWw3b1P_bq-Lq0qUabwYqhFex2-ccblJB9tCf71BZLgJBAlW39AEDrxkaoZluRSotmBPN0zmA=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEi3wpPAl_LvZaA6VidQ5wSi6iiMCxQwjA8fIJ4l0wopHDHPxmXnqqTvwNaBsJ1YRPZgUtYk6O6uq3hou5CUbTU9VSWBsc3-k9SX56ZyfP1MNsNwjTjyUPz5w-5A4sdsQtqEV4yEEwmPKVhK9-oUsDDnaZJVcVsMhg8tET-QyDj9TFdz10NFDWd1mpK3yg=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">   <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhGvnb9LUWzE5NvTnQeNVCavPmAkIm3RJi0MawamCqN3k-FTzmvyGYZcMzgBwxsPQGuQkNB5NyfGl5J1PWXyOjS-4Y2VnDKI14ONH6HvNIHgU7k4QxrB2u7aVTr0T3ZCvASFbS9hnLAANmK8Umxdd217zr6gQtocuwEKaoLME5D1p924-joYmhGJ4iDCA=s16000" class="img-fluid"/> </a> </div>
</div>
</div>`,`  <!--joker-->  <div class="container-fluid" style="margin-top: 30px;">
<div class="header-pro">    
  <div class="row">
    <div class="col-11 "><p>Joker</p></div>
    <div class="col-1 hvr-bounce-in" ><a href="#" class="dd">Voir tout</a></div>
  </div>
<div class="row">
    <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEi_Yna2XYvnkWRIjnWLH5OjHmuFhbZObSv_uBgqSyN9fo7R8jI_6y8QH0ZBvCcbfl1w_TNRhNUwNUE1UePoV0h90rriqPi_unnBzGug909cWSQYEjNErEPs2rlrM5tmZeYBKWjBw-7i-hgVsURtEdQtSfOOYxioh859idyN1Ead_LZ8MHiSWJ9JzFa5xA=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEgkJPwg_Fp4M1CP2pYCnWmXNK-xFAAuxlMzhp-RpGKpGHQWGuubzOZNpBHmGmPuw4kQ0qZGtMVlzDdBX5EJV1oW4oxU8crO2bOvXoo3agOYYoBr3YmqB46-L3sLiNGsB0Pzjo4EsY5qM1en-NIUtK8ZrobJ68K2wQsrRtzmu_oI3ockhRS1o0h1FNDngg=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEheiZy9SkynokeqsU8kYGgR2RYHvwZwgc1uVOy-xVWPJ32QkVPw1mnDMOGIr0HumJWWCip2Ks5C70hd6YIUK1HB7efAMacdAKK6aB-OtdPpxB6ZXPdoZ7b6NxmFMvvjaVATonHEA2TXjclwQYqka-jAbEfKh5gOFLT39KEDUmHVuCVK9zpF_EQyawBmbg=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhfbNERvOis-JkKE1gs-_phSmWY0JXz6sK8LCNFj8txzieljpalSvPN0X8YBAkFOMVQTpfOUTzp4fCY-jeBaul8VWRy8wyCeFsPZfxCKZ_P8YmFD2lV8lCCyH2aS7_bZ6F4g7AtqiRr2V2FXbTgfCA7UfPfKnxpebyOh8EFX3cxiRYC5X2P3fwr-d-Lrw=s16000" class="img-fluid"/> </a> </div>
</div>
</div>`,` <!--minion-->     <div class="container-fluid" style="margin-top: 30px;">
<div class="header-pro">    
  <div class="row">
    <div class="col-11 "><p>Minions</p></div>
    <div class="col-1 hvr-bounce-in" ><a href="#" class="dd">Voir tout</a></div>
  </div>
<div class="row">
    <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhVCcIxBWXw5vx9Bo3vr97ebatzTnayr7Rp9m5c4LKjmF1R3_3oSYRhYNx_tX9lcPZc2ILlTNMuyYvPl-9fBp2w1HW3IXzYbXcvBuZI7JUqPuqxmiDf_0771mB2TfvQuEZwd0UwyBbTvA2mkkCGYJzTHBXpJ0xaQQ_0J402k4wQJdaiFolb56ylV1KZeQ=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjhhGYZC58N46vKdb_JA6T3p_yYnoQcDHchTqCwqNCjtkiTEPgseiKltcIeAM6M6hALQV8n0jysp4aIaYS0mKy3adcLmxQ43oLJ80PszjMVITxHJvgj25L9ipVuFwAzvJXbxHaIz_SHkrUVx1ysTrMzQ0SVfXsrrNNtx4nbw0RL4irUBUFmuk6uDvt7_g=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhx3XKP4-88r_tkbIyoYHmpL-bIR9zvc48jsy5XbRM0e4a6zkkTo6wC1q5xgn1coKobrucCSq_wd51E734A9KbH3c-i0IDPBXNPuShtUMZ6LlMyf0wBRK0rWW3sIHqqG1CJg_y3-V8EchA4tyeH675pb9HBl5KHhwtB3jzJCi0Ph42bR6Hu0j0EduF0zw=s16000" class="img-fluid"/> </a> </div>
          <div class="col-md-3  col-6">  <a href="#"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhns8JS46Z0-n5s37W-zoFwk308wIIT26yYUArpiV45IIovFKUAB_UncsTM39vr0q8R-UhFVKxAI1FKUYKxbCnSB5ta9XUubuN2tBDBBYYuaEnyntyXINQ1YTGnRj_4tOmM6JFFGIUBpnnZodaYwyaSBhsaMhJ-M3DQaGwjg79omhIbuc90gYqCyvz5Tw=s16000" class="img-fluid"/> </a> </div>
</div>`,`<!--siuu--><div class="container-fluid" style="margin-top: 30px;">
<div class="row">
    <div class="col-md-3  col-6"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEg7zBSpi1mxq5vBQLZno55_3uMlF8_h3ihwKstP--41Exng5yRCNktOEQQcHKX9b6VacKPMVqAwE_sSxbogF6YOB5n4H8bgWlJGa6nvAZitIea9ByrtCwq4kMKc3l-nZkDgNq7GelgkzcU3g6yvqWILgrbF01p8bdHiZbV3vnBXJUSGMlFE339w83zqfQ=s16000" class="img-fluid"/> </div>
  </div> </div>`]
let tx1=["https://blogger.googleusercontent.com/img/a/AVvXsEgWuf3gF2Z_JEUCYLedQi33I7Ga7K80Or-SLQMB0alcxG2-9uap2nVdcbsiAmGlb6Dk_eoGkyPMKyd_NEX_QOTpCt-SZHLTSE9twLKn_FjSGIDkCsaCFc6vtr79M2Plh4U_qTWiRdx0Fb1KCeNCr8Rx1KzaygjLuW1N4BykxxZy7GbMrLgpAzU9iZ0ANA=s16000","https://blogger.googleusercontent.com/img/a/AVvXsEgWuf3gF2Z_JEUCYLedQi33I7Ga7K80Or-SLQMB0alcxG2-9uap2nVdcbsiAmGlb6Dk_eoGkyPMKyd_NEX_QOTpCt-SZHLTSE9twLKn_FjSGIDkCsaCFc6vtr79M2Plh4U_qTWiRdx0Fb1KCeNCr8Rx1KzaygjLuW1N4BykxxZy7GbMrLgpAzU9iZ0ANA=s16000","https://blogger.googleusercontent.com/img/a/AVvXsEgr1uE8nFzl1N--SxKEk1wituGUmFMx2MhN5RNRMD3r0BsQB7Ei25fwRtA6F-4tUAhYYpzIejmmBhN199JwinbejcRWEnDzTInD9Tqnys_h3zAbNQ9qY9rYm1swNA4igOd2i8fo1OS_X3RedCIpuJtI_05uMEjAzCuKZj2ugMrVv7YkzjVec1ItuNzo4A=s16000","https://blogger.googleusercontent.com/img/a/AVvXsEg8BVybla_BrcTsYHXq8fa1SWJYmeJXqpCahpu31n9Ja_CjDDdaPMdeX3LJkas74ukxPkB62qFWjEAFImtj_MqJv6Anu-J6tEySnIYB2bNp_7Eo907jkATck5w_98ew-NZ9TW_pBYIGNVDM4uJLXW1mkT-WB28RPiwmJvmHAn8sez5Zrf2Qz4BBXLY-8A=s16000","https://blogger.googleusercontent.com/img/a/AVvXsEgr1uE8nFzl1N--SxKEk1wituGUmFMx2MhN5RNRMD3r0BsQB7Ei25fwRtA6F-4tUAhYYpzIejmmBhN199JwinbejcRWEnDzTInD9Tqnys_h3zAbNQ9qY9rYm1swNA4igOd2i8fo1OS_X3RedCIpuJtI_05uMEjAzCuKZj2ugMrVv7YkzjVec1ItuNzo4A=s16000","https://blogger.googleusercontent.com/img/a/AVvXsEgr1uE8nFzl1N--SxKEk1wituGUmFMx2MhN5RNRMD3r0BsQB7Ei25fwRtA6F-4tUAhYYpzIejmmBhN199JwinbejcRWEnDzTInD9Tqnys_h3zAbNQ9qY9rYm1swNA4igOd2i8fo1OS_X3RedCIpuJtI_05uMEjAzCuKZj2ugMrVv7YkzjVec1ItuNzo4A=s16000","https://blogger.googleusercontent.com/img/a/AVvXsEjlUqGvtEg4f0azeglHvy-x9jPQGp0Zkk8HLPTBeyIDAAVgq5jSCiUK2RzWhN0y63yZJVur5gEYyD5bJahCcacDjB7waKBZ2o5mSfHGM0qu7W5rus4S9vlW98zgJmhfICCENml9uZknT5nCfIMWETlWiPeKQkc0iyTQzOv1cX3NWCVpm8Yy_FNRPV49Fg=s16000","https://blogger.googleusercontent.com/img/a/AVvXsEgr1uE8nFzl1N--SxKEk1wituGUmFMx2MhN5RNRMD3r0BsQB7Ei25fwRtA6F-4tUAhYYpzIejmmBhN199JwinbejcRWEnDzTInD9Tqnys_h3zAbNQ9qY9rYm1swNA4igOd2i8fo1OS_X3RedCIpuJtI_05uMEjAzCuKZj2ugMrVv7YkzjVec1ItuNzo4A=s16000","https://blogger.googleusercontent.com/img/a/AVvXsEiKBnLp0kuRbzb5OKEJOP927RYhvIK3TcYUXhI102K7vWZE7oeN3k4o58a8qtAUDiDl0FoN_Oxbuzbv9h5GFo73BQmIHvtPCyebsB8ZCxNgEsCWcKSMLRVvbq6EaWJV8iZTqx0FSozyKMRatbFPx7k1Jjn6W9DAIHX4jNkG9n3MtmtOtEJcP17U6_WVQw=s16000","https://blogger.googleusercontent.com/img/a/AVvXsEgr1uE8nFzl1N--SxKEk1wituGUmFMx2MhN5RNRMD3r0BsQB7Ei25fwRtA6F-4tUAhYYpzIejmmBhN199JwinbejcRWEnDzTInD9Tqnys_h3zAbNQ9qY9rYm1swNA4igOd2i8fo1OS_X3RedCIpuJtI_05uMEjAzCuKZj2ugMrVv7YkzjVec1ItuNzo4A=s16000"]

//input Event
bi.onfocus=function () {
  bs.style="z-index: 99999999; opacity: 0.7; background-color: #000; position: fixed;  width: 100%; height: 100%; display:block;"
}
bi.onblur=function name() {
  bs.style="z-index: 99999999; opacity: 0.6; background-color: #000; position: fixed;  width: 100%; height: 100%; display:none;"
}
// Sreach to value of input 
ba.onclick=function () {
  var p=-1;
  for (let k = 0; k <= tx.length -1; k++) {
    if (bn.value.toLowerCase() === `${tx[k]}` ) {
      bt.innerHTML=`${tn[k].toString()}`
      bc.innerHTML=`<img src="${tx1[k]}" class="img-fluid"/>`
      for (let k11 = 1; k11 < btall.length; k11++) {
        btall[k11].innerHTML=`<!--none-->`
      }
      p=p+1;
      break;
    }else  if (`${bn.value}`.slice(0,2).toLowerCase() === `${tx[k]}`.slice(0,2)  || bn.value.toLowerCase().slice(0,2) ===  `${tx[k]}`.slice(0,2) ) {
        p=p+1;
        if(p==0){
          for (let k11 = 1; k11 < btall.length; k11++) {
            btall[k11].innerHTML=`<!--none-->`
          }
          bc.innerHTML=`<img src="${tx1[k]}" class="img-fluid"/>`
          bt.innerHTML=`${tn[k].toString()}`
        }
        btall[p].innerHTML=`   <!-- <div class="container-fluid" style="margin-top: 30px;">
        <div style=" margin-bottom: 20px;"> b5iti tgol <b style="color:blue">${tx[k]}</b> <br>
        Essayez avec l'orthographe  <b style="color:blue"> ${bn.value} </b></div>--> ${tn[k].toString()} `
            
          }

    }
    if (p==-1) {
      bc.innerHTML=`<!--none-->`
           bt.innerHTML=`        <div class="container-fluid" style="margin-top: 30px;">
      <div>Aucun résultat trouvé pour  <b style="color:blue"> ${bn.value} </b></div>
      <div class="mt-5" style="display: flex; justify-content: center;">
       <img src="https://blogger.googleusercontent.com/img/a/AVvXsEh3LKBvzajuQsUpfbTgpAdkq_D4dGgNONt6KzHY115vPfvtPhkoVKXny3peu-kx64OnwBzLec2BygEIEtTK93MX-kxi9MFxNdOBpStn5QRQ4w0q6edwKMXk-8Osjvtg7xPqgoWdTYQ4_guwgb2Cx_5LSrUHVegZgafm2AWoWcmpqduMj4o0-5-JVo45og=s16000" style="width: 300px; margin-left: 12%;"/> 
      </div>`
      for (let k11 = 1; k11 < btall.length; k11++) {
        btall[k11].innerHTML=`<!--none-->`
      }
      
    }
  }
 bn.addEventListener("input",(e)=>{if (e.key=="Enter") {
   bn.style.display="none"
 }})
  // var of connection
  let user=document.querySelector("a#con")
  let c19=document.querySelector("div#c1")
  let c20=document.querySelector("div#c2")
  let c21=document.querySelector("div#sr")
  let c22=document.querySelector("button#nu")
  let c23=document.querySelector("input#user-name")
  let c24=document.querySelector("a#con")
  //tread of user
  user.onclick=function () {
    c20.style="display: flex; justify-content: center; "
    c19.style="display:block;"
    document.body.style="overflow-y:hidden;"
  }
  c21.onclick=function () {
    c20.style="display: none;  "
    c19.style="display:none;"
    document.body.style="overflow-y:auto;"
  }
  // Dynamique Local Storage
  c22.onclick=function () {
    if (c23.value !='') {
      window.localStorage.setItem("user-name",`${c23.value}`)
      c24.innerHTML=`
      <i class="far fa-user img-fluid"></i> ${window.localStorage.getItem("user-name")}`
    }
  }
  if (window.localStorage.getItem("user-name")) {
    c24.innerHTML=`
    <i class="far fa-user img-fluid"></i> ${window.localStorage.getItem("user-name")}`
  }
  let wo=document.querySelector("div.page-lo")
  const lo=document.querySelector("div.page-lo");
 // window.setTimeout(()=>{lo.style=' animation-name: loding;  animation-duration: 2s;  animation-fill-mode: forwards; animation-timing-function:linear;';window.setTimeout(()=>{lo.remove();document.body.style.overflowY='auto'},0)},0)
  var tost=document.querySelector("div#tost")
  var tost2=[`<div id="liveToast" class="toast show animate__fadeInUp animate__animated"  role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header" style="height: 70px;">
<img style="width: 65px;" src="https://blogger.googleusercontent.com/img/a/AVvXsEjOOU3tY8FWG4Ih0l0LlgzTSxDzg1TSUgh2BbCfNXKTO15aLCWT1Ty4hf_6z3HLff2mJQ22yhuPYKwCpRrllsyddPNytSNvTrxAz0W4A0_GsCsyR-72f3YVYiEQZ_BxgRT6bV0ZxYQKCgrOB39Wz6yi47FPnBz6TQAtcWAbAKdP48Vx5hO-k9SKzPEiRQ=s16000" class="bd-placeholder-img rounded me-2">

    <span class="me-auto">YOUNES a acheter jacket et laisse un Commendaire <strong>"Dima Maroc merci Tba3.com "</strong> </span>
    <small>10m </small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  </div>`,`<div id="liveToast" class="toast fade "  role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header" style="height: 70px;">
<img style="width: 65px;" src="https://blogger.googleusercontent.com/img/a/AVvXsEjOOU3tY8FWG4Ih0l0LlgzTSxDzg1TSUgh2BbCfNXKTO15aLCWT1Ty4hf_6z3HLff2mJQ22yhuPYKwCpRrllsyddPNytSNvTrxAz0W4A0_GsCsyR-72f3YVYiEQZ_BxgRT6bV0ZxYQKCgrOB39Wz6yi47FPnBz6TQAtcWAbAKdP48Vx5hO-k9SKzPEiRQ=s16000" class="bd-placeholder-img rounded me-2">

    <span class="me-auto">YOUNES a acheter jacket et laisse un Commendaire <strong>"Dima Maroc merci Tba3.com "</strong> </span>
    <small>10m </small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  </div>`,`<div id="liveToast" class="toast show  animate__animated animate__fadeInUp"  role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header" style="height: 70px;">
<img style="width: 65px;" src="https://blogger.googleusercontent.com/img/a/AVvXsEh_L5CH9x0iIEAnszN83E4k4zGY3ig_iH3AFg41z_d0Q6THstm0IQFLs37YyvtYbzdjAja1g_xT2vfuTn6Qn2jhDNuxPmRSMP5KgqWxcPGgFvEDhVg2lyZcj1ZBQg5-8btLXXc2dJrcXbT8KIJagwPbEWu2cRUNvQA5BKVP1NXT7hW8-ojF7aCXQlVFow=s16000" class="bd-placeholder-img rounded me-2">

    <span class="me-auto">MOSTAFA a acheter jacket nasa et laisse commentaire <strong>"la livraison est bon"</strong> </span>
    <small>10m </small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div></div>`,`<div id="liveToast" class="toast fade"  role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header" style="height: 70px;">
<img style="width: 65px;" src="https://blogger.googleusercontent.com/img/a/AVvXsEh_L5CH9x0iIEAnszN83E4k4zGY3ig_iH3AFg41z_d0Q6THstm0IQFLs37YyvtYbzdjAja1g_xT2vfuTn6Qn2jhDNuxPmRSMP5KgqWxcPGgFvEDhVg2lyZcj1ZBQg5-8btLXXc2dJrcXbT8KIJagwPbEWu2cRUNvQA5BKVP1NXT7hW8-ojF7aCXQlVFow=s16000" class="bd-placeholder-img rounded me-2">

    <span class="me-auto">MOSTAFA a acheter jacket nasa et laisse commentaire <strong>"la livraison est bon"</strong> </span>
    <small>10m </small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div></div>`,`<div id="liveToast" class="toast show animate__fadeInUp animate__animated"  role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header" style="height: 70px;">
<img style="width: 65px;" src="https://blogger.googleusercontent.com/img/a/AVvXsEiyOwHiLJN8B59Ym04FMAhpN7YdrJhWkPy0_6IMExoIIIyITbnaugAN_uZDa1BuqUy6KfOLZPkoq3eRYMRfxWdGv3Xf8AnSQ7oEyRewdvf46lq1dAE6c40NTZukkQVFSAePn1qtxvnW5aPO44B_hVg_bysaKiy4JEMmC4poanIcpQ3NC8l4ahW7JTdD_A=s16000" class="bd-placeholder-img rounded me-2">
    <span class="me-auto">ANAS a acheter 5 t-chirt onepiece <strong>"La qualité qui parle "</strong> </span>
    <small>10m </small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  </div>`,`<div id="liveToast" class="toast fade"  role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header" style="height: 70px;">
<img style="width: 65px;" src="https://blogger.googleusercontent.com/img/a/AVvXsEiyOwHiLJN8B59Ym04FMAhpN7YdrJhWkPy0_6IMExoIIIyITbnaugAN_uZDa1BuqUy6KfOLZPkoq3eRYMRfxWdGv3Xf8AnSQ7oEyRewdvf46lq1dAE6c40NTZukkQVFSAePn1qtxvnW5aPO44B_hVg_bysaKiy4JEMmC4poanIcpQ3NC8l4ahW7JTdD_A=s16000" class="bd-placeholder-img rounded me-2">
    <span class="me-auto">ANAS a acheter 5 t-chirt onepiece <strong>"La qualité qui parle "</strong> </span>
    <small>10m </small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  </div>`]
var tost3=document.querySelector("div#liveToast");
var index=-1;
window.setTimeout(()=>{window.setInterval(()=>{index+=1; tost2[index]== undefined?tost.remove(): tost.innerHTML=tost2[index] },7000)},3000)
var lu=document.querySelector("a#lc");
var luc=document.querySelector("section#luky")
lu.addEventListener("click",()=>{luc.style="display:block;";luc.classList.add("animate__heartBeat");document.body.style.overflowY="hidden"})
var clo=document.querySelector("div#back")
clo.addEventListener("click",()=>{luc.style="display:none;";lucky.style=``;luc.classList.remove("animate__heartBeat");document.body.style.overflowY="auto"})
const buu=document.querySelector("button.button-14");
const bo=document.querySelector("div#Note");
const bo1=document.querySelector("div#N1");
const bo2=document.querySelector("div#Note1");
const bo3=document.querySelector("div#Note2");
const bo4=document.querySelector("i#close_5");
const bo5=document.querySelector("div#Note11");
const bo6=document.querySelector("div#Note22");
const bo7=document.querySelector("i#close_6");
const bo8=document.querySelector("audio#pop");
window.addEventListener("load",()=>{
if (!window.localStorage.getItem("AF")) {
  window.setTimeout(()=>{bo2.style.display="grid";bo3.classList.add("animate__animated"); bo3.classList.add("animate__bounceIn"); },500)
  bo4.addEventListener("click",()=>{ 
    bo2?bo2.remove():NaN
    window.setTimeout(()=>{bo5.style.display="grid";bo6.classList.add("animate__animated"); bo6.classList.add("animate__bounceIn");},500)
    bo7.addEventListener("click",()=>{
      bo5?bo5.remove():NaN
      window.setTimeout(()=>{bo.style.display="grid";bo1.classList.add("animate__animated"); bo1.classList.add("animate__zoomInDown");},8000);
      buu.addEventListener("click",()=>{
          swal.fire({
              icon:'success',
              title:'Thank you for comment',
              width:400,
              showConfirmButton: false,
              timer:1200
          })
          bo.remove();
      })
    })
    window.localStorage.setItem("AF","off")
  })
}

})
introJs().start();
    var free=document.querySelector("button.button-19");
    var lucky=document.querySelector("img.im");
    var pp=0;
    free.addEventListener("click",(e)=>{pp+=1; lucky.style=`animation-name: lucky;   animation-duration: 5s; animation-fill-mode: backwards;`
  if(pp==1){ window.setTimeout(()=>{Swal.fire({
  title: 'Jacket Maroc',
  html: "<del>150dh</del><span>100dh</span>",
  imageUrl: 'https://blogger.googleusercontent.com/img/a/AVvXsEhKzttHqeR4PhTEI85WKiU2-ckS7na7b--YHg31NietkYnFV7a0joyVULaL_YFqJ5ANQrJKH6aLRqe_VoJSg4_K92qQq_tJ6ozemzlxl9ffPXqhbFt99Vg2R2-gOEaAyBoQzMRm_hOnT9lSwBJEhHIyND_iz_mhBw4s_VW0e9wFps9GKGe67yOW-KWzmA=s16000',
  imageWidth: 300,
  imageAlt: 'Custom image',
  width:400,

})},5000)}})



  
  
  
  
  

