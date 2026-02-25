## Plan: Tooltip con direccion en tarjeta de Chihuahua

### Que se hara

Al posicionar el mouse sobre la tarjeta de **Chihuahua** en la pagina de Cobertura, aparecera un tooltip mostrando la direccion: **Calle Colegio 6300, Chihuahua, Chih y embeber a google maps: <iframe src="[https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d875.4641886962296!2d-106.12466672397125!3d28.634054994557236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzAyLjYiTiAxMDbCsDA3JzI0LjQiVw!5e0!3m2!1ses-419!2smx!4v1771978669318!5m2!1ses-419!2smx](https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d875.4641886962296!2d-106.12466672397125!3d28.634054994557236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzAyLjYiTiAxMDbCsDA3JzI0LjQiVw!5e0!3m2!1ses-419!2smx!4v1771978669318!5m2!1ses-419!2smx)" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>**

### Detalle tecnico

**Archivo:** `src/pages/cobertura/Cobertura.tsx`

- Agregar una propiedad opcional `address` al array `cities`, con el valor `"Calle Colegio 6300, Chihuahua, Chih."` para Chihuahua
- Importar `Tooltip`, `TooltipTrigger`, `TooltipContent` y `TooltipProvider` desde `@/components/ui/tooltip`
- Envolver el grid de tarjetas con `TooltipProvider`
- Para las tarjetas que tengan `address`, envolver la `Card` con `Tooltip` + `TooltipTrigger` + `TooltipContent` mostrando la direccion
- Las tarjetas sin `address` se renderizan igual que antes