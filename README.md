# 🚀 Frontend App - Actividad No. 4 (SENA)

Este proyecto es una aplicación web moderna para la gestión de usuarios (CRUD), construida como parte de la **Actividad No. 4: Construcción de una App (Frontend) con Node JS - Tailwind** del Semillero de Investigación de Teleinformática CEET.

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Consumo de API**: Fetch API con Proxies/Rewrites de Next.js

## 📋 Requisitos Previos

Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada)
- [npm](https://www.npmjs.com/) (viene incluido con Node.js)

## ⚙️ Instalación

1. **Clonar el repositorio** (o descargar los archivos):
   ```bash
   git clone <url-del-repositorio>
   cd mi-app-user-with-next-js
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**:
   Crea un archivo `.env` en la raíz del proyecto (si no existe) y define las siguientes variables:
   ```env
   # URL base para el frontend (usada en rewrites)
   NEXT_PUBLIC_USERS_API_URL=/api/users

   # URL real de la API REST (Backend - abajo se muestra una de ejemplo por motivos de seguridad)
   USERS_API_TARGET=https://tu-api-backend.azurewebsites.net/
   ```

## 🚀 Ejecución

### Modo Desarrollo
Para ejecutar la aplicación con recarga en caliente (hot reload):
```bash
npm run dev
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### Modo Producción
Para generar el bundle optimizado y ejecutarlo:
```bash
# 1. Construir el proyecto
npm run build

# 2. Iniciar el servidor de producción
npm run start
```

## ✨ Funcionalidades (CRUD)

- **Lectura**: Listado dinámico de usuarios consumiendo la API.
- **Escritura**: Formulario para la creación de nuevos usuarios con validaciones.
- **Actualización**: Edición de datos de usuarios existentes.
- **Eliminación**: Borrado de registros directamente desde la tabla.
- **Mensajes de Estado**: Alertas visuales para confirmar operaciones o mostrar errores.

## 🌐 Despliegue

La aplicación esta desplegada en **Vercel** y su enlace es: [https://mi-app-user-with-next-js.vercel.app/](https://mi-app-user-with-next-js.vercel.app/)

---
**Semillero de Investigación de Teleinformática CEET - SENA**
