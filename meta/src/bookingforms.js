import React, {useEffect ,useState } from 'react'

function BookingForms() {
  const [date,SetDate] = useState("date");
  const [number,SetNumber]=useState("number");

  const availableTimes = [{label:'17:00',value:'17:00'},{label:'18:00',value:'18:00'}
  ,{label:'19:00',value:'19:00'},{label:'20:00',value:'20:00'},{label:'21:00',value:'21:00'}
  ,{label:'22:00',value:'22:00'}];

  const [times,SetTimes] = useState('17:00');
  const FetchData= ()=>{
    fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
    .then(response=>response.json())
    .then(data=>SetTimes(data));
  }
  useEffect(() => {FetchData();},[])

  const handleSubmit = (e)=>{e.preventDefault();
  SetDate("");
  SetNumber("");
  SetTimes("")}

  return (
    <div className='booking'>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="res-date">Choose date:</label>
        <input type="date" id="res-date" value={date} onChange={(e)=>SetDate(e.target.value)}/>
        <label htmlFor="res-time">Choose time:</label>
        <select value={times} onChange={(e)=>SetTimes(e.target.value)}>
        {availableTimes.map((option) => (<option times={option.value}>{option.label}</option>))}
          </select>
        {/* <select id="res-time ">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select> */}
        <label htmlFor="guests">Number of guests:</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={number} onChange={(e)=>SetNumber(e.target.value)} required/>
        <label htmlFor="occasion">Occasion:</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit"aria-label='on Click' disabled={!date} value="Make Your reservation"/>
      </form>
    </div>
  )
}

export default BookingForms