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
| `X-Road-Client` | X-tee kliendi tunnus | `EE/GOV/70006317/postkast` või keskkonnapõhine arendusväärtus `ee-dev/GOV/70006317/postkast` | Tavaliselt lisatakse gateway või X-tee värava poolt, mitte lõpp-liidestuja poolt |
| `X-Road-UserId` | X-tee kasutajatunnus | `EE12345678901` | Väärtus ei pruugi alati olla lõppkasutaja isikukood; see võib sõltuda esindamisest |
| `X-Road-Represented-Party` | Esindatava osapoole tunnus | Kokku lepitud esindatava osapoole identifikaator, näiteks registri- või isikukood | Valikuline päis, mida tuleb kasutada ainult siis, kui konkreetne X-tee voog ja gateway seadistus seda toetavad |
| `X-User-Access-Type` | Ligipääsu liik | `UNLIMITED` | Lisatakse valitud radadel automaatselt |
| `X-User-Profiles` | Profiilipõhise ligipääsu tehniline päis | Komaga eraldatud profiiliidentifikaatorite loend | Kasutatakse piiratud ligipääsu juhtudel ja lisatakse üldjuhul haldusliidese tehnilises väravas automaatselt |
| `X-EXTERNAL-ID` | Välise süsteemi päringu tunnus | Liidestuja määratud kordumatu väärtus, näiteks `550e8400-e29b-41d4-a716-446655440000` | Kasutatakse valitud loomise toimingutes |

Osade päiste puhul peab liidestuja eristama kahte olukorda:

- päis tuleb liidestuja päringus ise kaasa anda;
- päis lisatakse gateway või X-tee värava poolt automaatselt.

`X-Road-Client`, `X-User-Access-Type` ja `X-User-Profiles` ei ole üldjuhul päised, mida liidestuja peaks omal käel vabalt moodustama. `X-Road-Represented-Party` tuleb lisada ainult siis, kui see on konkreetse X-tee vooga eraldi kokku lepitud ja toetatud. Nende kasutamine tuleb alati siduda konkreetse liidestumise viisiga.

## Gateway poolt lisatavad väljad ja päised

Valitud gateway radadel võib liidestuja jaoks oluline osa päringuandmetest olla lisatud automaatselt. See tähendab, et liidestuja ei pea alati kõiki välju ise request body-sse või query parameetritesse moodustama.

Tüüpilised näited:

- `code` lisatakse või suunatakse edasi valitud radadel automaatselt
- `inboxId` lisatakse valitud radadel automaatselt
- `personType` lisatakse valitud radadel automaatselt
- `X-Road-Client` lisatakse üldjuhul gateway või X-tee kihis
- `X-Road-UserId` võib sõltuda esindamisest olla kas esindatav osapool või tegelik kasutaja
- `X-User-Access-Type` lisatakse valitud radadel automaatselt
- `X-User-Profiles` lisatakse profiilipõhise ligipääsu korral üldjuhul automaatselt

Liidestuja peab iga kasutatava otspunkti puhul lähtuma sellest, kas vastav väli on tema sisendandmete osa või gateway poolt lisatav tehniline väli.

## Identifikaatorid

| Nimi | Kirjeldus | Vorming või näide | Märkus |
|---|---|---|---|
| `code` | Isiku või esindatava osapoole kood | `EE38206084915` või `EE70006317` | Täpne kasutus sõltub teenusliidesest |
| `inboxId` | Postkasti identifikaator | `0f2bf1f9-8537-4962-a41d-c7edb6df6efa` | Kasutatakse valitud päringutes |
| `personType` | Isiku või osapoole tüüp | `CITIZEN` või `BUSINESS` | Lisatakse valitud päringutes gateway kaudu või tuleb kaasa vastavalt teenuse OpenAPI-le |
| Ressursi identifikaator | Päringus viidatava objekti identifikaator | `26331554-797c-4355-82dc-9c4bafcd719a` | Vorming on üldjuhul `UUID` |

## Haldusliidese REST API tüüpilised väljad

Partneri haldusliidese REST API puhul tuleb arvestada ka väljadega, mida X-tee kataloogi vaates ei pruugi üldse olla. Tüüpilised näited on:

- `templateId` või `originalTemplateId`, kui teavitus luuakse olemasoleva malli alusel
- `sendTime`, kui saatmine toimub ajastatult
- `parameters`, mis sisaldab saajate ja muutuvate väärtuste andmeid
- `attachments`, kui päringuga saadetakse kaasa manused
- `X-EXTERNAL-ID`, kui kokkulepitud voog kasutab välist päringu tunnust jälitamiseks

## Vormingunõuded

Kui identifikaatori või päise vorming on normeeritud, tuleb see liidestuse kirjelduses esitada nii sõnalise nõude kui ka näitena. Vormingu rikkumise korral võib teenusliides tagastada vigase päringu vastuse.
