"use client";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const DynamicForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: 0,
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [
      { startingDate: "", endingDate: "", degree: "", university: "" },
    ],
    experiences: [
        { startingDate: "", endingDate: "", position: "", hospital: "" },
    ],
    timeSlots: [{ day: "", startingTime: "", endTime: ""}],
  });

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className=" m-10">
      <span className=" mb-6">Dynamic Form </span>
      <form>
        <div className="mb-5">
          <p className="mb-2">Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className=" border border-slate-500 p-2"
          ></input>
        </div>
        <div className="mb-5">
          <p className="mb-2">Email</p>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className=" border border-slate-500 p-2"
          ></input>
        </div>
        <div className="mb-5">
          <p className="mb-2">Phone</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className=" border border-slate-500 p-2"
          ></input>
        </div>
        <div className="mb-5">
          <p className="mb-2">Bio</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            maxLength={200}
            placeholder="Bio"
            className=" border border-slate-500 p-2"
          ></input>
        </div>
        <div className="mb-5">
          <div className=" grid grid-cols-3 gap-x-2 mb-[30px] w-1/4">
            <div className="">
              <p className="mb-2">Gender</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className=""
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="">
              <p className="mb-2">Specialization</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className=""
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>
            <div className="mb-5">
              <p className="mb-2">Ticket Price</p>
              <input
                type="number"
                name="ticketPrice"
                value={formData.bio}
                onChange={handleInputChange}
                maxLength={200}
                placeholder="Ticket Price"
                className=" border border-slate-500 p-2"
              ></input>
            </div>
          </div>
          {/* Qualifications */}
          <div className="">
            {formData.qualifications.map((item, index) => (
              <div
                key={index}
                className="mb-5  grid grid-cols-4 gap-x-1 mb-[30px] w-1/2"
              >
                <div className="">
                  <p className="mb-2">Starting Date</p>
                  <input
                    type="date"
                    name="startingDate"
                    value={item.startingDate}
                    onChange={handleInputChange}
                    maxLength={200}
                    className=" border border-slate-500 p-2"
                  ></input>
                </div>
                <div className="">
                  <p className="mb-2">Ending Date</p>
                  <input
                    type="date"
                    name="endingDate"
                    value={item.endingDate}
                    onChange={handleInputChange}
                    maxLength={200}
                    className=" border border-slate-500 p-2"
                  ></input>
                </div>
                <div className="">
                  <p className="mb-2">Degree</p>
                  <input
                    type="text"
                    name="degree"
                    value={item.degree}
                    onChange={handleInputChange}
                    maxLength={200}
                    placeholder="Degree"
                    className=" border border-slate-500 p-2 mx-1"
                  ></input>
                </div>
                <div className="">
                  <p className="mb-2">University</p>
                  <input
                    type="text"
                    name="university"
                    value={item.university}
                    onChange={handleInputChange}
                    maxLength={200}
                    placeholder="University"
                    className=" border border-slate-500 p-2 mx-1"
                  ></input>
                </div>
              </div>
            ))}
            <button className=" bg-red-500 rounded-full p-2 text-white">
              <AiOutlineDelete />
            </button>

            <button className=" bg-black rounded-md p-2 text-white mx-2">
              Add Qualifications
            </button>
          </div>
          {/* experiences  */}
          <div className="">
          {/* TimeSlots  */}
          <div className="">
            {formData.timeSlots.map((item, index) => (
              <div
                key={index}
                className="mb-5  grid grid-cols-4 gap-x-1 mb-[30px] w-1/2"
              >
                 <div className="">
              <p className="mb-2">Specialization</p>
              <select
                name="specialization"
                value={item.day}
                onChange={handleInputChange}
                className=""
              >
                <option value="">Select</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
              </select>
            </div>
                <div className="">
                  <p className="mb-2">Starting Time</p>
                  <input
                    type="time"
                    name="startingTime"
                    value={item.startingTime}
                    onChange={handleInputChange}
                    maxLength={200}
                    className=" border border-slate-500 p-2"
                  ></input>
                </div>
                <div className="">
                  <p className="mb-2">Position</p>
                  <input
                    type="text"
                    name="degree"
                    value={item.endTime}
                    onChange={handleInputChange}
                    maxLength={200}
                    placeholder="Degree"
                    className=" border border-slate-500 p-2 mx-1"
                  ></input>
                </div>
               
              </div>
            ))}
            <button className=" bg-red-500 rounded-full p-2 text-white">
            
              <AiOutlineDelete />
            </button>

            <button className=" bg-black rounded-md p-2 text-white mx-2">
              Add TimeSolt
            </button>
          </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
