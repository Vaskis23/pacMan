 //legend
 //0 - empty
 //1 - pac
 //2 - coin
 //3 - bomb
 //4 - heart
        let mapData = [
            [2, 4, 0, 4, 0, 4, 2, 0, 3, 2],
            [0, 0, 3, 0, 2, 0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0, 2, 4, 0, 3, 2],
            [0, 0, 2, 3, 0, 2, 0, 2, 0, 0],
            [3, 2, 2, 0, 0, 2, 4, 0, 0, 3],
            [2, 4, 3, 0, 1, 0, 0, 2, 0, 4],
            [0, 3, 2, 4, 0, 2, 0, 2, 0, 2],
            [2, 0, 0, 0, 0, 0, 4, 0, 4, 2],
            [0, 0, 2, 0, 0, 2, 3, 2, 2, 0],
            [3, 0, 2, 2, 0, 4, 0, 0, 2, 3],
        ];
        
        let pr = 5;
        let pc = 4;
        
        let coins = 0;
        let hp = 100;
        
        function render() {
            map.innerHTML = '';
        
            for (let row = 0; row < 10; row++) {
                for (let col = 0; col < 10; col++) {
                    if (mapData[row][col] == 0) {
                        map.innerHTML += `<div></div>`;
                    } else if (mapData[row][col] == 2) {
                        map.innerHTML += `<div class="coin"></div>`;
                    } else if (mapData[row][col] == 1) {
                        map.innerHTML += `<div class="pac"></div>`;
                    } else if (mapData[row][col] == 3) {
                        map.innerHTML += `<div class="bomb"></div>`;
                    } else if (mapData[row][col] == 4) {
                        map.innerHTML += `<div class="heart"></div>`;
                    }
                }
            }
        }
        
        function updateStats() {
            stats.innerHTML = `Coins: ${coins} HP: ${hp}`;
        }
        
        function move(event) {
            mapData[pr][pc] = 0;
            let newPr = pr;
            let newPc = pc;
        
            switch (event.code) {
                case 'ArrowRight':
                    newPc < 9 ? newPc++ : 0; break;
                case 'ArrowLeft':
                    newPc > 0 ? newPc-- : 9; break;
                case 'ArrowDown':
                    newPr < 9 ? newPr++ : 0; break;
                case 'ArrowUp':
                    newPr > 0 ? newPr-- : 9; break;
            }
        
            if (mapData[newPr][newPc] == 2) {
                coins += 5;
                updateStats();
            } else if (mapData[newPr][newPc] === 3) {
                // Bomb: уменьшаем здоровье на 20
                hp -= 20;
                updateStats();
            } else if (mapData[newPr][newPc] === 4) {
                // Heart: увеличиваем здоровье на 10
                hp += 10;
                updateStats();
            }
        
            if (hp <= 0) {
                alert('Game Over!');
                // Дополнительные действия при завершении игры
            }
        
            pr = newPr;
            pc = newPc;
        
            mapData[pr][pc] = 1;
            render();
        }
        
        render();
        updateStats();
        