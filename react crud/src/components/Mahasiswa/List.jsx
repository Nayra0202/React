import React, {useEffect, useState} from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";
export default function List(){
    //state fakultas
    const [mahasiswa, setMahasiswa] = useState([]);
    //useeffect

    useEffect( () => {
        axios.get("https://academic-mi5a.vercel.app/api/api/mahasiswa")
        .then( response => {
            console. log(response);
            setMahasiswa(response.data.data)//disesuaikan dari inspect
        })
    }, [] )
    return (
        <>
        <h2>List Mahasiswa</h2>
        <NavLink to="/mahasiswa/create" className="btn btn-primary mb-3">
            Create
        </NavLink>
        <table className="table">
            <thead>
                <tr>
                    <th>Nama Mahasiswa</th>
                    <th>npm</th>
                    <th>email</th>
                    <th>hp</th>
                    <th>alamat</th>
                    <th>Prodi</th>
                    <th>Fakultas</th>
                </tr>
            </thead>
            <tbody>
                {mahasiswa.map( (p) => (
                <tr key={p.id}>
                    <td>{p.nama}</td>
                    <td>{p.npm}</td>
                    <td>{p.email}</td>
                    <td>{p.hp}</td>
                    <td>{p.alamat}</td>
                    <td>{p.prodi.nama}</td>
                    <td>{p.prodi.fakultas.nama}</td>
                </tr>
                ) )}

            </tbody>
        </table>
        </>
    )
}