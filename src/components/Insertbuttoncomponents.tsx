import React, { CSSProperties, ReactNode } from "react"; // 🌟 에러 방지: 리액트 타입들 불러오기
import { withStopPropagation } from "@/utils/utils";
import "@/styles/Insertbuttoncomponents.css";

interface InsertbuttoncomponentsProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
    search_button_state?: string;
    mousedown?: () => void; 
    slot_7_593?: ReactNode;
    slot_7_594?: ReactNode; // 🌟 에러 방지: 아래에서 사용 중인 변수 이름표(Interface) 추가
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
            // 🌟 에러 방지: onMousedown을 onMouseDown(대문자 D)으로 고치고, 
            // mousedown이 실제로 존재할 때만 실행되도록 안전장치(?)를 달았습니다!
            onMouseDown={mousedown ? withStopPropagation(mousedown) : undefined}
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
