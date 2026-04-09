---
layout: default
title: Päised ja identifikaatorid
nav_order: 50
---

# Päised ja identifikaatorid

## Üldpõhimõte

Päringus kasutatavad päised ja identifikaatorid sõltuvad liidestumise viisist. Liidestuja peab lähtuma kinnitatud teenusliidese kirjeldusest ning eelnevalt kokku lepitud kasutusviisist.

## Päised

Allolevas tabelis on toodud peamised päised, mida tuleb liidestuse kavandamisel arvestada.

| Päise nimi | Kirjeldus | Vorming või näide | Märkus |
|---|---|---|---|
| `X-Road-Client` | X-tee kliendi tunnus | `[lisada kinnitatud väärtus]` | Kasutatakse X-tee kaudu vahendatava liidestuse korral |
| `X-Road-UserId` | Päringu tegija isikukood | `EE12345678901` | Kasutatakse valitud teenusliideste puhul |
| `X-Road-Represented-Party` | Esindatava osapoole tunnus | `[lisada kinnitatud vorming]` | Kasutatakse juhul, kui liidestus toimub esindamise alusel |
| `X-User-Access-Type` | Ligipääsu liik | `UNLIMITED` | Kasutatakse valitud liidestes vastavalt kokkuleppele |
| `X-EXTERNAL-ID` | Välise süsteemi päringu tunnus | `[liidestuja määratud väärtus]` | Kasutatakse valitud loomise toimingutes |

Osade päiste puhul sõltub kohustus sellest, kas päise edastab liidestuja ise või lisab selle vahendav kiht. See eristus tuleb iga liidestumise viisi puhul eraldi kinnitada.

## Identifikaatorid

| Nimi | Kirjeldus | Vorming või näide | Märkus |
|---|---|---|---|
| `code` | Isiku või esindatava osapoole kood | `EE38206084915` või `EE70006317` | Täpne kasutus sõltub teenusliidesest |
| `inboxId` | Postkasti identifikaator | `0f2bf1f9-8537-4962-a41d-c7edb6df6efa` | Kasutatakse valitud päringutes |
| `personType` | Isiku või osapoole tüüp | `[lisada lubatud väärtused teenusliidese järgi]` | Kasutatakse valitud päringutes |
| Ressursi identifikaator | Päringus viidatava objekti identifikaator | `26331554-797c-4355-82dc-9c4bafcd719a` | Vorming on üldjuhul universaalselt kordumatu identifikaator |

## Vormingunõuded

Kui identifikaatori või päise vorming on normeeritud, tuleb see liidestuse kirjelduses esitada nii sõnalise nõude kui ka näitena. Vormingu rikkumise korral võib teenusliides tagastada vigase päringu vastuse.
