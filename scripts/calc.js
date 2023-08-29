function calc_gnc(){
    let costk = document.getElementById("cost_k").value;
    let costn = document.getElementById("cost_n").value;
    if(parseFloat(costk)<3000){discount = 50}else{discount=500}
    const result = document.querySelector("#result");
    const cost_rn = document.querySelector("#cost_rn");
    if(parseFloat(costn)>parseFloat(costk)){k=0.7};
    if (parseFloat(costk)==0||parseFloat(costn)==0|| isNaN(parseFloat(costk))|| isNaN(parseFloat(costn)))
    {result.textContent = '';
    cost_rn.textContent =''; 
    } 
    else 
    if (parseFloat(costk)<300 || (parseFloat(costn) - parseFloat(costk))<10 )
    {result.textContent = 'Скидку не делаем';
    cost_rn.textContent ='';    
    }
    else
    {
    let costn_s = Math.round(parseFloat(costn)*parseFloat(k));
    let costk_s = parseFloat(costk)-parseFloat(discount);
    let cost = Math.max(costk_s, costn_s);
    if (cost==costk_s)
    {result.textContent = 'скидка '+discount+'р от цены конурента';
    }
    else{result.textContent = 'скидка 30% от нашей цены'}
    cost_rn.textContent = 'Цена в РН: '+cost+' р'
    }}
function calc_cashback(){
    let costk = document.getElementById("cost_k").value;
    let costn = document.getElementById("cost_n").value;
    const cb_value = document.querySelector("#cb_value");
    const in_cashback = document.querySelector("#cashback");
    const result = document.querySelector("#result");
    const cost_rn = document.querySelector("#cost_rn");
    cb_value.textContent = in_cashback.value; ///обновляет значение на странице
    let cashback_value = in_cashback.value; ///само значение
    if (parseFloat(costk)==0 || parseFloat(costn)==0 || isNaN(parseFloat(costk)) || isNaN(parseFloat(costn)))
    {result.textContent = '';
    cost_rn.textContent =''; 
    
    } else    ////проверяем введенные значения на заполнение, если одно не заполнено - очищаем вывод

    {let k = 0.7;
    let base_cost = parseFloat(costk);   ////за базовую берем цену конкурента
    let base_t = 'цены конкурента';
    let cb = parseFloat(cashback_value)/100/2   ///значение переводим в проценты и делим пополам
    let cost_cb = parseFloat(base_cost)*parseFloat(cb) ///получаем сумму кэшбека в рублях
    let cost = parseFloat(base_cost)-parseFloat(cost_cb) ///вычисляем промежуточную цену, базовая минус кэшбек
    if (parseFloat(costk)-parseFloat(cost_cb)>=parseFloat(costn))
    {result.textContent = '';
    cost_rn.textContent =''; 
} ////проверяем введенные значения на заполнение, если наша цена лучше - очищаем вывод
else
    {let costn_k =  Math.round(parseFloat(costn)*parseFloat(k)); ///вычисляем нашу максимальную цену, которую можем дать
    let cost_r = Math.max(costn_k, cost); ///берем из промежуточных максимальную
    if (cost_r==costn_k)
    {
    {result.textContent = 'скидка 30% от нашей цены'}
    }
    else
    {result.textContent = 'скидка '+parseFloat(cashback_value)/2+'% от '+base_t;
    }
    cost_rn.textContent = 'Цена в РН: '+cost_r+' р'
    }}}
    // let cost_in = parseFloat(costk);
    // let cost_t ='цены конкурента';
    // if (parseFloat(costn)>parseFloat(costk)) {
    //     cost_in = parseFloat(costn);
    //     cost_t = 'нашей цены';
    //     max_costn = parseFloat(costn)*parseFloat(k)
    // } 
    // cb_value.textContent = in_cashback.value;
    // let cashback_value = in_cashback.value;
    // let cb = parseFloat(cashback_value)/100/2

    // let costk_wcb = parseFloat(costk)-parseFloat(costk)*parseFloat(cb)
    // else
    // if (parseFloat(costk_wcb)>=parseFloat(costn)) {
    //     result.textContent = 'наша цена лучше';
    // cost_rn.textContent ='';
    // } 
    // else
    // {
    // let costn_k = Math.round(parseFloat(cost_in)*parseFloat(k));
    // let costn_c = Math.round(parseFloat(cost_in)-parseFloat(cost_in)*parseFloat(cb));

    // let cost = Math.max(costn_k, costn_c);
    // console.log(cost)
    // if (cost==costn_c)
    // {result.textContent = 'скидка '+parseFloat(cashback_value)/2+'% от '+cost_t;
    // }
    // else{result.textContent = 'скидка 30% от нашей цены'}
    // cost_rn.textContent = 'Цена в РН: '+cost+' р'
    // }

