import {Icon, Navbar, Page, Tabbar, TabbarLink,} from 'konsta/react';
import {GiWindsock} from "react-icons/gi";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {TbSettingsCheck} from "react-icons/tb";


export default function TabLayout() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Page>
            <Outlet/>
            <Tabbar icons className="left-0 bottom-0 fixed">
                <TabbarLink
                    active={location.pathname === '/'}
                    onClick={() => navigate('')}
                    icon={
                        <Icon material={<GiWindsock className="w-8 h-8"/>}/>
                    }
                />
                <TabbarLink
                    active={location.pathname === '/settings'}
                    onClick={() => navigate('settings')}
                    icon={
                        <Icon material={<TbSettingsCheck className="w-7 h-7"/>}/>
                    }
                />
            </Tabbar>
        </Page>
    );
}