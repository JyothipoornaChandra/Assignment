const http = new XMLHttpRequest();
http.open("GET","plant_dashboard.json",true);
http.onreadystatechange = function ()
{
if(http.readyState == 4)
{

var data = JSON.parse(http.response);
//console.log(data[0]);
var keylists = [];

    for(var key in data)
        {
            keylists.push(key);
        }
        console.log(keylists);
        
    keylists.forEach(myFunction);
    function myFunction(value,index,array)
    {
        indexval = index + 1;
        indexvals = indexval.toString();
        console.log(indexvals);
        console.log(document.getElementById(indexvals + "unit"));
        document.getElementById(indexvals + "panel").innerHTML = value;
        document.getElementById(indexvals + "unit").innerHTML = data[value]["Unit"];
        document.getElementById(indexvals + "value").innerHTML = data[value]["Operating"].toFixed(2);
        document.getElementById(indexvals + "corrected").innerHTML = "Corrected :" + data[value]["Corrected"].toFixed(4);
        document.getElementById(indexvals + "design").innerHTML = "Design : " + data[value]["Design"].toFixed(4);        
        
    }
}

}

http.send();