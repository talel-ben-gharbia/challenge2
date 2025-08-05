import "./styles.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "javaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "#E84F33",
  },

  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Python",
    level: "beginner",
    color: "#FF3B00",
  },
];

function Avatar() {
  return (
    <div>
      <img
        src="https://tse3.mm.bing.net/th/id/OIP.rfbzSCa2ig0zr9zEKiWbLgHaE-?pid=Api&P=0&h=220"
        alt="react"
      />
    </div>
  );
}

function Intro() {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ratione
      rerum modi mollitia nemo, doloribus nobis dolores commodi magnam. Ut eum,
      accusamus quaerat vitae dolorum repellendus fuga veritatis molestiae
      numquam!
    </p>
  );
}

function SkillList() {
  return (
    <div>
      {skills.map((ele) => (
        <Skill skill={ele.skill} color={ele.color} level={ele.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <span style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level === "beginner" && "👶"}</span>
      <span>{level === "intermediate" && "👌"}</span>
      <span>{level === "advanced" && "💪"}</span>
    </span>
  );
}
export default function App() {
  return (
    <div className="App">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}
