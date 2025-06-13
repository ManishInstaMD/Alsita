import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import * as XLSX from "xlsx";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: "100%",
  height: "60vh",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

const defaultCenter = {
  lat: 19.076,
  lng: 72.8777,
};

const Medicine = () => {
  const [chemistsData, setChemistsData] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState(null);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchExcelData = async () => {
      const response = await fetch("/data/chemists.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rawData = XLSX.utils.sheet_to_json(sheet);

      // Normalize keys to consistent names
      const normalizedData = rawData.map((item) => ({
        name: item["Store Name"] || item["Store Name"] || "No Name",
        owner: item["Person Name"] || item["Owner"] || "No Owner",
        address: item["Address"] || "",
        contact: item["Contact Number"] || item["Store Contact Number"] || "",
        pincode: item["Pincode ID"] || item["Pincode"] || "",
        city: item["City"] || "",
        state: item["State"] || "",
        lat: Number(item["Latitude"]) || Number(item["Lat"]) || 0,
        lng: Number(item["Longitude"]) || Number(item["Lng"]) || 0,
      }));

      setChemistsData(normalizedData);
    };

    fetchExcelData();
  }, []);

  useEffect(() => {
    const uniqueStates = [...new Set(chemistsData.map((item) => item.state))];
    setStates(uniqueStates);
    if (uniqueStates.length > 0) setState(uniqueStates[0]);
  }, [chemistsData]);

  useEffect(() => {
    const citiesForSelectedState = chemistsData
      .filter((item) => item.state === state)
      .map((item) => item.city);
    const uniqueCities = [...new Set(citiesForSelectedState)];
    setCities(uniqueCities);
    if (uniqueCities.length > 0) setCity(uniqueCities[0]);
  }, [state, chemistsData]);

  useEffect(() => {
    const filtered = chemistsData.filter(
      (loc) =>
        loc.state === state &&
        loc.city === city &&
        (pincode === "" || String(loc.pincode) === pincode)
    );
    setLocations(filtered);
  }, [state, city, pincode, chemistsData]);

  return (
    <div className="p-3">
      {/* Header */}
      <div
        className="text-white text-center py-5 sm:py-8 md:py-10 lg:py-12 relative"
        style={{
          backgroundImage: "url('/images/about-empanorm.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "180px",
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Check Medicine Availability
          </h1>

          <div className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
            <img
              src="/images/logo5.png"
              alt="Company Logo"
              className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
              style={{ maxHeight: "60px", maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card mt-4 mb-4 p-3 shadow">
        <div className="card-body row">
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <select
              id="state"
              className="form-control"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                setCity("");
                setPincode("");
              }}
            >
              {states.map((s, i) => (
                <option key={i} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <select
              id="city"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              {cities.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="pincode" className="form-label">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              className="form-control"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Map + Cards Section */}
      <div className="row g-3">
        {/* Map Section */}
        <div className="col-12 col-md-6">
          <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={defaultCenter}
              zoom={12}
            >
              {locations.map((loc, index) => (
                <Marker
                  key={index}
                  position={{ lat: loc.lat, lng: loc.lng }}
                  onClick={() => setSelected(loc)}
                />
              ))}

              {selected && (
                <InfoWindow
                  position={{ lat: selected.lat, lng: selected.lng }}
                  onCloseClick={() => setSelected(null)}
                >
                  <div style={{ fontSize: "0.9rem" }}>
                    <strong>{selected.name}</strong>
                    <br />
                    {selected.address}
                    <br />
                    Contact: {selected.contact}
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Cards Section */}
        <div className="col-12 col-md-6">
          <div className="overflow-auto" style={{ maxHeight: "60vh" }}>
            {locations.map((loc, index) => (
              <div
                key={index}
                className="border border-primary rounded p-3 mb-3 shadow-sm"
              >
                <h6 className="fw-bold">{loc.name}</h6>
                <p className="mb-1">{loc.owner}</p>
                <p className="mb-1">📍 {loc.address}</p>
                <p className="mb-1">📞 {loc.contact}</p>
                <p className="mb-1">📮 {loc.pincode}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicine;
