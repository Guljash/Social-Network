import React from 'react';
import styles from './Users.module.css'

let Users = (props) => {

    if (props.state.usersData.length === 0){
        props.setUsers(
            [
                { id: 1, photoURL: 'https://sun9-15.userapi.com/8xUprEq8RBMJlRBplM9JlLk0MIydTNs8Gwt2CA/Q-6uk1pdzRg.jpg', isFollowed: true, fullName: 'Sasha', status: 'I\'m boss', location: { city: 'Moscow', country: 'Russia' } },
                { id: 2, photoURL: 'https://sun9-62.userapi.com/PX5MJfpkOFjFiV9ql3EmLj_ZGZOMp0XgcqN64g/Jpav0Yxdjjo.jpg', isFollowed: true, fullName: 'Eduard', status: 'I\'m designer', location: { city: 'Moscow', country: 'Russia' } },
                { id: 3, photoURL: 'https://sun9-65.userapi.com/UixSHqoBpBmGgkIEEgvVh_vfroOmM8nvYglSmQ/CtCPn30uEAI.jpg', isFollowed: true, fullName: 'Anna', status: 'I\'m pacanessa', location: { city: 'Moscow', country: 'Russia' } },
                { id: 4, photoURL: 'https://sun1-83.userapi.com/c633422/v633422822/2fabc/IX4E-ochRdk.jpg', isFollowed: false, fullName: 'Andrew', status: 'I\'m driver', location: { city: 'Minsk', country: 'Belarus' } },
            ]
        )
    
    }

    const usersElements = props.state.usersData.map(el => (
        <div key={el.id}>
            <span>
                <div>
                    <img src={el.photoURL} className={styles.photo} alt="" />
                </div>
                <div>
                    {el.isFollowed ? <button onClick={() => { props.follow(el.id) }}>Unfollow</button> : <button onClick={() => { props.unfollow(el.id) }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{el.fullName}</div>
                    <div>{el.status}</div>
                </span>
                <span>
                    <div>{el.location.city}</div>
                    <div>{el.location.country}</div>
                </span>
            </span>
        </div>
    ))

    return (
        <div>
            {usersElements}
        </div>
    )
}

export default Users