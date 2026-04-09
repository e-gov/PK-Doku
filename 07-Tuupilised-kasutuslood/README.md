---
layout: default
title: Tüüpilised kasutuslood
nav_order: 70
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

Liidestuja edastab uue teavituse loomiseks vajaliku päringu teavituste API kaudu. Vajaduse korral tuleb kaasa anda täiendavad identifikaatorid või välise süsteemi päringu tunnus. Tehniline leping tuleb võtta teavituste API OpenAPI kirjeldusest.

### Teavituste loetelu küsimine

Liidestuja küsib kasutajale või esindatavale osapoolele seotud teavituste loetelu teavituste API kaudu. Päringu juures tuleb arvestada nõutud identifikaatorite, võimaliku autentimise ja õiguste kontrolliga.

### Teavituse detaili küsimine

Liidestuja küsib konkreetse teavituse sisu või metaandmeid selle identifikaatori alusel. Vajaduse korral tuleb päringule lisada ka isiku- või postkastipõhised tunnused. Vastav endpoint tuleb valida teavituste API OpenAPI kirjeldusest.

### Kontaktandmete või eelistuste ajakohastamine

Liidestuja kasutab kontaktandmete API-sid siis, kui on vaja hallata teavituste saamisega seotud andmeid. Selliste toimingute puhul võib rakenduda täiendav õiguste kontroll.

### X-tee kaudu vahendatav ajakohastamine

Valitud toimingute puhul toimub liidestus X-tee vahendusel. Sellisel juhul tuleb avada peatükk `X-tee alamsüsteemid`, valida sobiv alamsüsteem ning kasutada vastavat OpenAPI kirjeldust või Swagger vaadet. Lisaks tuleb arvestada X-tee päiste, osapoolte tuvastamise ja võimalike esindamisega seotud nõuetega.
