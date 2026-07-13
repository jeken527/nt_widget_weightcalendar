import Insertbuttoncomponents from "@/components/Insertbuttoncomponents";
import { useState, useEffect } from "react";
import Buttoncomponents from "@/components/Buttoncomponents";
import Dailyweightcomponents from "@/components/Dailyweightcomponents";
import "@/styles/Frame10544.css";

const Frame10544 = () => {
    // ----------------------------------------------------
    // [1] 디자인 상호작용을 위한 기존 상태값들 (그대로 유지)
    // ----------------------------------------------------
    const [search_button_state_7_660, setSearch_button_state_7_660] = useState("default");
    const [buttonstate_7_569, setButtonstate_7_569] = useState("default");
    const [buttonstate_7_572, setButtonstate_7_572] = useState("default");
    const [transitionConfig7_660, setTransitionConfig7_660] = useState({});
    const [transitionConfig7_569, setTransitionConfig7_569] = useState({});
    const [transitionConfig7_572, setTransitionConfig7_572] = useState({});
    
    // ----------------------------------------------------
    // [2] 동적 달력 구동을 위한 State 및 함수 (새로 추가)
    // ----------------------------------------------------
    // KST(한국 표준시) 기준 오늘 날짜 구하기
    const getKSTDate = () => {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        return new Date(utc + 9 * 3600000); // UTC+9
    };

    const today = getKSTDate();
    
    // 현재 보고 있는 달력의 기준 날짜 (초기값은 오늘)
    const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

    // 기획하신 dynamic 변수들 세팅
    const dynamic_month_number = currentDate.getMonth() + 1; // 1 ~ 12
    const dynamic_date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const dynamic_year = currentDate.getFullYear();
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const dynamic_month = monthNames[currentDate.getMonth()];

    // ----------------------------------------------------
    // [3] 달력 생성 로직 (dynamic_month-calendar)
    // ----------------------------------------------------
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); // 월의 시작 요일 (0: 일요일)
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); // 해당 월의 총 일수

    // 6주(42일) 배열 만들기
    const calendarRows = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
        const week = [];
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                // 이번 달 시작 전의 빈 칸
                week.push({ type: "empty", key: `empty-start-${j}` });
            } else if (dayCounter > daysInMonth) {
                // 이번 달이 끝난 후의 빈 칸
                week.push({ type: "empty", key: `empty-end-${dayCounter}` });
                dayCounter++;
            } else {
                // 이번 달의 유효한 날짜
                week.push({ type: "date", dayNumber: dayCounter, key: `date-${dayCounter}` });
                dayCounter++;
            }
        }
        calendarRows.push(week);
    }

    // ----------------------------------------------------
    // [4] 마우스 이벤트 및 월 이동 함수
    // ----------------------------------------------------
    const mouseover_7_660 = () => {
        setSearch_button_state_7_660("checked");
    };

    // 이전 달(<) 버튼 클릭
    const mousedown_7_569 = () => {
        setButtonstate_7_569("checked");
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
        
        // 애니메이션 후 상태 원복 (옵션)
        setTimeout(() => setButtonstate_7_569("default"), 200); 
    };

    // 다음 달(>) 버튼 클릭
    const mousedown_7_572 = () => {
        setButtonstate_7_572("checked");
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
        
        // 애니메이션 후 상태 원복 (옵션)
        setTimeout(() => setButtonstate_7_572("default"), 200);
    };

    return (
        <div className="scroll-container">
            <div id="10_544" className="stroke-wrapper-10_544">
                <div className="Pixso-frame-10_544">
                    <div className="frame-content-10_544">
                        <div id="10_542" className="Pixso-frame-10_542">
                            <div className="frame-content-10_542">
                                {/* 상단 타이포 및 오늘 날짜 영역 */}
                                <div id="10_541" className="Pixso-frame-10_541">
                                    <div className="frame-content-10_541">
                                        <p id="7_664" className="Pixso-paragraph-7_664">
                                            {dynamic_month_number} {/* 동적 월 숫자 (예: 7) */}
                                        </p>
                                    </div>
                                </div>
                                <div id="10_545" className="Pixso-frame-10_545">
                                    <div className="frame-content-10_545">
                                        <div id="9_683" className="Pixso-frame-9_683">
                                            <div className="frame-content-9_683">
                                                <div id="7_667" className="Pixso-frame-7_667">
                                                    <div className="frame-content-7_667">
                                                        <p id="7_665" className="Pixso-paragraph-7_665">
                                                            {"TODAY"}
                                                        </p>
                                                        <p id="9_684" className="Pixso-paragraph-9_684">
                                                            {":"}
                                                        </p>
                                                        <div id="9_681" className="Pixso-frame-9_681">
                                                            <p id="7_666" className="Pixso-paragraph-7_666">
                                                                {dynamic_date} {/* 오늘 날짜 (YYYY-MM-DD) */}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="9_675" className="Pixso-frame-9_675">
                                                    <div className="frame-content-9_675">
                                                        <p id="9_676" className="Pixso-paragraph-9_676">
                                                            {"AVERAGE"}
                                                        </p>
                                                        <p id="9_685" className="Pixso-paragraph-9_685">
                                                            {":"}
                                                        </p>
                                                        <div id="9_682" className="Pixso-frame-9_682">
                                                            <div id="9_677" className="Pixso-frame-9_677">
                                                                <div className="frame-content-9_677">
                                                                    <p id="9_678" className="Pixso-paragraph-9_678">
                                                                        {"30.5"} {/* 평균 몸무게 (아직 고정값) */}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <p id="9_679" className="Pixso-paragraph-9_679">
                                                                {"kg"}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* INSERT 버튼 영역 */}
                                        <div id="7_663" className="Pixso-frame-7_663">
                                            <div className="frame-content-7_663">
                                                <div id="7_584" className="stroke-wrapper-7_584">
                                                    <div className="Pixso-frame-7_584">
                                                        <div className="shadow-blend-unknown-0"></div>
                                                        <div className="frame-content-7_584">
                                                            <p id="7_585" className="Pixso-paragraph-7_585">
                                                                {"WEI"}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="stroke-7_584"></div>
                                                </div>
                                                <Insertbuttoncomponents
                                                    id="7_660"
                                                    className="Pixso-instance-7_660"
                                                    search_button_state={search_button_state_7_660}
                                                    transitionConfig={transitionConfig7_660}
                                                    mouseover={mouseover_7_660}
                                                    slot_7_593={<p id="2_18" className="Pixso-paragraph-2_18">{"INSERT"}</p>}
                                                ></Insertbuttoncomponents>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 하단 달력 영역 */}
                        <div id="7_579" className="Pixso-frame-7_579">
                            <div className="frame-content-7_579">
                                <div id="4_549" className="Pixso-vector-4_549"></div>
                                <div id="7_577" className="Pixso-frame-7_577">
                                    <div className="frame-content-7_577">
                                        
                                        {/* 이전 달(<) 버튼 */}
                                        <Buttoncomponents
                                            id="7_569"
                                            className="Pixso-instance-7_569"
                                            buttonstate={buttonstate_7_569}
                                            transitionConfig={transitionConfig7_569}
                                            mousedown={mousedown_7_569}
                                            slot_7_554={<p id="2_22" className="Pixso-paragraph-2_22">{"<"}</p>}
                                        ></Buttoncomponents>

                                        <div id="7_576" className="Pixso-frame-7_576">
                                            <div className="frame-content-7_576">
                                                <div id="11_558" className="Pixso-frame-11_558">
                                                    <div className="frame-content-11_558">
                                                        <div id="11_556" className="Pixso-frame-11_556">
                                                            <div className="frame-content-11_556">
                                                                <p id="11_555" className="Pixso-paragraph-11_555">
                                                                    {dynamic_year} {/* 동적 연도 (예: 2026) */}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div id="9_669" className="Pixso-frame-9_669">
                                                            <div className="frame-content-9_669">
                                                                <p id="9_670" className="Pixso-paragraph-9_670">
                                                                    {dynamic_month} {/* 동적 월 문자 (예: JUL) */}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* 동적으로 생성되는 6x7 캘린더 그리드 */}
                                                <div id="3_1773" className="Pixso-frame-3_1773">
                                                    <div className="frame-content-3_1773">
                                                        {calendarRows.map((week, rowIndex) => (
                                                            // 기존 코드의 Row 디자인 프레임을 재사용 (스타일 유지)
                                                            <div key={rowIndex} className="Pixso-frame-3_1698">
                                                                <div className="frame-content-3_1698">
                                                                    {week.map((cell) => (
                                                                        <Dailyweightcomponents
                                                                            key={cell.key}
                                                                            className={`Pixso-instance-${cell.key}`}
                                                                            weigjtinputstate={cell.type === "date" ? "TRUE" : "FALSE"}
                                                                            slot_3_568={
                                                                                cell.type === "date" ? (
                                                                                    <p className="Pixso-paragraph-2_31">
                                                                                        {cell.dayNumber}
                                                                                    </p>
                                                                                ) : undefined
                                                                            }
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 다음 달(>) 버튼 */}
                                        <Buttoncomponents
                                            id="7_572"
                                            className="Pixso-instance-7_572"
                                            buttonstate={buttonstate_7_572}
                                            transitionConfig={transitionConfig7_572}
                                            mousedown={mousedown_7_572}
                                            slot_7_554={<p id="2_16" className="Pixso-paragraph-2_16">{">"}</p>}
                                        ></Buttoncomponents>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stroke-10_544"></div>
            </div>
        </div>
    );
};
export default Frame10544;
