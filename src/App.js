

import React, { useState } from 'react';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


import './App.css';


function App() {

  const [segmentName, setSegmentName] = useState('');

  const [selectedSchema, setSelectedSchema] = useState([]);

  const [newSchema, setNewSchema] = useState('');

  const [availableOptions, setAvailableOptions] = useState([

    { label: 'First Name', value: 'first_name' },

    { label: 'Last Name', value: 'last_name' },

    { label: 'Gender', value: 'gender' },

    { label: 'Age', value: 'age' },

    { label: 'Account Name', value: 'account_name' },

    { label: 'City', value: 'city' },

    { label: 'State', value: 'state' }

  ]);






  const handleSaveSegment = () => {

    const segmentData = {

      segment_name: segmentName,

      schema: selectedSchema.map(item => ({ [item]: item }))

    };

    console.log(segmentData);

    // 


  };


  const handleAddSchema = () => {

    if (newSchema !== '') {

      setSelectedSchema([...selectedSchema, newSchema]);

      setAvailableOptions(availableOptions.filter(option => option.value !== newSchema));

      setNewSchema('');

    }

  };


  const handleSchemaChange = (event) => {

    setNewSchema(event.target.value);

  };


  return (

    <div className="App">
      <div className='header'>

      </div>
      <Popup trigger={


        <button className='save_segment_btn' onClick={() => alert('Popup will appear')}>Save Segment</button>
      }>




        <div className="popup">
          <div className='clm1'>


            <div className='Saving_segment'>
              <span>Saving Segment</span>
            </div>
          </div>

          <div className='clm2'>


            <p className='segment'>Enter the Name of the Segment</p>
            <br />

            <input type="text" className='segment_name' placeholder=" Name of the Segment" value={segmentName} onChange={(e) => setSegmentName(e.target.value)} />
            <p className='segment_para'>To save your segment,you need to add the schemas to build the query</p>

            <select className='add_schema' value={newSchema} onChange={handleSchemaChange}>


              <option value="">Add Schema to Segment</option>


              {availableOptions.map(option => (

                <option key={option.value} value={option.value}>{option.label}</option>

              ))}

            </select>
            <br />
            <select className='account_name'>
              <option>Account Name</option>
            </select>

            <button className='new_schema' onClick={handleAddSchema}>+Add New Schema</button>

            <div className="blue-box">

              {selectedSchema.map(schema => (

                <select key={schema} value={schema} onChange={() => { }}>

                  <option disabled>{schema}</option>

                </select>

              ))}

            </div>
          </div>

          <div className='clm3'>



            <div className='footer'>
              <button className='save_segment' onClick={handleSaveSegment}>Save the Segment</button>
              <button type='reset' value="reset" className='cancel'>Cancel</button>

            </div>
          </div>
        </div>
      </Popup>

    </div>

  );

}


export default App;