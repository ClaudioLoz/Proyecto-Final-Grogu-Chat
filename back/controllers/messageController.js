const Messages = require("../models/message");

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await Messages.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });

    if (data) return res.json({ msg: "Mensaje añadido correctamente" });
    else return res.json({ msg: "No se pudo agregar el mensaje a la base de datos" });
  } catch (ex) {
    next(ex);
  }
};


module.exports.getMessagesStatistics = async (req, res, next) => {
  try {
    const { from, to } = req.body;

    const counters = await Messages.aggregate([
      { $group: { _id: '$message' } },
      { $count: 'countOfUniqueMessages' }
    ]);
    console.log(counters);
    // const statistics = messages.map((msg) => {
    //   return {
    //     fromSelf: msg.sender.toString() === from,
    //     message: msg.message.text,
    //   };
    // });
    res.json({ msg: "estadisticas no implementadas del todo" });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getMessages = async (req, res, next) => {
    try {
      const { from, to } = req.body;
  
      const messages = await Messages.find({
        users: {
          $all: [from, to],
        },
      }).sort({ updatedAt: 1 });
  
      const projectedMessages = messages.map((msg) => {
        return {
          fromSelf: msg.sender.toString() === from,
          message: msg.message.text,
        };
      });
      res.json(projectedMessages);
    } catch (ex) {
      next(ex);
    }
  };
  


  