var act = document.getElementById("btn_1");
act.addEventListener('click', getRandom);



function getRandom(min, max)
{
    var temp = Math.floor(Math.random() * (89999999) + 10000000);
    var splitvalue = temp.toString().split('');
    const id = new Set();
    for(let i=0;i<splitvalue.length;i++){
        id.add(splitvalue[i]);
    }
    if(id.size != splitvalue.length){
        getRandom(min, max);
    }
    else{
        console.log(temp);
        var num = document.getElementById('output_1');
        num.innerHTML = temp;
    }
}

// BOX-2 CODE:

var act2 = document.getElementById("btn_2");
act2.addEventListener('click', dispoutput);


// var month_Diff = Math.floor(microSecondsDiff/(1000 * 60 * 60  * 24));
// var year_Diff = Math.floor(microSecondsDiff/(1000 * 60 * 60  * 24));

document.getElementById('output_2').setAttribute('style','font-size: 25px; font-weight: normal;')

function dispoutput(){
    var us_dt = document.getElementById('input_date').value;
    // document.getElementById("output_2").innerHTML = us_dt;
    console.log(us_dt);
    var us_dt_Obj = new Date(us_dt + "T00:00:00Z");
    var us_time_stamp = (new Date(us_dt_Obj)).getTime();
    
    var cu_dt = new Date();
    var cu_time_stamp = cu_dt.getTime();
    
    var millis_Diff = Math.abs(us_time_stamp - cu_time_stamp);
    var days_Diff = Math.floor(millis_Diff/(1000 * 60 * 60  * 24));
    var secs_Diff = Math.floor(millis_Diff/(1000));
    var min_Diff = Math.floor(millis_Diff/(1000 * 60));

    var years_Diff = cu_dt.getFullYear() - us_dt_Obj.getFullYear();
    if(cu_dt.getFullYear() < us_dt_Obj.getFullYear()) {
        years_Diff--;
    }
    if(cu_dt.getMonth() == us_dt_Obj.getMonth() && cu_dt.getDate() < us_dt_Obj.getDate()) {
        years_Diff--;
    }
    // var op2 = document.getElementById('output_2');
    document.getElementById("output_2").innerHTML = '[milli secs]: ' + millis_Diff + '; [days diff]: ' + days_Diff + '; [secs diff]: ' + secs_Diff + '; [minutes diff]: ' + min_Diff + '; [years diff]: ' + years_Diff;

}