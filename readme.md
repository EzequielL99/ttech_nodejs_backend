# TALENTO TECH - BACKEND CON NODE.JS

Proyecto de backend para la cursada de Talento Tech 2025 Node.JS

## 📖 Tabla de contenidos

1. [Características](#-características)
2. [Tecnologías](#-tecnologías)
3. [Instalación](#️-instalación)
4. [Uso](#️-uso)
5. [Estructura del proyecto](#-estructura-del-proyecto)
6. [Tests](#-tests)
7. [Contribuyentes](#-contribuyentes)
8. [Licencia](#-licencia)

## ✨ Características

- Consulta de todos los productos
- Consulta de productos en particular
- Creación de productos
- Eliminación de productos
- Procesamiento de argumentos por consola
- Peticiones HTTP aceptadas: GET, POST y DELETE

## 💡 Tecnologías

- NodeJS
- Fake Store API

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/EzequielL99/ttech_nodejs_backend

# Entrar al directorio
cd proyecto

# Instalar dependencias
npm install

# Ejecutar comando especificando peticion (obligatorio), endpoint (obligatorio) y argumentos (opcional)
npm run start {metodo} {endpoint} {argumentos}
```

## 🕹️ Uso

Ejecutar el comando `npm run start`. Debe complementar este comando con el tipo de petición a realizar (GET, POST y DELETE), definir el endpoint y proveer los argumentos (si el método y el endpoint lo soportan)

## 📂 Estructura del proyecto

src/
 ┣ src/             # Contenedor principal del proyecto
    ┣ controllers/  # Controladores
    ┣ services/     # Servicios
    ┣ server.js     # Archivo raíz y entrada del proyecto
 ┣ package.json     # Archivo de configuración de node


## 🧪 Tests

- GET products -> Recuperación de todos los productos
- GET products/:id -> Recuperación de producto a partir de su ID
- POST products -> Creación de nuevo producto
- DELETE products/:id -> Eliminación de un producto a partir de su ID

## 🤝 Contribuyentes

- Ezequiel Lopez

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
