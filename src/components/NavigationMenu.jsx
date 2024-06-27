import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import './NavigationMenu.css';

const NavigationMenuComponent = () => (
    <NavigationMenu.Root>
        <NavigationMenu.List className="navigation-menu">
            <NavigationMenu.Item>
                <NavigationMenu.Link href="#overview" className="navigation-link">Overview</NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
                <NavigationMenu.Link href="#analytics" className="navigation-link">Analytics</NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
                <NavigationMenu.Link href="#settings" className="navigation-link">Settings</NavigationMenu.Link>
            </NavigationMenu.Item>
        </NavigationMenu.List>
    </NavigationMenu.Root>
);

export default NavigationMenuComponent;
