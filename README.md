# Voladores | Sprint 2 - Proyecto Final
## Descripción del desarrollo: 
El objetivo del proyecto es construir un aplicativo web para comprar tickets de un vuelo.
### Vista propuesta desktop:
![Vista Desktop](https://github.com/mario-cartagena/air-tickets/assets/98544638/1c191e32-e94f-425f-a6ea-289af2a4ae93)
### Vista propuesta mobile:
![Vista Mobile](https://github.com/mario-cartagena/air-tickets/assets/98544638/66bee566-9c93-4888-bbd3-d4bd74492a76)

Además, la página web debe cumplir con los siguientes requerimientos: 

***Herramientas y condiciones:*** Se debe evidenciar el uso de los siguientes elementos:
1. Librería JavaScript React js
2. Diseño responsive
3. Enrutamiento dinámico
4. Componentes funcionales
5. Hooks de estado, efecto, personalizados y de React Router.
6. Peticiones HTTPs con Axios
7. Implementación de JSON server (API)
8. Implementación de Sweetalert para mostrar las alertas.
9. Despliegue del aplicativo en GitHub pages o vercel


***Requerimientos funcionales:***
1. Cumplir con los estilos del diseño proporcionado, implementando cualquier framework CSS.
2. Implementar hosting para el despliegue del JSON-server que contenga la información de los vuelos y pasajeros.
3. Filtro de búsqueda de vuelos debe filtrar por:
      - Viaje de ida (sencillo) o viaje de ida y regreso (redondo)
      - Vuelo de origen y destino.
      - Fechas de viaje
      - Cantidad de pasajeros
4. Al dar click en el botón de buscar vuelo, debe validar si están completos los criterios mínimos de búsqueda (todos los mencionados en el ítem No. 3) y redireccionar a una nueva página donde el usuario tendrá la oportunidad de seleccionar los vuelos programados en la fecha seleccionada, cuyo diseño será:

![image](https://github.com/mario-cartagena/air-tickets/assets/98544638/41fc6439-7d27-41a2-b0b1-eee9a989f3de)

Nota: En la parte derecha de la página se debe mostrar al usuario los criterios de búsqueda aplicados y los costos asociados a los rubros a cancelar según la selección actual del vuelo, y a su vez, cada itinerario debe tener relacionado como mínimo la siguiente información: la duración del viaje, si tiene escalas y el precio del pasaje.

5. Al dar click en el botón de cambiar vuelo, debe redireccionar al usuario a la página de inicio, donde pueda modificar los criterios de búsqueda y realizar el cambio de vuelo.

6. Cuando el usuario haya seleccionado el(los) vuelo(s) y el tipo de equipaje a llevar, debe aparecer un botón de Seleccionar asientos:

![image](https://github.com/mario-cartagena/air-tickets/assets/98544638/0d37d4fc-1a6d-4172-92ce-3c3370f5801c)

7. Al dar click sobre el botón de seleccionar asientos, debe redireccionar al usuario a la siguiente página:

![image](https://github.com/mario-cartagena/air-tickets/assets/98544638/5dc73044-6400-48bd-ba23-c09a79d22d47)

8. En la página de selección de asientos se le debe mostrar al usuario losasientos disponibles, ocupados y seleccionados.
9. Cuando el usuario haya completado la selección de los asientos tanto del vuelo de salida como de regreso, se debe activar el botón de pagar con Paypal.

![image](https://github.com/mario-cartagena/air-tickets/assets/98544638/4d209487-f9c6-4a0c-bb47-3fdd03f397d8)

10. Al dar click sobre el botón Pagar con Paypal, debe redireccionar al usuario a una nueva página donde debe ingresar los datos personales de los pasajeros, información correspondiente al medio de pago y confirmar la compra de los pasajes.

11. Una vez que el usuario haya confirmado la compra, el aplicativo debe indicarle que la compra fue exitosa y suministrarle la información correspondiente al o los pasajes comprados, como: el número de reserva, el código del vuelo, asientos comprados, etc.

### Vistas:
#### Vista Desktop:
- Home

![image](https://github.com/mario-cartagena/air-tickets/assets/98544638/e7c06462-a3ea-4c61-8acb-0f2817ab0ede)
- Flight

![image](https://github.com/mario-cartagena/air-tickets/assets/98544638/f2215f75-31ec-46d5-89fd-e8e1912fd16a)
- Seats

![image](https://github.com/mario-cartagena/air-tickets/assets/98544638/721b58ae-1679-4efe-a899-8db1f74ae30b)
- Payment

![image](https://github.com/mario-cartagena/air-tickets/assets/98544638/60e24bb3-30f4-4217-9a99-689aad33cd19)
- Flight Details

![image](https://github.com/mario-cartagena/air-tickets/assets/98544638/17c3af1b-518f-47aa-9480-9950002f83e6)
![image](https://github.com/mario-cartagena/air-tickets/assets/98544638/0a6f05d0-e4f6-4d49-9ff6-4bf56cb8fee1)


### Vista Mobile:
![image](https://github.com/mario-cartagena/air-tickets/assets/98544638/82dfee2e-ed86-4e75-81cc-c064685adaba)


## Ejecución del proyecto:

1. Asegurate de tener instalado `node js` y `npm`.
2. Abre el proyecto desde tu terminal favorita, preferiblemente `git bash` o cualquiera que tenga una distribución de linux.
3. Ejecuta el comando `npm install` para instalar todas las dependencias necesarias para la ejecución del proyecto.
4. Ejecuta el comando `npm start` para correr la aplicación en modo desarrollo. Por defecto se abrirá algo como [http://localhost:3000](http://localhost:3000) en tu navegador.
5. Listo, ya puedes visualizar la ejecución del proyecto.

## Estadísticas Wakatime:
[Jhon Mario Cartagena](https://wakatime.com/@5fc61b94-21cb-4f47-89df-c8c38183b231/projects/fnhheiydsg?start=2023-05-25&end=2023-05-31)

[Maria Antonieta Pereira](https://wakatime.com/@5fc61b94-21cb-4f47-89df-c8c38183b231/projects/fnhheiydsg?start=2023-05-25&end=2023-05-31)

