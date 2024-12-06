import React, {useEffect, useState} from "react"
import axios from "axios"



export default function List() {
    //state prodi
    const [prodi, setProdi] = useState([]);

    useEffect( () => {
        axios
        .get("https://academic-mi5a.vercel.app/api/api/prodi")
        .then( (response) => {
            console.log(response);
            setProdi(response.data.data)
        })
    }, [])

    return (
        <>
            <h2>List Prodi</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Fakultas</th>
                    </tr>
                </thead>
                <tbody>
                    {prodi.map( (data) => (
                        <tr key={data.id}>
                            <td>{data.nama}</td>
                            <td>{data.fakultas.nama}</td>
                        </tr>
                    ) )}
                </tbody>
            </table>
        </>
    )
}