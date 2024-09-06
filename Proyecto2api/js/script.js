let texto = "";
texto = "<h1>Hola a todos</h1>";

const contenido = document.createRange().createContextualFragment()

const div = document.getElementById("API");

div.append(contenido);