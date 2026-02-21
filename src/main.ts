import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="bg">
    <div class="gradient"></div>
    <div class="content">
        <h1>
            Второе пришествие
        </h1>
        
        <div class="time">
            <div class="days">**</div>&nbsp;:&nbsp;<div class="hours">22</div>&nbsp;:&nbsp;<div class="minutes">29</div>&nbsp;:&nbsp;<div class="seconds">19</div>
        </div>
        
        <div class="quote">
            "Се, гряду скоро, и возмездие Мое со Мною, чтобы воздать каждому по делам его.”
        </div>
        
        <div class="link">
            (Откр. 22:12)
        </div>
    </div>
  </div>
`;

const deadline = new Date('2027-12-31T23:59:59');

const elHours = document.querySelector('.hours');
const elMinutes = document.querySelector('.minutes');
const elSeconds = document.querySelector('.seconds');

const updateTimer = () => {
    const now = new Date();
    const diff = Math.max(0, deadline.getTime() - now.getTime());

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (elHours) {
        elHours.textContent = String(hours).padStart(2, '0');
    }

    if (elMinutes) {
        elMinutes.textContent = String(minutes).padStart(2, '0');
    }

    if (elSeconds) {
        elSeconds.textContent = String(seconds).padStart(2, '0');
    }
};

setInterval(updateTimer, 1000);


// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
