ANÁLISIS DE PRUEBA DE CARGA Herramienta: k6 en Grafana Cloud Fecha: 8 de abril de 2026 Autor: jucenaga97

════════════════════════════════════════

OBJETIVO DE LA PRUEBA ════════════════════════════════════════ Evaluar el comportamiento y rendimiento de la API JSONPlaceholder bajo carga simultánea de 50 usuarios virtuales, validando tiempos de respuesta, tasa de errores y estabilidad del sistema durante un flujo completo de 3 endpoints encadenados.
════════════════════════════════════════ 2. HERRAMIENTA UTILIZADA ════════════════════════════════════════

Herramienta: k6 (Grafana Cloud)
Alternativa a: Apache JMeter
Ejecución: 100% en la nube, sin instalación local
Load Zone: Columbus, USA
════════════════════════════════════════ 3. FLUJO TESTEADO ════════════════════════════════════════ Se simuló un flujo de 3 pasos encadenados:

Paso 1 — POST /posts (simula login) Envía credenciales y extrae el ID generado Assertion: status 201, tiempo < 2000ms

Paso 2 — GET /posts/{id} (simula consulta con token) Consulta el recurso usando el ID extraído del paso 1 Assertion: status 200, tiempo < 2000ms

Paso 3 — POST /users (simula creación de usuario) Crea un usuario con datos del CSV simulado Assertion: status 201, tiempo < 2000ms

════════════════════════════════════════ 4. CONFIGURACIÓN DE LA PRUEBA ════════════════════════════════════════

Usuarios virtuales (VUs): 50
Duración: 30 segundos
Think time entre requests: 1 segundo
Datos de entrada: CSV simulado con 5 registros
Umbrales definidos: tiempo de respuesta < 2000ms
════════════════════════════════════════ 5. RESULTADOS OBTENIDOS ════════════════════════════════════════

Resumen general: ┌─────────────────────┬──────────┐ │ Total requests │ 1.500 │ │ HTTP Failures │ 0 │ │ Peak RPS │ 50 req/s │ │ P95 Response Time │ 24 ms │ │ Checks pasados │ 4.500/ │ │ │ 4.500 │ └─────────────────────┴──────────┘

Por endpoint: ┌──────────────┬──────────┬──────────┬────────┐ │ Endpoint │ Avg (ms) │ P95 (ms) │ Error% │ ├──────────────┼──────────┼──────────┼────────┤ │ POST /posts │ 22 ms │ 32 ms │ 0% │ │ GET /posts │ 6 ms │ 8 ms │ 0% │ │ POST /users │ 21 ms │ 31 ms │ 0% │ └──────────────┴──────────┴──────────┴────────┘

════════════════════════════════════════ 6. ANÁLISIS DE RESULTADOS ════════════════════════════════════════ Tiempos de respuesta: Todos los endpoints respondieron muy por debajo del umbral definido de 2000ms. El peor caso registrado fue de 32ms en el P95, lo que representa apenas el 1.6% del umbral máximo permitido.

Tasa de errores: Se obtuvo un 0% de errores en los 1.500 requests ejecutados, lo que indica que la API manejó sin problemas la carga de 50 usuarios simultáneos.

Estabilidad: Los 4.500 checks definidos en el script pasaron en su totalidad (100%), confirmando que las respuestas cumplieron con los criterios de correctitud definidos para cada endpoint.

════════════════════════════════════════ 7. CONCLUSIONES ════════════════════════════════════════

1.La API JSONPlaceholder demostró ser estable y eficiente bajo una carga de 50 usuarios virtuales.

2.Los tiempos de respuesta son excelentes, con un P95 de 24ms muy por debajo del umbral de 2000ms.

3.No se registraron errores HTTP en ninguno de los 3 endpoints del flujo testeado.

4.El sistema podría soportar una carga mayor sin degradación significativa del rendimiento, según lo observado en pruebas anteriores con 100 VUs.

5.Se recomienda realizar pruebas con mayor duración (5-10 minutos) para validar estabilidad sostenida.
