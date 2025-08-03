🏦 Simulador de Cajero Automático

Este proyecto simula un cajero automático básico usando JavaScript.

🔧 Funcionalidades

 Solicita un PIN (máximo 3 intentos).
 Verifica si el PIN es correcto.
 Muestra un menú con las siguientes opciones:
  Consultar saldo.
  Realizar un retiro (solo si hay saldo disponible).
  Salir del sistema.
  Permite realizar múltiples operaciones hasta que el usuario decida salir.

✅ Requisitos

- Validar el PIN correctamente.
- No permitir más de 3 intentos fallidos.
- No permitir retiros mayores al saldo.
- Permitir múltiples operaciones.
- Opción para salir del sistema.


Diagrama de flujo:

[INICIO]
|
[Pedir PIN]
|
¿PIN correcto?
|
├── NO → ¿Intentos < 3?
| ├── SÍ → [Pedir PIN otra vez]
| └── NO → [Acceso bloqueado] → [FIN]
|
└── SÍ →
|
[Mostrar MENÚ]
|
¿Qué desea hacer?
|
├── 1. Consultar saldo → [Mostrar saldo] → [Volver al MENÚ]
|
├── 2. Retirar dinero
| |
| ¿Saldo suficiente?
| ├── NO → [Mostrar error] → [Volver al MENÚ]
| └── SÍ → [Realizar retiro] → [Mostrar saldo] → [Volver al MENÚ]
|
└── 3. Salir → [Mostrar mensaje de despedida]
|
[FIN]