
function loadCustomer() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://randomuser.me/api/?seed=erfan&results=10&page=1', true);
    xhr.send();
    xhr.onload = function () {
        if (this.status === 200) {
            var obj = JSON.parse(xhr.responseText);
            console.log(obj);
            for (var i = 0; i <= $('.name').length; i++) {
                $('.name').eq(i).children('span').text(obj.results[i].name.first);
                $('.family').eq(i).children('span').text(obj.results[i].name.last);
                $('.email').eq(i).children('span').text(obj.results[i].email);
                $('.phoneNumber').eq(i).children('span').text(obj.results[i].phone);

            }

        }

    }

}


loadCustomer();


$('#btnsearch').click( function () {
    for (var i = 0; i < 10; i++) {
        if($('div.search > input').val()==$('.name').eq(i).children('span').text() )
        {
            $('.name').eq(i).addClass('bold');
        }
        else if($('div.search > input').val()==$('.phoneNumber').eq(i).children('span').text()){
            $('.phoneNumber').eq(i).addClass('bold');
        }
        else if($('div.search > input').val()==$('.family').eq(i).children('span').text()){
            $('.family').eq(i).addClass('bold');
        }

    }
});