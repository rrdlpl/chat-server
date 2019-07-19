import * as React from 'react'
interface ICompleteProps {
    options: string[];
}
export const CompleteCommand = (props: ICompleteProps) => {
    const { options } = props;
    return (<div>
        {JSON.stringify(options)}
    </div>);
};
