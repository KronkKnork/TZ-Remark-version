<?php
    $sum = $_POST['sum'];
    $period = $_POST['period'];
    $rate = $_POST['rate'];

    $i = ($rate / 12) / 100;
    $kf = ($i * (pow(1 + $i, $period * 12))) / (pow(1 + $i, $period * 12) - 1);
    $result = $sum * $kf;
    echo round($result);
?>