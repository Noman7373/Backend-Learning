const aboutPageController = (req, res) => {
  res.render("about", {
    aboutMe: "My name is Noman Ahmed and I am a full-stack developer",
    skills: ["Javascript", "React.js", "Node.js", "Express.js", "MongoDB"],
  });
};

export { aboutPageController };
