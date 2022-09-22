## CUSTOMER-CRUD

`React` application that simulates a customer CRUD, using `json-server` as backend. Application structure created with `Vite`

<u>**Deployed application URL**</u> [Customer Crud App](https://dmeritano-customers-crud.netlify.app)

## App insights

* React **v17**
* React Router Dom **v6**
* Formik + Yup
* TailwindCSS


---
Live Demo(*) [Here](https://dmeritano-customers-crud.netlify.app)

> * Data: loaded from db.json file in this proyect

### Environment variables used
> * *VITE_CUSTOMERS_API_URL* = `http://url-to-customers-api`


### json-server 

To use json-server locally, do the following::

```properties
   npm install -g json-server
   echo {\"customers\":[]}
   json-server --watch db.json --port 4000
```


