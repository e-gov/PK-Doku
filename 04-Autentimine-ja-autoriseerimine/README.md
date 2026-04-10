---
layout: default
title: Autentimine ja autoriseerimine
nav_order: 40
permalink: /04-Autentimine-ja-autoriseerimine/
---

# Autentimine ja autoriseerimine

## Üldpõhimõte

Liidestuja peab arvestama, et tehniline ühendus ei pruugi olla piisav teenusliidese kasutamiseks. Sõltuvalt kasutatavast liidestumise viisist võidakse kontrollida nii päringu tegija tuvastamist kui ka õigust teha konkreetset toimingut.

## REST API autentimine

REST API kaitstud endpointide kasutamisel tuleb arvestada, et päring peab olema autentitud. Autentimine toimub JSON Web Tokeni alusel, mis võib olla edastatud kas küpsisest või `Authorization: Bearer` päisest, sõltuvalt kasutuskanalist ja kliendilahendusest.

Dokumentatsiooni praeguse teadmise järgi kasutatakse vähemalt kahte autentimise allikat:

- GovSSO
- Timur

Kui päring ei ole autentitud või token ei kehti, tuleb arvestada `401 Unauthorized` vastusega.

## REST API õiguste kontroll

Õiguste kontroll tehakse valitud REST API radadel enne päringu edasi suunamist. See tähendab, et autentimine üksi ei pruugi olla piisav: osa toiminguid eeldab lisaks ka õigust teha konkreetset operatsiooni.

Kui kasutajal või esindataval osapoolel puudub nõutud õigus, tuleb arvestada `403 Forbidden` vastusega.

## Esindamine

Kui liidestus toimub esindatava isiku või asutuse nimel, tuleb arvestada esindamisega seotud andmete ja päistega. Esindamise kasutamise täpne vajadus sõltub liidestumise viisist ja kasutusjuhtumist.

REST API puhul mõjutab esindamine muu hulgas seda, milline väärtus edastatakse mõne X-tee päise kaudu edasi järgmisele teenusele. Eriti oluline on see `X-Road-UserId` päise puhul.

## X-tee liidestus

X-tee kaudu vahendatavate liideste puhul tuleb lisaks REST API üldpõhimõtetele arvestada ka X-tee päiste, klienditunnuse ja võimaliku esindatava osapoolega seotud nõuetega. Osa päiseid lisatakse vahendavas kihis automaatselt ning neid ei pea liidestuja alati ise moodustama.

## Dokumenteeritavad kokkulepped

Enne liidestuse kasutamist tuleb kirjalikult kokku leppida vähemalt järgmine teave:

- milline autentimismehhanism kehtib kasutatavale REST API või X-tee liidesele
- kas token edastatakse küpsise või `Authorization` päise kaudu
- milliste endpointide puhul rakendub õiguste kontroll
- millistel juhtudel kasutatakse esindamisega seotud andmeid
- milliseid nähtavaid vastusekoode ja veateateid tuleb autentimise või õiguste puudumise korral oodata
