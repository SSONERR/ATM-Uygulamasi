const yeniSatir = "\r\n"


let bakiye = 1000;
//bakiye

let metin = "1-Bakiye görüntüleme" + yeniSatir
    + "2-Para çekme" + yeniSatir
    + "3-Para yatırma" + yeniSatir
    + "4-Çıkış" + yeniSatir
    + "Lütfen bir değer giriniz";

let secim = prompt(metin);
switch (secim) {
    case "1":
        //bakiyeyi yazdırma
        alert("Bakiyeniz : " + bakiye);
        break;

    case "2":
        let cekilenPara = Number(prompt("Çekmek istediğiniz tutarı giriniz : "));
        if (cekilenPara < 0) {
            //Para 0 dan küçükse 
            alert("Lütfen geçerli bir tutar giriniz!")

        } else if (cekilenPara < bakiye) {
            //para 0 dan büyükse
            bakiye = bakiye - cekilenPara
            alert("Kalan bakiye : " + bakiye)
        } else {
            //para bakiyeden büyükse
            alert("Lütfen bakiyenizden büyük bir tutar girmeyiniz!" + yeniSatir
                + "Bakiyeniz : " + bakiye + yeniSatir +
                "Çekmek istediğiniz tutar : " + cekilenPara)
        }
        break;

    case "3":
        let yatirilanPara = Number(prompt("Yatırmak istediğiniz tutarı yazınız : "));
        if (yatirilanPara > 0) {
            //girilen tutar 0 dan büyükse
            bakiye = yatirilanPara + bakiye
            alert("Güncel bakiyeniz : " + bakiye)
        } else {
            //girilen para 0 dan küçükse
            alert("Lütfen geçerli bir tutar giriniz!");
        }

        break;

    case "4":
        //çıkış bildirimi
        alert("Sistemden çıkış yapılmıştır...");
        break;

    default:
        //yanlış değer bildirimi
        alert("Lütfen 1-4 arası bir değer giriniz !");
        break;
}