const express = require('express');
const controller = require('../controllers/usuarios');

const router = express.Router();

router
  .route('/')

  /**
  * @api {get} /usuarios List
  * @apiGroup usuarios
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {usuarios[]} data
  */
  .get(controller.list)

  /**
  * @api {post} /usuarios Create
  * @apiGroup Usuairos
  *
  * @apiParam {String} name
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {usuarios} data
  */
  .post(controller.create);

router
  .route('/:id')

  /**
  * @api {get} /usuarios/:id Find
  * @apiGroup usuarios
  *
  * @apiSuccess {Boolean} success=true
  * @apiSuccess {usuarios} data
  */
  .get(controller.findById)

  /**
  * @api {put} /usuarios/:id Update
  * @apiGroup usuarios
  *
  * @apiParam {String} name
  *
  * @apiSuccess {Boolean} success=true
  */
  .put(controller.update)

  /**
  * @api {delete} /usuarios/:id Delete
  * @apiGroup usuarios
  *
  * @apiSuccess {Boolean} success=true
  */
  .delete(controller.delete);

module.exports = router;
