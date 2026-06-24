# Contexto de producto: clon frontend de Airbnb

## Objetivo
Construir un clon funcional de la experiencia principal de Airbnb para validar arquitectura de componentes en Next.js (App Router), no para replicar cada pixel exacto. La interfaz debe ser mobile-first y responder bien desde 375px, escalando a escritorio a partir de 768px.

## Usuario principal
Persona que quiere:
1. Explorar alojamientos rápidamente.
2. Filtrar opciones y comparar resultados.
3. Entrar al detalle de una propiedad para decidir si reservar.

## Flujo principal de navegación
1. Home: descubre destinos y alojamientos destacados.
2. Catálogo (resultados): revisa una lista más amplia con filtros visuales.
3. Detalle de habitación: consulta fotos, precio, rating, amenidades y descripción.

Toda la navegación entre vistas debe ser interna (Link de Next.js), sin recarga completa del navegador.

## Páginas a implementar

### 1) Home (/)
Contiene:
- Header con marca, acceso a búsqueda y navegación principal.
- Hero de descubrimiento (mensaje principal y CTA hacia catálogo).
- Fila de categorías para simular tipos de estadía.
- Grid compacto de alojamientos destacados.
- Barra inferior móvil tipo app para reforzar experiencia mobile-first.

### 2) Catálogo (/catalog)
Contiene:
- Header persistente.
- Barra de filtros visuales (chips).
- Grid de tarjetas con información resumida (nombre, ubicación, precio por noche, rating).
- CTA de navegación al detalle de cada alojamiento.
- Distribución responsive: 1 columna en móvil, múltiples columnas en escritorio.

### 3) Detalle de habitación (/rooms/[id])
Contiene:
- Breadcrumb + navegación de retorno.
- Galería principal de imágenes.
- Título, ubicación, rating y capacidad.
- Lista de amenidades.
- Bloque de reserva con precio y botón de acción.
- Sección de descripción extensa.

## Estrategia de componentes
- Componentes pequeños, de responsabilidad única.
- Datos mock centralizados para que Home y Catálogo compartan fuente.
- Componentes reutilizables para tarjeta de alojamiento, header y elementos de UI.
- Estilos con Tailwind y variables de color para una identidad visual consistente.

## Nota sobre referencia visual
La implementación toma como referencia la estructura de Airbnb (home, resultados y detalle) y la traduce a componentes React/Next.js para demostrar arquitectura y navegación de producto.

## Flujo con prompts de vision

### Prompt base usado para cada captura
"Analiza esta captura de Airbnb en viewport movil de 375px y genera una especificacion de componentes React. Para cada componente indica: nombre, props (tipo y ejemplo), contenido, y relacion de layout con sus componentes padre/hijos. Devuelve una lista jerarquica desde la pagina hasta componentes atomicos."

### Especificacion generada para Home (/)
- MainHeader
	- props: compact?: boolean (false)
	- funcion: marca, acciones rapidas de navegacion y boton de busqueda.
	- layout: bloque superior sticky.
- HeroBanner
	- props: sin props en esta version.
	- funcion: titular principal, subtitulo y CTA a catalogo.
	- layout: primer bloque principal dentro de main.
- CategoryChips
	- props: categories?: string[] (usa arreglo interno por defecto).
	- funcion: mostrar categorias desplazables horizontalmente.
	- layout: debajo del hero.
- ListingGrid
	- props: items: Listing[].
	- funcion: renderizar tarjetas destacadas.
	- layout: seccion principal de contenido.
- MobileTabBar
	- props: sin props en esta version.
	- funcion: navegacion inferior en mobile.
	- layout: fixed bottom, solo movil.

### Especificacion generada para Catalogo (/catalog)
- MainHeader (compact=true)
	- props: compact: true.
	- funcion: mantener cabecera liviana para resultados.
- SearchIntro (integrado en la pagina)
	- props: title, subtitle, filters[] (en esta version constantes).
	- funcion: resumen de resultados y chips de filtros.
	- layout: panel superior del contenido.
- ListingGrid
	- props: items: Listing[].
	- funcion: listar resultados en cards reutilizables.
	- layout: debajo del panel de filtros.
- MobileTabBar
	- props: sin props.
	- funcion: acceso rapido en movil.

### Especificacion generada para Detalle (/rooms/[id])
- MainHeader (compact=true)
	- props: compact: true.
	- funcion: cabecera de contexto de detalle.
- BackLink (integrado en la pagina)
	- props: href: string.
	- funcion: volver a resultados sin recarga.
- RoomGallery
	- props: tone: ListingTone.
	- funcion: composicion visual de galeria principal + miniaturas.
	- layout: bloque superior de detalle.
- DetailInfo (integrado en la pagina)
	- props: listing: Listing.
	- funcion: metadatos, descripcion y amenidades.
	- layout: columna izquierda en desktop.
- BookingCard
	- props: pricePerNight: number, rating: number, reviews: number.
	- funcion: resumen de reserva y CTA.
	- layout: columna derecha sticky en desktop.

## Restricciones de implementacion aplicadas
- Solo Tailwind CSS y componentes propios.
- Sin librerias de UI preconstruidas.
- Navegacion interna con Link en las tres vistas.