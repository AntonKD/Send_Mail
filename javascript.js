$(document).ready(function(){

    $('.sc_button').on('click', function(e){
        e.preventDefault();
        if (jQuery('.sc_name').val() !=''&& jQuery('.sc_email').val() !=''&&jQuery('.sc_phone').val() !=''){
            var data = {
                name: jQuery('.sc_name').val(),
                email: jQuery('.sc_email').val(),
                phone: jQuery('.sc_phone').val(),
            };
            jQuery.ajax({
                 //  url:"  /wp-content/themes/twentyseventeen/send_mail.php", // if it's wordpress. specify the path to the located file
                url: "send_mail.php",
                type: "post",
                dataType: "html",
                data: data,
                success: function() {
                    //  window.location.href = "http://testtask/thanks/"; //if it's a wordpress. Specify the reference of page
                                                                          // on which you will pass in result of success.
                        window.location.href = "http://localhost/thanks.html";
                },
                error: function(err) {
                    console.log(err);
                }
            });
        }
    });


    $('.sc_back').on('click', function(e){
        e.preventDefault();

        //  window.location.href = "http://testtask/form/"; //if it's a wordpress. Specify the reference of page
                                                             // on which you will pass in result of success.

        window.location.href = "http://localhost/index.php";
    });
});


