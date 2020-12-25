import React, {Fragment, useContext, useEffect} from 'react';
import { Form } from '../components/Form';
import { Loader } from '../components/Loader';
import { Notes } from '../components/Notes';
import { FirebaseContext } from '../Context/firebase/firebaseContext';

export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);

    useEffect( () => {
        fetchNotes();
       // eslint-disable-next-line 
    }, [])

    return (
        <Fragment>
            <Form />

            <hr />
            
            {loading ? 
            <Loader/> : <Notes notes={notes} onRemove={removeNote} />
            }
        </Fragment>
    )
}


/* 
const notes = new Array(3)
        .fill('')
        .map((_, i) => ({id: i, title: `Note ${i+1}`})) */