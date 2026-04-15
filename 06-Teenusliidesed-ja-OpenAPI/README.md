---
layout: default
title: API-d ja OpenAPI kirjeldused
nav_order: 60
has_children: true
permalink: /06-Teenusliidesed-ja-OpenAPI/
---

# API-d ja OpenAPI kirjeldused

## Üldpõhimõte

Postkast 2.0 API-de tehniline kirjeldus avaldatakse OpenAPI kirjelduse kujul. OpenAPI kirjeldus on päringute, vastuste, väljade, andmetüüpide ja võimalike vastusekoodide osas esmane lepinguallikas.

Käesolev peatükk ei dubleeri OpenAPI kirjeldusi, vaid toimib sisulise indeksina: siit saab valida õige liidestumise vaate, API rühma ja OpenAPI kirjelduse.

Käesolevas peatükis tähendab veerg `OpenAPI või Swagger` ühte järgmistest:

- otsest OpenAPI rada, näiteks `/v3/api-docs/notification`;
- viidet peatükile, kus vastav OpenAPI JSON või Swagger vaade on juba koondatud;
- kokkulepitud keskkonna Swagger vaadet, kui see on liidestujale eraldi avaldatud.

## Avaliku REST API peamised API-d

Allolev tabel koondab peamised API-d, mis on liidestujale kättesaadavad avaliku gateway kaudu. Selle vaate tehniline värav on `client-public-api`. See sobib eeskätt kasutaja- või postkastipõhistele päringutele.

| API või otspunkt | Mille jaoks kasutada | OpenAPI või Swagger |
|-------------------------------------------------------------------------------------|---|---|
| `/v1/notification/list`, `/v1/notification/{id}`, `/v1/notification-attachment/{id}` | Teavituste nimekiri, detailvaade ja manuste küsimine avaliku gateway kaudu | `/api/v3/api-docs/notification` |
| `/v1/contacts`, `/v1/language-preferences`, `/v1/emails`                            | Kontaktandmete, keele-eelistuste ja e-posti aadressidega seotud päringud | `/api/v3/api-docs/contact` |
| `rights`                                                                            | Õiguste kontrolliga seotud tehniline kirjeldus juhul, kui liidestus eeldab eraldi õiguste teenuse kasutamist | <a href="../10-X-tee-rakendusliideste-vaated/">X-tee alamsüsteemid</a> peatükis kirje `rights` |

## X-tee kaudu vahendatav REST API

Kui liidestus toimub X-tee kaudu, tuleb eristada X-tee vaadet avalikust gateway vaatest. X-tee vaate tehniline värav on `xroad-api`. Tehnilised kirjeldused avaldatakse eraldi alamsüsteemide kaupa ning osal voogudel on olemas ka koondatud Swagger vaade.

| API või alamsüsteem | Mille jaoks kasutada | OpenAPI või Swagger |
|---|---|---|
| `notifications` | X-tee kaudu vahendatud teavituste päringud ja kokkulepitud ajakohastamised | <a href="../10-X-tee-rakendusliideste-vaated/">X-tee alamsüsteemid</a> peatükis kirje `notifications` või `xroad-api` koondvaade `/api/v3/api-docs` |
| `contacts` | Kontaktandmete, keele-eelistuste ja seotud kontaktikanalite päringud | <a href="../10-X-tee-rakendusliideste-vaated/">X-tee alamsüsteemid</a> peatükis kirje `contacts` või `xroad-api` koondvaade `/api/v3/api-docs` |
| `central-template` | Mallipõhiste või keskselt avaldatud teavituste tehniline kirjeldus juhul, kui see voog on liidestujaga kokku lepitud | <a href="../10-X-tee-rakendusliideste-vaated/">X-tee alamsüsteemid</a> peatükis kirje `central-template` |
| `client-notification-management` või konkreetne `*-notification-management` alamsüsteem | X-tee kaudu avaldatud asutuse- või partneripõhised teavituste halduse API-d | <a href="../10-X-tee-rakendusliideste-vaated/">X-tee alamsüsteemid</a> peatükis vastav `*-notification-management` kirje |

`contacts` alamsüsteem ei piirdu üksnes keele-eelistuste ja e-posti aadressidega. Kokkulepitud voogudes võivad sinna kuuluda ka mobiilinumbrite, lauatelefonide, kinnituskoodide, suunamiste, automaatse kustutamise ja personaliseerimisega seotud otspunktid.

## Partneri haldusliidese REST API-d

Kui liidestuja kasutab partneri haldusliidese teenuseid, tuleb lähtuda haldusliidese REST API vaatest. Selle vaate tehniline värav on `private-api`. Tegemist on eraldi integratsioonirajaga ning seda ei tohi segi ajada X-tee kaudu avaldatud alamsüsteemide kataloogiga.

| Teenus või rada | Mille jaoks kasutada | OpenAPI või Swagger |
|---|---|---|
| `/system/v1/owners/default` | Asutuse põhiandmete küsimine ja uuendamine | <a href="../11-Haldusliidese-REST-API-d/">Haldusliidese REST API-d</a> või OpenAPI rada `/v3/api-docs/system` |
| `/system/v1/profiles` | Profiilide loomine, küsimine ja haldamine | <a href="../11-Haldusliidese-REST-API-d/">Haldusliidese REST API-d</a> või OpenAPI rada `/v3/api-docs/system` |
| `/template/v1/templates` | Mallide loomine, küsimine, uuendamine ja kustutamine | <a href="../11-Haldusliidese-REST-API-d/">Haldusliidese REST API-d</a> või OpenAPI rada `/v3/api-docs/template` |
| `/template/v1/template-messages` | Malli tekstide loomine ja haldamine | <a href="../11-Haldusliidese-REST-API-d/">Haldusliidese REST API-d</a> või OpenAPI rada `/v3/api-docs/template` |
| `/notification-management/v1/notifications` | Teavituste loomine ja valitud juhtudel detailvaade | <a href="../11-Haldusliidese-REST-API-d/">Haldusliidese REST API-d</a> või OpenAPI rada `/v3/api-docs/notification-management` |
| `/notification-management/v1/sending-operations` | Saatmisoperatsioonide leidmine ja vajaduse korral uuesti käivitamine | <a href="../11-Haldusliidese-REST-API-d/">Haldusliidese REST API-d</a> või OpenAPI rada `/v3/api-docs/notification-management` |
| `/notification-management/v1/notification-logs` | Teavituste logide päring | <a href="../11-Haldusliidese-REST-API-d/">Haldusliidese REST API-d</a> või OpenAPI rada `/v3/api-docs/notification-management` |

## Kust alustada

Liidestuja peab alustama sellest liidestumise vaatest, mille kasutamine on tema jaoks kokku lepitud:

- `client-public-api`, kui kasutatakse avaliku gateway kaudu vahendatud kasutaja- või postkastipõhiseid REST API-sid;
- `xroad-api`, kui kasutatakse X-tee kaudu vahendatud REST API-sid;
- `private-api`, kui kasutatakse partneri haldusliidese REST API-sid.

Kui valik on tehtud, tuleb lähtuda vastava komponendi OpenAPI kirjeldusest või Swagger vaatest:

- `client-public-api`: näiteks `/api/v3/api-docs/notification` või `/api/v3/api-docs/contact`
- `xroad-api`: koondvaade `/api/v3/api-docs` või peatükk [X-tee alamsüsteemid](../10-X-tee-rakendusliideste-vaated/)
- `private-api`: `/v3/api-docs/template`, `/v3/api-docs/notification-management`, vajaduse korral `/v3/api-docs/system`

## OpenAPI kirjelduse kasutamine

OpenAPI kirjeldust tuleb kasutada vähemalt järgmistel eesmärkidel:

- otspunktide, päringu ja vastuse väljade kontrollimiseks
- kohustuslike väljade tuvastamiseks
- võimalike vastusekoodide kontrollimiseks
- näidispäringute ja näidisvastuste kasutamiseks arendustöö käigus.

Näiteks:

- teavituste nimekirja või detailvaate puhul tuleb alustada avaliku gateway `notification` või X-tee `notifications` kirjeldusega, sõltuvalt valitud kanalist;
- kontaktandmete päringute puhul tuleb alustada `contacts` kirjeldusega;
- partneri haldusliidese teadete saatmise puhul tuleb alustada teenuse `/notification-management/v1/notifications` kirjeldusega, mitte X-tee `notifications` või keskse teenuse mõne muu vooga.

## Oluline piirang

OpenAPI kirjeldus ei asenda [Keskkonnad ja ligipääs](../03-Keskkonnad-ja-ligipaas/), [Autentimine ja autoriseerimine](../04-Autentimine-ja-autoriseerimine/) ega [Päised ja identifikaatorid](../05-Paised-ja-identifikaatorid/) peatükkides kirjeldatud kokkuleppeid.
