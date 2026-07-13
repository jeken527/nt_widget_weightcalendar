export default function Mainframe() {
  return (
    <div className="flex pb-0.5 flex-col justify-end items-center rounded-lg border border-[#B0B0B0] bg-[#FAFAFA] min-w-screen min-h-screen">
      <div className="flex flex-col justify-center items-center gap-2.5 shrink-0 w-[230px] h-[180px]">
        <button className="cursor-pointer text-nowrap flex flex-col justify-center items-center shrink-0 w-10 h-[65px]">
          <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[50px] w-10 h-[65px] text-center tracking-[0.02em]">
            7
          </p>
        </button>
        <div className="flex flex-col justify-center items-center gap-5 shrink-0 w-[200px] h-[84px]">
          <div className="flex flex-col justify-center items-center gap-0.5 shrink-0 w-[200px] h-[42px]">
            <div className="flex items-center gap-[5px] shrink-0 w-[200px] h-5">
              <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-[65px] h-5 tracking-[0.02em]">
                TODAY
              </p>
              <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-2.5 h-5 text-center tracking-[0.02em]">
                :
              </p>
              <button className="cursor-pointer text-nowrap flex justify-center items-center gap-2.5 w-fit">
                <p className="flex flex-col justify-center text-[#000] font-retroGaming text-[10px] w-[100px] h-5 tracking-[0.02em]">
                  2026-07-11
                </p>
              </button>
            </div>
            <div className="flex items-center gap-[5px] shrink-0 w-[200px] h-5">
              <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-[65px] h-5">
                AVERAGE
              </p>
              <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-2.5 h-5 text-center tracking-[0.02em]">
                :
              </p>
              <div className="flex items-center w-fit">
                <button className="cursor-pointer text-nowrap flex justify-center items-center w-[35px] h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-[35px] h-5 text-center">
                    30.5
                  </p>
                </button>
                <p className="flex flex-col justify-center text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                  kg
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-[5px] shrink-0 w-[200px] h-[22px]">
            <button className="cursor-pointer text-nowrap flex justify-center items-center shrink-0 border-r border-r-[#DDD] border-b border-b-[#DDD] bg-[#FFF] shadow-[2px2px00rgba(0,0,0,0.70)inset] w-[38px] h-[22px] overflow-hidden">
              <p className="flex flex-col justify-center shrink-0 text-[#666] font-retroGaming text-[10px] w-[38px] h-5 text-center tracking-[0.02em]">
                WEI
              </p>
            </button>
            <button className="cursor-pointer text-nowrap flex flex-col justify-center items-center shrink-0 rounded-[3px] border-[0.5px] border-[rgba(0,0,0,0.80)] bg-[#F5F5F5] shadow-[1px1px00#FFFinset,1.8px1.8px1px0rgba(0,0,0,0.70)] w-[55px] h-5">
              <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-[46px] h-[13px] text-center">
                INSERT
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2.5 shrink-0 w-[230px] h-[180px]">
        <div className="flex flex-col justify-center items-center gap-0.5 w-[200px]">
          <svg
            width="201"
            height="1"
            viewBox="0 0 201 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[200px] "
          >
            <path
              d="M0.5 0.5H200.5"
              stroke="black"
              strokeLinecap="round"
              strokeDasharray="1 1"
            />
          </svg>
          <svg
            width="201"
            height="1"
            viewBox="0 0 201 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[200px] "
          >
            <path
              d="M0.5 0.5H200.5"
              stroke="black"
              strokeLinecap="round"
              strokeDasharray="1 1"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center gap-5 shrink-0 w-[212px] h-[158px]">
          <button className="cursor-pointer text-nowrap flex flex-col justify-center items-center shrink-0 rounded-[3px] border-[0.5px] border-[rgba(0,0,0,0.80)] bg-[#F5F5F5] shadow-[2px2px00#FFFinset,1.8px1.8px1px0rgba(0,0,0,0.70)] w-2.5 h-[50px]">
            <p className="text-[#000] font-retroGaming text-[10px] w-full text-center">
              &lt;
            </p>
          </button>
          <div className="flex flex-col justify-center items-center gap-2 shrink-0 w-[152px] h-[158px]">
            <div className="flex justify-center items-center shrink-0 w-[100px] h-5">
              <button className="cursor-pointer text-nowrap flex justify-center items-center shrink-0 w-[50px] h-5">
                <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-xs w-[50px] h-5 text-center">
                  2026
                </p>
              </button>
              <button className="cursor-pointer text-nowrap flex justify-center items-center shrink-0 w-[50px] h-5">
                <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-xs w-[50px] h-5 text-center">
                  JUL
                </p>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center gap-0.5 shrink-0 w-full h-[130px]">
              <div className="flex justify-center items-center gap-0.5 shrink-0 w-full h-5">
                <div className="flex justify-center items-center bg-[#FAFAFA] w-5 h-5"></div>
                <div className="flex justify-center items-center bg-[#FAFAFA] w-5 h-5"></div>
                <div className="flex justify-center items-center bg-[#FAFAFA] w-5 h-5"></div>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
              </div>
              <div className="flex justify-center items-center gap-0.5 shrink-0 w-full h-5">
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
              </div>
              <div className="flex justify-center items-center gap-0.5 shrink-0 w-full h-5">
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
              </div>
              <div className="flex justify-center items-center gap-0.5 shrink-0 w-full h-5">
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
              </div>
              <div className="flex justify-center items-center gap-0.5 shrink-0 w-full h-5">
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center bg-[#FAFAFA] w-5 h-5">
                  <p className="flex flex-col justify-center shrink-0 text-[#000] font-retroGaming text-[10px] w-5 h-5 text-center">
                    42
                  </p>
                </button>
                <div className="flex justify-center items-center bg-[#FAFAFA] w-5 h-5"></div>
              </div>
              <div className="flex justify-center items-center gap-0.5 shrink-0 w-full h-5">
                <div className="flex justify-center items-center bg-[#FAFAFA] w-5 h-5"></div>
                <div className="flex justify-center items-center bg-[#FAFAFA] w-5 h-5"></div>
                <div className="flex justify-center items-center bg-[#FAFAFA] w-5 h-5"></div>
                <div className="flex justify-center items-center bg-[#FAFAFA] w-5 h-5"></div>
                <div className="flex justify-center items-center bg-[#FAFAFA] w-5 h-5"></div>
                <div className="flex justify-center items-center bg-[#FAFAFA] w-5 h-5"></div>
                <div className="flex justify-center items-center bg-[#FAFAFA] w-5 h-5"></div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer text-nowrap flex flex-col justify-center items-center shrink-0 rounded-[3px] border-[0.5px] border-[rgba(0,0,0,0.80)] bg-[#F5F5F5] shadow-[2px2px00#FFFinset,1.8px1.8px1px0rgba(0,0,0,0.70)] w-2.5 h-[50px]">
            <p className="text-[#000] font-retroGaming text-[10px] w-full text-center">
              &gt;
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
