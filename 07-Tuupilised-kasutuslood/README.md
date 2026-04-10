---
layout: default
title: Tüüpilised kasutuslood
nav_order: 70
permalink: /07-Tuupilised-kasutuslood/
---

# Tüüpilised kasutuslood

## Eesmärk

Käesolev peatükk kirjeldab tüüpilisi kasutuslugusid, et aidata liidestujal valida õige API rühm ja mõista liidestumise tavapärast kasutusjärjekorda. Täpsed väljad, endpointid ja tehnilised näited tuleb võtta OpenAPI kirjeldusest.

## Millest alustada

Liidestuja võiks alustada järgmisest järjestusest:

1. määrata, kas kasutatav kanal on REST API või X-tee kaudu vahendatav REST API
2. valida õige API rühm peatükis `API-d ja OpenAPI kirjeldused`
3. kontrollida autentimise, õiguste ja päiste nõudeid
4. avada vastav OpenAPI kirjeldus või Swagger vaade

## Kasutuslood

### Teavituse loomine

Liidestuja edastab uue teavituse loomiseks vajaliku päringu alamsüsteemi `notifications` kaudu. Tüüpilised operatsioonid on `POST /v1/notifications` ja vajaduse korral `POST /v1/notifications-from-template`. Vajaduse korral tuleb kaasa anda täiendavad identifikaatorid või välise süsteemi päringu tunnus.

### Teavituste loetelu küsimine

Liidestuja küsib kasutajale või esindatavale osapoolele seotud teavituste loetelu alamsüsteemi `notifications` kaudu. Tüüpiline operatsioon on `GET /v1/notifications`. Päringu juures tuleb arvestada nõutud identifikaatorite, võimaliku autentimise ja õiguste kontrolliga.

### Teavituse detaili küsimine

Liidestuja küsib konkreetse teavituse sisu või metaandmeid alamsüsteemi `notifications` kaudu. Tüüpiline operatsioon on `GET /v1/notifications/{id}`. Vajaduse korral tuleb päringule lisada ka isiku- või postkastipõhised tunnused.

### Kontaktandmete või eelistuste ajakohastamine

Liidestuja kasutab alamsüsteemi `contacts` siis, kui on vaja hallata teavituste saamisega seotud andmeid. Tüüpilised operatsioonid on `GET /v1/contacts`, `PUT /v1/language-preferences`, `POST /v1/emails`, `PUT /v1/emails` ja `DELETE /v1/emails/{id}`. Selliste toimingute puhul võib rakenduda täiendav õiguste kontroll.

### X-tee kaudu vahendatav ajakohastamine

Valitud toimingute puhul toimub liidestus X-tee vahendusel konkreetse alamsüsteemi kaudu, näiteks `notifications`, `contacts`, `central-template` või mõne `*-notification-management` alamsüsteemi kaudu. Sellisel juhul tuleb avada peatükk `X-tee alamsüsteemid`, valida sobiv alamsüsteem ning kasutada vastavat OpenAPI kirjeldust või Swagger vaadet. Lisaks tuleb arvestada X-tee päiste, osapoolte tuvastamise ja võimalike esindamisega seotud nõuetega.

Kui kasutatav alamsüsteem on kujul `*-notification-management`, tähendab see üldjuhul, et tegemist on konkreetse asutuse või partneri teavituste halduse REST API-ga, mis on X-tee kaudu avaldatud. Liidestuja ei peaks sellisel juhul valima suvalist `*-notification-management` kirjet, vaid ainult selle, mis on tema kasutusjuhtumi jaoks eraldi kokku lepitud.

## Märkus õiguste kohta

Õiguste kontroll rakendub mitme päringu puhul enne tegeliku teenuse väljakutset. Liidestuja ei pea õiguste kontrolli tingimata eraldi `rights` alamsüsteemi kaudu tegema, kui see ei ole konkreetse kasutusjuhtumi puhul eraldi kokku lepitud.
