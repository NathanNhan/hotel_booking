import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDay,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const Header = ({type}) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleClick = (name, operation) => {
    setOptions((prev) => {
        return {...prev, [name] : operation === "i" ? options[name] + 1 : options[name] - 1}
    })
  }
  return (
    <div className="header">
      <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {   type !== "list" &&
            <>
            <h1 className="headerTitle">Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="headerDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                repellendus nulla blanditiis sunt qui quibusdam eveniet voluptates
                dignissimos laborum similique sit nesciunt neque cupiditate dolorem
                veritatis assumenda voluptatum, consectetur possimus. Vero ut vitae
                ipsa laborum! Ullam facilis minima dolores eius libero eligendi
                itaque, animi officiis aliquam temporibus. Sed, maiores, esse aliquam
                ea velit obcaecati quae sit, expedita officia rem praesentium
                </p>
                <button className="headerBtn">Sign in / Register</button>

                <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input
                    type="text"
                    name=""
                    id=""
                    className="headerSearchInput"
                    placeholder="where are you going?"
                    />
                </div>

                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
                    <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                    >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                    )}`}</span>
                    {openDate && (
                    <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                    />
                    )}
                </div>

                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>
                    {options.adult} adults {options.children} children {options.room}{" "}
                    room
                    </span>

                    {/* options */}
                    {openOptions && (
                    <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adults</span>
                        <div className="optionCounter">
                        <button  className="optionCounterButton" onClick={()=>handleClick("adult", "i")}>+</button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button disabled={options.adult <= 1} className="optionCounterButton" onClick={()=>handleClick("adult", "d")}>-</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Childrens</span>
                        <div className="optionCounter">
                        <button className="optionCounterButton" onClick={()=>handleClick("children", "i")}>+</button>
                        <span className="optionCounterNumber">
                            {options.children}
                        </span>
                        <button disabled={options.children <= 1} className="optionCounterButton" onClick={()=>handleClick("children", "d")}>-</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Rooms</span>
                        <div className="optionCounter">
                        <button className="optionCounterButton" onClick={()=>handleClick("room", "i")}>+</button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button disabled={options.room <= 1} className="optionCounterButton" onClick={()=>handleClick("room", "d")}>-</button>
                        </div>
                    </div>
                    </div>

                    )}
                </div>

                <div className="headerSearchItem">
                    <button className="headerBtn">Search</button>
                </div>
            </div>
            
            </>
        }
      </div>
    </div>
  );
};

export default Header;
