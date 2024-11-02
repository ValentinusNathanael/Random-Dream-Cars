const cars = [
    {
        name: "Ferrari 458 Italia",
        image: "http://wallup.net/wp-content/uploads/2016/01/141925-Ferrari-Ferrari_458_Italia-car.jpg",
        description: "Tipe Mesin: 4.5L V8 naturally aspirated, menghasilkan tenaga maksimum 562 hp",
        videoUrl: "https://youtu.be/P_JfLoqUUvw?si=26qa3qPTiAIqJ-TE",
    },
    {
        name: "Lamborghini Aventador",
        image: "http://www.hdcarwallpapers.com/walls/lamborghini_aventador_lp700_4_5-wide.jpg",
        description: "Tipe Mesin: 6.5L V12, menghasilkan tenaga maksimum 730 hp.",
        videoUrl: "https://youtu.be/wA9bqcq6Hu0?si=bQ79yqJkpSeiZdOd"
    },
    {
        name: "Nissan Skyline GTR R34",
        image: "https://wallpapercave.com/wp/wp2013213.jpg",
        description: "Tipe Mesin:  2.6L Inline-6 Twin-Turbo, menghasilkan tenaga maksimum 276 hp.",
        videoUrl: "https://youtu.be/7E5ykXBGjNc?si=6w-2OuV2ekbbwzxM"
    },
    {
        name: "Porsche 911 GT3RS",
        image: "https://wallpaperaccess.com/full/933113.jpg",
        description: "Tipe Mesin: 4.0L Flat-6 (Boxer) naturally aspirated, menghasilkan tenaga maksimum 518 hp.",
        videoUrl: "https://youtu.be/rdNtZ-lZOqc?si=0fXlcCcMhYPVeMqW"
    },
    {
        name: "Bugatti Chiron",
        image: "https://www.hdcarwallpapers.com/download/bugatti_chiron_pur_sport_2020_4k_8k-3840x2160.jpg",
        description: "Tipe Mesin: 8.0L W16, menghasilkan tenaga maksimum 1500 hp.",
        videoUrl: "https://youtu.be/Br-7GWp77mo?si=kkUm8ElouKIo5lnf"
    },
    {
        name: "Mclaren P1",
        image: "https://wallpapercave.com/wp/wp1822335.jpg",
        description: "Tipe Mesin: 4.0L V8 twin-turbo, menghasilkan tenaga maksimum 720 hp.",
        videoUrl: "https://youtu.be/OutyUcnHDaA?si=S2ajzGThQI_qTLPs"
    },
    {
        name: "Toyota Supra MK4",
        image: "https://wallpapercave.com/wp/wp4464045.jpg",
        description: "Tipe Mesin: 3.0L 2JZ-GTE (Turbocharged Inline-6), menghasilkan tenaga maksimum 276 hp.",
        videoUrl: "https://youtu.be/rvedkXhfmQk?si=hnQx5vhXD7hLggqO"
    }
];

function showDreamCar() {
    const userName = document.getElementById("name").value.trim();
    const resultDiv = document.getElementById("result");
    const greeting = document.getElementById("greeting");
    const carName = document.getElementById("carName");
    const carImage = document.getElementById("carImage");
    const carDescription = document.getElementById("carDescription");
    const detailButton = document.getElementById("detailButton");

    if (userName) {
        const randomCar = cars[Math.floor(Math.random() * cars.length)];
        greeting.innerText = `Halo, ${userName}!`;
        carName.innerText = `Mobil impianmu adalah: ${randomCar.name}`;
        carImage.src = randomCar.image;
        carDescription.innerText = randomCar.description;
        detailButton.onclick = () => window.open(randomCar.videoUrl, '_blank');
        detailButton.style.display = "inline-block"; 
        resultDiv.style.display = "block";
    } else {
        alert("Silakan masukkan namamu!");
    }
}