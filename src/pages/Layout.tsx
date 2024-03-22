import {useState} from 'react';
import {Block, Icon, Page, Tabbar, TabbarLink,} from 'konsta/react';
import {MdEmail, MdFileUpload, MdToday} from 'react-icons/md';
import Home from "./Home.tsx";


export default function Layout() {
    const [activeTab, setActiveTab] = useState('tab-1');

    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return (
        <Page>
            <Tabbar icons className="left-0 bottom-0 fixed">
                <TabbarLink
                    active={activeTab === 'tab-1'}
                    onClick={() => setActiveTab('tab-1')}
                    icon={
                        <Icon material={<MdEmail className="w-6 h-6"/>}/>
                    }
                />
                <TabbarLink
                    active={activeTab === 'tab-2'}
                    onClick={() => setActiveTab('tab-2')}
                    icon={
                        <Icon material={<MdToday className="w-6 h-6"/>}/>
                    }
                />
                <TabbarLink
                    active={activeTab === 'tab-3'}
                    onClick={() => setActiveTab('tab-3')}
                    icon={
                        <Icon material={<MdFileUpload className="w-6 h-6"/>}/>
                    }
                />
            </Tabbar>
            {activeTab === 'tab-1' && (
                <Home/>
            )}
            {activeTab === 'tab-2' && (
                <Block strong inset className="space-y-4">
                    <p
                        className={"text-2xl"}
                    >Tab 2</p>
                    <p>
                        <span>{loremIpsum}</span>
                    </p>
                    <p>
                        <span>{loremIpsum}</span>
                    </p>
                </Block>
            )}
            {activeTab === 'tab-3' && (
                <Block strong inset className="space-y-4">
                    <p
                        className={"text-2xl"}
                    >Tab 3</p>
                    <p>
                        <span>{loremIpsum}</span>
                    </p>
                    <p>
                        <span>{loremIpsum}</span>
                    </p>
                </Block>
            )}
        </Page>
    );
}