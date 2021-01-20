import React, { useState } from 'react';
import './FileChooser.css';

import Button from '../../Button/Button';

const FileChooser = props => {
    const hiddenFileInput = React.useRef(null);
    const [fileName, setFileName] = useState('No file uploaded');

    const handleClick = event => {
        hiddenFileInput.current.click();
    }
    const handleChange = event => {
        const file = event.target.files[0]; 
        setFileName(file.name);
        props.handleFile(file);
    }

    return (
        <>
            <div className="file-chooser-class">
                <Button onClick={handleClick} value="Upload resume..." /><p>{fileName}</p>
            </div>
            <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{display: 'none'}} />
        </>
    );
}

export default FileChooser;