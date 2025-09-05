🎮 Juego del Número Secreto

Un juego interactivo desarrollado con HTML, CSS y JavaScript en el que el usuario debe adivinar un número secreto generado aleatoriamente por la computadora.

El objetivo es practicar la manipulación del DOM, el uso de funciones, arrays, condicionales y la lógica de programación en JavaScript.

📌 Características

✅ Interfaz sencilla y responsive.

✅ El jugador debe adivinar un número entre 1 y 10.

✅ El sistema genera un número aleatorio y verifica los intentos.

✅ Muestra pistas si el número secreto es mayor o menor que el ingresado.

✅ Lleva el conteo de intentos.

✅ Evita repetir números ya sorteados gracias al uso de un array de control.

✅ Botón de Nuevo Juego que reinicia el estado sin recargar la página.

🛠️ Tecnologías usadas

HTML5 → estructura de la página.

CSS3 → estilos con gradientes, tipografías y flexbox.

JavaScript → lógica del juego (DOM, funciones, arrays, condicionales).

Google Fonts → Chakra Petch e Inter para una mejor estética.

📂 Estructura del proyecto 📦 juego-numero-secreto ┣ 📂 img ┃ ┣ ia.png ┃ ┣ code.png ┃ ┗ Ruido.png ┣ 📜 index.html ┣ 📜 style.css ┗ 📜 app.js

🚀 Cómo ejecutar el proyecto

Clona este repositorio o descarga los archivos.

git clone https://github.com/tuusuario/juego-numero-secreto.git

Abre el archivo index.html en tu navegador.

¡Listo! Ya puedes jugar.

🎯 Reglas del juego

El sistema genera un número aleatorio entre 1 y 10.

El jugador debe ingresar un número en la caja de texto.

Al hacer clic en Intentar:

Si acierta, se muestra un mensaje de victoria con el número de intentos usados.

Si no acierta, el sistema indica si el número secreto es mayor o menor.

El juego guarda un historial de números sorteados para evitar repeticiones.

Al terminar, se habilita el botón Nuevo juego.

📜 Explicación del código

CrearNumeroAleatorioSecreto() Genera un número aleatorio entre 1 y numeroMaximo, evitando repeticiones con un array (listaNumerosSorteados).

verificarIntentoDeUsuario() Compara el número ingresado por el usuario con el secreto y muestra pistas.

cambiarTextoElemento(elemento, texto) Función para modificar dinámicamente el contenido de un elemento del DOM.

condicionesIniciales() Inicializa el juego mostrando el mensaje de bienvenida y generando un nuevo número secreto.

limpiarCajaInput() Limpia el valor del campo de entrada después de cada intento.

reiniciarJuego() Restaura el estado inicial del juego y desactiva el botón de reinicio hasta que se adivine un número.

🖼️ Vista previa

(Agrega una captura de pantalla del juego para que luzca más visual)

📌 Mejoras futuras

Permitir elegir el rango del número secreto (ej. del 1 al 100).

Añadir un sistema de puntuación.

Implementar niveles de dificultad.

Guardar el historial de partidas con LocalStorage.

Versión multilenguaje (es/en/pt).

👨‍💻 Autor

Walter Nieves / Walter Nieves 📧 nievesarrietawalter@gmail.com
