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
      <Skill {...skills[0]} />
      <Skill {...skills[1]} />
      <Skill {...skills[2]} />
      <Skill {...skills[3]} />
      <Skill {...skills[4]} />
      <Skill {...skills[5]} />
      <Skill {...skills[6]} />
    </div>)
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      {props.skill}
    </div>)
}

export default App;
