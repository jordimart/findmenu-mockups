## Findmenu mockups ##

Demo: * [findmenu.tk](https://findmenu.tk)

En esté proyecto trabajaré los mockups o vistas previas de la aplicación Findmenu.

La idea es presentar el diseño previo de la aplicación Findmenu mediante una web en la que pueda ver las vistas de la 
aplicación de forma dinámica, para ello utilizaré la estructura de angular-base con un servidor nodejs y realizaré el 
deploy en heroku.

El motivo por el cual utilizo una propia web es porque el software gratuito que he probado no me ofrece el resultado 
que quiero mostar y el segundo motivo es que de esta forma tendré una base progarmada con html/css y este código me 
servirá para el proyecto final.

Este proyecto lo quiero utilizar también como block de notas para después poder desarrollar la documentación de diseño 
basándome en lo que escribo en él.

### Webs competencia en cuanto a funcionalidad ###

Uno de los primeros puntos a observar es ver como trabaja la competencia, como ha diseñado las vistas, que utiliza y 
como se maneja su versión responsive.

* [foursquare.com](https://es.foursquare.com/)
* [Eltenedor.es](https://www.eltenedor.es/)
* [Restaurantes.com](https://www.restaurantes.com/)
* [minube.com](http://www.minube.com/)
* [viamichelin](https://www.viamichelin.es/)
* [Fotocasa.es](http://www.fotocasa.es/es/)

He incluido fotocasa ya que aunque es una aplicación de inmobiliarias utiliza también un mapa para como buscador.
No llega a ser igual ya que utiliza clusters para agrupar las viviendas y está más elaborada, pero es la idea de tener 
un mapa con una barra de filtros y poder cambiar a la vista listado.

### Webs que he tenido como mockups de diseño ##

Para dar con un diseño que me agrdara me he basado en templates web, analizando que hacían en el código con el inspector
o intentando imitar en lo posible su funcionalidad.
Estas son las url que me han servido de guia.

* [plantilla 1](https://www.templatemonster.com/es/demo/61406.html)

De esta plantilla me gusto el home para ponser el buscador principal y la formade manejar la barra de navegación normal
y responsive

* [plantilla 2](https://www.templatemonster.com/es/demo/58888.html)

De esta plantilla me gusto muchos la combinación de colores y algunas vistas, aunque me quedan muchas animaciones 
y efectos por poner.

No he podido llegar en tan poco tiempo a su nivel ya que no se trata de copiar sino intentar imitar los diseños y es 
bastante laborioso programarlo todo con gusto y con calidad.
En la entrega final se intentarán mejorar muchos aspectos.

### Sobre las tecnologías ###
#### Diseño ####

Para el diseño he utilizado ***css3*** y ***html*** como lenguage básico.
El código esta programado utilizando ***sass*** el cual me ayuda a estructurar mejor el código utilizando ***nesting***,
 reutilizar 
código cumpliendo con la permisa ***DRY( Don't Repeat Yourself)***  y además mediante ***variables*** podemos cambiar 
los colores,
fuentes, brakpoints de todos los lugares cambiándolo solo en un fichero. Me quedan aun más cosas por probar como las
***herencias*** o ***funciones***.

También he utilizado ***Bootstrap 3*** como framework de css, este me proporciona muchas clases para dar forma al html, 
pero sobretodo lo he utilizado por su ***sistema de grid***, este me permite distribuir los elementos organizados y 
además es 
***responsive***, con lo cual el código que tengo en las media queries es mínimo.

Para los iconos he utilizado ***Glyphicons de Bootstrap***, ***Bootstrap-social*** y ***Font-awesome***.

#### Cliente ####

Para el cliente he utilizado Angularjs 1.6.x con el estilo de Jhon Papa, este framework de javascript me obliga a 
organizar mejor la aplicación y la guia de uso de Jhon Papa me ayuda como referencia, mi código será más limpio,legible 
y mantenible.
Además me prepara para dar el salto a Angular 2.0 ya que sigue esta metodología de componentes.

Sobre el cliente he aprochado la estructura y he utilizado algunas librerías externas más como angular-slick-carousel 
para el pase de fotos y nya-bootstrap-select para configurar los selects.
Tambien he utilizado angular para realizar animaciones asignando clases de css al clickar o ocultar cosas dependiendo
del estado de una variable.

También realice una prueba al intentar aprovechar el módulo de login que ya tenía hecho, aunque estaba claro que no se 
escribió en su momento para ser reaprovechable me ha dado ideas de como debería hacer módulos base para poder reutilizar
el código y programar aplicaciones más rapido.
Para los datos añadí un block de mockups de forma que tenia datos y simulaba lallegada desde el servidor, con esto la 
lógica del html está más completa.

Para los mapas he utilizado ngMap que tiene bastante documentación.
En la próxima entrega debo conectar ya con un servidor y debo ver la forma de construir los módulos de laforma más 
independiente, de forma que instalar un módulo sea copiar lacarpeta y añadir laaplicacion.
En caso de conseguir este objetibo debo documentar los requerimientos e instrucciones necesarios para cada módulo.

#### Deploy ####

Para el deploy he utilizado la configuración que tenía en el vps del trabajo de clase, pero este  proyecto terminará en 
Heroku ya que solo servirá para visualizarlo en la presentación.

#### Otros ####

Para los commits he intentado diferenciarlos entre [DIW] diseño de interficies web y [CLI] para los trabajos en cliente.
Los IDEs utilizados han sido Visual studio code y Gitkraken para git.







