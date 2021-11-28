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

function formatErrorBoom(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = { createdError, formatError, formatErrorBoom };
