import invitations from "../jsons/invitations.json";
import invitations_update from "../jsons/invitations_update.json";

export const getInvitations = (req, res) => {
  const update = req?.query?.update || false;
  let data = {};
  if (update === "true") {
    data = invitations_update;
  } else {
    data = invitations;
  }
  return res.json(data);
};
