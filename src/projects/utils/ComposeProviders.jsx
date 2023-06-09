import React from 'react';

interface Props {
    components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
    children: React.ReactNode;
}

function ComposeProviders(props: Props) {
    const { components = [], children } = props;

    return (
        <>
            {components.reduceRight(
                (acc, Comp) => (
                    <Comp>{acc}</Comp>
                ),
                children
            )}
        </>
    );
}

export default ComposeProviders;
