<?php

$ip = $_GET['host'];

if($ip != NULL && $ip >= 7)
{
    $resp = file_get_contents("http://ip-api.com/json/$ip?ang=en");
    $resp = str_replace('{', NULL, $resp);
    $resp = str_replace('}', NULL, $resp);
    $resp = str_replace('"', NULL, $resp);
    $resp = str_replace(':', ': ', $resp);
    $resp = str_replace(",", "\r\n", $resp);
    $resp = str_replace("\r\nstatus: success", NULL, $resp);
    echo $resp;

//test
}
else
{
    echo "[IPLookup-API] Syntax Error.";
}

?>