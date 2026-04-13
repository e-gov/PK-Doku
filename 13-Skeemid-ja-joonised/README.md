---
layout: default
title: Skeemid ja joonised
nav_order: 95
permalink: /13-Skeemid-ja-joonised/
---

# Skeemid ja joonised

Käesolev peatükk koondab valitud skeemid varasematest liidestusmaterjalidest, et anda liidestujale kiire visuaalne ülevaade peamistest suhtlusmustritest.

Skeemid on illustratiivsed. Liidestumise tehniline leping, kasutatavad otspunktid ja kehtivad nõuded tuleb võtta käesoleva dokumentatsiooni teistest peatükkidest ning vastavatest OpenAPI kirjeldustest.

## Liidestumise üldskeem

Allolev skeem näitab kõrgtasemel, kuidas partneri rakendus suhtleb Postkast 2.0 kliendi- ja keskkomponentidega ning millistes kohtades kasutatakse REST liidest, X-tee kihti ja GovSSO-t.

![Postkast 2.0 liidestumise üldskeem]({{ '/assets/images/liidestumise-uldskeem.png' | relative_url }})

## Kliendi arhitektuuri vaade

Allolev skeem näitab partneri või kliendi vaadet, kus on koos haldusliidese, postkasti, X-tee, GovSSO ja õiguste teenuse peamised seosed.

![Kliendi arhitektuuri illustratiivne vaade]({{ '/assets/images/kliendi-arhitektuuri-vaade.png' | relative_url }})

## Partneri haldusliidese REST API vaade

Allolev skeem on illustratiivne vaade partneri haldusliidese ümbrusest. Käesoleva dokumentatsiooni järgi liiguvad partneri haldusliidese REST API päringud haldusliidese tehnilise värava `private-api` kaudu otse teenustesse `template-service`, `system-service` ja `notification-management-service`. Skeemil võib olla kujutatud ka seotud keskseid või X-tee komponente, kuid seda ei tohi tõlgendada nii, et haldusliidese iga REST päring liigub X-tee kaudu edasi.

![Partneri haldusliidese REST API skeem]({{ '/assets/images/haldusliidese-rest-vaade.png' | relative_url }})

## Teenuste seoste vaade

Allolev skeem aitab siduda omavahel haldusliidese peamised teenused nagu `template-service`, `system-service` ja `notification-management-service` ning näitab, et need paiknevad arhitektuuris eraldi kihina X-tee tehnilisest väravast.

![Teenuste seoste illustratiivne vaade]({{ '/assets/images/teenuste-seoste-vaade.png' | relative_url }})

## Mallide teenuse vaade

Allolev skeem keskendub mallide ja template-messages voole ning aitab siduda X-tee, gateway, `central-template` teenuse ja sisemised sõltuvused.

![Mallide teenuse illustratiivne vaade]({{ '/assets/images/mallide-teenuse-vaade.png' | relative_url }})

## Kontaktide ja suunamiste vaade

Allolev skeem keskendub `contacts` alamsüsteemile ja sellega seotud kontaktandmete, e-posti, sõnumite ning suunamiste voole.

![Kontaktide ja suunamiste illustratiivne vaade]({{ '/assets/images/kontaktide-ja-suunamiste-vaade.png' | relative_url }})

## Teavituste vaade

Allolev skeem keskendub `notifications` alamsüsteemile ja teavitustega seotud põhioperatsioonidele, sealhulgas manustele, e-posti ja sõnumite edastamisele.

![Teavituste illustratiivne vaade]({{ '/assets/images/teavituste-vaade.png' | relative_url }})

## Märkus skeemide kasutamise kohta

- skeemid aitavad mõista suhtlusmustrit, kuid ei asenda teenuste detailkirjeldusi;
- kui skeemi ja OpenAPI kirjelduse vahel tekib erinevus, tuleb lähtuda OpenAPI kirjeldusest ja käesolevast PK-Dokust;
- detailsemad sisemised arhitektuurijoonised ei ole liidestuja dokumentatsiooni põhiosa ning neid ei ole siia koondatud;
- väga suured või raskesti loetavad vanad skeemid, mis dubleerivad juba lisatud vaateid, ei ole siia automaatselt sisse toodud.
