const ToggleTheme = (props) => {
    return (
        <div className="switch-toggle">
                <input className="switch-toggle__input" type="checkbox" id="bluetooth" onClick={props.clickTheme} />
                <label htmlFor="bluetooth"></label>
            </div>
    )
}

export default ToggleTheme;
