---
layout: default
title: API-d ja OpenAPI kirjeldused
nav_order: 60
permalink: /06-Teenusliidesed-ja-OpenAPI/
---

# API-d ja OpenAPI kirjeldused

## Üldpõhimõte

Postkast 2.0 API-de tehniline kirjeldus avaldatakse OpenAPI kirjelduse kujul. OpenAPI kirjeldus on päringute, vastuste, väljade, andmetüüpide ja võimalike vastusekoodide osas esmane lepinguallikas.

Käesolev peatükk ei dubleeri OpenAPI kirjeldusi, vaid koondab liidestuja jaoks peamised API-d ja viited nende tehnilistele kirjeldustele.

## X-tee ja avaliku gateway peamised API-d

Allolevas tabelis ei ole toodud kõik võimalikud endpointid, vaid peamised API-d või alamsüsteemid, millest liidestuja tavaliselt alustab X-tee või avaliku gateway vaates.

| API või alamsüsteem | Mille jaoks kasutada | Tehnilise kirjelduse viide |
|---|---|---|
| `notifications` | Teavituste loomine, nimekirja küsimine, detaili küsimine, manuste küsimine ja teavituste ajakohastamine | [X-tee alamsüsteemid](../11-X-tee-rakendusliideste-vaated/) peatükis kirje `notifications` |
| `contacts` | Kontaktandmete, keele-eelistuste, e-posti aadresside ja telefoninumbritega seotud päringud | [X-tee alamsüsteemid](../11-X-tee-rakendusliideste-vaated/) peatükis kirje `contacts` |
| `rights` | Õiguste kontrolliga seotud tehniline kirjeldus juhul, kui liidestus eeldab eraldi õiguste teenuse kasutamist | [X-tee alamsüsteemid](../11-X-tee-rakendusliideste-vaated/) peatükis kirje `rights` |
| `central-template` | Mallipõhiste teavituste või mallidega seotud päringud juhul, kui see kasutus on liidestujaga kokku lepitud | [X-tee alamsüsteemid](../11-X-tee-rakendusliideste-vaated/) peatükis kirje `central-template` |
| `client-notification-management` või konkreetne `*-notification-management` alamsüsteem | Kliendi või partneri teavituste haldusega seotud päringud | [X-tee alamsüsteemid](../11-X-tee-rakendusliideste-vaated/) peatükis vastav `*-notification-management` kirje |

`contacts` alamsüsteem ei piirdu üksnes keele-eelistuste ja e-posti aadressidega. Kokkulepitud voogudes võivad sinna kuuluda ka mobiilinumbrite, lauatelefonide, kinnituskoodide, suunamiste, automaatse kustutamise ja personaliseerimisega seotud endpointid.

## Partneri haldusliidese REST API-d

Kui liidestuja kasutab partneri haldusliidese teenuseid, tuleb lähtuda eraldi haldusliidese REST API vaatest.

| Teenus või rada | Mille jaoks kasutada | Tehnilise kirjelduse viide |
|---|---|---|
| `/template/v1/templates` | Mallide loomine, küsimine, uuendamine ja kustutamine | [Haldusliidese REST API-d](../12-Haldusliidese-REST-API-d/) |
| `/template/v1/template-messages` | Malli tekstide loomine ja haldamine | [Haldusliidese REST API-d](../12-Haldusliidese-REST-API-d/) |
| `/notification-management/v1/notifications` | Teavituste loomine ja valitud juhtudel detailvaade | [Haldusliidese REST API-d](../12-Haldusliidese-REST-API-d/) |
| `/notification-management/v1/sending-operations` | Saatmisoperatsioonide leidmine ja vajaduse korral uuesti käivitamine | [Haldusliidese REST API-d](../12-Haldusliidese-REST-API-d/) |
| `/notification-management/v1/notification-logs` | Teavituste logide päring | [Haldusliidese REST API-d](../12-Haldusliidese-REST-API-d/) |

## Kust leida tehniline kirjeldus

Liidestuja peab lähtuma selle alamsüsteemi või teenusliidese OpenAPI kirjeldusest, mille kasutamine on tema jaoks kokku lepitud.

X-tee kaudu avaldatud teenusliideste tehnilised kirjeldused ja Swagger vaated on koondatud peatükki `X-tee alamsüsteemid`. Kui liidestuja kasutab muud kokkulepitud teenusliidest, tuleb lähtuda vastava keskkonna OpenAPI kirjeldusest või Swagger vaatest.

Partneri haldusliidese REST API puhul tuleb lähtuda kokkulepitud haldusliidese OpenAPI või Swagger vaatest ning peatükist `Haldusliidese REST API-d`.

## OpenAPI kirjelduse kasutamine

OpenAPI kirjeldust tuleb kasutada vähemalt järgmistel eesmärkidel:

- endpointide, päringu ja vastuse väljade kontrollimiseks
- kohustuslike väljade tuvastamiseks
- võimalike vastusekoodide kontrollimiseks
- näidispäringute ja näidisvastuste kasutamiseks arendustöö käigus.

Näiteks:

- teavituste päringute puhul tuleb alustada OpenAPI kirjeldusest `notifications`;
- kontaktandmete päringute puhul tuleb alustada OpenAPI kirjeldusest `contacts`.
- partneri haldusliidese teadete saatmise puhul tuleb alustada `POST /v1/notifications` kirjeldusega, mitte keskse teenuse `notifications-from-template` vooga.

## Oluline piirang

OpenAPI kirjeldus ei asenda keskkondade, ligipääsude, õiguste, päiste ega muudatuste halduse dokumenteerimist. Need teemad on kirjeldatud käesoleva dokumentatsiooni teistes peatükkides.
