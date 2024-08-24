const advanceResult = (model) => async (req, res, next) => {
  try {
    const { page } = req.params;
    const { select, val } = req.query;
    const offset = (page - 1) * 100;

    const data = await model.find({ select: val }).offset(offset).limit(100);
    if (!data) {
      res.advanceResult = {
        message: "bad request",
      };
    }
    res.advanceResult = data;

    next();
  } catch (err) {
    console.error(err);
  }
};

module.exports = advanceResult;
