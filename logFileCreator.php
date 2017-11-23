<?php

/* 
  This function writes log data to file .txt
*/

public function log($message) {

    return file_put_contents('./Customlog.txt', $message."\r\n", FILE_APPEND);
    
}