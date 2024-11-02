// Tính chỉ số BMI dựa trên cân nặng và chiều cao, trả về hệ số BMI với 2 số sau dấu phẩy

// 1. Hàm calculateBMI để tính chỉ số BMI
const calculateBMI = (weight, height) => {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}

// 2. Hàm classifyBMI để phân loại chỉ số BMI
const classifyBMI = (bmi) => {
  if (bmi < 18.5) return "Gầy";
  if (bmi >= 18.5 && bmi < 24.9) return "Bình thường";
  if (bmi >= 25 && bmi < 29.9) return "Thừa cân";
  return "Béo phì";
};

// Xuất các hàm calculateBMI và classifyBMI
module.exports = { calculateBMI, classifyBMI };
