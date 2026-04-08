REPORTE EJECUTIVO — PRUEBAS DE CARGA
Herramienta: Gatling Cloud
Fecha: 8 de abril de 2026
Autor: Julio Naranjo

════════════════════════════════════════
SEMÁFORO DE RESULTADOS
════════════════════════════════════════

Load Test:  🟢 APROBADO
Stress Test: 🟢 APROBADO

════════════════════════════════════════
1. RESUMEN EJECUTIVO
════════════════════════════════════════
Se ejecutaron dos escenarios de prueba de carga contra
la API JSONPlaceholder usando Gatling Cloud. Ambos 
escenarios superaron exitosamente los criterios de 
aceptación definidos, con 0% de errores y tiempos de 
respuesta muy por debajo del umbral establecido de 
2000ms.

════════════════════════════════════════
2. OBJETIVO DE LAS PRUEBAS
════════════════════════════════════════
Escenario 1 — Load Test:
Verificar el comportamiento del sistema bajo carga 
normal sostenida durante 5 minutos.

Escenario 2 — Stress Test:
Identificar el punto de quiebre del sistema mediante
un pico de carga de 100 usuarios en 30 segundos.

════════════════════════════════════════
3. CONFIGURACIÓN
════════════════════════════════════════

Load Test:
- Tipo: Capacity test (carga gradual)
- Duración: 5 minutos
- Usuarios iniciales: 1/s
- Usuarios finales: 5/s
- Think time: 1 segundo
- Criterios: Error% < 1%, P95 < 2000ms

Stress Test:
- Tipo: Stress test (pico de carga)
- Duración: 30 segundos
- Total usuarios inyectados: 100
- Think time: 1 segundo
- Criterios: Error% < 1%, P95 < 2 segundos

Endpoints testeados:
- GET /posts
- GET /users
- GET /posts/1

════════════════════════════════════════
4. TABLA DE RESULTADOS
════════════════════════════════════════

┌─────────────┬────────┬────────┬──────────┬────────┬──────────┐
│ Escenario   │  VUs   │  Dur.  │ P95 (ms) │ Error% │ Requests │
├─────────────┼────────┼────────┼──────────┼────────┼──────────┤
│ Load Test   │  867   │ 8m 20s │  19 ms   │   0%   │  3.150   │
│ Stress Test │   90   │   49s  │  18 ms   │   0%   │   300    │
└─────────────┴────────┴────────┴──────────┴────────┴──────────┘

════════════════════════════════════════
5. ANÁLISIS DE RESULTADOS
════════════════════════════════════════

Tiempos de respuesta:
Ambos escenarios mostraron tiempos de respuesta 
excelentes. El P95 se mantuvo entre 18ms y 19ms, 
representando menos del 1% del umbral máximo de 
2000ms definido como criterio de aceptación.

Tasa de errores:
Se obtuvo 0% de errores en ambos escenarios, lo que
demuestra que la API maneja sin problemas tanto la
carga sostenida como los picos de demanda.

Estabilidad:
Las 2 afirmaciones definidas en cada escenario 
pasaron exitosamente, confirmando que el sistema
cumple con los criterios de calidad establecidos.

Punto de quiebre:
No se identificó punto de quiebre dentro de los
límites del plan gratuito de Gatling (100 VUs máx).
Se requeriría una prueba con mayor cantidad de 
usuarios para encontrar el límite real del sistema.

════════════════════════════════════════
6. CONCLUSIONES
════════════════════════════════════════
1. La API JSONPlaceholder es altamente estable y
   eficiente bajo los niveles de carga probados.

2. Los tiempos de respuesta son excelentes en ambos
   escenarios, con P95 de 18-19ms.

3. No se registraron errores HTTP en ninguna de las
   3.450 solicitudes ejecutadas en total.

4. El sistema no mostró degradación de rendimiento
   bajo carga de pico, lo que indica buena capacidad
   de escalabilidad.

════════════════════════════════════════
7. RECOMENDACIONES TÉCNICAS
════════════════════════════════════════
1. Ejecutar pruebas con mayor duración (10-30 min)
   para validar estabilidad a largo plazo.

2. Aumentar la carga hasta 500-1000 usuarios para
   encontrar el punto de quiebre real.

3. Agregar monitoreo de CPU y memoria del servidor
   durante las pruebas para correlacionar métricas
   de infraestructura con tiempos de respuesta.

4. Implementar pruebas de carga en ambiente de
   staging antes de cada release a producción.
