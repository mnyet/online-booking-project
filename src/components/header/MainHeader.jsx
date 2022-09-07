import { useState } from "react";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faBed, faHotel, faPerson, faPlane, faSearch, faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from "react-router-dom";

const MainHeader = ({type}) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const handleOption = (name, operation) => {
        setOptions(prev => { return { 
            ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        }})
      }

      const navigate = useNavigate();

      const handleSearch = () => {
        navigate("/hotels", {state: {destination, date, options} });
      };

  return (
    <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faHotel} />
                    <span>Hotels</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights (Soon)</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faUmbrellaBeach} />
                    <span>Resorts (Soon)</span>
                </div>
            </div>
           { type !== "list" &&
            <> 
                <div className="headerBody">
                    <div className="headerBodyTitle">
                        <span>A lifetime of discounts? It's Genius.</span>
                    </div>
                    <div className="headerBodySubtitle">
                        <span>Find affordable hotel discounts here exclusive for the Philippines</span>
                    </div>
                    <div className="headerBodyButton">
                        <button className="signUp">Sign in / Register</button>
                    </div>
                </div>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerSearchIcon" />
                        <input 
                            type="text"
                            placeholder="Where are you going?"
                            className="headerSearchInput"
                            onChange={e=>setDestination(e.target.value)}
                            />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerSearchIcon" />
                        <span onClick={ () => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerSearchIcon" />
                        <span onClick={ () => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} Adult | ${options.children} Children | ${options.room} Rooms `}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button disabled={options.adult <= 0} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                    <span className="optionCounterNumber">{`${options.adult}`}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                                    <span className="optionCounterNumber">{`${options.children}`}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Rooms</span>
                                <div className="optionCounter">
                                    <button disabled={options.room <= 0} className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                                    <span className="optionCounterNumber">{`${options.room}`}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem" onClick={handleSearch}>
                        <FontAwesomeIcon icon={faSearch} className="headerSearchIcon" />
                        <span className="headerSearchText">Search</span>
                    </div>
                </div>
            </>}
        </div>
    </div>
  )
}

export default MainHeader