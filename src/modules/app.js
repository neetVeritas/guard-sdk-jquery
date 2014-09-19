var Module = Module || {}; // create namespace if does not already exist

Module.App = {
    
    identify: function(identifier) {
        $parameters =
        { // request parameters
            'mod': 'app',
            'id': identifier,
            'cmd': 'data'
        };
        $result = Utility.request( $parameters );
        if( !$result.error ) {
            console.log( "App Returned: " + JSON.stringify( $result ) );
            return $result;
        } else {
            window.alert( $result.error );
            console.log( "Driver Returned: " + $result.error );
            return false;
        }
    }
    
};