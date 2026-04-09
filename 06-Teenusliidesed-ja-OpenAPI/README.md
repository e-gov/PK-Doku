---
layout: default
title: API-d ja OpenAPI kirjeldused
nav_order: 60
---

# API-d ja OpenAPI kirjeldused

## Üldpõhimõte

Postkast 2.0 API-de tehniline kirjeldus avaldatakse OpenAPI kirjelduse kujul. OpenAPI kirjeldus on päringute, vastuste, väljade, andmetüüpide ja võimalike vastusekoodide osas esmane lepinguallikas.

Käesolev peatükk ei dubleeri OpenAPI kirjeldusi, vaid koondab liidestuja jaoks peamised API-d ja viited nende tehnilistele kirjeldustele.

## Peamised API-d

Allolevas tabelis ei ole toodud kõik võimalikud endpointid, vaid peamised API-d või alamsüsteemid, millest liidestuja tavaliselt alustab.

| API või alamsüsteem | Mille jaoks kasutada | Tehnilise kirjelduse viide |
|---|---|---|
| `notifications` | Teavituste loomine, nimekirja küsimine, detaili küsimine, manuste küsimine ja teavituste ajakohastamine | [X-tee alamsüsteemid](../11-X-tee-rakendusliideste-vaated/) peatükis kirje `notifications` |
| `contacts` | Kontaktandmete, keele-eelistuste, e-posti aadresside ja telefoninumbritega seotud päringud | [X-tee alamsüsteemid](../11-X-tee-rakendusliideste-vaated/) peatükis kirje `contacts` |
| `rights` | Õiguste kontrolliga seotud tehniline kirjeldus juhul, kui liidestus eeldab eraldi õiguste teenuse kasutamist | [X-tee alamsüsteemid](../11-X-tee-rakendusliideste-vaated/) peatükis kirje `rights` |
| `central-template` | Mallipõhiste teavituste või mallidega seotud päringud juhul, kui see kasutus on liidestujaga kokku lepitud | [X-tee alamsüsteemid](../11-X-tee-rakendusliideste-vaated/) peatükis kirje `central-template` |
| `client-notification-management` või konkreetne `*-notification-management` alamsüsteem | Kliendi või partneri teavituste haldusega seotud päringud | [X-tee alamsüsteemid](../11-X-tee-rakendusliideste-vaated/) peatükis vastav `*-notification-management` kirje |

## Mida lisada tehnilise kirjelduse viitena

Tehnilise kirjelduse viite all tuleb eelistatult kasutada ühte järgmistest variantidest:

- linki dokumentatsiooni peatükile, kust vastava alamsüsteemi OpenAPI JSON või Swagger vaade on kohe avatav;
- otsest OpenAPI JSON aadressi;
- vajaduse korral keskkonnapõhist Swagger või `/v3/api-docs/...` aadressi, kui see on liidestujale avalikult kasutatav.

Kui dokumentatsioon on mõeldud välisele liidestujale, on kõige selgem kasutada viitena kas konkreetset OpenAPI JSON aadressi või dokumentatsiooni peatükki `X-tee alamsüsteemid`.

## OpenAPI kirjelduse kasutamine

OpenAPI kirjeldust tuleb kasutada vähemalt järgmistel eesmärkidel:

- endpointide, päringu ja vastuse väljade kontrollimiseks
- kohustuslike väljade tuvastamiseks
- võimalike vastusekoodide kontrollimiseks
- näidispäringute ja näidisvastuste kasutamiseks arendustöö käigus.

Näiteks:

- teavituste päringute puhul tuleb alustada OpenAPI kirjeldusest `notifications`;
- kontaktandmete päringute puhul tuleb alustada OpenAPI kirjeldusest `contacts`.

## Oluline piirang

OpenAPI kirjeldus ei asenda keskkondade, ligipääsude, õiguste, päiste ega muudatuste halduse dokumenteerimist. Need teemad on kirjeldatud käesoleva dokumentatsiooni teistes peatükkides.
