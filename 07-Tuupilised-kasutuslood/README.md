---
layout: default
title: Tüüpilised kasutuslood
nav_order: 70
permalink: /07-Tuupilised-kasutuslood/
---

# Tüüpilised kasutuslood

## Eesmärk

Käesolev peatükk kirjeldab tüüpilisi kasutuslugusid, et aidata liidestujal valida õige API rühm ja mõista liidestumise tavapärast kasutusjärjekorda. Täpsed väljad, otspunktid ja tehnilised näited tuleb võtta OpenAPI kirjeldusest.

## Millest alustada

Liidestuja võiks alustada järgmisest järjestusest:

1. määrata, kas kasutatav kanal on REST API või X-tee kaudu vahendatav REST API
2. valida õige API rühm peatükis `API-d ja OpenAPI kirjeldused`
3. kontrollida autentimise, õiguste ja päiste nõudeid
4. avada vastav OpenAPI kirjeldus või Swagger vaade

## Kasutuslood

### Teavituse loomine

Kui liidestuja kasutab X-tee või avaliku gateway teavituste voogu, edastatakse uus teavitus alamsüsteemi `notifications` kaudu. Tüüpiline operatsioon on `POST /v1/notifications`.

Kui liidestuja kasutab partneri haldusliidese REST API-d, on tüüpiline operatsioon samuti `POST /v1/notifications`, kuid selle puhul antakse kaasa `templateId` või `originalTemplateId` ning saatmise sisendandmed. Haldusliidese voogu ei tohi segi ajada keskse teenuse eraldi `notifications-from-template` operatsiooniga.

### Teavituste loetelu küsimine

Liidestuja küsib kasutajale või esindatavale osapoolele seotud teavituste loetelu alamsüsteemi `notifications` kaudu. Tüüpiline operatsioon on `GET /v1/notifications`. Päringu juures tuleb arvestada nõutud identifikaatorite, võimaliku autentimise ja õiguste kontrolliga.

### Teavituse detaili küsimine

Liidestuja küsib konkreetse teavituse sisu või metaandmeid alamsüsteemi `notifications` kaudu. Tüüpiline operatsioon on `GET /v1/notifications/{id}`. Vajaduse korral tuleb päringule lisada ka isiku- või postkastipõhised tunnused.

### Kontaktandmete või eelistuste ajakohastamine

Liidestuja kasutab alamsüsteemi `contacts` siis, kui on vaja hallata teavituste saamisega seotud andmeid. Tüüpilised operatsioonid on `GET /v1/contacts`, `PUT /v1/language-preferences`, `POST /v1/emails`, `PUT /v1/emails` ja `DELETE /v1/emails/{id}`. Kokkulepitud voogudes võivad sinna kuuluda ka mobiilinumbrite, suunamiste, automaatse kustutamise ja personaliseerimisega seotud otspunktid. Selliste toimingute puhul võib rakenduda täiendav õiguste kontroll.

### X-tee kaudu vahendatav ajakohastamine

Valitud toimingute puhul toimub liidestus X-tee vahendusel konkreetse alamsüsteemi kaudu, näiteks `notifications`, `contacts`, `central-template` või mõne `*-notification-management` alamsüsteemi kaudu. Sellisel juhul tuleb avada peatükk `X-tee alamsüsteemid`, valida sobiv alamsüsteem ning kasutada vastavat OpenAPI kirjeldust või Swagger vaadet. Lisaks tuleb arvestada X-tee päiste, osapoolte tuvastamise ja võimalike esindamisega seotud nõuetega.

Kui kasutatav alamsüsteem on kujul `*-notification-management`, tähendab see üldjuhul, et tegemist on konkreetse asutuse või partneri teavituste halduse REST API-ga, mis on X-tee kaudu avaldatud. Liidestuja ei peaks sellisel juhul valima suvalist `*-notification-management` kirjet, vaid ainult selle, mis on tema kasutusjuhtumi jaoks eraldi kokku lepitud.

### Haldusliidese töövoog

Kui liidestuja kasutab partneri haldusliidese REST API-d, on tüüpiline töövoog järgmine:

1. vajaduse korral seadistatakse kõigepealt asutuse andmed ja profiilid teenuste `/system/v1/owners/default` ja `/system/v1/profiles` kaudu
2. mall luuakse või hallatakse teenuse `/template/v1/templates` kaudu
3. malli tekstid lisatakse või hallatakse teenuse `/template/v1/template-messages` kaudu
4. teavitus saadetakse teenuse `/notification-management/v1/notifications` kaudu
5. saatmisoperatsioon leitakse teenuse `/notification-management/v1/sending-operations` kaudu
6. logisid päritakse teenuse `/notification-management/v1/notification-logs` kaudu

Haldusliidese voos tuleb arvestada vähemalt järgmiste kokkulepetega:

- teate sisu- ja kanalipõhised reeglid võivad sõltuda mallist
- saatja nähtav nimi, profiil ja muu seotud metaandmestik võivad sõltuda süsteemi `owners` ja `profiles` seadistusest
- saatmisoperatsioonid ja logid kuuluvad haldusliidese voogu, mitte üldisele X-tee kataloogi vaatele
- haldusliidese logidest tuleb eeldada ainult selle vooga seotud teadete nähtavust, kui teisiti ei ole kokku lepitud

## Märkus õiguste kohta

Õiguste kontroll rakendub mitme päringu puhul enne tegeliku teenuse väljakutset. Liidestuja ei pea õiguste kontrolli tingimata eraldi `rights` alamsüsteemi kaudu tegema, kui see ei ole konkreetse kasutusjuhtumi puhul eraldi kokku lepitud.
