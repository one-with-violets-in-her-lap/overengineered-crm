# Simple CRM app built with microfrontends

Consists of multiple standalone React.js projects:

-   Dashboard (`apps/dashboard`): dashboard app, a 'host'/'app' project that represents a
    ready-to-use application

-   Clients panel (`packages/clients-panel`): components/code related to clients panel,
    e.g. clients table. this is a 'remote'/'package' project that does not provide a
    ready-to-use interface on its own. uses **ant design** library internally for a table
    component

-   UI kit (`packages/ui-kit`): similarly to clients panel project, provides ui
    components to use in the apps

The projects are loaded in each other during runtime, delivering the
code using HTTP requests

Also used **Turborepo** to simplify building and linting multiple projects

## Benefits

For me, the best benefit is keeping code in small isolated modules. But it's important to clearly define what
microfrontends expose and use, or you will mess things up.

Independent choice of tech to use is also worth noting. But in some implementations of microfrontends it
can be cumbersome to integrate different tools with each other

---

![Dashboard UI with a table and a custom button highlighted as a separate microfrontend projects](./diagram.jpg)
