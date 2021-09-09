$(document).ready(function () {
    $('.submit').click(function (e) {
        const data = {};
        data['date'] = $('.date').val();
        e.preventDefault();
        console.log(data);
        $.getJSON("https://api.nasa.gov/planetary/apod?api_key=jwtvJcPLGK9ZanjHWRQlF2x3RAIpoZ12ChdBHDPh", data,
            function (data, textStatus, jqXHR) {
                console.log(data);
                $(".NASA_data").attr("src", data.url);
                $(".NASA_explanation").html(data.explanation);
            }
        );
    });
});