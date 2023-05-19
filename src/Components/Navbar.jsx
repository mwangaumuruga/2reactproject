import react from "react";

export default function navbar() {
  return (
    <nav className='navbar'>
      <div className='color--div'>
        <div className='logo'>
          {/* <img src={devsignLogo} width="50px" alt="" /> */}
          <h1>Dev</h1>
        </div>
        <ul className='nav--ul'>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Blog</a>
          </li>
        </ul>
      </div>
      <div class='inputbox'>
        <input required='required' type='text' />
        <span>Filter</span>
        <i></i>
      </div>
      <div className='log-ham'>
        <div class='button'>
          <div class='box'>LIT</div>
          
        </div>
        
        {  <h1 className='login'>BEGINNERDAYSINREACTCODE</h1> }
      </div>
    </nav>
  );
}
