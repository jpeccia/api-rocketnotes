const { Router } = require("express");

const NotesControllers = require("../controllers/NotesController");

const notesRoutes = Router();

const notesControllers = new NotesControllers();

notesRoutes.post("/:user_id", notesControllers.create);

module.exports = notesRoutes;