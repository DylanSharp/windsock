import {useState} from 'react';
import {Block, Icon, List, ListItem, Navbar, Page, Tabbar, TabbarLink, Toggle,} from 'konsta/react';
import {Calendar, CloudUploadFill, EnvelopeFill} from 'framework7-icons/react';
import {MdEmail, MdFileUpload, MdToday} from 'react-icons/md';


export default function TabbarPage() {
    const [activeTab, setActiveTab] = useState('tab-1');
    const [isTabbarLabels, setIsTabbarLabels] = useState(true);
    const [isTabbarIcons, setIsTabbarIcons] = useState(false);

    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return (
        <Page>
            <Navbar title="Tabbar - 1.0.1"/>
            <Tabbar labels={isTabbarLabels} icons={isTabbarIcons} className="left-0 bottom-0 fixed">
                <TabbarLink
                    active={activeTab === 'tab-1'}
                    onClick={() => setActiveTab('tab-1')}
                    icon={isTabbarIcons && (
                        <Icon
                            ios={<EnvelopeFill className="w-7 h-7"/>}
                            material={<MdEmail className="w-6 h-6"/>}/>
                    )}
                    label={isTabbarLabels && 'Tab 1'}/>
                <TabbarLink
                    active={activeTab === 'tab-2'}
                    onClick={() => setActiveTab('tab-2')}
                    icon={isTabbarIcons && (
                        <Icon ios={<Calendar className="w-7 h-7"/>} material={<MdToday className="w-6 h-6"/>}/>
                    )}
                    label={isTabbarLabels && 'Tab 2'}/>
                <TabbarLink
                    active={activeTab === 'tab-3'}
                    onClick={() => setActiveTab('tab-3')}
                    icon={isTabbarIcons && (
                        <Icon ios={<CloudUploadFill className="w-7 h-7"/>}
                              material={<MdFileUpload className="w-6 h-6"/>}/>
                    )}
                    label={isTabbarLabels && 'Tab 3'}/>
            </Tabbar>
            <List strong inset>
                <ListItem
                    title="Tabbar Labels"
                    after={
                        <Toggle checked={isTabbarLabels}
                                onChange={() => setIsTabbarLabels(!isTabbarLabels)}/>
                    }/>
                <ListItem title="Tabbar Icons"
                          after={<Toggle checked={isTabbarIcons} onChange={() => setIsTabbarIcons(!isTabbarIcons)}/>}/>
            </List>
            {activeTab === 'tab-1' && (
                <Block strong inset className="space-y-4">
                    <p
                        className={"text-2xl"}
                    >Tab 1</p>
                    <p>
                        <span>{loremIpsum}</span>
                    </p>
                    <p>
                        <span>{loremIpsum}</span>
                    </p>
                </Block>
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