import "@/styles/Dailyweightcomponents.css";
interface DailyweightcomponentsProps {
    weigjtinputstate?: string;
    id?: string;
    className?: string;
    slot_3_568?: React.ReactNode;
}
const Dailyweightcomponents = (props: DailyweightcomponentsProps) => {
    const { weigjtinputstate, id, className = "", slot_3_568 } = props;

    return (
        <div className={`component-3_575 ${className}`} id={id}>
            <div id="3_575" className="Pixso-symbol-3_575">
                {weigjtinputstate === "FALSE" && (
                    <div id="3_574" className="Pixso-symbol-3_574"></div>
                )}
                {weigjtinputstate === "TRUE" && (
                    <div id="3_573" className="Pixso-symbol-3_573">
                        {slot_3_568 ?? (
                            <p id="3_568" className="Pixso-paragraph-3_568">
                                {"42"}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Dailyweightcomponents;
