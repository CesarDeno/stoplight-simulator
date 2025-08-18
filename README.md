# Simulador de Semáforo en React

Este proyecto es un simulador de cruce peatonal de 4 lados creado con React y Material-UI. Permite visualizar semáforos sincronizados en ambos sentidos (Norte-Sur y Este-Oeste) con un contador de tiempo para cada fase.

## Funcionalidades

- Semáforos sincronizados según dirección.
- Contador visible en la esquina superior derecha.
- Calles dibujadas con líneas amarillas simulando carriles.
- Ciclo de fases: Verde → Amarillo → Verde sentido perpendicular.
- Configurable duración de cada fase.

## Scripts disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Inicia la app en modo desarrollo.  
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

La página se recargará si haces cambios.  
También verás errores de lint en la consola.

### `npm run build`

Genera la versión de producción en la carpeta `build`.  
Optimiza y minifica el código para un despliegue rápido y eficiente.

### `npm run deploy`

Si configuraste GitHub Pages, este script despliega automáticamente tu app.  
Debe ejecutarse después de configurar `homepage` en `package.json` y `gh-pages` en tu proyecto.

## Tecnologías

- React  
- TypeScript  
- Material-UI (MUI)  
- GitHub Pages (opcional para despliegue)

