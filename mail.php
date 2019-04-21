<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

   if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
   if (isset($_POST['phone_type'])) {$phone = $_POST['qn8'];}
   if (isset($_POST['Äàííûå1'])) {$Äàííûå1 = $_POST['qn1'];}
   if (isset($_POST['Äàííûå2'])) {$Äàííûå2 = $_POST['qn2'];}
   if (isset($_POST['Äàííûå3'])) {$Äàííûå3 = $_POST['qn3'];}
   if (isset($_POST['Äàííûå4'])) {$Äàííûå4 = $_POST['qn4'];}
   if (isset($_POST['Äàííûå5'])) {$Äàííûå5 = $_POST['qn5'];}
   if (isset($_POST['Äàííûå6'])) {$Äàííûå6 = $_POST['qn6'];}
   if (isset($_POST['Ïîäàðîê'])) {$Ïîäàðîê = $_POST['qn7'];}
    $to = "frankie64ify@gmail.com"; /*Óêàæèòå âàø àäðåñ ýëåêòðîííîé ïî÷òû*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $subject = "Çàÿâêà ñ êâèçà Spa-Áàññåéíû";
    $message = "Ðåçóëüòàòû òåñòèðîâàíèÿ:\n
        Òåëåôîí: $phone \n
        Âûñëàòü ðåçóëüòàò: $phone_type \n
        Øàã 1. $Äàííûå1 \n
        Øàã 2. $Äàííûå2 \n
        Øàã 3. $Äàííûå3 \n
        Øàã 4. $Äàííûå4 \n
        Øàã 5. $Äàííûå5 \n
        Øàã 6. $Äàííûå6 \n
        Øàã 7. $Äàííûå7 \n
        Øàã 8. Âûáåðèòå áîíóñ: $Ïîäàðîê";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo "<div>Ñïàñèáî çà îòïðàâêó âàøåãî ñîîáùåíèÿ!</div>";
}
else
{
echo "<center><b>Îøèáêà. Ñîîáùåíèå íå îòïðàâëåíî!</b></center>";
}
} else {
http_response_code(403);
echo "Ïîïðîáóéòå åùå ðàç";
}
?> 
<!-- info@paradigma.by   -->
