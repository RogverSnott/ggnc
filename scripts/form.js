function changeFields() {
    var gnc = document.getElementById("gnc");
    var delivery = document.getElementById("delivery");
    var cashback = document.getElementById("cashback");
    var rassrochka = document.getElementById("rassrochka");

    var req_konkurent = document.getElementById("req_konkurent");
    var req_me = document.getElementById("req_me");
    req_konkurent.innerHTML = "";
    req_konkurent.innerHTML = '<div>цена товара:<br><input type="number" inputmode="numeric" id="cost_k">';
    req_me.innerHTML = "";
    req_me.innerHTML = '<div>цена товара:<br><input type="number" inputmode="numeric" id="cost_n">';
    if (gnc.checked) {}

    if (delivery.checked) {
        req_konkurent.innerHTML += 'доставка:<br><input type="radio" id="free_del" name="delivery_cost" checked="true">';
        req_konkurent.innerHTML += '<label for="free_del">бесплатная</label><br></br>';
        req_konkurent.innerHTML += '<input type="radio" id="not_free" name="delivery_cost"><label for="not_free">1 рубль</label>';
        req_me.innerHTML +='<br>цена доставки: <br><input type="number" inputmode="numeric" id="del_n">'
    }
    if (cashback.checked) {
        req_konkurent.innerHTML += '<br>кэшбек: <output id="cb_value" >10</output>%<input type="range" id="cashback_range" value="10" min="5" max="50"  step="5"/>';
    }
    if (rassrochka.checked) {
        /////req_me.innerHTML += '</div>рассрочка:<br><input type="radio" id="no_rass" name="rassrochka"  checked="true"><label for="no_rass">нет</label><br><input type="radio"  id="yes_rass" name="rassrochka"><label for="yes_rass">есть</label></div>';
    }

}