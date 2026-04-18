const express = require("express")

module.exports = (controller) => {
  const router = express.Router()

  router.put("/:user_id/personal", (req, res) =>
    controller.updatePersonInformation(req, res)
  )

  router.put("/:user_id/professional", (req, res) =>
    controller.updateProfessionalInformation(req, res)
  )

  router.put("/:user_id/academic", (req, res) =>
    controller.updateAcademicInformation(req, res)
  )

  router.put("/:user_id/full", (req, res) =>
    controller.updateProfile(req, res)
  )

  router.put("/:user_id", (req, res) =>
    controller.updateProfile(req, res)
  )

  return router
}