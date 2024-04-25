import skills from './skills.js';

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="aquib.jpg" alt="Aquib" className='avatar' />
    </div>)
}

function Intro() {
  return (
    <div>
      <h1>Shahbaz Ali</h1>
      <p >Hey there!
        I'm a second-year engineering student diving
        into React.js and passionate about full-stack
        web development. Excited to innovate and
        enhance user experiences! And here are my development skills</p>
    </div>)
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill {...skills} />
    </div>)
}

function Skill(props) {
  const skills = Object.values(props);
  return skills.map((skill) => (
    <div key={skill.skill} className="skill" style={{ backgroundColor: skill.bgColor }}>
      {skill.skill}
    </div>
  ));
}

export default App;
