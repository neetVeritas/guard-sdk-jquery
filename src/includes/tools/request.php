<?php

    define( DEVELOPER_KEY, '*' ); // define developer key constant
    define( DRIVER_LOC, 'https://guard-qpc23.cf/api/driver.php?key=' . DEVELOPER_KEY ); // define base for driver requests
    
    $loc = DRIVER_LOC;
    if( $_POST['params'] ):
        $parameters = json_decode( $_POST['params'] );
        foreach( $parameters as $key=>$p ):
            $loc .= "&$key=$p";
        endforeach;
        exit( file_get_contents( $loc ) );
    else:
        $result = new stdClass;
        $result->error = "Driver Parameters Not Found";
        exit( json_encode( $result ) );
    endif;

?>
