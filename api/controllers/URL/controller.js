const Url = require("../../../models/url");
const { nanoid } = require("nanoid");

const getUrlByID = async (req, res) => {
  try {
    const { id } = req.params;
    const url = await Url.findById(id);
    if (!url) {
      return res.status(500).json({
        message: "url doesn't exist",
        data: {},
      });
    }
    res.status(200).json({
      message: "Fetched one successfully",
      data: url,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server Error",
      data: {},
    });
  }
};
const getUrls = async (req, res) => {
  const urls = await Url.find();

  if (!urls) {
    return res.status(500).json({
      message: "urls doesn't exist",
      data: {},
    });
  }
  res.status(200).json({
    message: "Fetched successfully",
    data: urls,
  });
};
const addUrl = async (req, res) => {
  const { URL } = req.body;

  const url = new Url({
    URL,
    Short_URL: nanoid(5),
  });

  await url.save();

  res.status(201).json({
    message: "Successfully added",
    data: url,
  });
};
const updateUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const { URL } = req.body;

    const url = await Url.findById(id);
    if (!url) {
      return res.status(500).json({
        message: "url doesn't exist",
        data: {},
      });
    }
    const url2 = {};
    url2.URL = URL || url.URL;

    const newUrl = await Url.findByIdAndUpdate(id, url2, { new: true });
    if (!newUrl) {
      return res.status(500).json({
        message: "url failed to update",
        data: {},
      });
    }
    return res.status(200).json({
      message: "Updated successfully",
      data: newUrl,
    });
  } catch (error) {
    console.log("ERROR => ", error);
    return res.status(500).json({
      message: "ERROR on server",
      data: {},
    });
  }
};

const deleteUrl = async (req, res) => {
  const { id } = req.params;
  const url = await Url.findById(id);
  if (!url) {
    return res.status(500).json({
      message: "url doesn't exist",
      data: {},
    });
  }
  const deletedUrl = await Url.findByIdAndDelete(id);
  if (!deletedUrl) {
    return res.status(500).json({
      message: "url failed to delete",
      data: {},
    });
  }
  res.status(200).json({
    message: "Successfully deleted",
    data: deletedUrl,
  });
};

module.exports = {
  getUrlByID,
  getUrls,
  addUrl,
  updateUrl,
  deleteUrl,
};
