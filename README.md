## Local setup

In order to run app locally you should have Node.js version > 18.17

1. install dependecies

```bash
npm install
# or
yarn install
```

2. Add `.env.local` file with required environments variables

3. Create file for DB for local purposes

```bash
touch ./prisma/dev.db
```

4. Configure database

```bash
npx prisma db psuh
# then
npx prisma generate
```

5. Run application in development mode

```bash
npm run dev
# or
yarn dev
```

## Create new migration after schema change

```bash
npx prisma migrate dev --name migration_name
```

## Push changes to Database

```bash
prisma db push
```

## Performance

- Employed virtualized lists in order to avoid unnecessary resource consumption
- Employed debounce in order to avoid triggering API calls or other computations too often
- Applied database indexes for faster records lookup in Database

## Security

- Do not store critical user information in app's database by using OAuth protocol
