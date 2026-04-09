---
layout: default
title: X-tee alamsüsteemid
nav_order: 65
---

# Alamsüsteem EE/GOV/70006317/postkast REST teenusliideste kirjeldustega X-tee keskkonna "EE" jaoks

Käesolev peatükk koondab X-tee kaudu avaldatud REST teenusliideste tehnilised vaated, mida saab avada Swagger kasutajaliidese abil. Alamsüsteemide loetelu hallatakse eraldi andmefailis, et uute kirjete lisamine ei eeldaks lehe sisu käsitsi ümberkirjutamist.

## Kättesaadavad vaated

### Muud alamsüsteemid

Käesolevas jaotises on toodud alamsüsteemid, mille nimetus ei lõppe kujuga `-central` ega `-notification-management`. Jaotus põhineb nimekujul ning seda ei tohi käsitleda eraldi tehnilise lepingu või ärilise klassifikatsioonina.

<table>
  <thead>
    <tr>
      <th>Alamsüsteem</th>
      <th>Liidese liik</th>
      <th>OpenAPI kirjeldus</th>
      <th>Swagger vaade</th>
    </tr>
  </thead>
  <tbody>
{% for item in site.data.xtee_subsystems %}
{% unless item.name contains "-central" or item.name contains "-notification-management" %}
    <tr>
      <td><code>{{ item.name }}</code></td>
      <td>{{ item.type }}</td>
      <td><a href="{{ item.openapi_url }}">Ava OpenAPI JSON</a></td>
      <td><a href="../swagger-ui/viewer.html?name={{ item.name | url_encode }}&url={{ item.openapi_url | url_encode }}">Ava Swagger vaade</a></td>
    </tr>
{% endunless %}
{% endfor %}
  </tbody>
</table>

### Kesksed alamsüsteemid

Käesolevas jaotises on toodud alamsüsteemid, mille nimetus lõppeb kujuga `-central`. Jaotus põhineb nimekujul ning aitab kataloogi lugemist lihtsustada. See ei tähenda iseseisvalt, et kõik selles rühmas olevad alamsüsteemid järgivad ühtset tehnilist või ärilist kasutusmustrit.

<table>
  <thead>
    <tr>
      <th>Alamsüsteem</th>
      <th>Liidese liik</th>
      <th>OpenAPI kirjeldus</th>
      <th>Swagger vaade</th>
    </tr>
  </thead>
  <tbody>
{% for item in site.data.xtee_subsystems %}
{% if item.name contains "-central" %}
    <tr>
      <td><code>{{ item.name }}</code></td>
      <td>{{ item.type }}</td>
      <td><a href="{{ item.openapi_url }}">Ava OpenAPI JSON</a></td>
      <td><a href="../swagger-ui/viewer.html?name={{ item.name | url_encode }}&url={{ item.openapi_url | url_encode }}">Ava Swagger vaade</a></td>
    </tr>
{% endif %}
{% endfor %}
  </tbody>
</table>

### Teavituste halduse alamsüsteemid

Käesolevas jaotises on toodud alamsüsteemid, mille nimetus lõppeb kujuga `-notification-management`. Jaotus põhineb nimekujul ning seda tuleb käsitleda kataloogi lihtsustava rühmitusena, mitte iseseisva tehnilise lepinguna.

Märkus: nimetused kujul `*-notification-management` tähistavad X-tee kataloogis konkreetse asutuse või partneri teavituste halduse alamsüsteeme. Nende kirjete olemasolu viitab, et vastava osapoole jaoks on avaldatud eraldi X-tee kaudu kasutatav REST API. Liidestuja peab kasutama just seda alamsüsteemi, mis on tema asutuse või partnerlahenduse jaoks kokku lepitud.

<table>
  <thead>
    <tr>
      <th>Alamsüsteem</th>
      <th>Liidese liik</th>
      <th>OpenAPI kirjeldus</th>
      <th>Swagger vaade</th>
    </tr>
  </thead>
  <tbody>
{% for item in site.data.xtee_subsystems %}
{% if item.name contains "-notification-management" %}
    <tr>
      <td><code>{{ item.name }}</code></td>
      <td>{{ item.type }}</td>
      <td><a href="{{ item.openapi_url }}">Ava OpenAPI JSON</a></td>
      <td><a href="../swagger-ui/viewer.html?name={{ item.name | url_encode }}&url={{ item.openapi_url | url_encode }}">Ava Swagger vaade</a></td>
    </tr>
{% endif %}
{% endfor %}
  </tbody>
</table>

## Märkus

OpenAPI kirjelduste aadressid pärinevad X-tee keskkonna `EE` kataloogi andmetest. Swagger vaade kasutab ühist vaaturilehte, millele antakse vastava alamsüsteemi OpenAPI kirjelduse aadress parameetrina.
