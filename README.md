# FAQ - Hiodes

Proyecto de Preguntas Frecuentes (FAQ) para Hiodes.

## Tecnologías Utilizadas

Este proyecto fue generado con herramientas modernas de desarrollo frontend para garantizar velocidad, tipado seguro y una buena experiencia de diseño:

- **Framework principal:** [React 18](https://react.dev/)
- **Empaquetador/Servidor local:** [Vite](https://vitejs.dev/) (con `@vitejs/plugin-react-swc` para mayor rapidez)
- **Lenguaje principal:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes de Interfaz:** [shadcn/ui](https://ui.shadcn.com/) y [Radix UI](https://www.radix-ui.com/)
- **Enrutamiento:** [React Router v6](https://reactrouter.com/)
- **Manejo de Formularios y Validaciones:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu sistema:
- **[Node.js](https://nodejs.org/)** (se recomienda la versión 18 o superior).
- Un manejador de paquetes de Node como **npm**, que viene por defecto al instalar Node.js.

---

## Instalación y Pasos para Clonar el Proyecto

Sigue estos pasos para obtener una copia funcional del proyecto en tu máquina local:

1. **Clonar el repositorio**  
   Abre una terminal y ejecuta:
   ```bash
   git clone https://github.com/jimenaazocar05/Hiodes_FAQ.git
   ```

2. **Ingresar a la carpeta del proyecto**
   ```bash
   cd FAQ
   ```

3. **Instalar dependencias necesarias**  
   Una vez dentro, instala los paquetes requeridos desde `package.json`:
   ```bash
   npm install
   ```

4. **Levantar el servidor de desarrollo**  
   Ejecuta el entorno en tu computadora para empezar a ver la página y trabajar en los cambios en tiempo real:
   ```bash
   npm run dev
   ```
   > **Tip:** Abre [http://localhost:8080](http://localhost:8080) (o el puerto que te indique la consola) en tu navegador para ver la aplicación funcionando.

---

## Estructura Principal del Proyecto

Una visión rápida de los archivos más críticos:

- `src/` - Contiene el código fuente del proyecto.
  - `components/` - Se encuentran las piezas reutilizables de React y la interfaz de usuario.
    - `ui/` - Componentes atómicos e independientes base pre-configurados de shadcn/ui (botones, tarjetas, etc.).
  - `pages/` - Contiene las vistas completas de la aplicación según la ruta a la que se ingrese.
  - `data/`, `hooks/`, `lib/` - Lógica de negocio, estados globales, utilidades abstractas e información de respaldo.
- `public/` - Útil para albergar los activos y recursos estáticos que el empaquetador servirá directamente como imágenes o `favicon`.
- `tailwind.config.ts`, `vite.config.ts`, `package.json` - Bases y configuraciones de las diversas herramientas utilizadas detrás del proyecto.
