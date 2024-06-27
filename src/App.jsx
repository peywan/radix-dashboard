import React from 'react';
import { Theme } from '@radix-ui/themes';
import Menu from './components/Menu';
import Card from './components/Card';
import DataTable from './components/DataTable';
import TabsComponent from './components/TabsComponent';
import Overview from './components/Overview';

// Exempeldata för DataTable
const columns = [
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Age',
        accessor: 'age',
    },
];

const data = [
    {
        name: 'Alice',
        age: 25,
    },
    {
        name: 'Bob',
        age: 30,
    },
    {
        name: 'Charlie',
        age: 35,
    },
];

const App = () => (
    <Theme>
        <div className="container mx-auto p-4">
            <Menu />
            <Card title="Card Title" content="Card content" />
            <TabsComponent />
            <DataTable columns={columns} data={data} />
            <Overview />
        </div>
    </Theme>
);

export default App;
