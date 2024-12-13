/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function List() {
  const [fakultas, setFakultas] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk mengontrol loading

  // Mengambil data fakultas saat komponen dimount
  useEffect(() => {
    axios
      .get("https://project-apiif-3-b.vercel.app/api/api/fakultas")
      .then((response) => {
        setFakultas(response.data.result); // Simpan data fakultas ke dalam state
        setIsLoading(false); // Set isLoading menjadi false setelah data berhasil diambil
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Menangani error
        setIsLoading(false); // Set isLoading menjadi false meskipun terjadi error
      });
  }, []);

  
  return (
    <>
      <h2>List Fakultas</h2>

      <NavLink to="/fakultas/create" className="btn btn-primary mb-3">
        Create
      </NavLink>

      {/* Tampilkan loader jika data belum selesai dimuat */}
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ul className="list-group">
          {fakultas.map((f) => (
            <li
              key={f.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{f.nama}</span> {/* Menampilkan nama fakultas */}
              <div
                className="btn-group"
                role="group"
                aria-label="Action buttons"
              >
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}