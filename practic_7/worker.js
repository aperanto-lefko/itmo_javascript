onmessage = function(event) {
    if (event.data === "start") {
        // Имитация тяжелых вычислений
        let result = 0;
        
        for (let i = 0; i < 1000000000; i++) {
            result += Math.sqrt(i) * Math.sin(i);
            
            // Отправляем прогресс каждые 10 миллионов итераций
            if (i % 10000000 === 0) {
                const progress = Math.round((i / 1000000000) * 100);
                postMessage(`Вычисление... ${progress}%`);
            }
        }
        
        postMessage(`✅ Вычисления завершены! Результат: ${result.toFixed(2)}`);
    }
};