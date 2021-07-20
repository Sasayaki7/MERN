import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteButton from './deleteButton';
import { Link } from '@reach/router';


const AuthorTable = props =>{

    const [allAuthors, setAllAuthors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(resp => {
            console.log(resp.data)
            setAllAuthors(resp.data)
        })
        .catch(err => console.log('Error Client:  getAllAuthors failed', err))
    }, [])
    const deleteUser = id =>{
        setAllAuthors(allAuthors.filter(author => author._id != id))
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {allAuthors.map((author, idx) =>{
                        return <tr key={idx}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/edit/${author._id}`}>Edit</Link>
                                <DeleteButton callback={() => deleteUser(author._id)}/>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default AuthorTable