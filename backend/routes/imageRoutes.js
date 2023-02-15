router.get('/images/:tag', async (req, res) => {
    const tag = req.params.tag;
    try {
      const hairstyles = await Hairstyle.find({ tag });
      res.status(200).json(hairstyles);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  