import {Icon, Page, Tabbar, TabbarLink,} from 'konsta/react';
import {MdEmail, MdToday} from 'react-icons/md';
import {Outlet, useLocation, useNavigate} from "react-router-dom";


export default function TabLayout() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Page>
            <h3>Current Page: {location.pathname}</h3>
            <Outlet/>
            <Tabbar icons className="left-0 bottom-0 fixed">
                <TabbarLink
                    active={location.pathname === '/'}
                    onClick={() => navigate('')}
                    icon={
                        <Icon material={<MdEmail className="w-6 h-6"/>}/>
                    }
                />
                <TabbarLink
                    active={location.pathname === '/table'}
                    onClick={() => navigate('table')}
                    icon={
                        <Icon material={<MdToday className="w-6 h-6"/>}/>
                    }
                />
            </Tabbar>
        </Page>
    );
}