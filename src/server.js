import app from './app';

app.listen(process.env.APP_PORT, () =>
  console.log(`Server running at port: ${process.env.APP_PORT}`)
);
