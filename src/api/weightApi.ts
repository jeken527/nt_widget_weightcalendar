const BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID;
const MASTER_KEY = import.meta.env.VITE_JSONBIN_MASTER_KEY;
const BASE_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

// 1. 데이터 불러오기
export const fetchWeightData = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        "X-Master-Key": MASTER_KEY,
      },
    });
    if (!response.ok) throw new Error("데이터를 불러오는데 실패했습니다.");
    const result = await response.json();
    return result.record; // { records: { "2026-07-13": 72.5, ... } }
  } catch (error) {
    console.error("JSONBin Fetch Error:", error);
    return { records: {} }; // 실패 시 빈 데이터 반환
  }
};

// 2. 데이터 저장하기
export const saveWeightData = async (data: any) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": MASTER_KEY,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("데이터를 저장하는데 실패했습니다.");
    return await response.json();
  } catch (error) {
    console.error("JSONBin Save Error:", error);
  }
};
