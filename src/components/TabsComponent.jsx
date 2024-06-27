import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

const TabsComponent = () => (
    <Tabs.Root defaultValue="tab1">
        <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
            <p>Content for Tab 1</p>
        </Tabs.Content>
        <Tabs.Content value="tab2">
            <p>Content for Tab 2</p>
        </Tabs.Content>
    </Tabs.Root>
);

export default TabsComponent;
