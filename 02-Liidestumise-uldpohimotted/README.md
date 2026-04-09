---
layout: default
title: Liidestumise üldpõhimõtted
nav_order: 20
---

# Liidestumise üldpõhimõtted

Postkast 2.0-ga liidestumine toimub kokkulepitud API-de kaudu. Liidestuja peab lähtuma põhimõttest, et väliseks kasutamiseks avaldatud API on ainus toetatud suhtlusviis ning süsteemi sisemisi teenuseid ega sisemisi aadresse ei kasutata.

## Liidestumise viisid

Postkast 2.0 puhul tuleb arvestada vähemalt kahe liidestumise viisiga:

- REST API, mida kasutatakse rakenduse või integreeriva süsteemi vahendusel
- X-tee kaudu vahendatav REST API, mille puhul rakenduvad täiendavad päiste ja osapoolte tuvastamise nõuded

Konkreetne liidestumise viis sõltub kasutusjuhtumist ning eelnevalt kokku lepitud lahendusest.

## Liidestumise eeltingimused

Enne arendustöö alustamist tuleb vähemalt järgmised asjaolud kokku leppida:

- kasutatav liidestumise viis
- kasutatavad keskkonnad
- vajalikud ligipääsud ja õigused
- kasutatavad identifikaatorid ja nende vormingud
- vastutavad kontaktid tehniliste ja sisuliste küsimuste lahendamiseks

## Dokumentatsiooni kasutamise põhimõte

Käesolev dokumentatsioon kirjeldab liidestumise raamtingimusi. Endpointide, päringu- ja vastuseväljade ning tehniliste näidete täpne kirjeldus on toodud OpenAPI kirjeldustes.
