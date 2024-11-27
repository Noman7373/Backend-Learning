class StudentController {
  static getSessionInfo = (req, res) => {
    // to get the information
    console.log(req.session);
    console.log(req.session.id);
    console.log(req.session.cookie);
    console.log(req.session.cookie.maxAge);
    console.log(req.session.cookie.originalMaxAge);
    console.log(req.sessionID);

    res.send("Session Info.....");
  };

  //   Delete Session
  static deleteSession = (req, res) => {
    req.session.destroy(() => {
      console.log(
        `Session Deleted.... Cannot access session ${req.session.id}`
      );
    });
    res.send("Session Deleted....");
  };

  //   Regenerate Session
  static regenerateSession = (req, res) => {
    req.session.regenerate(() => {
      console.log(`session Regnerated... ${req.session.id}`);
    });
    res.send(`session Regnerated... ${req.session.id}`);
  };

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
