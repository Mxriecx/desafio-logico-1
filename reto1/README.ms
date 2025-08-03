# 🛂 Sistema de Validación de Ingreso

Este proyecto consiste en un sistema simple de validación de ingreso para visitantes, desarrollado con el objetivo de controlar el acceso a un espacio determinado según criterios definidos por la empresa.

🧾 Descripción:

El sistema solicita información básica del visitante y determina si puede o no ingresar, basándose en las siguientes condiciones:

🔐 Datos solicitados:
- **Nombre del visitante**
- **Edad**
- **¿Tiene invitación?** (sí / no)

✅ Reglas de acceso:
 Visitantes **menores de 18 años**: ❌ **No pueden ingresar**.
 Visitantes de **18 años o más sin invitación**: ❌ **No pueden ingresar**.
 Visitantes de **18 años o más con invitación**: ✅ **Pueden ingresar**.

📤 Resultado:
El sistema genera un **mensaje personalizado** indicando si el visitante puede o no acceder.

![diagrama de flujo reto 1](assets/flujo1.png)