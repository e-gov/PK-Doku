---
layout: default
title: Haldusliidese REST API-d
nav_order: 66
parent: API-d ja OpenAPI kirjeldused
permalink: /12-Haldusliidese-REST-API-d/
---

# Haldusliidese REST API-d

Käesolev peatükk kirjeldab partneri haldusliidese REST API-sid, mida kasutatakse mallide, teavituste, saatmisoperatsioonide ja logidega töötamiseks. See vaade on eraldi X-tee kataloogis avaldatud alamsüsteemidest ning seda ei tohi nendega segi ajada.

## Olulised eeltingimused

Enne partneri haldusliidese REST API kasutamist tuleb vähemalt järgmised eeldused üle kontrollida:

- olemas on sobiv mall ja vajaduse korral selle tekstid eri kanalite või keelte jaoks;
- asutuse andmed ja profiilid on seadistatud, kui kasutusjuht eeldab nähtavat saatjat või profiilipõhist saatmist;
- kui haldusliides on kasutusel eraldi juurutatud lahendusena, on failide ja seotud sisu talletamiseks seadistatud objektisalvestus, näiteks S3-ühilduv lahendus;
- kasutatav autentimise, autoriseerimise ja ligipääsu mudel on liidestujaga kokku lepitud.

Allolev skeem illustreerib haldusliidese REST API kasutamise eeltingimusi ja suhtlust partneri infosüsteemi, haldusliidese teenuste, X-tee ning keskse lahenduse vahel.

![Partneri haldusliidese sisendi ja eeltingimuste illustratiivne vaade]({{ '/assets/images/haldusliidese-sisendi-vaade.png' | relative_url }})

## Põhilised teenused

| Teenus või rada | Eesmärk | Märkus |
|---|---|---|
| `/system/v1/owners/default` | Asutuse põhiandmete küsimine ja uuendamine | Kasutatakse saatja asutuse andmete haldamiseks |
| `/system/v1/profiles` | Profiilide nimekirja päring ja profiili loomine | Profiil määrab, millise saatja alt teateid väljastatakse |
| `/system/v1/profiles/{id}` | Konkreetse profiili küsimine, uuendamine või kustutamine | Kasutatakse profiili detailandmete haldamisel |
| `/template/v1/templates` | Mallide loomine, küsimine, uuendamine ja kustutamine | Mall on teavituse aluseks |
| `/template/v1/template-messages` | Malli tekstide loomine, küsimine ja kustutamine | Malli tekstid hallatakse eraldi teenuse kaudu |
| `/notification-management/v1/notifications` | Teavituse loomine ja valitud juhtudel detailvaade | Teavituse loomisel kasutatakse `templateId` või `originalTemplateId` |
| `/notification-management/v1/sending-operations` | Saatmisoperatsioonide leidmine | Kasutatakse saatmise oleku ja seotud logide leidmiseks |
| `/notification-management/v1/sending-operations/{id}` | Saatmisoperatsiooni uuesti käivitamine või uuendamine | Kasutatakse valitud voogudes |
| `/notification-management/v1/notification-logs` | Teavituste logide nimekirja päring | Sobib ajavahemiku või otsingukriteeriumide põhisteks päringuteks |
| `/notification-management/v1/notification-logs/{id}` | Konkreetse logikirje detailvaade | Kasutatakse üksiku teavituse logi vaatamiseks |

## Tüüpiline kasutusjärjekord

1. vajaduse korral seadistatakse asutuse andmed teenuse `/system/v1/owners/default` kaudu
2. vajaduse korral luuakse või uuendatakse profiil teenuse `/system/v1/profiles` kaudu
3. luuakse või valitakse sobiv mall teenuse `/template/v1/templates` kaudu
4. lisatakse või uuendatakse malli tekstid teenuse `/template/v1/template-messages` kaudu
5. saadetakse teavitus teenuse `/notification-management/v1/notifications` kaudu
6. leitakse seotud saatmisoperatsioon teenuse `/notification-management/v1/sending-operations` kaudu
7. päritakse logid teenuse `/notification-management/v1/notification-logs` kaudu

## Olulised märkused

- teavituse loomise päring tuleb siduda malliga `templateId` või `originalTemplateId` kaudu
- vanemates materjalides kasutatud nimetus `MESSAGES-SERVICE` ei ole käesolevas dokumentatsioonis kasutatav teenuse nimi
- käesolev peatükk kirjeldab partneri haldusliidese REST API-sid, mitte X-tee kataloogis avaldatud alamsüsteeme
- haldusliidese logidest on üldjuhul nähtavad ainult selle haldusliidese kaudu koostatud või hallatud teated, kui teisiti ei ole kokku lepitud
- manusete või muude mahupiirangute puhul tuleb lähtuda kinnitatud OpenAPI kirjeldusest või eraldi kokkuleppest, mitte kontrollimata vanadest materjalidest

## Kust leida tehniline kirjeldus

Partneri haldusliidese REST API-de täpne tehniline kirjeldus tuleb võtta kokkulepitud keskkonna OpenAPI või Swagger vaatest.

Kui gateway avaldab eraldi OpenAPI kirjelduse, tuleb alustada vähemalt järgmistest radadest:

- `/v3/api-docs/template`
- `/v3/api-docs/notification-management`
- vajaduse korral `/v3/api-docs/system`

Kui keskkonnas on Swagger UI eraldi avaldatud, on tüüpiline sissepääs `/swagger-ui/index.html`.

Keskkonnapõhine host tuleb kinnitada eraldi. Liidestuja vaates on oluline dokumenteerida vähemalt host ja sellele lisanduv rada, näiteks `https://{kokkulepitud-host}/v3/api-docs/notification-management`.

Kui liidestujal on vaja visuaalselt seostada template-, system- ja notification-management teenuseid, on täiendav kõrgtaseme skeem toodud peatükis [Skeemid ja joonised]({{ '/13-Skeemid-ja-joonised/' | relative_url }}).
