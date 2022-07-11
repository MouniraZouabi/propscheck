import './App.css';
import Profile from './Profile/Profile';
import L1 from './picture/l5.png'
import PropTypes from 'prop-types';

function App() {
  const handleName = name => alert(`${name}`);
  return (
<div className="App">
    
<Profile 
name="Killua Zoldyck"
bio="The third child of Silva and Kikyo Zoldyck and the heir of the Zoldyck Family."
profession=" * Rookie-Hunter *" 
handleName={handleName}>
<img src ={L1} alt =''style = {{ dropShadow :'(16px 16px 10px white)'}}/>
</Profile>
    </div>
  );

}
Profile.defaultProps={
  name : 'default',
  bio : 'default',
  profession : 'default'
}
Profile.propTypes = {
  name: PropTypes.string ,
  bio: PropTypes.string ,
  profession: PropTypes.string 
}

export default App;
