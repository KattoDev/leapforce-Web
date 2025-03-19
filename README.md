<img src="./leapforcelogo.png"/>

Leapforce es una aplicación web diseñada para optimizar la gestión de equipos y proyectos. Basada en el proyecto [Sistema de Empleados](https://github.com/KattoDev/SistemaDeEmpleados), Leapforce reestructura y mejora sus funcionalidades para brindar una mejor experiencia de organización y productividad.

## Autores

<!-- Agrega aquí tu @username si has contribuido al proyecto -->

- [@KattoDev](https://github.com/KattoDev)

## Características

Esta aplicación está enfocada en mejorar la gestión de:

- Miembros del equipo
- Equipos de trabajo
- Proyectos
- Tareas

## Tecnologías utilizadas

- **Frontend:** Vue 3 + Vite
- **Estilos:** CSS
- **Base de datos:** Firebase
- **Autenticación:** Firebase Auth

## Capturas de pantalla

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Recursos utilizados en el proyecto

- **Tipografías:**
  - [Megrim](https://fonts.google.com/specimen/Megrim)
  - [Poppins](https://fonts.google.com/specimen/Poppins)

## Ejecución local

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. Clona el proyecto

```bash
  git clone https://github.com/KattoDev/leapforce-Web.git
```

### 2. Ve al directorio del proyecto

```bash
  cd leapforce-Web
```

### 3. Instala las dependencias

```bash
  npm install
```

### 4. añade las credenciales de firebase en el .env

> - revisa el apartado de [acceso a la consola de firebase](CONTRIBUTING.md#acceso-a-la-consola-de-firebase)
> - ve a la consola de firebase
> - ve a ajustes del proyecto **LeapforceApp**
> - busca la app web de Leapforce y copia las credenciales de firebase, añadiendolas al .env de la siguiente manera:
>
> ```bash
>  VITE_FIREBASE_apiKey=apiKey
>  VITE_FIREBASE_authDomain=authDomain
>  VITE_FIREBASE_projectId=projectID
>  VITE_FIREBASE_storageBucket=storageBucket
>  VITE_FIREBASE_messagingSenderId=messagingSenderId
>  VITE_FIREBASE_appId=appId
>  VITE_FIREBASE_measurementId=measurementId
> ```
>
> [!CAUTION]
> las credenciales del **.env** tienen que estar sin comillas (simples o dobles)

### 5. Inicia el servidor de desarrollo

```bash
  npm run serve
```

## Contribuciones

¡Las contribuciones al proyecto siempre serán bienvenidas!

Para más información revisa [CONTRIBUTING.md](CONTRIBUTING.md).
