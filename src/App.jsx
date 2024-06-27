import React from 'react';
import { Theme } from '@radix-ui/themes';
import Menu from './components/Menu';
import Card from './components/Card';
import DataTable from './components/DataTable';
import TabsComponent from './components/TabsComponent';
import Overview from './components/Overview';
import NavigationMenuComponent from './components/NavigationMenu';
import InfoCard from './components/InfoCard';
import './App.css';

const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
];

const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
];

const App = () => (
    <Theme>
        <div className="app-container">
            <div className="dashboard-container">
                <Menu />
                <NavigationMenuComponent />
                <div className="info-cards-container">
                    <InfoCard title="Total Revenue" value="$50,000" />
                    <InfoCard title="Subscriptions" value="1,200" />
                    <InfoCard title="Sales" value="3,400" />
                    <InfoCard title="Active Now" value="350" />
                </div>
                <div className="main-content">
                    <div className="left-content">
                        <Card title="Card Title" content="Card content" />
                        <TabsComponent />
                    </div>
                    <div className="right-content">
                        <DataTable columns={columns} data={data} />
                        <Overview />
                    </div>
                </div>
            </div>
        </div>
    </Theme>
);

export default App;
