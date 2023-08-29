let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 
   tg.expand(); 
   let btn = document.getElementById("btn"); //получаем кнопку скрыть/показать 
   btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
    // Get the two numbers
    let costk = document.getElementById("costk").value;
    let costn = document.getElementById("costn").value;
    let itog = document.getElementById("itog");
    let itogchild = document.createElement('div'); 
    let result = '';
    let color = 'div'; 
    let cost = '';
    let colordiv = '';
    let costp = 0;
    let k = 1;
    let discount = 0;
    let costn_s = 0;
    let costk_s = 0;
// логика
if(parseFloat(costk)<3000){discount = 50}else{discount=500}
if(parseFloat(costn)>parseFloat(costk)){k=0.7}
if ((parseFloat(costk)>parseFloat(costn)) || isNaN(parseFloat(costk))|| isNaN(parseFloat(costn)))
    {
        result = 'Проверь цены!!!'
        color = 'red'; 
    }

else
if (parseFloat(costk)<300 || (parseFloat(costn) - parseFloat(costk))<10 )
    {
        result = 'Скидку не делаем'
        color = 'red'; 
    }
else
 {
    costn_s = Math.round(parseFloat(costn)*parseFloat(k));
    costk_s = parseFloat(costk)-parseFloat(discount)
        cost = Math.max(costk_s, costn_s)
        if (cost==costk_s){result = 'скидка '+discount+'р от цены конурента';}else{result = 'скидка 30% от нашей цены'}
    } ;
    ;
///добавляем на страницу
    colordiv = document.createElement(color); 
    costp = document.createElement('div'); 
    colordiv.innerText = result;
    if (parseFloat(cost)>0){costp.innerText = 'Итоговая цена: ' + cost};
    colordiv.appendChild(costp);
    itogchild.appendChild(colordiv); //показываем 
    itog.appendChild(itogchild); //добавляем
   });