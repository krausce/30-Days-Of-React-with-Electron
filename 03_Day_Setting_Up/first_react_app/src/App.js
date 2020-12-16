// import logo from './logo.svg';
import frontEndTech from './images/frontend_technologies.png'
import avatar from './images/Chritopher Kraus_linkedin.jpg'
import './App.css';
import { useState } from "react";

const subscribed = [];
const techSkills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data' +
' Analysis', 'MYSQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'];

class subscriber {
    constructor(props) {
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.email = props.email;
        this._props = props;
    }

    toString() {
        return 'Name: ' + this.firstName + ' ' + this.lastName + '\n' + 'Email: ' + this.email;
    }

    get props() {
        return this._props;
    }
}

function Subscribe () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <form>
            <h1 align={'center'}>SUBSCRIBE</h1>
            <div className={'App-subscribe'}>
                <input type={'text'} className={'input-text'} value={firstName} placeholder={'First Name'}
                       onChange={event => setFirstName(event.target.value)} />
                <input type={'text'} className={'input-text'} value={lastName} placeholder={'Last Name'}
                       onChange={event => setLastName(event.target.value)} />
                <input type={'text'} className={'input-text'} value={email} placeholder={'Email'}
                       onChange={event => setEmail(event.target.value)} />
            </div>
            <button className="Submit" onClick={() => {
                subscribed.push(new subscriber({
                    firstName: firstName,
                    lastName: lastName,
                    email: email
                }));
                setFirstName('');
                setLastName('');
                setEmail('');
                alert(subscribed.map(s => s.toString()));
            }} >Submit</button>
        </form>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {<img src={frontEndTech} className="App-frontend" alt="tech" />}
          {Subscribe()}
      </header>
        <body className="App-body">
            {<img src={avatar} className="App-avatar" alt="avatar"/>}
            {techSkills.map(s => {
                return (
                    <div className="App-skill">
                        <p>{s}</p>
                    </div>
                )
            })}
        </body>
    </div>
  );
}

export default App;
