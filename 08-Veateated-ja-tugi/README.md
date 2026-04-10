---
layout: default
title: Veateated ja tugi
nav_order: 80
permalink: /08-Veateated-ja-tugi/
---

# Veateated ja tugi

## Üldpõhimõte

Liidestuja peab käsitlema teenusliidese vastuseid nii sisuliste kui ka tehniliste veaolukordade vaates. Vastusekoodi, veateate sisu ja vea konteksti tuleb hinnata koos.

## Tüüpilised vastusekoodid

| Vastusekood | Tähendus | Tüüpiline põhjus |
|---|---|---|
| `401` | Päring ei ole autentitud või token ei kehti | Küpsis või `Authorization` päis puudub, token on vigane või aegunud |
| `400` | Päring ei vasta nõutud vormingule või sisendandmed on puudulikud | Kohustuslik väli puudub, väärtuse vorming on vale või päringu sisu ei vasta reeglitele |
| `403` | Toiming ei ole lubatud | Õigus puudub või päringu tegijal ei ole nõutud volitust teha soovitud toimingut |
| `404` | Otsitud andmeid ei leitud | Ressurssi või seotud andmeid ei leitud esitatud identifikaatori alusel |
| `500` | Teenuse töötlemisel tekkis tehniline tõrge | Ajutine või teenusepoolne töötlemisviga |

Õiguste puudumisega seotud nähtava veateate kasutamisel tuleb lähtuda kinnitatud käitumisest. Kui konkreetse liidese puhul on kokku lepitud veakood või veatähis, näiteks `ERROR.12`, tuleb see lisada siia eraldi.

Näide:

- `403 Forbidden` koos veatähisega `ERROR.12` võib tähendada, et kasutajal või esindataval osapoolel puudub nõutud õigus valitud operatsiooni tegemiseks

## Soovitatav käsitlus

- kontrollida kõigepealt päringu päiseid, identifikaatoreid ja kohustuslikke välju
- veenduda, et kasutatakse õiget keskkonda ja õiget teenusliidest
- vajaduse korral kontrollida õigusi ja esindamisega seotud andmeid
- tehnilise tõrke korral pöörduda kokkulepitud toe poole koos päringu konteksti kirjeldusega

## Tugi

Käesolev alajaotus on mõeldud ametlike kontaktide ja eskalatsioonikanalite koondamiseks. Kui kõik teemad lahendab sama teenusehalduse kontakt, võib sama kontakti korrata mitmes reas erineva märkusega.

Tugipäringu esitamisel on soovitatav lisada vähemalt järgmine teave:

- kasutatav keskkond;
- alamsüsteemi või API nimi;
- endpoint või operatsioon;
- päringu aeg;
- võimaluse korral päringu tunnus või `X-EXTERNAL-ID`;
- saadud vastusekood ja veateade.

| Teema | Kontakt või kanal | Märkus |
|---|---|---|
| Tehnilised küsimused | `[lisada tehniline kontakt, näiteks teenusehalduse e-post]` | OpenAPI, endpointide, päringute ja veateadete küsimused |
| Ligipääsud ja õigused | `[lisada ligipääsude halduse kontakt]` | Keskkondade ligipääsud, õigused, X-tee klienditunnused ja seotud kooskõlastused |
| Muudatused ja kooskõlastused | `[lisada tooteomaniku või koordineeriva meeskonna kontakt]` | Muudatusettepanekud, release-kooskõlastused ja liidestuse sisulised täpsustused |

## Vastutuste jaotus

- tehniline tugi: endpointid, OpenAPI kirjeldused, veateadete analüüs
- ligipääsude ja õiguste haldus: keskkonnad, õigused, X-tee klienditunnused, GovSSO või muu autentimiskokkulepe
- kooskõlastav või toote eest vastutav meeskond: muudatused, release’i ajastus, liidestuse sisulised kokkulepped
