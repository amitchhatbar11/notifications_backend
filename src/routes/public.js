import express from "express";
import * as invitationsController from "../controllers/invitations";

const router = express.Router();

//= ===============================
// Public routes
//= ===============================

router.get("/invitations", invitationsController.getInvitations);

module.exports = router;
