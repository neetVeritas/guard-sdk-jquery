var Module = Module || {}; // create namespace if does not already exist

Module.User = {
    
    profile: function(username, phrase) {
        $parameters =
        { // request parameters
            'mod': 'user',
            'user': username,
            'phrase': phrase,
            'cmd': 'data',
            'a': 'guard'
        };
        $result = Utility.request( $parameters );
        if( !$result.error ) {
            console.log( "Profile Returned: " + JSON.stringify( $result ) );
            return $result;
        } else {
            window.alert( $result.error );
            console.log( "Driver Returned: " + $result.error );
            return false;
        }
    }
    
};