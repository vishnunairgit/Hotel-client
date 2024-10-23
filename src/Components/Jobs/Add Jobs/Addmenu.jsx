
import React, { useState } from 'react';
import './addmenu.css';
import { AddMenu } from '../../../Api/Menu';
import { useNavigate } from 'react-router-dom';

function Addmenu() {
  const navigate = useNavigate();


  const [addmenu, setaddmenu] = useState({
    FoodTitle: "",
    Amount: '',
    Includes: '',
    TypeOff: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setaddmenu({ ...addmenu, [name]: value })
  }

  const handleaddJobpost = async (e) => {
    e.preventDefault();


    try {
      const addMenuData = {
        ...addmenu,
        Date: new Date().toISOString(),
      };
      const response = await AddMenu(addMenuData);

      if (response.message === 'Menu item added successfully') {
        alert('Menu item added successfully')
        navigate('/')
      } else {
        alert('Internal Server Error')
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred while adding the job');
    }
  }

  return (
    <div className="addjob">
      <h3>ADD A MENU</h3>
      <form onSubmit={handleaddJobpost} >
        <div className="container">
          <div className="leftSide-container">

            <div className="row">
              <div className="col-25">
                <label htmlFor="Experience">
                  FOOD NAME <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="FoodTitle"
                  placeholder="food Title..."
                  onChange={handleChange}
                  value={addmenu.FoodTitle}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="Experience">
                  AMOUNT <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="number"
                  name="Amount"
                  placeholder="$12"
                  onChange={handleChange}
                  value={addmenu.Amount}
                  required
                />
              </div>
            </div>


            <div className="row">
              <div className="col-25">
                <label htmlFor="Includes">
                  INCLUDES<span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="Includes"
                  name="Includes"
                  placeholder="229 Vodka ,vermouth, "
                  onChange={handleChange}
                  value={addmenu.Includes}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="EmploymentType">
                  TYPE <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <select
                  type="text"
                  id="Type"
                  name="TypeOff"
                  placeholder="Type..."
                  onChange={handleChange}
                  value={addmenu.TypeOff}
                  required
                >
                  <option value=''>Select Employment Type</option>
                  <option value="Drinks">DRINKS</option>
                  <option value="Brunch">BRUNCH</option>
                  <option value="HookahFlavors">HOOKAH FLAVORS</option>

                </select>
              </div>
            </div>


          </div>
        </div>

        <div className="buttonHolder">
          <button className="button_03" type="button">
            Back
          </button>

          <button className="button_02" type="reset">
            Reset
          </button>

          <button className="button_01" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addmenu;


