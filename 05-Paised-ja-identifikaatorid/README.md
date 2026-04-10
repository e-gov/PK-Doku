---
layout: default
title: Päised ja identifikaatorid
nav_order: 50
permalink: /05-Paised-ja-identifikaatorid/
---

# Päised ja identifikaatorid

## Üldpõhimõte

Päringus kasutatavad päised ja identifikaatorid sõltuvad liidestumise viisist. Liidestuja peab lähtuma kinnitatud teenusliidese kirjeldusest ning eelnevalt kokku lepitud kasutusviisist.

## Päised

Allolevas tabelis on toodud peamised päised, mida tuleb liidestuse kavandamisel arvestada.

| Päise nimi | Kirjeldus | Vorming või näide | Märkus |
|---|---|---|---|
| `X-Road-Client` | X-tee kliendi tunnus | `[lisada kinnitatud väärtus]` | Tavaliselt lisatakse gateway või X-tee värava poolt, mitte lõpp-liidestuja poolt |
| `X-Road-UserId` | X-tee kasutajatunnus | `EE12345678901` | Väärtus ei pruugi alati olla lõppkasutaja isikukood; see võib sõltuda esindamisest |
| `X-Road-Represented-Party` | Esindatava osapoole tunnus | `[lisada kinnitatud vorming]` | Kasutatakse juhul, kui liidestus toimub esindamise alusel; tavaliselt seatakse X-tee värava kihis |
| `X-User-Access-Type` | Ligipääsu liik | `UNLIMITED` | Lisatakse valitud radadel automaatselt |
| `X-EXTERNAL-ID` | Välise süsteemi päringu tunnus | `[liidestuja määratud väärtus]` | Kasutatakse valitud loomise toimingutes |

Osade päiste puhul peab liidestuja eristama kahte olukorda:

- päis tuleb liidestuja päringus ise kaasa anda;
- päis lisatakse gateway või X-tee värava poolt automaatselt.

`X-Road-Client`, `X-Road-Represented-Party` ja `X-User-Access-Type` ei ole üldjuhul päised, mida liidestuja peaks omal käel vabalt moodustama. Nende kasutamine tuleb siduda konkreetse liidestumise viisiga.

## Identifikaatorid

| Nimi | Kirjeldus | Vorming või näide | Märkus |
|---|---|---|---|
| `code` | Isiku või esindatava osapoole kood | `EE38206084915` või `EE70006317` | Täpne kasutus sõltub teenusliidesest |
| `inboxId` | Postkasti identifikaator | `0f2bf1f9-8537-4962-a41d-c7edb6df6efa` | Kasutatakse valitud päringutes |
| `personType` | Isiku või osapoole tüüp | `[lisada lubatud väärtused teenusliidese järgi]` | Kasutatakse valitud päringutes |
| Ressursi identifikaator | Päringus viidatava objekti identifikaator | `26331554-797c-4355-82dc-9c4bafcd719a` | Vorming on üldjuhul `UUID` |

## Vormingunõuded

Kui identifikaatori või päise vorming on normeeritud, tuleb see liidestuse kirjelduses esitada nii sõnalise nõude kui ka näitena. Vormingu rikkumise korral võib teenusliides tagastada vigase päringu vastuse.
