import React, { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger>Menu</Popover.Trigger>
            <Popover.Content>
                <div className="p-4 bg-white shadow-md">
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
            </Popover.Content>
        </Popover.Root>
    );
};

export default Menu;
