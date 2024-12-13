import React, {useEffect, useState} from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";

export default function List() {
    //state prodi
    const [prodi, setProdi] = useState([]);

    //mengambil data prodi saat komponen dimount
    useEffect( () => {
        axios
        .get("https://academic-mi5a.vercel.app/api/api/prodi")
        .then((response) => {
            setProdi(response.data.result); // Simpan data prodi ke dalam state
          })
          .catch((error) => {
            console.error("Error fetching data:", error); // Menangani error
          });
      }, []);

      return (
        <>
          <h2>List Prodi</h2>
          <NavLink to="/prodi/create" className="btn btn-primary mb-3">
            Create
          </NavLink>
          <table className="table">
            <thead>
              <tr>
                <th>Nama Prodi</th>
                <th>Nama Fakultas</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {prodi.map((p) => (
                <tr key={p.id}>
                  <td>{p.nama} </td> {/* Menampilkan nama prodi */}
                  <td>{p.fakultas.nama} </td> {/* Menampilkan nama fakultas */}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }