---
layout: default
title: Tüüpilised kasutuslood
nav_order: 70
permalink: /07-Tuupilised-kasutuslood/
---

# Tüüpilised kasutuslood

Käesolev peatükk kirjeldab tüüpilisi kasutuslugusid, et aidata liidestujal valida õige liidestumise vaade, API rühm ja liidestumise tavapärane kasutusjärjekord. Täpsed väljad, otspunktid ja tehnilised näited tuleb võtta OpenAPI kirjeldusest.

## Millest alustada

Liidestuja võiks alustada järgmisest järjestusest:

1. määrata, kas kasutatav kanal on avalik gateway, X-tee või partneri haldusliidese REST API
2. valida õige API rühm peatükis [API-d ja OpenAPI kirjeldused]({{ '/06-Teenusliidesed-ja-OpenAPI/' | relative_url }})
3. kontrollida autentimise, õiguste ja päiste nõudeid
4. avada vastav OpenAPI kirjeldus või Swagger vaade

## Kasutuslood

### Teavituse loomine partneri haldusliidese kaudu

Kui liidestuja kasutab partneri haldusliidese REST API-d, on teavituse loomise tüüpiline operatsioon `POST /notification-management/v1/notifications`. Selle päringu puhul antakse kaasa vähemalt `templateId` või `originalTemplateId` ning saatmise sisendandmed.

Seda voogu ei tohi segi ajada `xroad-api` kaudu avaldatud `PUT /v1/notifications` ajakohastamise vooga ega avaliku gateway kasutaja-vaatega.

### Teavituste loetelu küsimine avaliku gateway kaudu

Kui liidestuja küsib kasutajale või esindatavale osapoolele seotud teavituste loetelu avaliku gateway kaudu, on tüüpiline operatsioon `GET /v1/notification/list`. Päringu juures tuleb arvestada autentimise, õiguste kontrolli ning gateway poolt lisatavate identifikaatoritega nagu `code` ja `inboxId`.

### Teavituse detaili või manuse küsimine

Avaliku gateway kaudu on tüüpilised operatsioonid `GET /v1/notification/{id}`, `GET /v1/notification-central/{id}`, `GET /v1/notification-attachment/{id}` või `GET /v1/notification-attachment-central/{id}`, sõltuvalt sellest, kas küsitakse kohalikku või keskset kirjet.

X-tee või otse teenuse OpenAPI kirjelduses võib detailvaade olla avaldatud ka kujul `GET /v1/notifications/{id}`. Sellisel juhul tuleb lähtuda selle alamsüsteemi või tehnilise vaate OpenAPI kirjeldusest, mille kasutamine on kokku lepitud.

### Kontaktandmete või eelistuste ajakohastamine

Liidestuja kasutab `contacts` API-t siis, kui on vaja hallata teavituste saamisega seotud andmeid. Avaliku gateway tüüpilised operatsioonid on `GET /v1/contacts`, `PUT /v1/language-preferences`, `POST /v1/emails`, `PUT /v1/emails` ja `DELETE /v1/emails/{id}`.

Kokkulepitud X-tee voogudes võivad sinna kuuluda ka mobiilinumbrite, suunamiste, automaatse kustutamise ja personaliseerimisega seotud otspunktid. Selliste toimingute puhul võib rakenduda täiendav õiguste kontroll.

### X-tee kaudu vahendatav ajakohastamine

Valitud toimingute puhul toimub liidestus `xroad-api` või konkreetse X-tee alamsüsteemi kaudu, näiteks `notifications`, `contacts`, `central-template` või mõne `*-notification-management` alamsüsteemi kaudu. Tüüpiline X-tee gateway kaudu avaldatud teavituse ajakohastamise operatsioon on `PUT /v1/notifications`.

Sellisel juhul tuleb avada peatükk [X-tee alamsüsteemid]({{ '/10-X-tee-rakendusliideste-vaated/' | relative_url }}), valida sobiv alamsüsteem ning kasutada vastavat OpenAPI kirjeldust või Swagger vaadet. Lisaks tuleb arvestada X-tee päiste, osapoolte tuvastamise ja võimalike esindamisega seotud nõuetega.

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
