@charset "utf-8";
/* CSS Document */
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $adsoyad = htmlspecialchars($_POST["adsoyad"]);
  $telefon = htmlspecialchars($_POST["telefon"]);
  $email   = htmlspecialchars($_POST["email"]);
  $mesaj   = htmlspecialchars($_POST["mesaj"]);

  $kime = "seninmailadresin@gmail.com"; // BURAYI DEĞİŞTİR
  $konu = "Web Sitesi İletişim Formu";

  $icerik = "
Ad Soyad: $adsoyad
Telefon: $telefon
E-posta: $email

Mesaj:
$mesaj
";

  $headers = "From: Atlas Uydu Sistemleri <info@atlasuyduhizmetleri.gt.tc>";

  if (mail($kime, $konu, $icerik, $headers)) {
    echo "Mesajınız başarıyla gönderildi.";
  } else {
    echo "Mesaj gönderilirken hata oluştu.";
  }
}
?>

