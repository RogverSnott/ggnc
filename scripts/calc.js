function calc_gnc(){
    let costk = document.getElementById("cost_k").value;
    let costn = document.getElementById("cost_n").value;
    if(parseFloat(costk)<3000){discount = 50}else{discount=500}
    const result = document.querySelector("#result");
    const cost_rn = document.querySelector("#cost_rn");
    if(parseFloat(costn)>parseFloat(costk)){k=0.7};
    let not_null = parseFloat(costk)*parseFloat(costn)
    if (parseFloat(not_null)==0 ||  isNaN(parseFloat(not_null)))
    {result.textContent = '';
    cost_rn.textContent =''; 
    } 
    else 
    if (parseFloat(costk)<300 || (parseFloat(costn) - parseFloat(costk))<10 )
    {result.textContent = 'скидку не делаем';
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
    cost_rn.textContent = 'цена в РН: '+cost+' р'
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
    let not_null = parseFloat(costk)*parseFloat(costn)
    if (parseFloat(not_null)==0 ||  isNaN(parseFloat(not_null)))
    {result.textContent = '';
    cost_rn.textContent =''; 
    } else    ////проверяем введенные значения на заполнение, если одно не заполнено - очищаем вывод
    {
    let k = 0.7;
    let base_cost = parseFloat(costk);   ////за базовую берем цену конкурента 
    let base_t = 'цены конкурента';
    let cb = parseFloat(cashback_value)/100/2   ///значение переводим в проценты и делим пополам
    let cost_cb = parseFloat(base_cost)*parseFloat(cb) ///получаем сумму кэшбека в рублях
    let cost = parseFloat(base_cost)-parseFloat(cost_cb) ///вычисляем промежуточную цену, базовая минус кэшбек
    if (parseFloat(costk)-parseFloat(cost_cb)>=parseFloat(costn))
    {result.textContent = 'наше предложение лучше';
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
    cost_rn.textContent = 'цена в РН: '+cost_r+' р'
    }}}
function calc_delivery(){
        let costk = document.getElementById("cost_k").value;
        let costn = document.getElementById("cost_n").value;
        let del_n = document.getElementById("del_n").value;
        const del_text = document.querySelector("#free_del");
        let del_k = 0
        if (!del_text.checked){del_k=1}
        const result = document.querySelector("#result");
        const cost_rn = document.querySelector("#cost_rn");
        let not_null = parseFloat(costk)*parseFloat(costn)*parseFloat(del_n)
        if (parseFloat(not_null)==0|| isNaN(parseFloat(not_null)))
        {result.textContent = '';
        cost_rn.textContent =''; 
        } else
        {
        let k = 0.7;
        let base_cost = parseFloat(costk);   ////за базовую берем цену конкурента 
        let base_t = 'цены конкурента';
        let cost_v = parseFloat(base_cost)+parseFloat(del_k) ///вычисляем промежуточную цену, базовая плюс доставка
        if (parseFloat(costn)+parseFloat(del_n)<=parseFloat(cost_v))
        {result.textContent = 'наше предложение не хуже';
        cost_rn.textContent =''; 
        } ////проверяем введенные значения на заполнение, если наша цена лучше - очищаем вывод
        else
        {
        let diff_cost = parseFloat(costn)+parseFloat(del_n) -parseFloat(cost_v)   ;
        let cost = parseFloat(costn) - parseFloat(diff_cost);
        let costn_k =  Math.round(parseFloat(costn)*parseFloat(k)); ///вычисляем нашу максимальную цену, которую можем дать
        let cost_r = Math.max(costn_k, cost); ///берем из промежуточных максимальную
        if (cost_r==costn_k)
        {
        {result.textContent = 'скидка 30% от нашей цены'}
        }    else
        {result.textContent = 'скидка '+diff_cost+' р от нашей цены';
        }
        cost_rn.textContent = 'цена в РН: '+cost_r+' р'
        }
        }

        }
function calc_rassrochka(){
        let costk = document.getElementById("cost_k").value;
        let costn = document.getElementById("cost_n").value;
        const no_rass = document.querySelector("#no_rass");
        let rass_on = 0
        if (no_rass.checked){k=0.10; t='без рассрочки'} else {k=0.03, t='с рассрочкой'}
        const result = document.querySelector("#result");
        const cost_rn = document.querySelector("#cost_rn");
        let not_null = parseFloat(costk)*parseFloat(costn)
        if (parseFloat(not_null)==0|| isNaN(parseFloat(not_null)))
        {result.textContent = '';
        cost_rn.textContent =''; 
        } else
        
        {
        result.textContent = 'скидка '+parseFloat(k)*100+'%, '+t;
        let cost_r = parseFloat(costn)-parseFloat(costn)*k;
        cost_rn.textContent = 'цена в РН: '+cost_r+' р'; 
        }}

