function createdError(err, req, res, next) {
  console.log(err);
  next(err);
}

function formatError(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = { createdError, formatError };
