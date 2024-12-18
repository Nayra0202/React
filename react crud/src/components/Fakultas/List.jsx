/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

export default function List() {
  const [fakultas, setFakultas] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk mengontrol loading

  // Mengambil data fakultas saat komponen dimount
  useEffect(() => {
    axios
      .get("https://academic-mi5a.vercel.app/api/api/fakultas")
      .then((response) => {
        setFakultas(response.data.result); // Simpan data fakultas ke dalam state
        setIsLoading(false); // Set isLoading menjadi false setelah data berhasil diambil
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Menangani error
        setIsLoading(false); // Set isLoading menjadi false meskipun terjadi error
      });
  }, []);

  // Fungsi untuk menghapus fakultas berdasarkan ID dengan konfirmasi SweetAlert2
  const handleDelete = (id, nama) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this! Fakultas: ${nama}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Lakukan penghapusan jika dikonfirmasi
        axios
          .delete(`https://academic-mi5a.vercel.app/api/api/fakultas/${id}`)
          .then((response) => {
            // Hapus fakultas dari state setelah sukses dihapus dari server
            setFakultas(fakultas.filter((data) => data.id !== id));
            // Tampilkan notifikasi sukses
            Swal.fire("Deleted!", "Your data has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting data:", error); // Menangani error
            Swal.fire(
              "Error",
              "There was an issue deleting the data.",
              "error"
            );
          });
      }
    });
  };

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
          {fakultas.map((data) => (
            <li
              key={data.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{data.nama}</span> {/* Menampilkan nama fakultas */}
              <div
                className="btn-group"
                role="group"
                aria-label="Action buttons"
              >
                <NavLink
                  to={`/fakultas/edit/${data.id}`}
                  className="btn btn-warning"
                >
                  Edit
                </NavLink>
                <button
                  onClick={() => handleDelete(data.id, data.nama)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

