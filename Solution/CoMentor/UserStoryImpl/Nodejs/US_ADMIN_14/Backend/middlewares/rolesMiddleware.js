function validateRoleAssignment(req, res, next) {
  const userId = Number(req.params.userId || req.body.user_id);
  const { role_ids } = req.body;

  if (!Number.isInteger(userId) || userId <= 0) {
    return res.status(400).json({ error: 'Invalid userId parameter' });
  }

  if (!Array.isArray(role_ids) || role_ids.length === 0) {
    return res.status(400).json({ error: 'role_ids must be a non-empty array' });
  }

  if (!role_ids.every((roleId) => Number.isInteger(roleId) && roleId > 0)) {
    return res.status(400).json({ error: 'role_ids must contain positive integer values' });
  }

  next();
}

module.exports = {
  validateRoleAssignment,
};