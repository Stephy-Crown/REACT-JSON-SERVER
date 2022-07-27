import './index.css';
import pic from "./Images/background.png";
import ellipse1 from './Images/Ellipse9.png'
const Signup = () => {
  return (
    <div className="signup-container">
      <img src={pic} />
     <div className="first-box">

       <div className="details-box">

          
            <div className="detail-box1">

              <div className="ellipse1"></div>
              <div className="info">{'Profile Details'}</div>
              <div className="Rectangle"></div>

            </div>

            <div className="detail-box2">

              <div className="ellipse2"></div>
              
              <div className="info">{'Buisness Details'}
              </div>
              <div className="Rectangle2"></div>

            </div>

            <div className="detail-box3">

              <div className="ellipse2"></div>
              
              <div className="info">{'Confirm'}
              </div>
              <div className="Rectangle3"></div>

            </div>
            
            
            

        
          </div>

       </div>

      <div className="second-box">
        <div className="form-center">
          <form>

          <div className="input">

          
            <input type="text" placeholder="Name" className="input-style">
            </input>
            

            
            <input type="text" placeholder="Surname" class="input" className="input-style"></input>
          

            
            <input type="text" placeholder="Other names" className="input-style">
            </input>
            

            
            <input type="text" placeholder="Phone Number" className="input-style"></input>
          
            
            <button className="next-btn">Next</button>
          </div>
          

          
          </form>
        </div>
        
        </div>
    </div>
    );
}
 
export default Signup;