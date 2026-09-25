## Pipeline de `POST /citas`

En este proyecto, cuando un usuario realiza una peticion POST citas, nestjs processa el request siguiendo un flujo de validacion, autorizacion, logica de negocio y persistencia.

## Recorrido de la peticion

`POST /citas`

- JwtAuthGuard.
- RolesGuard.
- LoggingInterceptor.
- ValidationPipe.
- CitasController.
- CitasService.
- PacientesService.
  `Prisma`
- PrismaExceptionFilter (si ocurre un error de prisma).
- LoggingInterceptor.
- Respuesta http.

### 1. Autenticación y autorización

Primero intervienen JwtAuthGuard y RolesGuard.

- JwtAuthGuard verifica que la peticion tenga un JWT valido.
- El token permite identificar al usuario autenticado.
- RolesGuard comprueba que el rol del usuario tenga permisos para realizar la peticion.
- En este proyecto existen roles como RECEPCIONISTA, MEDICO y GERENCIA.

Si el usuario no está autenticado o no tiene el rol requerido, la peticion se detiene y no llega al controller.

### 2. Logging

Una vez superada la seguridad, interviene el LoggingInterseptor.

Este interceptor inicia el registro del tiempo que tarda en procesarse la peticion. De esta manera podemos saber cuanto tiempo tomo ejecutar el endPoint mencionado.

### 3. Validación del DTO

Despues se valida el cuerpo de la peticion mediante el ValidationPipe.

El body debe cumplir las reglas definidas en CreateCitaDto. por ejemplo, los campos requeridos y sus tipos deben ser correctos.

Si los datos enviados no cumplen las reglas del DTO, nestJS devuelve un error 400 y la ejecucion no continúa.

### 4. Controller y Service

Si la petición es valida, recien llega al controller.

El controlador recibe los datos y delega la operacion a CitasService, donde se encuentra la logica de negocio relacionada con las citas.

Cuando CitasService necesita verificar o consultar informacion del paciente, vuelve a utilizar PacientesService en lugar de duplicar la consulta de Prisma.

Despues de realizar las validaciones necesarias, el servicio utiliza Prisma para crear la cita en la db.

### 5. Manejo de errores de Prisma

Si durante la operacion de base de datos prisma genera una excepcion, aqui entra PrismaExceptionFilter.

El filter captura el error y lo transforma en una respuesta http apropiada para que el cliente no reciba directamente un error interno de prisma.

### 6. Finalización y loging

Cuando la operacion termina, la respuesta vuelve a el LoggingInterceptor.

El interceptor registra el tiempo total que tomo procesar la peticion y finalmente nestJS devuelve la respuesta http al cliente.

### Resumen

Este flujo representa la separacion de responsabilidades utilizada en el proyecto:

- Guards: seguridad y autorizacion.
- Interceptors: comportamiento alrededor de la petición, como logging.
- Pipes: validación y transformación de datos.
- Controllers: reciben las peticiones y delegan.
- Services: contienen la lógica de negocio.
- Prisma: acceso a la base de datos.
- Exception Filters: transformación y manejo de errores.
