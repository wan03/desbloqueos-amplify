import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { withRouter } from 'react-router'

const Navbar = (props) => {

    const navigateToPage = (path) => {
		props.history.push(path);
	}
    const items = [
        {label: 'Inicio', icon: 'pi pi-fw pi-home', command: ()=>{ navigateToPage('/')}},
        {label: 'Acerca', icon: 'pi pi-fw pi-calendar', command: ()=>{ navigateToPage('/acerca')}},
        {label: 'Contáctanos', icon: 'pi pi-fw pi-pencil', command: ()=>{ navigateToPage('/contactanos')}},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
        <div>
            <div className="card">
                <TabMenu model={items} />
            </div>
        </div>
    );
}

export default withRouter(Navbar);