---
author: jvmnt
pubDatetime: 2025-03-19T19:04:39.000+01:00
modDatetime: 
title: Cómo (y por qué) hice mi blog personal
featured: true
draft: false
tags:
  - blog
  - dev
description: Siempre me han gustado los blogs personales, así que decidí crear el mío. En este post cuento por qué lo hice, cómo lo monté con Astro y Cloudflare, los cambios que hice y lo que aprendí en el proceso.
---

Desde la época dorada de los blogs (allá por la primera década del siglo XXI) me han gustado los blog personales. A día de hoy no suelen ser tan abundantes, y los que hay suelen tener que ver con el desarrollo y la tecnología, aunque la mayoría no se queda en eso. Muchos de ellos además comparten lo que aprenden sobre otros temas, otros intereses o proyectos… He aprendido mucho gracias a estos blogs y por ello quería hacer algo parecido.

## ¿Cómo?
Un amigo me explicó un poco sobre los generadores de web estáticas y como no necesitaba nada complejo como un Wordpress o un gestor de contenido, me decanté por [Astro](https://astro.build/) porque era el que este amigo me había explicado.

Después de probar con varias plantillas la mayoría se me quedaba algo corta o se me hacía difícil de modificar, pero el diseño de  [AstroPaper](https://astro-paper.pages.dev/posts/how-to-configure-astropaper-theme/), minimalista y bien estructurado (a mi entender) me pareció una buena base para modificar.

Para el despliegue elegí [Cloudflare Pages](https://pages.cloudflare.com/). Es bastante sencillo; alojas el contenido en un repositorio de Github, vinculas tu cuenta en Cloudflare y luego eliges el repositorio que quieres desplegar. En pocos minutos está funcionando.

## Personalización
La base de AstroPaper me parecía bastante buena, pero para que se ajustara un poco más a lo que tenía en mente hice varios cambios:

- Tocando algo los archivos de estilo CSS cambié el color. Esto no tuvo más misterio puesto que viene bien indicado en la documentación.
- Para el cambio de fuente tipográfica elegí [Inter](https://rsms.me/inter/) por ser open-source y además me gusta su estilo. Fue algo más complicado, pero buscando en internet y preguntando a alguna IA lo solucioné sin demasiados problemas.
- Por último fui traduciendo los elementos de la página que estaban en inglés al español.

## Lo aprendido
No soy desarrollador, pero gracias a crear este blog he aprendido algunas cosas nuevas y útiles:
- He aprendido a editar el CSS y personalizar los estilos de [Tailwind](https://tailwindcss.com/). Al tocar y estropear algunas cosas vas dándote cuenta de cómo funciona y no parece ta intimidante.
- Modificar componentes de Astro. Esto fue algo más complicado y tuve que recurrir al tutorial más de una vez. Al final con un poco de ayuda me di cuenta de algunas cosas y pude modificar ciertos aspectos.
- Manejarme con [VS Code](https://code.visualstudio.com/). No es una herramienta que me resulte muy cómoda y al principio me intimidaba por la cantidad de opciones y funciones. Pero a base de usarla se le pierde el respeto y te das cuenta de lo configurable y lo potente que es.
- También he aprendido a manejarme con [Git](https://git-scm.com/). Lo de la consola también resulta intimidante, pero poco a poco te vas haciendo una idea y lo de los comandos ya no suenan a chino y como Git es una herramienta muy buena sobre todo si no tienes mucha idea como yo y tienes que “volver al pasado” entre todas las cosas que he tocado.
## Planes futuros
Lo siguiente que me gustaría sería hacer una nueva página [“Now”](https://nownownow.com/about) como la que [Derek Sivers](https://sive.rs/now3) implementó en su página web, donde indique en que estoy metido últimamente.

También me atrae la opción de incluir una galería de fotos para subir las fotos que voy haciendo y que no me animo a subir a redes sociales.

Por último si alguien se anima a hacer algo parecido lo mejor que le puedo decir es que empiece con algo y que rompa cosas. Probando es como se aprende.