---
layout: default
title: Veateated
nav_order: 80
permalink: /08-Veateated/
---

# Veateated

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

- `400 Bad Request` koos veatähisega `headerParametersMissing` võib tähendada, et puudu on kohustuslik tehniline kasutajakonteksti päis, näiteks `X-User-Access-Type` või piiratud ligipääsu korral `X-User-Profiles`
- `403 Forbidden` koos veatähisega `ERROR.12` võib tähendada, et kasutajal või esindataval osapoolel puudub nõutud õigus valitud operatsiooni tegemiseks

## Soovitatav käsitlus

- kontrollida kõigepealt päringu päiseid, identifikaatoreid ja kohustuslikke välju
- veenduda, et kasutatakse õiget keskkonda ja õiget teenusliidest, vt [Keskkonnad ja ligipääs]({{ '/03-Keskkonnad-ja-ligipaas/' | relative_url }})
- kui vastuses on `headerParametersMissing`, kontrollida ka tehnilisi kasutajakonteksti päiseid, mida võidakse lisada väravas automaatselt
- vajaduse korral kontrollida õigusi ja esindamisega seotud andmeid
- tehnilise tõrke korral eristada, kas tegemist on sisendandmete, õiguste, keskkonna või ajutise töötlemisveaga
