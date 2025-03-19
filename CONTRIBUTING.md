# Contribuyendo a CONTRIBUTING.md

¡Antes que nada, gracias por tomarte el tiempo de contribuir! ❤️

Todo tipo de contribuciones son bienvenidas y valoradas. Consulta la [Tabla de Contenidos](#tabla-de-contenidos) para conocer las diferentes formas de ayudar y los detalles sobre cómo maneja este proyecto las contribuciones. Asegúrate de leer la sección relevante antes de hacer tu contribución. Esto hará que el proceso sea mucho más sencillo para nosotros como mantenedores y mejorará la experiencia para todos los involucrados. La comunidad espera con entusiasmo tus contribuciones. 🎉

## Tabla de Contenidos

- [Código de Conducta](#codigo-de-conducta)
- [Quiero Contribuir](#quiero-contribuir)
  - [acceso a la consola de firebase](#acceso-a-la-consola-de-firebase)
- [Reportar Errores](#reportar-errores)
- [Sugerir Mejoras](#sugerir-mejoras)
- [Tu Primera Contribución de Código](#tu-primera-contribucion-de-codigo)
- [Mejorar la Documentación](#mejorar-la-documentacion)
- [Guías de Estilo](#guias-de-estilo)
  - [Código Fuente](#código-fuente)
  - [Formato de Documentación](#formato-de-documentación)
- [Mensajes de Commit](#mensajes-de-commit)

## Código de Conducta

Este proyecto y todos los que participan en él están sujetos al [Código de Conducta de CONTRIBUTING.md](CODE_OF_CONDUCT.md). Al participar, se espera que cumplas con este código.

## Quiero contribuir

### Acceso a la consola de firebase

> [!WARNING]
> Actualmente la consola de firebase está restringida a las personas que quieran aportar al proyecto de LEAPFORCE, si realizas un fork de este proyecto por favor utiliza otra cuenta de firebase

> [!IMPORTANT]
> La cuenta de firebase está protegida con 2FA, así que antes de realizar cambios al firebase comunicate con
> [KattoDev](https://github.com/KattoDev)

las credenciales de firebase son las siguientes:

- **Correo:** app.leapforce@gmail.com
- **Contraseña:** leapforceprojectSENA

ahí podrás encontrar todo lo necesario para administrar LEAPFORCE

## Mejorar la Documentación

Mejorar la documentación es una excelente forma de contribuir. Una buena documentación ayuda a otros usuarios a comprender y utilizar el proyecto de manera más eficiente. Aquí hay algunas maneras en que puedes ayudar:

- Corregir errores tipográficos, de gramática o mejorar la claridad del contenido.
- Agregar ejemplos prácticos que faciliten la comprensión.
- Mejorar la estructura para que sea más fácil de leer y navegar.
- Mantener actualizada la documentación con las nuevas versiones del proyecto.

Si deseas mejorar la documentación, simplemente abre un [Issue](/issues/new) o envía un Pull Request con tus sugerencias.

## Guías de Estilo

Para mantener la coherencia en el código y la documentación, seguimos ciertas guías de estilo. Asegúrate de cumplir con estos estándares al contribuir.

### Código Fuente

- Usa nombres de variables y funciones descriptivos y en inglés.
- Sigue las convenciones de formato del lenguaje utilizado (por ejemplo, eslint para JavaScript).
- Evita la duplicación de código y promueve la reutilización.

### Formato de Documentación

- Usa un tono claro y conciso.
- Mantén la coherencia en los títulos, listas y estructura de los documentos.
- Proporciona ejemplos de código cuando sea posible.

### Mensajes de Commit

Los mensajes de commit deben seguir un formato estructurado para facilitar el seguimiento del historial del proyecto. Se recomienda el siguiente formato:

```
tipo(scope): descripción breve

Cuerpo del mensaje (opcional)
```

Ejemplo:

```
feat(auth): agregar soporte para autenticación con OAuth

Se añadió la autenticación utilizando OAuth 2.0, lo que permite a los usuarios iniciar sesión con Google y Facebook.
```

Tipos comunes:

- **feat**: Agregar una nueva funcionalidad.
- **fix**: Corregir un error.
- **docs**: Cambios en la documentación.
- **style**: Cambios de formato, espacios, puntos y comas (sin cambios en la lógica del código).
- **refactor**: Mejoras en la estructura del código sin cambiar su comportamiento.
- **test**: Agregar o modificar pruebas.
