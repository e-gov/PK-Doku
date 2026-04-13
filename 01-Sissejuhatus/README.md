---
layout: default
title: Sissejuhatus
nav_order: 10
permalink: /01-Sissejuhatus/
---

# Sissejuhatus

Käesoleva dokumentatsiooni eesmärk on anda Postkast 2.0-ga liidestuvale asutusele või infosüsteemile ülevaade liidestumiseks vajalikest põhimõtetest, tehnilistest eeldustest ja teenusliideste kasutamise aluspõhimõtetest.

Dokumentatsioon on mõeldud kasutamiseks liidestuse kavandamisel, arendamisel, testimisel ja kasutuselevõtul. Täpsemad päringute ja vastuste kirjeldused on toodud rakendusliidese tehnilistes kirjeldustes.

Dokumentatsioon katab kolme peamist liidestusvaadet:

- avaliku gateway kaudu kasutatavad API-d, mille tehniline värav on `client-public-api`
- X-tee kaudu kasutatavad API-d, mille tehniline värav on `xroad-api`
- partneri haldusliidese REST API-d, mida kasutatakse mallide, teavituste, saatmisoperatsioonide ja logidega töötamiseks

## Sihtrühm

Dokumentatsioon on suunatud:

- asutustele, kes soovivad kasutada Postkast 2.0 teenusliideseid
- arenduspartneritele, kes valmistavad ette liidestuse tehnilist teostust
- analüütikutele ja projektijuhtidele, kes vajavad ülevaadet liidestumise eeltingimustest

## Kasutusala

Dokumentatsioon käsitleb väliseid teenusliideseid ning nendega seotud kokkuleppeid. Dokumentatsioon ei käsitle süsteemi sisemist arhitektuuri, sisemisi töövooge, teenuste omavahelist andmevahetust ega juurutuskeskkonna sisemisi tehnilisi lahendusi.

## Millest alustada

Kui liidestuja kasutab X-tee kaudu avaldatud API-sid, tuleb alustada peatükist [API-d ja OpenAPI kirjeldused]({{ '/06-Teenusliidesed-ja-OpenAPI/' | relative_url }}) ja sealt edasi peatükist [X-tee alamsüsteemid]({{ '/11-X-tee-rakendusliideste-vaated/' | relative_url }}).

Kui liidestuja kasutab partneri haldusliidese teenuseid, tuleb alustada peatükist [API-d ja OpenAPI kirjeldused]({{ '/06-Teenusliidesed-ja-OpenAPI/' | relative_url }}) ja sealt edasi peatükist [Haldusliidese REST API-d]({{ '/12-Haldusliidese-REST-API-d/' | relative_url }}).
