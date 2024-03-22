import {useState} from 'react';
import {
    Block,
    Icon,
    Navbar,
    Page,
    Tabbar,
    TabbarLink,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from 'konsta/react';
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
                <>
                    <Navbar title="Table"/>
                    <div className="block overflow-x-auto mt-8">
                        <Table>
                            <TableHead>
                                <TableRow header>
                                    <TableCell header>Dessert (100g serving)</TableCell>
                                    <TableCell header className="text-right">
                                        Calories
                                    </TableCell>
                                    <TableCell header className="text-right">
                                        Fat (g)
                                    </TableCell>
                                    <TableCell header className="text-right">
                                        Carbs
                                    </TableCell>
                                    <TableCell header className="text-right">
                                        Protein (g)
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Frozen yogurt</TableCell>
                                    <TableCell className="text-right">159</TableCell>
                                    <TableCell className="text-right">6.0</TableCell>
                                    <TableCell className="text-right">24</TableCell>
                                    <TableCell className="text-right">4.0</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Ice cream sandwich</TableCell>
                                    <TableCell className="text-right">237</TableCell>
                                    <TableCell className="text-right">9.0</TableCell>
                                    <TableCell className="text-right">37</TableCell>
                                    <TableCell className="text-right">4.4</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Eclair</TableCell>
                                    <TableCell className="text-right">262</TableCell>
                                    <TableCell className="text-right">16.0</TableCell>
                                    <TableCell className="text-right">24</TableCell>
                                    <TableCell className="text-right">6.0</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Cupcake</TableCell>
                                    <TableCell className="text-right">305</TableCell>
                                    <TableCell className="text-right">3.7</TableCell>
                                    <TableCell className="text-right">67</TableCell>
                                    <TableCell className="text-right">4.3</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </>
            )}
            {activeTab === 'tab-3' && (
                <Block strong inset className="space-y-4">
                    <p className={"text-2xl"}>Tab 3</p>
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