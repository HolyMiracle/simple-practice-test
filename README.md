# simple-practice-test

Before you start app set up nginx-proxy for API requests.

Go to `nginx-proxy` directory and start nginx docker container by `docker-compose up -d`.

Proxy located on `8888` port by default, so make sure to add proxy flag `ember s --proxy=http://localhost:8888` for testing before starting this app.

Variables for setting the `clientPortalBaseUrl` & `clinicianId` available in the `config/environment.js` file.
