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

Allolev tabel on ette nähtud kinnitatud keskkonnaandmete koondamiseks.

Tabelis tuleb eristada kahte eri liiki aadressi:

- API päringute baas-aadress: aadress, kuhu liidestuja saadab tegelikud äripäringud
- OpenAPI või Swaggeri aadress: aadress, kust liidestuja avab tehnilise kirjelduse

| Keskkond | Kasutusotstarve | API päringute baas-aadress | OpenAPI või Swaggeri aadress | Märkused |
|----------|---|---|---|---|
| DEV      | Arendamine ja esmane kontroll | `[lisada]` | `[lisada]` | `[vajaduse korral lisada piirangud]` |
| TEST     | Süsteemne testimine | `[lisada]` | `[lisada]` | `[vajaduse korral lisada piirangud]` |
| LIVE     | Kasutusele võetud liidestus | `[lisada]` | `[lisada]` | `[lisada]` |

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
