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

   
}

 $('.mybutton').on('click', function(){

        drawInfo(json, $(this).attr('data-index'));  
    });


function drawInfo(json, index, target){
    
    $('#match').empty();

    var $details = $('<div/>').addClass('detals');
    var $logos = $('<div/>').addClass('logos');
//    var $names = $('<div/>').addClass('names');
    var $logo = $('<div/>').addClass('logo');
    var $logo2 = $('<div/>').addClass('logo');
    var $vs = $('<div/>').addClass('vs');
    var $name = $('<div/>').addClass('name');
    var $name2 = $('<div/>').addClass('name');
    var $field = $('<div/>').addClass('field');
    var $button = $('<button class="btn btn-success mapButton">Show map</button>');

    $logo.append('<img src="escudos/' + json.matches[index].teams.home.logo + '">');
    $logo.append($name);
    $logo2.append('<img src="escudos/' + json.matches[index].teams.away.logo + '">');
    $logo2.append($name2);
    $vs.append('vs');

    $logos.append($logo, $vs, $logo2);
    
    $name.append(json.matches[index].teams.home.name);
    $name2.append(json.matches[index].teams.away.name);
    
    $field.append(json.matches[index].field.name);

    $('#match').append($logos, $field, $button);
    

}





//		


