$.getJSON('myObject.json', function(json) {
    console.log(json);
    createTable(json);
});


function createTable (json) {

    for(var i = 0; i < json.matches.length; i++){

        var tr = document.createElement('tr');

        tr.insertCell().innerHTML = json.matches[i].teams.home.name;
        tr.insertCell().innerHTML = json.matches[i].teams.away.name;
        tr.insertCell().innerHTML = json.matches[i].field.name;
        tr.insertCell().innerHTML = '<button class="btn btn-info mybutton" data-index="' + i + '">More Info</button>';

        $('#matches').append(tr);
    }

    $('.mybutton').on('click', function(){
        drawInfo(json, $(this).attr('data-index'));  
    });

   
}

 


function drawInfo(json, index, target){
    $('#match').empty();

let template = 
    `<div class="logos">
        <div class="logo"><img src="escudos/${json.matches[index].teams.home.logo}"/></div>
        <div class="logo"><img src="escudos/${json.matches[index].teams.away.logo}"/></div>
    </div>
    <div class="names">
        <div class="name">${json.matches[index].teams.home.name}</div>
        <div class="name">${json.matches[index].teams.home.name}</div>
    </div>
    <div class="field">
        ${json.matches[index].field.name}
    </div>
    <button id="btn btn-success myButton"> Show Map</button>`
    
    

    document.querySelector("#match").innerHTML = template;
    

}





//		


