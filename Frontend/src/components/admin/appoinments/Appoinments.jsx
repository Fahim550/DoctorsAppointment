import React, { useEffect, useState } from "react";
import Dashboard from "../dashboard/Dashboard";

export default function Appoinments() {
  const [adminAppoinment, setAdminAppoinment] = useState();
  useEffect(() => {
    getDoctors();
  }, []);
  async function getDoctors() {
    const response = await fetch("http://localhost:8080/appoinment");
    const appoinmentResponseData = await response.json();
    console.log("doctorsResponseData", appoinmentResponseData.doctors);
    if (appoinmentResponseData) {
      setAdminAppoinment(appoinmentResponseData);
    } else {
      setAdminAppoinment([]);
    }
  }
  return (
    <div>
      <div className="relative overflow-x-auto ">
        <Dashboard />
      </div>
    </div>
  );
}
