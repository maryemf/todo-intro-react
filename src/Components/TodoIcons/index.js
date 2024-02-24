import './icons.css';
import { ReactComponent as CheckSvg } from "./svg/check.svg";
import { ReactComponent as RemoveSvg } from "./svg/remove.svg";
import { ReactComponent as OvalSvg } from "./svg/oval.svg";

const iconTypes = {
    "check": (color) => <CheckSvg className={"svg-check"} fill={color} />,
    "remove": (color) => <RemoveSvg className={"svg-remove"} fill={color} />,
    "oval": (color) => <OvalSvg className={"svg-oval"} fill={color} />
};

function TodoIcon({type, color, onClick}) {
    return (
        <span className={`icon-container icon-container-${type}`} onClick={onClick}>
            {iconTypes[type] (color)}
        </span>
    )
}

export {TodoIcon}