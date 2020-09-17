<?php

  public function isNameValid(string $name):bool{
    $valid = TRUE;
    $length = mb_strlen($name);
    if(($length<4)||($length>16))
    {
        $valid=FALSE;
    }
    return $valid;
}

?>