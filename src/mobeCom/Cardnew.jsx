import React from 'react'
import Help from './Help'

function Cardnew() {
  return (
    <div>

<div className="container-fluid">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 ">
  <div class="d-grid gap-2">
  <h2 className='text-dark'> Are you currently enrolled in Medicare?</h2>
  <button class="btn btn-danger" type="button">Yes, I Am</button>
  <button class="btn btn-danger" type="button">No, I'm Not</button>
</div>
</div>
    </div>
    </div>

    <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-2 ">
          <img src='https://tapmedicare.com/b8/images/logos/united-healthcare.svg' alt ="as" width="auto" height="60px" />
        </div>
        <div className="col-2 ">
          <img src='https://tapmedicare.com/b8/images/logos/united-healthcare.svg' alt ="as" width="auto" height="60px" />
        </div>
        <div className="col-2 ">
          <img src='https://tapmedicare.com/b8/images/logos/united-healthcare.svg' alt ="as" width="auto" height="60px" />
        </div>
        <div className="col-2 ">
          <img src='https://tapmedicare.com/b8/images/logos/united-healthcare.svg' alt ="as" width="auto" height="60px" />
        </div>
        <div className="col-2 ">
          <img src='https://tapmedicare.com/b8/images/logos/united-healthcare.svg' alt ="as" width="auto" height="60px" />
        </div>
        {/* <div className="col-2 ">
          <img src='https://tapmedicare.com/b8/images/logos/united-healthcare.svg' alt ="as" width="auto" height="60px" />
        </div> */}
     
    </div>
    </div>
    </div>
    <Help/>
    </div>
  )
}

export default Cardnew