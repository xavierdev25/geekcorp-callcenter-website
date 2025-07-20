# GeekCorp - Soluciones Tecnológicas Innovadoras

GeekCorp es una empresa de desarrollo de software que ofrece soluciones tecnológicas personalizadas para empresas. Nuestro sitio web corporativo está construido con Next.js 15, TypeScript y Tailwind CSS 4.

## 🚀 Características

- **Multiidioma**: Soporte completo para español e inglés
- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Performance**: Construido con Next.js 15 y optimizaciones de rendimiento
- **TypeScript**: Código completamente tipado para mayor seguridad
- **Tailwind CSS 4**: Estilos modernos con la última versión de Tailwind

## 🛠️ Tecnologías

- **Framework**: Next.js 15.4.2
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4
- **Gestión de Estado**: React Hooks
- **Internacionalización**: Sistema personalizado i18n
- **Gestor de Paquetes**: pnpm

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/geekcorp/website.git
cd geekcorp
```

2. Instala las dependencias:
```bash
pnpm install
```

3. Ejecuta el servidor de desarrollo:
```bash
pnpm dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
src/
├── app/                 # App Router de Next.js
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globales con Tailwind CSS 4
├── components/         # Componentes React
│   ├── layout/         # Componentes de layout (Header, Footer)
│   ├── sections/       # Secciones de la página
│   └── ui/            # Componentes de UI reutilizables
├── constants/         # Constantes y configuraciones
├── types/            # Definiciones de tipos TypeScript
└── i18n/             # Archivos de internacionalización
```

## 🔧 Scripts Disponibles

- `pnpm dev` - Ejecuta el servidor de desarrollo
- `pnpm build` - Construye la aplicación para producción
- `pnpm start` - Inicia el servidor de producción
- `pnpm lint` - Ejecuta el linter
- `pnpm lint:fix` - Corrige errores de linting automáticamente
- `pnpm type-check` - Verifica tipos de TypeScript
- `pnpm format` - Formatea el código con Prettier
- `pnpm clean` - Limpia archivos de build
- `pnpm clean:all` - Limpia todo incluyendo node_modules

## 🌐 Internacionalización

El proyecto soporta múltiples idiomas a través de un sistema personalizado:

- Los archivos de traducción se encuentran en `src/i18n/`
- Soporte para español (es) e inglés (en)
- Cambio de idioma persistente en localStorage

## 🎨 Personalización

### Colores (Tailwind CSS 4)
Los colores principales están definidos en `src/app/globals.css` usando CSS custom properties:
- `--color-deep-blue`: #335A83
- `--color-orange`: #FF9800
- `--color-ivory`: #FFFBF6
- `--color-light-gray`: #E8E8E8
- `--color-dark-gray`: #2C2C2C

### Componentes
Los componentes están organizados en carpetas por funcionalidad:
- `layout/`: Componentes de estructura (Header, Footer)
- `sections/`: Secciones de contenido (About, Services, etc.)
- `ui/`: Componentes reutilizables

## 🐳 Docker

### Desarrollo
```bash
docker-compose --profile dev up
```

### Producción
```bash
docker-compose up
```

## 📝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: info@geekcorp.com
- **Teléfono**: +1 (555) 123-4567
- **Sitio Web**: https://geekcorp.com

---

Desarrollado con ❤️ por el equipo de GeekCorp
