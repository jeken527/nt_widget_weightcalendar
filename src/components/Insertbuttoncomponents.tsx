import { withStopPropagation } from "@/utils/utils";
import "@/styles/Insertbuttoncomponents.css";
interface InsertbuttoncomponentsProps {
    search_button_state?: string;
    id?: string;
    className?: string;
    mouseodown?: (e: any) => void;
    slot_7_593?: React.ReactNode;
    slot_7_594?: React.ReactNode;
}
const Insertbuttoncomponents = (props: InsertbuttoncomponentsProps) => {
    const {
        search_button_state,
        id,
        className = "",
        mousedown,
        slot_7_593,
        slot_7_594
    } = props;

    return (
        <div
            className={`component-7_587 ${className}`}
            id={id}
            onMousedown={withStopPropagation(mousedown)}
        >
            <div id="7_587" className="Pixso-symbol-7_587">
                {search_button_state === "default" && (
                    <div id="7_588" className="stroke-wrapper-7_588">
                        <div className="Pixso-symbol-7_588">
                            {search_button_state === "default" && (
                                <div className="shadow-blend-unknown-1"></div>
                            )}
                            {search_button_state === "default" && (
                                <div className="shadow-blend-unknown-0"></div>
                            )}
                            {slot_7_593 ?? (
                                <p id="7_593" className="Pixso-paragraph-7_593">
                                    {"INSERT"}
                                </p>
                            )}
                        </div>
                        <div className="stroke-7_588"></div>
                    </div>
                )}
                {search_button_state === "checked" && (
                    <div id="7_590" className="stroke-wrapper-7_590">
                        <div className="Pixso-symbol-7_590">
                            {search_button_state === "checked" && (
                                <div className="shadow-blend-unknown-0"></div>
                            )}
                            {slot_7_594 ?? (
                                <p id="7_594" className="Pixso-paragraph-7_594">
                                    {"INSERT"}
                                </p>
                            )}
                        </div>
                        <div className="stroke-7_590"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Insertbuttoncomponents;
