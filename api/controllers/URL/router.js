const express = require("express");
const urlController = require("./controller");
const urlRouter = express.Router();
const validate = require("../../../validators/validate");
const urlSchema = require("../../../validators/url");

urlRouter.get("/:id", urlController.getUrlByID);
urlRouter.get("/", urlController.getUrls);
urlRouter.post("/", validate(urlSchema.postUrl), urlController.addUrl);
urlRouter.put("/:id", urlController.updateUrl);
urlRouter.delete("/:id", urlController.deleteUrl);

module.exports = urlRouter;
