import Insertbuttoncomponents from "@/components/Insertbuttoncomponents";
import { useState, useEffect, useMemo } from "react";
import Buttoncomponents from "@/components/Buttoncomponents";
import Dailyweightcomponents from "@/components/Dailyweightcomponents";
import { fetchWeightData, saveWeightData } from "@/api/weightApi";
import "@/styles/Frame10544.css";

const Frame10544 = () => {
    // ----------------------------------------------------
    // [1] 디자인 상호작용 및 달력 상태
    // ----------------------------------------------------
    const [search_button_state_7_660, setSearch_button_state_7_660] = useState("default");
    const [buttonstate_7_569, setButtonstate_7_569] = useState("default");
    const [buttonstate_7_572, setButtonstate_7_572] = useState("default");

    const getKSTDate = () => {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        return new Date(utc + 9 * 3600000);
    };

    const today = getKSTDate();
    const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

    const dynamic_month_number = currentDate.getMonth() + 1;
    const dynamic_date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const dynamic_year = currentDate.getFullYear();
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const dynamic_month = monthNames[currentDate.getMonth()];

    // ----------------------------------------------------
    // [2] 데이터 통신 및 입력 상태 (새로 추가된 핵심 로직)
    // ----------------------------------------------------
    const [weightRecords, setWeightRecords] = useState<{ [key: string]: number }>({});
    const [inputWeight, setInputWeight] = useState<string>("");

    // 컴포넌트가 켜질 때 JSONBin에서 데이터 불러오기
    useEffect(() => {
        const loadData = async () => {
            const data = await fetchWeightData();
            if (data && data.records) {
                setWeightRecords(data.records);
            }
        };
        loadData();
    }, []);

    // 현재 보고 있는 월의 평균 몸무게 계산하기
    const averageWeight = useMemo(() => {
        const currentMonthPrefix = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
        const weightsThisMonth = Object.entries(weightRecords)
            .filter(([date]) => date.startsWith(currentMonthPrefix))
            .map(([_, weight]) => weight);

        if (weightsThisMonth.length === 0) return "0.0";
        
        const sum = weightsThisMonth.reduce((a, b) => a + b, 0);
        return (sum / weightsThisMonth.length).toFixed(1); // 소수점 1자리까지 표시
    }, [weightRecords, currentDate]);

    // INSERT 버튼 클릭 시 실행되는 함수
    const handleInsertWeight = async () => {
        if (!inputWeight || isNaN(Number(inputWeight))) return; // 숫자가 아니면 무시

        // 기존 데이터에 오늘 날짜의 몸무게 덮어쓰기
        const updatedRecords = {
            ...weightRecords,
            [dynamic_date]: Number(inputWeight)
        };

        // 화면 즉시 업데이트
        setWeightRecords(updatedRecords);
        setInputWeight(""); // 입력창 초기화
        
        // JSONBin 서버에 저장
        await saveWeightData({ records: updatedRecords });
    };

    // ----------------------------------------------------
    // [3] 달력 생성 알고리즘 (데이터 매핑)
    // ----------------------------------------------------
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    const calendarRows = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
        const week = [];
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                week.push({ type: "empty", key: `empty-start-${j}` });
            } else if (dayCounter > daysInMonth) {
                week.push({ type: "empty", key: `empty-end-${dayCounter}` });
                dayCounter++;
            } else {
                // 해당 날짜의 고유 문자열 (예: "2026-07-05")
                const dateKey = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(dayCounter).padStart(2, '0')}`;
                
                week.push({ 
                    type: "date", 
                    dayNumber: dayCounter, 
                    dateKey: dateKey,
                    recordedWeight: weightRecords[dateKey] // 이 날짜에 기록된 몸무게가 있는지 확인
                });
                dayCounter++;
            }
        }
        calendarRows.push(week);
    }

    // 버튼 이벤트
    const mousedown_7_569 = () => { setButtonstate_7_569("checked"); setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)); setTimeout(() => setButtonstate_7_569("default"), 200); };
    const mousedown_7_572 = () => { setButtonstate_7_572("checked"); setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)); setTimeout(() => setButtonstate_7_572("default"), 200); };

    return (
        <div className="scroll-container">
            <div id="10_544" className="stroke-wrapper-10_544">
                <div className="Pixso-frame-10_544">
                    <div className="frame-content-10_544">
                        <div id="10_542" className="Pixso-frame-10_542">
                            <div className="frame-content-10_542">
                                <div id="10_541" className="Pixso-frame-10_541">
                                    <div className="frame-content-10_541">
                                        <p id="7_664" className="Pixso-paragraph-7_664">{dynamic_month_number}</p>
                                    </div>
                                </div>
                                <div id="10_545" className="Pixso-frame-10_545">
                                    <div className="frame-content-10_545">
                                        <div id="9_683" className="Pixso-frame-9_683">
                                            <div className="frame-content-9_683">
                                                <div id="7_667" className="Pixso-frame-7_667">
                                                    <div className="frame-content-7_667">
                                                        <p id="7_665" className="Pixso-paragraph-7_665">{"TODAY"}</p>
                                                        <p id="9_684" className="Pixso-paragraph-9_684">{":"}</p>
                                                        <div id="9_681" className="Pixso-frame-9_681">
                                                            <p id="7_666" className="Pixso-paragraph-7_666">{dynamic_date}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="9_675" className="Pixso-frame-9_675">
                                                    <div className="frame-content-9_675">
                                                        <p id="9_676" className="Pixso-paragraph-9_676">{"AVERAGE"}</p>
                                                        <p id="9_685" className="Pixso-paragraph-9_685">{":"}</p>
                                                        <div id="9_682" className="Pixso-frame-9_682">
                                                            <div id="9_677" className="Pixso-frame-9_677">
                                                                <div className="frame-content-9_677">
                                                                    <p id="9_678" className="Pixso-paragraph-9_678">
                                                                        {averageWeight} {/* 동적 평균 계산 연동 */}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <p id="9_679" className="Pixso-paragraph-9_679">{"kg"}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="7_663" className="Pixso-frame-7_663">
                                            <div className="frame-content-7_663">
                                                <div id="7_584" className="stroke-wrapper-7_584">
                                                    <div className="Pixso-frame-7_584">
                                                        <div className="shadow-blend-unknown-0"></div>
                                                        <div className="frame-content-7_584">
                                                            {/* 🌟 기존 p 태그 대신 실제 입력 가능한 input 태그 삽입 */}
                                                            <input
                                                                type="text"
                                                                inputMode="decimal"
                                                                placeholder="WEI"
                                                                value={inputWeight}
                                                                onChange={(e) => {
                                                                    let cleanValue = e.target.value.replace(/[^0-9.]/g, "");
                                                                    const parts = cleanValue.split('.');
                                                                    if (parts.length > 2) {
                                                                        cleanValue = parts[0] + '.' + parts.slice(1).join('');}
                                                                        setInputWeight(cleanValue);}}
                                                                style={{
                                                                    width: "100%", background: "transparent", border: "none", 
                                                                    textAlign: "center", outline: "none", fontSize: "10px", 
                                                                    fontFamily: "retroGaming", color: "#666"
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="stroke-7_584"></div>
                                                </div>
                                                {/* 🌟 INSERT 버튼에 저장 핸들러 연결 */}
                                                <div onClick={async () => {
                                                    setSearch_button_state_7_660("checked");
                                                    await handleInsertWeight();
                                                    setTimeout(() => {
                                                        setSearch_button_state_7_660("default");}, 200);
                                                    }} 
                                                    style={{cursor: 'pointer'}}
                                                    >
                                                    <Insertbuttoncomponents
                                                        id="7_660"
                                                        className="Pixso-instance-7_660"
                                                        search_button_state={search_button_state_7_660}
                                                        slot_7_593={<p id="2_18" className="Pixso-paragraph-2_18">{"INSERT"}</p>}
                                                    ></Insertbuttoncomponents>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="7_579" className="Pixso-frame-7_579">
                            <div className="frame-content-7_579">
                                <div id="4_549" className="Pixso-vector-4_549"></div>
                                <div id="7_577" className="Pixso-frame-7_577">
                                    <div className="frame-content-7_577">
                                        <div onClick={mousedown_7_569} style={{ cursor: 'pointer', zIndex: 10 }}>
                                            <Buttoncomponents id="7_569" className="Pixso-instance-7_569" buttonstate={buttonstate_7_569} slot_7_554={<p id="2_22" className="Pixso-paragraph-2_22">{"<"}</p>}/>
                                        </div>
                                        <div id="7_576" className="Pixso-frame-7_576">
                                            <div className="frame-content-7_576">
                                                <div id="11_558" className="Pixso-frame-11_558">
                                                    <div className="frame-content-11_558">
                                                        <div id="11_556" className="Pixso-frame-11_556">
                                                            <div className="frame-content-11_556">
                                                                <p id="11_555" className="Pixso-paragraph-11_555">{dynamic_year}</p>
                                                            </div>
                                                        </div>
                                                        <div id="9_669" className="Pixso-frame-9_669">
                                                            <div className="frame-content-9_669">
                                                                <p id="9_670" className="Pixso-paragraph-9_670">{dynamic_month}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="3_1773" className="Pixso-frame-3_1773">
                                                    <div className="frame-content-3_1773">
                                                        {calendarRows.map((week, rowIndex) => (
                                                            <div key={rowIndex} className="Pixso-frame-3_1698">
                                                                <div className="frame-content-3_1698">
                                                                    {week.map((cell: any) => {
                                                                    const hasRecord = cell.type === "date" && cell.recordedWeight !== undefined;
                                                                        return (
                                                                            <Dailyweightcomponents
                                                                                key={cell.key || cell.dateKey}
                                                                                className={`Pixso-instance-${cell.key || cell.dateKey}`}
                                                                                weigjtinputstate={hasRecord ? "TRUE" : "FALSE"}

                                                                                slot_3_568={
                                                                                    hasRecord ? (
                                                                                        <p className="Pixso-paragraph-2_31">
                                                                                            {Math.floor(cell.recordedWeight)}
                                                                                        </p>
                                                                                ) : undefined
                                                                            }
                                                                        />
                                                                    );
                                                            })}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={mousedown_7_572} style={{ cursor: 'pointer', zIndex: 10 }}>
                                            <Buttoncomponents id="7_572" className="Pixso-instance-7_572" buttonstate={buttonstate_7_572} slot_7_554={<p id="2_16" className="Pixso-paragraph-2_16">{">"}</p>}/>
                                        </div>
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
