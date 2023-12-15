
# admin-todos

## Descripción
Este proyecto es una aplicación de administración de tareas que utiliza Next.js como framework de React.

## Instalación
1. Clona este repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Levanta la base de datos de Postgres en Docker con el comando `docker compose up`
4. Revisa que los datos sean correctos correspondientes al archivo Docker-compose.yml
5. Renombrar el archivo .env 
6. Remplazar las variables de entorno
7. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

## Scripts disponibles
En el directorio del proyecto, puedes ejecutar los siguientes comandos:

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm start`: Inicia el servidor de producción.
- `npm run lint`: Ejecuta el linter para verificar el código.

## Prisma Commands

- `pnpm dlx prisma init` : Comando para iniciar Prisma con los datos por defecto
- `pnpm dlx prisma migrate dev`: Comando para migrar la base de datos , mover el modelo de prisma a la bd de desarrollo
- `pnpm dlx prisma generate`:  Crear el prisma client para utilizarlo

## Dependencias
- React: ^18
- React Dom: ^18
- Next: 14.0.4

## Dependencias de desarrollo
- Typescript: ^5
- @types/node: ^20
- @types/react: ^18
- @types/react-dom: ^18
- Autoprefixer: ^10.0.1
- Postcss: ^8
- Tailwindcss: ^3.3.0
- Eslint: ^8
- Eslint-config-next: 14.0.4
- Prisma


## Variables de entorno
-    `DATABASE_URL=`
