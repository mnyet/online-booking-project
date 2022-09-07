import "./list.css"
import MainHeader from '../../components/header/MainHeader'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from "react-router-dom"
import { format } from "date-fns"
import { useState } from "react"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <MainHeader type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input type="text" placeholder={destination}/>
            </div>
            <div className="listItem">
              <label>Check-in Date</label>
              <div className="clickableDate" onClick={()=>setOpenDate(!openDate)}><span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span></div>
              {openDate && (
                <DateRange
                  onChange={item=>setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="listItem"> 
              <label>Options</label>
              <div className="listOption">
                <div className="listOptionItem">
                  <div className="listOptionText">Min price <small>per night</small></div>
                  <input type="number" className="listOptionInput" />
                </div>
                <div className="listOptionItem">
                  <div className="listOptionText">Max price <small>per night</small></div>
                  <input type="number" className="listOptionInput" />
                </div>
                <div className="listOptionItem">
                  <div className="listOptionText">Adult</div>
                  <input type="number" min={1} className="listOptionInput" placeholder={options.adult}/>
                </div>
                <div className="listOptionItem">
                  <div className="listOptionText">Children</div>
                  <input type="number" min={0} className="listOptionInput" placeholder={options.children}/>
                </div>
                <div className="listOptionItem">
                  <div className="listOptionText">Room</div>
                  <input type="number" min={1} className="listOptionInput" placeholder={options.room}/>
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List