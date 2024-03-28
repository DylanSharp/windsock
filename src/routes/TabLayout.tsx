import {Icon, Page, Tabbar, TabbarLink,} from 'konsta/react';
import {GiWindsock} from "react-icons/gi";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {TbSettingsCheck} from "react-icons/tb";


export default function TabLayout() {
    const navigate = useNavigate();
    const location = useLocation();

    const homePageActive = location.pathname === '/';
    const settingsPageActive = location.pathname === '/settings';

    return (
        <Page>
            <Outlet/>
            <Tabbar
                icons
                className="left-0 bottom-0 fixed text-white"
                colors={{
                    bgMaterial: 'bg-primary-700',
                }}
            >
                <TabbarLink
                    active={homePageActive}
                    onClick={() => navigate('')}
                    icon={
                        <GiWindsock className={`w-8 h-8 ${!homePageActive ? 'text-white' : 'text-gray-700'}`}/>
                    }
                />
                <TabbarLink
                    active={settingsPageActive}
                    onClick={() => navigate('settings')}
                    icon={
                        <TbSettingsCheck className={`w-7 h-7 ${!settingsPageActive ? 'text-white' : 'text-gray-700'}`}/>
                    }
                />
            </Tabbar>
        </Page>
    );
}