---
layout: default
title: X-tee alamsüsteemid
nav_order: 65
---

# Alamsüsteem EE/GOV/70006317/postkast REST teenusliideste kirjeldustega X-tee keskkonna "EE" jaoks

Käesolev peatükk koondab X-tee kaudu avaldatud REST teenusliideste tehnilised vaated, mida saab avada Swagger kasutajaliidese abil. Alamsüsteemide loetelu hallatakse eraldi andmefailis, et uute kirjete lisamine ei eeldaks lehe sisu käsitsi ümberkirjutamist.

## Kättesaadavad vaated

### Ühised teenusliidesed

| Alamsüsteem | Liidese liik | OpenAPI kirjeldus | Swagger vaade |
|---|---|---|---|
{% for item in site.data.xtee_subsystems %}
{% unless item.name contains "-central" or item.name contains "-notification-management" %}
| `{{ item.name }}` | {{ item.type }} | [Ava OpenAPI JSON]({{ item.openapi_url }}) | [Ava Swagger vaade](../swagger-ui/viewer.html?name={{ item.name | url_encode }}&url={{ item.openapi_url | url_encode }}) |
{% endunless %}
{% endfor %}

### Kesksed alamsüsteemid

| Alamsüsteem | Liidese liik | OpenAPI kirjeldus | Swagger vaade |
|---|---|---|---|
{% for item in site.data.xtee_subsystems %}
{% if item.name contains "-central" %}
| `{{ item.name }}` | {{ item.type }} | [Ava OpenAPI JSON]({{ item.openapi_url }}) | [Ava Swagger vaade](../swagger-ui/viewer.html?name={{ item.name | url_encode }}&url={{ item.openapi_url | url_encode }}) |
{% endif %}
{% endfor %}

### Teavituste halduse alamsüsteemid

| Alamsüsteem | Liidese liik | OpenAPI kirjeldus | Swagger vaade |
|---|---|---|---|
{% for item in site.data.xtee_subsystems %}
{% if item.name contains "-notification-management" %}
| `{{ item.name }}` | {{ item.type }} | [Ava OpenAPI JSON]({{ item.openapi_url }}) | [Ava Swagger vaade](../swagger-ui/viewer.html?name={{ item.name | url_encode }}&url={{ item.openapi_url | url_encode }}) |
{% endif %}
{% endfor %}

## Märkus

OpenAPI kirjelduste aadressid pärinevad X-tee keskkonna `EE` kataloogi andmetest. Swagger vaade kasutab ühist vaaturilehte, millele antakse vastava alamsüsteemi OpenAPI kirjelduse aadress parameetrina.
