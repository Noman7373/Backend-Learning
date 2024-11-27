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
}

export default StudentController;
