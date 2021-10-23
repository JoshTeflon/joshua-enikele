const ToggleTheme = (props) => {
    return (
        <div className="wrapper">
  <div className="toggle">
    <input className="toggle-input" type="checkbox" onClick={props.clickFunction} />
    <div className="toggle-bg"></div>
    <div className="toggle-switch">
      <div className="toggle-switch-figure"></div>
      <div className="toggle-switch-figureAlt"></div>
    </div>  
  </div>
</div>
    )
}

export default ToggleTheme;
