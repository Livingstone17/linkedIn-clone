import React, { useEffect, useState } from 'react'
import './feeds.css';
import CreateIcon from '@mui/icons-material/Create'
import InputOptions from '../InputOptions/InputOptions';
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/Event'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Posts from '../Posts/Posts';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';

// import firebase from 'firebase';

function Feeds() {

    const [posts, setPosts] = useState([]);
    const [input,setInput] = useState('');

    const sendPost =(e)=> {
        e.preventDefault();
        db.collection('posts').add({
            name:'Peter Samson',
            description:'this is a test',
            message: input,
            photoUrl:'',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
            )
        })
    }, [])

  return (
    <div className='feed'>
        <div className="feed-inputcontainer">
            <div className="feed-input">
                <CreateIcon />
                <form action="">
                    <input value={input} onChange={e=>setInput(e.target.value)} type="text" />
                    <button type='submit' onClick={sendPost}>Send</button>
                </form>
            </div>
            <div className="feed-inputOptions">
                <InputOptions title='Photo' Icon={ImageIcon} color="#70b5f9" />
                <InputOptions title='Video' Icon={SubscriptionIcon} color="#e7a33e" />
                <InputOptions title='Event' Icon={EventNoteIcon} color="#c0cbcd" />
                <InputOptions title='Write Article' Icon={CalendarViewDayIcon} color="#7fc15e" />

            </div>
        </div>

        {/* Posts */}
        {posts.map(({id,data:{name,description,message,photoUrl }})=> (
            <Posts 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />
        ))}
    </div>
  )
}

export default Feeds