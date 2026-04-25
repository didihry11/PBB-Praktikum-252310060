import { Text, View } from "react-native";

export default function Praktikum2() {
  const dataDiri = {
    nama: "Didi Haryadi",
    berat: 60,
    tinggi: 170,
  };

  const makanan = [
    { waktu: "Pagi", kalori: 400 },
    { waktu: "Siang", kalori: 700 },
    { waktu: "Malam", kalori: 500 },
  ];

  let totalKalori = 0;
  for (let i = 0; i < makanan.length; i++) {
    totalKalori += makanan[i].kalori;
  }

  const tinggiMeter = dataDiri.tinggi / 100;

  const bmi = dataDiri.berat / (tinggiMeter * tinggiMeter);

  let statusBMI = "";
  if (bmi < 18.5) {
    statusBMI = "Kurus";
  } else if (bmi <= 24.9) {
    statusBMI = "Ideal";
  } else {
    statusBMI = "Berlebih";
  }

  let statusKalori = "";
  if (totalKalori < 2000) {
    statusKalori = "Kurang";
  } else if (totalKalori <= 2500) {
    statusKalori = "Cukup";
  } else {
    statusKalori = "Berlebih";
  }

  return (
    <View style={{ alignItems: "center", marginTop: 50 }}>
      <Text>=== Praktikum 2 ===</Text>

      <Text>Nama: {dataDiri.nama}</Text>
      <Text>Berat: {dataDiri.berat} kg</Text>
      <Text>Tinggi: {dataDiri.tinggi} cm</Text>

      <Text>Total Kalori: {totalKalori}</Text>

      <Text>BMI: {bmi.toFixed(2)}</Text>
      <Text>Status BMI: {statusBMI}</Text>

      <Text>Status Kalori: {statusKalori}</Text>
    </View>
  );
}
