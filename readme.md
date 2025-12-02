# 🧩 Talento Tech - Backend con NodeJS y Express

API Rest desarrollada con NodeJS y Express para la el curso de Backend correspondiente al programa Talento Tech.

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- JavaScript
- Firestore
- Json Web Token (JWT)

## 📦 Instalación

1.  Clonar el repositorio:

```bash
git clone https://github.com/EzequielL99/ttech_nodejs_backend.git
```

2.  Ingresar al proyecto:

```bash
cd ttech_nodejs_backend
```

3.  Instalar dependencias:

```bash
npm install
```

4.  Crear archivo `.env` en la raíz:

```bash
    # FIRESTORE
    FIREBASE_API_KEY=TuApiKey
    FIREBASE_AUTH_DOMAIN=TuAuthDomain
    FIREBASE_STORAGE_BUCKET=TuStorageBucket
    FIREBASE_APP_ID=TuAppId

    # JWT
    JWT_SECRET=TuSecreto

    # Puerto de ejecucion del servidor
    PORT=Port
```

## ▶️ Ejecución del proyecto

### Modo desarrollo

```bash
npm run dev
```

### Modo producción

```bash
npm start
```

## 📁 Estructura del proyecto

    /src
      /controllers
      /data
      /middlewares
      /models
      /routes
      /services
      /utils
      index.js
    .env
    package.json
    readme.md

## 🌐 Endpoints principales

### 🔐 Authentication

Método Ruta Descripción

---

- POST `/auth/login` Inicia sesión. Obtendrás como respuesta un Token generado por la librería JWT

#### Cuerpo de la petición POST

```json
{
  "email": "admin@admin.com",
  "password": "admin",
}
```

### 📦 Products

Método Ruta Descripción

---

- GET `/api/products` Lista productos
- GET `/api/products/:id` Obtiene un producto
- POST `/api/products` Crea un producto
- DELETE `/api/products/:id` Elimina un producto

---
### POST `/api/products`

Cuerpo de la petición POST

```json
{
  "category": "mouse",
  "description": "Mouse HyperX de ejemplo",
  "name": "Mouse gamer HyperX",
  "price": 95,
  "stock": 10,
}
```

---

## 🔑 Autenticación

Las rutas protegidas requieren un token en el header:

    Authorization: Bearer <token>

## 🛑 Controlador de errores

Si se produce un error durante cualquier petición, recibirás un JSON con el mensaje del error.

```json
{
  "error": "{Detalle del error producido}",
}
```

## 🧱 Buenas prácticas incluidas

- Validación de datos (express-validator)
- Manejo centralizado de errores (middlewares)
- Estructura escalable por capas (MVC)

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Podés usar el código
libremente.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Abrí un issue o un pull request para
mejorar la API.
