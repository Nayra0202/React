/* eslint-disable no-unused-vars */
// src/components/mahasiswa/Create.jsx
import React, { useState, useEffect } from "react"; // Import React dan hooks
import axios from "axios"; // Import axios untuk melakukan HTTP request

export default function CreateMahasiswa() {
  // Inisialisasi state untuk menyimpan data mahasiswa
  const [npm, setNpm] = useState("");
  const [nama, setNama] = useState("");
  const [tanggal_lahir, setTanggalLahir] = useState("");
  const [tempat_lahir, setTempatLahir] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [prodiId, setProdiId] = useState("");
  const [prodiList, setProdiList] = useState([]);
  const [fakultasId, setFakultasId] = useState("");
  const [fakultasList, setFakultasList] = useState([]);
  // Inisialisasi state untuk menyimpan pesan error
  const [error, setError] = useState("");
  // Inisialisasi state untuk menyimpan pesan sukses
  const [success, setSuccess] = useState("");

  // Mengambil daftar fakultas dari API saat komponen dimuat
  useEffect(() => {
    const fetchProdi = async () => {
      try {
        const response = await axios.get(
          "https://academic-mi5a.vercel.app/api/api/prodi"
        );
        setProdiList(response.data.data); // Simpan data fakultas ke dalam state
      } catch (error) {
        setError("Failed to fetch prodi data");
      }
    };

    const fetchFakultas = async () => {
        try {
          const response = await axios.get(
            "https://academic-mi5a.vercel.app/api/api/fakultas"
          );
          setFakultasList(response.data.data); // Simpan data fakultas ke dalam state
        } catch (error) {
          setError("Failed to fetch prodi data");
        }
      };

    fetchProdi(); // Panggil fungsi untuk mengambil data fakultas
    fetchFakultas();
  }, []); // Kosongkan array dependensi agar hanya dijalankan sekali saat komponen dimuat

  // Fungsi yang akan dijalankan saat form disubmit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman setelah form disubmit
    setError(""); // Reset pesan error sebelum proses
    setSuccess(""); // Reset pesan sukses sebelum proses

    // Validasi input: jika namamahasiswa atau fakultasId kosong, set pesan error
    if (npm.trim() === "" || prodiId.trim() === "") {
      setError("NPM are required");
      return;
    }
    if (nama.trim() === "") {
      setError("Nama mahasiswa are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    if (tanggal_lahir.trim() === "") {
      setError("Nama mahasiswa are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    if (tempat_lahir.trim() === "") {
      setError("Nama mahasiswa are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    if (email.trim() === "") {
      setError("Email are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    if (hp.trim() === "") {
      setError("No HP are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }
    if (alamat.trim() === "") {
      setError("Alamat are required"); // Set pesan error jika input kosong
      return; // Stop eksekusi fungsi jika input tidak valid
    }

    try {
      // Melakukan HTTP POST request untuk menyimpan data mahasiswa
      const response = await axios.post(
        "https://academic-mi5a.vercel.app/api/api/mahasiswa", // Endpoint API yang dituju
        {
          npm: npm,
          nama: nama, // Data yang dikirim berupa objek JSON dengan properti 'nama'
          tanggal_lahir: tanggal_lahir,
          tempat_lahir: tempat_lahir,
          email: email,
          hp: hp,
          alamat: alamat,
          prodi_id: prodiId,
          fakultas_id: fakultasId,
        }
      );

      // Jika response HTTP status 201 (Created), berarti berhasil
      if (response.status === 201) {
        // Tampilkan pesan sukses jika fakultas berhasil dibuat
        setSuccess("Mahasiswa created successfully!");
        setNpm("");
        setNama(""); // Kosongkan input form setelah sukses submit
        setTanggalLahir("");
        setTempatLahir("");
        setEmail("");
        setHp("");
        setAlamat("");
        setProdiId("");
        setFakultasId(""); 
      } else {
        // Jika tidak berhasil, tampilkan pesan error
        setError("Failed to create mahasiswa");
      }
    } catch (error) {
      // Jika terjadi error (misal masalah jaringan), tampilkan pesan error
      setError("An error occurred while creating mahasiswa");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create mahasiswa</h2>
      {/* Jika ada pesan error, tampilkan dalam alert bootstrap */}
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Jika ada pesan sukses, tampilkan dalam alert bootstrap */}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit}>
        {/* Tangani event submit dengan handleSubmit */}
        <div className="mb-3">
          <label className="form-label">NPM</label>
          {/* Input untuk nama mahasiswa dengan class bootstrap */}
          <input
            type="text"
            className="form-control"
            id="npm"
            value={npm} // Nilai input disimpan di state namamahasiswa
            onChange={(e) => setNpm(e.target.value)} // Update state saat input berubah
            placeholder="Enter NPM" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nama mahasiswa</label>
          {/* Input untuk nama mahasiswa dengan class bootstrap */}
          <input
            type="text"
            className="form-control"
            id="nama"
            value={nama} // Nilai input disimpan di state namamahasiswa
            onChange={(e) => setNama(e.target.value)} // Update state saat input berubah
            placeholder="Enter Mahasiswa Name" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tanggal Lahir</label>
          {/* Input untuk nama mahasiswa dengan class bootstrap */}
          <input
            type="date"
            className="form-control"
            id="tanggal_lahir"
            value={tanggal_lahir} // Nilai input disimpan di state namamahasiswa
            onChange={(e) => setTanggalLahir(e.target.value)} // Update state saat input berubah
            placeholder="Enter Tanggal Lahir" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tempat Lahir</label>
          {/* Input untuk nama mahasiswa dengan class bootstrap */}
          <input
            type="text"
            className="form-control"
            id="tempat_lahir"
            value={tempat_lahir} // Nilai input disimpan di state namamahasiswa
            onChange={(e) => setTempatLahir(e.target.value)} // Update state saat input berubah
            placeholder="Enter Tempat Lahir" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          {/* Input untuk nama mahasiswa dengan class bootstrap */}
          <input
            type="text"
            className="form-control"
            id="email"
            value={email} // Nilai input disimpan di state namamahasiswa
            onChange={(e) => setEmail(e.target.value)} // Update state saat input berubah
            placeholder="Enter Email" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">No HP</label>
          {/* Input untuk nama mahasiswa dengan class bootstrap */}
          <input
            type="text"
            className="form-control"
            id="hp"
            value={hp} // Nilai input disimpan di state namamahasiswa
            onChange={(e) => setHp(e.target.value)} // Update state saat input berubah
            placeholder="Enter No HP" // Placeholder teks untuk input
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Alamat</label>
          {/* Input untuk nama mahasiswa dengan class bootstrap */}
          <input
            type="text-area"
            className="form-control"
            id="alamat"
            value={alamat} // Nilai input disimpan di state namamahasiswa
            onChange={(e) => setAlamat(e.target.value)} // Update state saat input berubah
            placeholder="Enter Address" // Placeholder teks untuk input
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Program Studi</label>
          {/* Dropdown untuk memilih prodi */}
          <select
            className="form-select"
            id="prodiId"
            value={prodiId} // Nilai dropdown disimpan di state fakultasId
            onChange={(e) => setProdiId(e.target.value)} // Update state saat pilihan berubah
          >
            <option value="">Select Program Studi</option>
            {prodiList.map((prodi) => (
              <option key={prodi.id} value={prodi.id}>
                {/* Set key dan value untuk masing-masing fakultas */}
                {prodi.nama} {/* Nama fakultas sebagai teks di dropdown */}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Fakultas</label>
          {/* Dropdown untuk memilih fakultas */}
          <select
            className="form-select"
            id="fakultasId"
            value={fakultasId} // Nilai dropdown disimpan di state fakultasId
            onChange={(e) => setFakultasId(e.target.value)} // Update state saat pilihan berubah
          >
            <option value="">Select Fakultas</option>
            {fakultasList.map((fakultas) => (
              <option key={fakultas.id} value={fakultas.id}>
                {/* Set key dan value untuk masing-masing fakultas */}
                {fakultas.nama} {/* Nama fakultas sebagai teks di dropdown */}
              </option>
            ))}
          </select>
        </div>
        
        {/* Tombol submit dengan class bootstrap */}
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}