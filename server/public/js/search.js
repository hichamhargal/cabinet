var timer;
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
function up()
{
    //var token = $('meta[name="csrf_token"]').attr('content'); // or _token, whichever you are using
    //if (token) {
     //   return xhr.setRequestHeader('X-CSRF-TOKEN', token); // adds directly to the XmlHttpRequest Object
    //}
    timer = setTimeout(function()
    {
        var keywords= $('#search-input').val();
        if (keywords.length > 0)
        {
            $.post(searchurl, {'keywords': keywords},function (markup)
            {
                $('#search-results').html(markup);
            });
        }
    },500);
}

function down()
{
    clearTimeout(timer);
}