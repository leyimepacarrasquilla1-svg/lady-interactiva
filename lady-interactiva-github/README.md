# Lady Interactiva

Repositorio de actividades didácticas y proyectos de la profe Lady, preparado para GitHub Pages.

## Publicar el sitio por primera vez

1. Sube el contenido de esta carpeta a la raíz del repositorio `lady-interactiva`. El archivo `index.html` debe quedar en la raíz, no dentro de una carpeta adicional.
2. En GitHub abre **Settings → Pages**.
3. En **Source**, elige **Deploy from a branch**.
4. Selecciona **main** y **/ (root)**. Pulsa **Save**.
5. Espera a que GitHub termine la publicación. La dirección aparecerá en esa misma página.

No necesitas instalar programas, configurar una base de datos ni añadir contraseñas al sitio. La carpeta incluye los archivos ya preparados para publicar.

## Agregar una actividad o un proyecto

1. Abre la carpeta `materiales` en GitHub. Usa **Add file → Upload files** para subir tu HTML, PDF o ZIP y guarda con **Commit changes**. Mantén los nombres sin espacios ni tildes, por ejemplo `sistema-solar.html`.
2. En la web, abre **Agregar material**. Completa título, descripción, área y nivel. Selecciona `proyecto` si corresponde.
3. En el enlace de la actividad escribe `materiales/sistema-solar.html`. Para una actividad alojada fuera, utiliza su enlace completo `https://...`.
4. Si quieres ofrecer una descarga, completa también ese campo. Un HTML puede tener la misma ruta en ambos campos. Para un PDF o ZIP puedes completar únicamente la descarga.
5. Pulsa **Descargar catálogo actualizado**. El navegador guardará `materiales.json`.
6. En la raíz del repositorio, usa **Add file → Upload files**, carga ese `materiales.json` y confirma que reemplazas el catálogo. Guarda con **Commit changes**.
7. Espera a que GitHub publique el cambio y comprueba la actividad en la biblioteca.

El asistente genera el archivo, pero no escribe directamente en GitHub. Los visitantes no pueden modificar tu repositorio. Antes de agregar materiales en una nueva sesión, espera a que se publique la actualización anterior y recarga la página para partir del catálogo más reciente. Puedes generar varias fichas en una misma sesión; conserva el último catálogo descargado, que incluye las anteriores. Si el navegador añade un número al nombre, renómbralo a `materiales.json` antes de subirlo.

## Archivos y ejemplos

- `index.html`: inicio.
- `actividades.html`: biblioteca con búsqueda y filtros.
- `proyectos.html`: proyectos.
- `publicar.html`: asistente para preparar fichas.
- `materiales.json`: catálogo que utiliza el sitio.
- `materiales/`: tus archivos.
- `ejemplos/`: tres actividades funcionales y un proyecto de demostración.
- `assets/`: diseño y aplicación ya preparados.
- `source/`: código editable para mantenimiento.

Los ejemplos están identificados. Puedes retirarlos eliminando sus entradas en `materiales.json`. No borres archivos que utilicen otras publicaciones. Para cambiar una ficha existente, edita sus campos en ese archivo, conservando el formato JSON.

Un ZIP se descarga: no se descomprime ni ejecuta dentro de la página. Para abrir una actividad que contiene varios archivos, sube su carpeta completa y enlaza su entrada, por ejemplo `materiales/sistema-solar/index.html`.

Las descargas de enlaces externos dependen del servicio que los aloja: algunos se abrirán en otra pestaña. Los archivos alojados en este repositorio tienen descarga directa.

## Mantenimiento del diseño (opcional)

Para cambiar textos y comportamiento de la aplicación, edita `source/portal.tsx`. Con Node.js instalado, ejecuta `npm install` y después `npm run build`; sube también el `assets/app.js` actualizado. El diseño se modifica en `assets/style.css`. Para añadir actividades normalmente no necesitas estos pasos.

GitHub Pages usa rutas relativas, así que esta versión funciona tanto en la dirección del proyecto como en un dominio propio. No contiene credenciales, servicios de Sites ni llamadas a su base de datos.
