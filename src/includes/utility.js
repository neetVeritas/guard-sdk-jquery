var Utility = {
    
    request: function(parameters) {
        parameters = JSON.stringify( parameters );
        var $result;
        $.ajax({
            async: false, // force asynchro call
            type: "POST",
            url: "/src/includes/tools/request.php", // must use php for cross-origin requests
            data: { params:parameters },
            success:function(data) {
                $result = JSON.parse( data );
            },
            error:function(){
                console.log( "Driver Request Failed" );
            }
        });
        return $result;
    }
    
}