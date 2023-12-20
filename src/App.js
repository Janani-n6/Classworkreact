
import GetAxios from "./Day11/GetAxios";
import PostAxios from "./Day11/PostAxios";
import PutAxios from "./Day11/PutAxios";
import DeleteAxios from "./Day11/DeleteAxios";

function App() {
  return (
   /*<div className="App">
    <h1>Login</h1>
      <form>
        <img src={logo}></img>
        <br></br><br></br>
        <label>Username</label>&nbsp;
        <input type="text"></input>
        <br></br><br></br>
        <label>Roll no</label>&nbsp;
        <input type="text"></input>
        <br></br><br></br>
        <label>Date</label>
        <input type="date"></input>
        <br></br><br></br>
        <label>Password</label>
        <input type="password"></input>
        <br></br><br></br>
        <label>Email</label>
        <input type="email"></input>
        <br></br><br></br>
        <label>Phone</label>
        <input type="phone"></input>
        <br></br><br></br>
        <label>Country</label>
        <select>
          <option>India</option>
          <option>America</option>
          <option>Australia</option>
        </select>
        <br></br><br></br>
        <label>Gender</label>
        <label><input type="radio"></input>Female</label>
        <label><input type="radio"></input>Male</label>
        <br></br><br></br>
        <label>Hobbies   </label>
        <input type="checkbox"></input>
        <label>Drawing</label>
        <input type="checkbox"></input>
        <label>Singing</label>
        <input type="checkbox"></input>
        <label>Dancing</label>
        <br></br><br></br>
        <button>submit</button>
      </form>
    </div>*/
    <div>
      <GetAxios/>
      <PostAxios/>
      <PutAxios/>
      <DeleteAxios/>
     </div>
  );
}

export default App;
