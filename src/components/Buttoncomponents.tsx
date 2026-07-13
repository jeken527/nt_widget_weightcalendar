import { withStopPropagation } from "@/utils/utils";
import "@/styles/Buttoncomponents.css";
interface ButtoncomponentsProps {
    buttonstate?: string;
    id?: string;
    className?: string;
    mousedown?: (e: any) => void;
    slot_7_554?: React.ReactNode;
    slot_7_561?: React.ReactNode;
}
const Buttoncomponents = (props: ButtoncomponentsProps) => {
    const {
        buttonstate,
        id,
        className = "",
        mousedown,
        slot_7_554,
        slot_7_561
    } = props;

    return (
        <div
            className={`component-7_568 ${className}`}
            id={id}
            onMousedown={withStopPropagation(mousedown)}
        >
            <div id="7_568" className="Pixso-symbol-7_568">
                {buttonstate === "default" && (
                    <div id="7_567" className="stroke-wrapper-7_567">
                        <div className="Pixso-symbol-7_567">
                            {buttonstate === "default" && (
                                <div className="shadow-blend-unknown-1"></div>
                            )}
                            {buttonstate === "default" && (
                                <div className="shadow-blend-unknown-0"></div>
                            )}
                            {slot_7_554 ?? (
                                <p id="7_554" className="Pixso-paragraph-7_554">
                                    {"<"}
                                </p>
                            )}
                        </div>
                        <div className="stroke-7_567"></div>
                    </div>
                )}
                {buttonstate === "checked" && (
                    <div id="7_566" className="stroke-wrapper-7_566">
                        <div className="Pixso-symbol-7_566">
                            {buttonstate === "checked" && (
                                <div className="shadow-blend-unknown-0"></div>
                            )}
                            {slot_7_561 ?? (
                                <p id="7_561" className="Pixso-paragraph-7_561">
                                    {"<"}
                                </p>
                            )}
                        </div>
                        <div className="stroke-7_566"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Buttoncomponents;
