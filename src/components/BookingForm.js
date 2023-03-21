import { useState } from "react";

function BookingForm(props) {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const availableOccasions = ["Birthday", "Anniversary"];
  const [date, setDate] = useState("");
  const [times, setTime] = useState(availableTimes);
  const [guests, setGuests] = useState("");
  const [occasions, setOccasion] = useState(availableOccasions);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate("");
    setTime("17:00");
    setGuests("");
    setOccasion("Birthday");
    alert("form submitted");
  };
  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={times}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((time, index) => (
          <option key={index}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasions}
        onChange={(e) => setOccasion(e.target.value)}
      >
        {availableOccasions.map((occasion, index) => (
          <option key={index}>{occasion}</option>
        ))}
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
