let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 
   tg.expand(); 
   const cashback_value = document.querySelector("#cashback_value");
   const cashback = document.querySelector("#cashback");
   const costk = document.querySelector("#costk");
   const costn = document.querySelector("#costn");
   const result = document.querySelector("#result");

   cashback_value.textContent = cashback.value;
   cashback.addEventListener("input", (event) => {

   cashback_value.textContent = event.target.value;
    const costn_v = document.getElementById("costn").value;
   result.textContent = event.target.value+costn_v;
   });