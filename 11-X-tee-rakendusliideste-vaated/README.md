---
layout: default
title: X-tee alamsüsteemid
nav_order: 65
---

# Alamsüsteem EE/GOV/70006317/postkast REST teenusliideste kirjeldustega X-tee keskkonna "EE" jaoks

Käesolev peatükk koondab X-tee kaudu avaldatud REST teenusliideste tehnilised vaated, mida saab avada Swagger kasutajaliidese abil. Alamsüsteemide loetelu hallatakse eraldi andmefailis, et uute kirjete lisamine ei eeldaks lehe sisu käsitsi ümberkirjutamist.

## Kättesaadavad vaated

### Ühised teenusliidesed

Käesolevas jaotises on toodud Postkast 2.0 ühised teenusliidesed, mis ei ole seotud konkreetse keskse alamsüsteemi ega teavituste halduse alamsüsteemi nimetusega. Need teenusliidesed täidavad üldotstarbelist rolli ning võivad olla kasutusel mitmes erinevas liidestusstsenaariumis.

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

Käesolevas jaotises on toodud kesksete alamsüsteemide teenusliidesed. Need vaated koondavad teenusliidesed, mille nimetus viitab kesksele kasutusviisile või kesksele teenindusloogikale.

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

Käesolevas jaotises on toodud teavituste halduse alamsüsteemide teenusliidesed. Need vaated on seotud konkreetsete alamsüsteemidega, mille kaudu hallatakse teavituste loomise, küsimise või ajakohastamisega seotud toiminguid.

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
