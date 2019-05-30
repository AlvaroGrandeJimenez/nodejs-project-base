define({ "api": [
  {
    "type": "delete",
    "url": "/foo/:id",
    "title": "Delete",
    "group": "Foo",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/routes/foo.js",
    "groupTitle": "Foo",
    "name": "DeleteFooId"
  },
  {
    "type": "get",
    "url": "/foo",
    "title": "List",
    "group": "Foo",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Foo[]",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/routes/foo.js",
    "groupTitle": "Foo",
    "name": "GetFoo"
  },
  {
    "type": "get",
    "url": "/foo/:id",
    "title": "Find",
    "group": "Foo",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Foo",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/routes/foo.js",
    "groupTitle": "Foo",
    "name": "GetFooId"
  },
  {
    "type": "post",
    "url": "/foo",
    "title": "Create",
    "group": "Foo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Foo",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/routes/foo.js",
    "groupTitle": "Foo",
    "name": "PostFoo"
  },
  {
    "type": "put",
    "url": "/foo/:id",
    "title": "Update",
    "group": "Foo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/routes/foo.js",
    "groupTitle": "Foo",
    "name": "PutFooId"
  },
  {
    "type": "delete",
    "url": "/usuarios/:id",
    "title": "Delete",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": "Resultado de la acción"
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "./app/routes/usuarios.js",
    "groupTitle": "Usuarios",
    "name": "DeleteUsuario"
  },
  {
    "type": "delete",
    "url": "/usuarios/:id",
    "title": "Delete",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.2",
    "filename": "./app/routes/usuarios.js",
    "groupTitle": "Usuarios",
    "name": "DeleteUsuario"
  },
  {
    "type": "post",
    "url": "/usuarios",
    "title": "Create",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "Apellido del usuario"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "defaultValue": "true",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Usuario",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.1",
    "filename": "./app/routes/usuarios.js",
    "groupTitle": "Usuarios",
    "name": "PostUsuarios"
  },
] });
