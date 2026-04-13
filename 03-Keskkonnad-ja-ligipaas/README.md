---
layout: default
title: Keskkonnad ja ligipääs
nav_order: 30
permalink: /03-Keskkonnad-ja-ligipaas/
---

# Keskkonnad ja ligipääs

## Üldpõhimõte

Liidestus tuleb ette valmistada ja kontrollida eraldi selleks ettenähtud keskkondades. Tootmiskeskkonna kasutuselevõtt on lubatud pärast seda, kui tehnilised eeltingimused, õigused ja kokkulepitud kontrollid on täidetud.

## Keskkonnad

Keskkonniti muutub tavaliselt host või domeen, kuid kasutatavad API otspunktid ja nende URL-id on üldjuhul ette määratud.

Liidestuja vaates tuleb alati eristada kahte eri liiki aadressi:

- API päringute baas-aadress: aadress, kuhu liidestuja saadab tegelikud äripäringud
- OpenAPI või Swaggeri aadress: aadress, kust liidestuja avab tehnilise kirjelduse

| Liidestumise viis | Host või baasdomeen | API päringute URL-i näidiskuju | OpenAPI või Swaggeri URL-i näidiskuju | Märkused |
|----------|---|---|---|---|
| X-tee või avaliku gateway REST API | `https://{kokkulepitud-host}/api` | `/v1/...` | `/v3/api-docs/notification`, `/v3/api-docs/contact`, vajaduse korral `/swagger-ui/index.html` | Täpne OpenAPI sõltub kasutatavast teenusest või alamsüsteemist |
| Partneri haldusliidese REST API | `https://{kokkulepitud-host}` | `/template/v1/...`, `/notification-management/v1/...`, vajaduse korral `/system/v1/...` | `/v3/api-docs/template`, `/v3/api-docs/notification-management`, vajaduse korral `/v3/api-docs/system`, `/swagger-ui/index.html` | Haldusliidese gateway ei kasuta üldjuhul `/api` prefiksit |

Kui hosti väärtus ei ole veel kinnitatud, ei tohiks tabelisse jätta tühja kohta. Sellisel juhul tuleb dokumenteerida vähemalt URL-i näidiskuju ja märkida juurde, kelle käest hosti väärtus saadakse.

## Keskkondade täitmise mall

Kui dokumentatsiooni lisatakse konkreetsed keskkonnad, on soovitatav kasutada allolevat malli.

| Keskkond | Kasutusotstarve | Kinnitatav host | API päringute näide | OpenAPI või Swaggeri näide |
|----------|---|---|---|---|
| DEV      | Arendamine ja esmane kontroll | `{dev-host}` | `https://{dev-host}/api/v1/...` või `https://{dev-host}/notification-management/v1/...` | `https://{dev-host}/api/v3/api-docs/notification` või `https://{dev-host}/v3/api-docs/notification-management` |
| TEST     | Süsteemne testimine | `{test-host}` | `https://{test-host}/api/v1/...` või `https://{test-host}/notification-management/v1/...` | `https://{test-host}/api/v3/api-docs/notification` või `https://{test-host}/v3/api-docs/notification-management` |
| LIVE     | Kasutusele võetud liidestus | `{live-host}` | `https://{live-host}/api/v1/...` või `https://{live-host}/notification-management/v1/...` | `https://{live-host}/api/v3/api-docs/notification` või `https://{live-host}/v3/api-docs/notification-management` |

## Eeltingimused enne TEST või LIVE kasutust

Liidestuja jaoks tuleb enne test- või tootmiskeskkonna kasutamist kinnitada vähemalt järgmised eeltingimused:

- kas kasutatav kanal on X-tee või partneri haldusliidese REST API
- vajalikud GovSSO, õiguste või muu autentimise ja autoriseerimise kokkulepped
- X-tee klienditunnused, turvaserveri kirjeldus ja seotud kooskõlastused, kui kasutatav kanal on X-tee
- haldusliidese teenusepakkuja või seotud süsteemi registreerimine, kui see on kokkulepitud kasutusjuhtumi eeldus
- võrguühendused ja tulemüüri ligipääsud kokkulepitud teenuste kasutamiseks

Kui liidestus eeldab partneri haldusliidese juurutamist, tuleb lisaks eraldi kinnitada selle platvormi- ja salvestuslahenduse eeldused.

## Toodangusse mineku kontrollnimekiri

- kokkulepitud API-d ja alamsüsteemid on kinnitatud
- vajalikud õigused ja autentimisreeglid on seadistatud
- X-tee seadistus on lõpetatud, kui see on kasutusel
- keskkondade aadressid ja OpenAPI kirjeldused on liidestujale edastatud
- kokkulepitud testjuhtumid on edukalt läbitud
- tugikontaktid ja eskalatsioonikanalid on kinnitatud

## Ligipääsu saamine

Ligipääsu saamiseks tuleb kokku leppida vähemalt järgmised asjaolud:

- liidestuva asutuse või infosüsteemi identifitseerimine
- kasutatav liidestumise viis
- kasutatavad keskkonnad
- vajalikud õigused
- vajaduse korral X-tee ja muude turvalahendustega seotud eeldused

## Hallatav teave

Keskkonna aadressid, juurdepääsu andmed ja muud keskkonnaspetsiifilised väärtused tuleb dokumentatsiooni lisada üksnes kinnitatud kujul. Sisemisi teenuseaadresse ja juurutuse käigus kasutatavaid sisevõrgu aadresse ei dokumenteerita liidestuja vaates.
