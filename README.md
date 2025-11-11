# cypress-api-tests-rickandmorty# 🧪 Suite de Pruebas de API con Cypress - Rick and Morty

Este proyecto es una **demostración de habilidades en QA Automation** enfocado en testing de API utilizando **Cypress**.

El objetivo es validar los *endpoints* de la [API pública de Rick and Morty](https://rickandmortyapi.com/), cubriendo no solo casos básicos de "camino feliz", sino también el manejo de errores, la validación de esquemas de datos y la integridad relacional entre *endpoints*.

---

## 🚀 Tecnologías Utilizadas

* **Cypress:** Como framework principal de pruebas para ejecutar `cy.request()`.
* **JavaScript (ES6+):** Para la escritura de los *scripts* de prueba.
* **Node.js:** Para la gestión de paquetes (npm) y la ejecución de Cypress.
* **Chai:** (Integrado en Cypress) para las aserciones `expect()`.

---

## 🎯 Cobertura de Pruebas (Test Coverage)

La suite de pruebas (`/cypress/e2e/rick-morty-api.cy.js`) está diseñada para demostrar una mentalidad de QA completa, cubriendo los siguientes escenarios:

1.  **Prueba de "Camino Feliz" (Status 200):**
    * Valida que una petición `GET` a un recurso válido (`/character/2`) devuelva un `200 OK`.
    * Verifica que los datos de la respuesta (el `body`) sean correctos (ej. `name: "Morty Smith"`).

2.  **Manejo de Errores (Status 404):**
    * Valida que una petición a un recurso inexistente (`/character/99999`) devuelva un error `404 Not Found`.
    * Utiliza `failOnStatusCode: false` para manejar y verificar correctamente la respuesta de error.

3.  **Validación de Lógica de Negocio (Filtros):**
    * Prueba la funcionalidad de los *query parameters* de la API (ej. `?name=rick&status=alive`).
    * Verifica que *todos* los resultados en la respuesta cumplan con los criterios del filtro.

4.  **Validación de Esquema (Data Types):**
    * Verifica el "contrato" de la API para un recurso (`/character/1`).
    * Valida que cada campo clave (`id`, `name`, `status`, `episode`) tenga el tipo de dato correcto (ej. `number`, `string`, `array`).

5.  **Prueba de Features Específicas (Múltiples IDs):**
    * Valida la capacidad de la API para manejar una petición de múltiples recursos en un solo *request* (ej. `/character/1,2,3`).
    * Verifica que la respuesta sea un `array` con la cantidad exacta de elementos solicitados.

6.  **Prueba de Integridad Relacional (Peticiones Encadenadas):**
    * Demuestra la capacidad de manejar pruebas asíncronas (`.then()`).
    * **Paso 1:** Obtiene un personaje (`/character/1`).
    * **Paso 2:** Extrae la URL de su origen (`origin.url`) de la primera respuesta.
    * **Paso 3:** Realiza una *segunda petición* a esa URL de origen.
    * **Paso 4:** Valida los datos de la segunda respuesta (ej. `name: "Earth (C-137)"`).

---

## ▶️ Cómo Ejecutar las Pruebas

Para ejecutar esta suite de pruebas en tu máquina local:

### Prerrequisitos

* Tener [Node.js](https://nodejs.org/en/) y [npm](https://www.npmjs.com/) instalados.

### Pasos

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/FranMayer/cypress-api-tests-rickandmorty.git](https://github.com/FranMayer/cypress-api-tests-rickandmorty.git)
    ```

2.  **Navega al directorio del proyecto:**
    ```bash
    cd cypress-api-tests-rickandmorty
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

4.  **Ejecuta las pruebas:**

    * **Modo *Headless* (por consola):**
        ```bash
        npx cypress run --spec "cypress/e2e/rick-morty-api.cy.js"
        ```

    * **(Opcional) Modo Interactivo (con UI):**
        ```bash
        npx cypress open
        ```
        (Y luego haz clic en `rick-morty-api.cy.js` en el explorador de Cypress)

---

### Autor

* **Franco Mayer**
    * [LinkedIn](https://www.linkedin.com/in/franmayer/)
    * [GitHub](https://github.com/FranMayer)