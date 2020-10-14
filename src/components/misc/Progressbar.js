import React from 'react';

const ProgressBar = (props) => {
    const { bgcolor, completed, name } = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      marginLeft: 50,
      marginBottom: 5,
      display: "inline-block"
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 3s ease-in-out',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }

    const nameStyles = {
        display: 'inline-block',
        fontWeight: 'bold',
        marginLeft: 50
    }
  
    return (
      <div>
        <span style={nameStyles}>{name}</span>
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>      
      </div>
    );
  };
  
  export default ProgressBar;