

## Agregar redes sociales al Footer

### Archivo a modificar
`src/components/layout/Footer.tsx`

### Cambios

**1. Importar iconos de redes sociales**
Lucide no tiene iconos de marca (Facebook, YouTube, etc.), asi que se crearan como componentes SVG inline simples dentro del mismo archivo o se usaran elementos `<svg>` directamente en los enlaces.

**2. Agregar seccion de redes sociales**
En la cuarta columna del grid del footer (actualmente solo hay 3 columnas usadas de las 4 disponibles), agregar una nueva columna "Siguenos" con los 5 enlaces:
- Facebook: https://www.facebook.com/ECOGASMexico/
- YouTube: https://www.youtube.com/@ecogasmexico
- X (Twitter): https://x.com/ECOGASMexico
- Instagram: https://www.instagram.com/ecogasmexico/
- TikTok: https://www.tiktok.com/@ecogas_mexico

Cada enlace tendra:
- Icono SVG de la red social (16x16 o 20x20)
- Nombre de la red como texto
- `target="_blank"` y `rel="noopener noreferrer"`
- Clases `hover:opacity-80 transition-opacity` consistentes con los demas enlaces del footer

**3. Estructura visual**
```text
Logo & Contacto | Enlaces Rapidos | Soy Cliente | Siguenos
                                                  - Facebook
                                                  - YouTube
                                                  - X
                                                  - Instagram
                                                  - TikTok
```

Los iconos SVG seran blancos (`fill="currentColor"`) para heredar el color del footer (`text-primary-foreground`).

