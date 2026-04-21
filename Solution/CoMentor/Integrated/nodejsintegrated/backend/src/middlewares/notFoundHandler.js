module.exports = (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    path: req.path,
    statusCode: 404,
  });
};