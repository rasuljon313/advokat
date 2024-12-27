const Forin = () => {
  return (
    <div>
      <div className="forin">
        <div className="container">
          <div className="forin_box">
            <form  className="forin_card">
              <input  className="forin_input" 
                type="text"   
                placeholder="Username"  
                required 
              />
              <input className="forin_input"
                type="password" 
                placeholder="Password" 
                required 
              />
              <button className="forin_btn" type="submit" >
                        {"login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forin