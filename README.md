# 🚀 Pruebas de Carga — k6 & Gatling

![Status](https://img.shields.io/badge/Status-Passed-brightgreen?style=for-the-badge)
![k6](https://img.shields.io/badge/k6-Grafana%20Cloud-FF4500?style=for-the-badge)
![Gatling](https://img.shields.io/badge/Gatling-Cloud-9B59B6?style=for-the-badge)
![Errors](https://img.shields.io/badge/Errors-0%25-success?style=for-the-badge)

Proyecto de pruebas de rendimiento ejecutado con **k6** y **Gatling Cloud**,
simulando escenarios de carga normal y estrés contra JSONPlaceholder API.

---

## 📁 Estructura del Repositorio
pruebas-de-carga/
├── k6/
│   └── prueba-completa.js       # Script flujo completo con k6
├── gatling/
│   ├── load-test-gatling.js     # Script Load Test con Gatling
│   └── stress-test-gatling.js   # Script Stress Test con Gatling
├── docs/
│   ├── analisis-resultados.md   # Análisis detallado k6
│   └── reporte-ejecutivo.md     # Reporte ejecutivo final
├── reporte-k6.pdf               # Reporte visual k6
├── reporte-load-test.pdf        # Reporte Load Test Gatling
└── reporte-stress-test.pdf      # Reporte Stress Test Gatling

---

## 🔄 Escenarios Testeados

### Escenario 1 — k6: Flujo Completo
Flujo de 3 endpoints encadenados simulando login, consulta y creación de usuarios con 50 VUs durante 30 segundos.

### Escenario 2 — Gatling: Load Test
Verificación del comportamiento bajo carga normal sostenida durante 5 minutos con incremento gradual de usuarios.

### Escenario 3 — Gatling: Stress Test
Identificación del punto de quiebre mediante pico de carga de 100 usuarios en 30 segundos.

---

## 📊 Resultados

| Escenario | Herramienta | VUs | P95 (ms) | Error% | Requests |
|-----------|-------------|-----|----------|--------|----------|
| Flujo completo | k6 | 50 | 24 ms | 0% | 1.500 |
| Load Test | Gatling | 867 | 19 ms | 0% | 3.150 |
| Stress Test | Gatling | 90 | 18 ms | 0% | 300 |

---

## ✅ Conclusiones

- ✔️ **0% de errores** en los 3 escenarios ejecutados
- ✔️ **P95 máximo de 24ms**, muy por debajo del umbral de 2000ms
- ✔️ La API demostró estabilidad total bajo todos los niveles de carga
- ✔️ No se identificó punto de quiebre dentro de los límites probados

---

## 🛠️ Herramientas Utilizadas

- **k6** — Grafana Cloud
- **Gatling** — Gatling Cloud
- **JSONPlaceholder** — API pública de pruebas

---

*Pruebas ejecutadas el 8 de abril de 2026*
