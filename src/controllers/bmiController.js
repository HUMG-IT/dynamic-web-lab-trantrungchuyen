// Import các hàm calculateBMI và classifyBMI từ bmi.js
const { calculateBMI, classifyBMI } = require('../models/bmi');

// Hàm getBMI xử lý yêu cầu từ client
function getBMI(req, res) {
  const { weight, height } = req.body;

  // Kiểm tra tính hợp lệ của weight và height
  if (!weight || !height) {
    return res.status(400).json({ error: "Cần cung cấp đầy đủ cân nặng và chiều cao." });
  }

  const bmi = calculateBMI(parseFloat(weight), parseFloat(height));
  const classification = classifyBMI(bmi);

  // Trả về JSON chứa bmi và classification
  res.json({ bmi, classification });
}

// Xuất hàm getBMI
module.exports = { getBMI };
