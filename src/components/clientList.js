import React from 'react';
import { clients } from '../utils/clients';
import '../styles/clientList.css';

const ClientList = ({listArray}) => {

    const list = 
        listArray.map((client, index) => {
            return (
                <div className="client-logo" key={`client-${clients[client].id}`}>
                    <a href={clients[client].link} target="_blank" rel="noopener noreferrer">
                        <img className={clients[client].logoType} src={clients[client].logo} alt={`${clients[client].name} Logo`} title={`${clients[client].name}`} />
                    </a>
                </div>
            )
        })

    return (
        <section className="client-list">
            <h3>Trusted By</h3>
            <div className="cl-logos-cont">
                {list}
            </div>
        </section>
    )
}

export default ClientList