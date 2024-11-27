class StudentController {
  // Session variable example
  static session_example = (req, res) => {
    // initialize the session leribale
    req.session.device = "Mobile";
    if (req.session.count) {
      req.session.count++;
    } else {
      req.session.count = 1;
    }
    // access the session varible
    res.send(`Count:${req.session.count}`);
  };

  static getSessionDynamicData = (req, res) => {
    if (req.session.device) {
      console.log(`Session Variable Data... ${req.session.device}`);
      res.send(`Device Name : ${req.session.device}`);
    }
  };
}

export default StudentController;
